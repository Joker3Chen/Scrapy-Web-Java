#coding=utf-8
from scrapy_module import request_scrapy
from filter_module import filter_links
from struct_module import Tree

import os
import threading

class manager_download:
    '''
    协调爬虫与系统的关系
    '''
    # @function 初始化类，设置成员变量
    # @parm(temp_html_path) 暂存html页面的路径
    # @parm(tag_html_path) 目标html页面的路径
    def __init__(self, url, html_path, encoding="utf-8"):
        super().__init__()
        print("\n--------------------")
        self.encode = encoding
        self.scrapy = request_scrapy(encoding=self.encode)
        self.filter = None

        # 临时链接，构建栈结构，通过广度遍历算法构建树
        self.temp_links = []
        self.temp_links.append(url)
        self.html_path = html_path

        self.R = threading.Lock()
        print("manager_download初始化成功...")

    # @function 回收类，删除成员变量
    def __del__(self):
        del self.scrapy
        del self.filter
        del self.temp_links
        del self.html_path
        del self.R

    # @function 构建树的过程就是网站爬取的过程（关键算法）
    # @parm(temp_link_RegEx) 
    # @parm(tag_link_RegEx) 
    def sort_download_htmls(self, temp_link_RegEx, tag_link_RegEx):
        # 栈中取出待爬取网页地址
        current_link = self.temp_links.pop()

        while(len(self.temp_links) >= 0):
            temp_html = self.scrapy.get_response(current_link)

            self.filter = filter_links(temp_html, encoding=self.encode)
            self.filter.find_links_by_RegEx(temp_link_RegEx, tag_link_RegEx)

            for temp_link in self.filter.get_temp_links():
                self.temp_links.append(temp_link)
            for tag_link in self.filter.get_tag_links():
                #下载路径、格式
                self.scrapy.get_response(tag_link)
                self.scrapy.download_html(self.html_path)

            current_link = self.temp_links.pop()

class manager_thread:
    def __init__(self):
        super().__init__()