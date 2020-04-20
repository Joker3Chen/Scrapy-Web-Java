#coding=utf-8
import global_module

from bs4 import BeautifulSoup
import re

class filter_links:
    '''
    解析html文件，过滤链接
    '''
    # @function 初始化类，设置成员变量
    # @parm(self) filter_links 指向实例对象的指针
    # @parm(html_path) String 指定输入html文件路径
    # @parm(encoding) String 指定html文件编码，默认为"gbk"
    def __init__(self, html_path=None):
        super().__init__()
        print("\n--------------------")
        if(html_path == None):
            print("Warning : please input the url of this site.")
            del self
        self.html_file = None
        self.soup = None
        self.html_path = html_path
        
        self.all_links = []
        self.temp_links = []
        self.tag_links = []
        print("filter_links初始化成功...")

    # @function 回收类，删除成员变量
    def __del__(self):
        del self.html_file
        del self.soup
        del self.all_links
        del self.temp_links
        del self.tag_links
        print("回收类filter_links成功...")
        print("--------------------\n")

    # @function 解析html，生成bs对象，并为all_links赋值
    def analyse_html(self, encoding = "gbk"):
        self.html_file = open(self.html_path, "r")
        self.soup = BeautifulSoup(self.html_file, features="lxml")
        for tag in self.soup.find_all("a"):
            self.all_links.append(tag.attrs["href"])
        self.soup.encode = encoding

    # @function 根据类名、标签、id选择标签
    # @parm(_class) String 需要选择的标签类名
    # @parm(title) String 需要选择的标签title
    # @parm(id) String 需要选择的标签id
    # @parm(flag) Number 标记, 把link赋值到temp还是tag里. flag=0则是temp, 否则是tag
    def find_links_by_class_and_title_and_id(self, flag, _class=None, title=None, id=None):
        for tag in self.all_links:
            if(tag._class):
                # TODO
                pass
        pass
    
    # @function 根据输入的正则选择a标签中的链接，并将链接存入指定变量
    # @parm(RegEx) String 正则表达式规则
    # @parm(flag) Const 标记，值为FILTER_TEMP_LINKS将过滤temp_links，值为FILTER_TAG_LINKS将过滤tag_links
    def find_links_by_RegEx(self, RegEx, flag = None):
        temp_list = []
        for tag in self.all_links:
            if(re.match(RegEx, tag)):
                temp_list.append(tag)
        if(flag == global_module.FILTER_TEMP_LINKS):
            self.temp_links = list(set(temp_list))
            print("temp_links存入" + str(len(self.temp_links)) + "条记录")
        elif(flag == global_module.FILTER_TAG_LINKS):
            self.tag_links = list(set(temp_list))
            print("tag_links存入" + str(len(self.tag_links)) + "条记录")
        else:
            print("Warning: the value of flag is wrong.")
    # @function 返回temp_links
    # @return List
    def get_temp_links(self):
        return self.temp_links

    # @function 返回tag_links
    # @return List
    def get_tag_links(self):
        return self.tag_links