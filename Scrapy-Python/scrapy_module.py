#coding=utf-8
from selenium import webdriver
from selenium.webdriver import ChromeOptions
import requests
import chardet as cd

class brower_scrapy:
    '''
    通过自动化测试工具Selenium模拟人工操作浏览器
    '''

    # @function 初始化类，设置成员变量
    # @parm(self) brower_scrapy 指向实例对象的指针
    # @parm(opetions) Set 驱动属性配置
    def __init__(self, options):
        super().__init__()
        #初始化，配置Webdrive
        self.chrome_options = ChromeOptions()
        if(len(options) != 0):
            for option in options:
                self.chrome_options.add_argument(option)

    # @function 回收类，删除成员变量
    def __del__(self):
        del self.chrome_options
        del self.brower
    
    # @function 启动浏览器
    # @parm(brower_path) String 浏览器驱动位置
    # @return Number 1 成功 0 失败
    def run_brower(self, driver_path):
        self.brower = webdriver.Chrome(executable_path = driver_path, chrome_options = self.chrome_options)
    
    # @funtion 打开新网页，成功则返回 1，失败返回 0
    # @parm(realm_name) String 域名
    # @parm(route) String 路由路径
    # @parm(flag) Number 打开网页的方式：本标签页、新标签页、新窗口
    # @return Number 1 成功 0 失败
    def open_new_page(self, realm_name, route, flag = 1):
        if(flag == 0):
            self.brower.excute_script('window.open()')
            self.brower.get(realm_name + route)
        elif(flag == 1):
            self.brower.get(realm_name + route)

    # @parm(self) brower_scrapy 指向实例对象的指针
    # @parm(_class) String 检索的类名
    # @parm(tag_name) String 标签名
    def find_elements_by_class_and_tag_name(self, _class, tag_name):
        result_list = []
        elements_list = self.brower.find_elements_by_class_name(_class)
        for element in elements_list:
            temp_list = element.find_elements_by_xpath(tag_name)
            if(len(temp_list) > 0):
                for temp in temp_list:
                    result_list.append(temp)
        return result_list

    '''
    找到页面元素，并点击
    '''       
    
    def click_tag_by_class_and_text(self, _class, text):
        tags = self.brower.find_elements_by_class_name(_class)
        for tag in tags:
            if(tag.text == text):
                tag.click()
    
    def click_tag_by_tagname_and_text(self, tag_name, text):
        tags = self.brower.find_elements_by_tag_name(tag_name)
        for tag in tags:
            if(tag.text == text):
                tag.click()

class request_scrapy:
    '''
    直接使用request向服务器发起请求
    '''

    # @function 初始化类，设置成员变量
    # @parm(url) String 主站点url
    # @parm(headers) Dictinary 请求头文件
    # @parm(parms) 
    # @parm(data) 
    # @parm(encoding) 网页下载编码格式，默认"utf-8"
    def __init__(self, url=None, headers=None, parms=None, data=None, encoding="utf-8"):
        super().__init__()
        print("\n--------------------")
        self.url = url
        self.parms = parms
        self.headers = headers
        self.data = data
        self.encoding = encoding
        self.html = None
        print("request_scrapy初始化成功...")

    # @function 回收类，删除成员变量
    def __del__(self):
        del self.url
        del self.parms
        del self.headers
        del self.data
        del self.encoding
        print("回收类request_scrapy成功...")
        print("--------------------\n")

    # @function 向服务器发起请求，并获得response
    # @parm(flag) Number 请求方式标记，默认为get()
    def get_response(self, url = None, flag=0):
        if(url == None and self.url == None):
            print("Warning: the url is None.")
        else:
            self.url = url
        print("开始发送请求...")
        if(flag == 0):
            self.response = requests.get(self.url, self.parms)
        elif(flag == 1):
            self.response = requests.post(self.url, self.data)
        print("收到response，状态码：" + str(self.response.status_code))

        return self.response

    # @function 页面下载到本地，存储为html文件
    # @parm(html_path) 文件下载路径
    def download_html(self, html_path):
        print("开始下载页面：" + self.url)
        temp_ = self.url.split("/")
        file_name = temp_[len(temp_)-2]+temp_[len(temp_)-1]
        with open(html_path + "/" + file_name, "ba") as file:
            file.write(self.response.content)
        print("页面下载完成...")
    
    # @function 下载页面元素
    # @parm() 
    def download_tag_by_classes(self, classes=None):
        if(classes == None):
            pass
        