from scrapy_module import brower_scrapy

if __name__ == "__main__":
    options = {"--user-data-dir=" + r"./src/config"}
    realm = r"http://www.baidu.com"
    route = r"/s?wd=健康"
    dirver_path = r"./src/chromedriver.exe"

    bs = brower_scrapy(options)
    bs.run_brower(dirver_path)
    bs.open_new_page(realm, route)
    elements_list = bs.find_elements_by_class_and_tag_name("t", "a")

    print(elements_list)
    pass