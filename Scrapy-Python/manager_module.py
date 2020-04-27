# -*- coding: utf-8 -*-
from scrapy_module import request_scrapy
from filter_module import filter_links

from PyQt5.QtWidgets import (QApplication, QWidget, QMainWindow, QToolBar, QStyleOptionMenuItem, QAction, QStyleOptionToolBar ,QGridLayout, QPushButton, QToolTip)
from PyQt5.QtGui import QIcon, QColor
from PyQt5.QtCore import Qt, QSize
import threading
import sys

class manager_download:
    '''
    管理下载文件
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

        print("manager_download初始化成功...")

    # @function 回收类，删除成员变量
    def __del__(self):
        del self.scrapy
        del self.filter
        del self.temp_links
        del self.html_path

    # @function 下载目标网页的内容
    # @parm(temp_link_RegEx) 中间网页的正则表达式
    # @parm(tag_link_RegEx) 目标网页的正则表达式
    def download_tag_htmls(self, temp_link_RegEx, tag_link_RegEx):
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
    '''
    管理线程的创建及使用
    '''
    def __init__(self):
        super().__init__()

class manager_gui():
    '''
    管理用户界面以及响应事件
    '''
    # @function 初始化类，设置成员变量
    # @parm(self) filter_links 指向实例对象的指针
    def __init__(self, init_info = {"weight":1200,
                                    "height":718, 
                                    "position":[300,200],
                                    "title": "ScrapyApp",
                                    "icon":"./src/icon/ScrapyApp.ico",
                                    "":""
                                    }):
        super().__init__()
        self.app = QApplication(sys.argv)
        self.window = QMainWindow()
        self.menu = self.window.menuBar()
        self.init_info = init_info
        self.layout = QGridLayout()

        self.init_UI()
        sys.exit(self.app.exec_())
    
    def init_UI(self):
        self.window.addToolBar(Qt.LeftToolBarArea, QToolBar("TopToolBarArea"))
        self.menu.initStyleOption(QStyleOptionMenuItem(), QAction("a"))
        
        file = self.menu.addMenu("Task")
        about = self.menu.addMenu("About")
        create_new_file = file.addAction(QIcon("./src/icon/file.ico"), "New task")
        open_exsited_file = file.addAction("Open file (as task)")

        create_new_file.activate(QAction.ActionEvent(1))
        open_exsited_file.activate(QAction.ActionEvent(0))
        self.window.statusBar().showMessage("Ready")
        # 初始大小、位置
        self.window.setGeometry(self.init_info["position"][0], self.init_info["position"][1], self.init_info["weight"], self.init_info["height"])
        #self.w.resize(self.init_info["weight"], self.init_info["height"])
        #self.w.move(self.init_info["position"][0], self.init_info["position"][1])
        # 初始title
        self.window.setWindowTitle(self.init_info["title"])
        # 初始图标
        self.window.setWindowIcon(QIcon(self.init_info["icon"]))
        # 初始布局
        #positions = [(i, j) for i in range(18) for j in range(4)]
        #self.layout.setSpacing(0)

        #self.window.setLayout(self.layout)
        self.window.show()
    
    def font_manage(self):
        pass

    def __del__(self):
        del self.app
        del self.window
        del self.init_info

    def model_eject(self):

        pass
        
    def button_factory(self, btn_info={"title":"ok",
                                        "":""
                                        }):
        return QPushButton(btn_info["title"])
    
    def label_factory(self):
        pass
    
    


