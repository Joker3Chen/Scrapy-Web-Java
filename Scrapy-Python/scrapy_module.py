from selenium import webdriver
from selenium.webdriver import ChromeOptions

class brower_scrapy:
    '''
    有点东西哈
    '''

    # @parm(self) brower_scrapy 指向实例对象的指针
    # @parm(opetions) Set 驱动属性配置
    def __init__(self, options):
        super().__init__()
        #初始化，配置Webdrive
        self.chrome_options = ChromeOptions()
        if(len(options) != 0):
            for option in options:
                self.chrome_options.add_argument(option)
    
    #@function 启动浏览器
    #@parm(brower_path) String 浏览器驱动位置
    #@return Number 1 成功 0 失败
    def run_brower(self, driver_path):
        self.brower = webdriver.Chrome(executable_path = driver_path, chrome_options = self.chrome_options)
    
    # @funtion 打开新网页，成功则返回 1，失败返回 0
    # @parm(self) brower_scrapy 指向实例对象的指针
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

    #@parm(self) brower_scrapy 指向实例对象的指针
    #@parm(_class) String 检索的类名
    #@parm(tag_name) String 标签名
    def find_elements_by_class_and_tag_name(self, _class, tag_name):
        result_list = []
        elements_list = self.brower.find_elements_by_class_name(_class)
        for element in elements_list:
            temp_list = element.find_elements_by_xpath(tag_name)
            if(len(temp_list) > 0):
                for temp in temp_list:
                    result_list.append(temp)
        return result_list

    def click_tag_by_id(self, id, flag = 0):
        
        pass


