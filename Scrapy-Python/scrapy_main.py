#coding=utf-8
from manager_module import manager_download
import sys
# 程序入口
if __name__ == "__main__":
    url = "http://www.39.net"
    html_path = "./src/data/39health"
    temp_RegEx = "^https?:\/\/.{0,10}\.39\.net\/?$"
    tag_RegEx = "^https?:\/\/\w{1,10}\.39\.net\/.*\/[0-9]*\.html$"
    md = manager_download(url, html_path, encoding=sys.getdefaultencoding())
    md.sort_download_htmls(temp_RegEx, tag_RegEx)
