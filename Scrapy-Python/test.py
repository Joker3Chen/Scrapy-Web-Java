if __name__ == "__main__":
    a = "http://fitness.39.net/a/200423/7857977.html"
    b = a.split("/")
    print(b[len(b)-1])
    c = a.encode("utf-8")