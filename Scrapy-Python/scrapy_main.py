#coding=utf-8
from scrapy_module import request_scrapy
from filter_module import filter_links

if __name__ == "__main__":
    html_path = "./src/data/39health/temp_html/html1.html"
    
    rs = request_scrapy("http://www.39.net", encoding="gbk")
    r = rs.get_response()
    rs.download_html(html_path)

    fl = filter_links(html_path)
    fl.analyse_html()
    fl.find_links_by_RegEx("^http:\/\/.{0,10}\.39\.net\/?$", 0)
