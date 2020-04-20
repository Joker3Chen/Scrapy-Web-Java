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
    def __init__(self, url, temp_html_path = None, tag_html_path = None):
        super().__init__()
        if(temp_html_path == None or tag_html_path == None):
            print("Warning : the input is wrong, please input again.")
        print("\n--------------------")
        self.scrapy = request_scrapy()
        self.filter = None
        self.temp_path = temp_html_path
        self.tag_path = tag_html_path
        
        self.links_tree = Tree(url)
        self.temp_links = []
        self.current_node = self.links_tree

        self.R = threading.Lock()
        print("manager_download初始化成功...")

    # @function 分类下载html页面
    
    def sort_download_htmls(self):
        self.R.acquire()
        #下载网页
        link = self.current_node.get_node_content()
        self.scrapy.get_response(link)
        self.scrapy.download_html(self.temp_path)

        #创建网页对应目录
        download_path = self.temp_path + "/" + link
        os.mkdir(download_path)

        #过滤网页中链接
        self.filter = filter_links(self.temp_path)
        self.filter.find_links_by_RegEx("^http:\/\/.{0,10}\.39\.net\/?$", 0)


        self.R.release()

    # @function 分类存储链接，存储在temp_links和tag_links中
    def sort_links(self):
        self.scrapy.get_response()
        self.scrapy.download_html()
        pass

class manager_thread:

    '''
    协调线程与爬虫的关系
    '''
    def __init__(self):
        super().__init__()