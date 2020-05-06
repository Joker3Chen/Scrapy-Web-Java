# -*- coding: utf-8 -*-
import global_module
from bs4 import BeautifulSoup
import re

class filter_links:
    '''
    解析html文件，过滤链接
    '''
    # @function 初始化类，设置成员变量
    # @parm(self) filter_links 指向实例对象的指针
    # @parm(response) String 指定输入html文件路径
    # @parm(encoding) String 指定html文件编码，默认为"gbk"
    def __init__(self, response=None, encoding="gbk"):
        super().__init__()
        print("\n--------------------")

        self.response = response
        self.soup = BeautifulSoup(self.response.content, "html5lib")
        self.soup.encode = encoding

        self.all_links = list()
        for tag in self.soup.find_all("a"):
            if "href" in tag.attrs:
                self.all_links.append(tag.attrs["href"])
        
        self.temp_links = list()
        self.tag_links = list()
        print("filter_links初始化成功...")

    # @function 回收类，删除成员变量
    def __del__(self):
        del self.response
        del self.soup
        del self.all_links
        del self.temp_links
        del self.tag_links
        print("回收类filter_links成功...")
        print("--------------------\n")

    # @function 根据输入的正则选择a标签中的链接，并将链接存入指定变量
    # @parm(temp_RegEx) String 过滤temp_links的正则表达式规则
    # @parm(tag_RegEx) String 过滤temp_links的正则表达式规则
    def find_links_by_RegEx(self, temp_RegEx = None, tag_RegEx = None):
        for tag in self.all_links:
            if(re.match(temp_RegEx, tag)):
                self.temp_links.append(tag)
            elif(re.match(tag_RegEx, tag)):
                self.tag_links.append(tag)
        print("temp_links存入" + str(len(self.temp_links)) + "条记录")
        print("tag_links存入" + str(len(self.tag_links)) + "条记录")

    # @function 返回temp_links
    # @return List
    def get_temp_links(self):
        return self.temp_links

    # @function 返回tag_links
    # @return List
    def get_tag_links(self):
        return self.tag_links


class filter_tags:
    '''
    解析html文件，过滤页面元素
    '''
    # @function 初始化类，设置成员变量
    # @parm(self) filter_tag 指向实例对象的指针
    # @parm(response) String 指定输入html文件路径
    # @parm(encoding) String 指定html文件编码，默认为"gbk"
    def __init__(self, response, encoding="gbk"):
        super().__init__()
        print("\n--------------------")
        self.response = response
        self.soup = BeautifulSoup(self.response.content, "html5lib")
        self.soup.encode = encoding

        self.result_json = dict()

        print("filter_links初始化成功...")

    # @function 根据类名、标签、id选择标签
    # @parm(ids) String 需要选择的标签id
    def find_tags_by_id(self, id_=None):
        if(id_ == None):
            print("Warning: please input again.")
            return
        if(len(self.result_json) <= 0):
            for tag in self.soup.find(id=id_):
                self.result_json.update(dict({id_:tag.text}))
    
    def find_tags_by_class(self, class_=None):
        if(class_ == None):
            print("Warning: please input again.")
            return
        return self.soup.find()

    def get_result_json(self):
        return self.result_json