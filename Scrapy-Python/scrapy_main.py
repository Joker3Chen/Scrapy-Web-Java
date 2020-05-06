# -*- coding: utf-8 -*-
from manager_module import manager_download
import sys

# 程序入口
if __name__ == "__main__":
    url = "http://www.39.net"
    html_path = "./src/data/39health"
    header = {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
    }
    temp_RegEx = "^https?:\/\/.{0,10}\.39\.net\/?$"
    tag_RegEx = "^https?:\/\/\w{1,10}\.39\.net\/.*\/[0-9]*\.html$"
    md = manager_download(url, encoding=sys.getdefaultencoding(), headers=header)
    md.find_tag_links(temp_RegEx, tag_RegEx)
    md.download_htmls_by_links("./src/data/39health")
