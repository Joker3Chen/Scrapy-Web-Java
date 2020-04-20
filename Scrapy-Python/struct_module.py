#coding=utf-8

class Tree:
    '''
    通过列表实现树结构
    '''

    # @function 初始化类，设置成员变量
    # @parm(self) Tree 指向实例对象的指针
    # @parm(content) String 节点内容
    def __init__(self, content):
        super().__init__()
        self.content = content
        self.childTree = []
    
    # @function 回收类，删除成员变量
    def __del__(self):
        del self.content
        del self.childTree

    # @function 插入子节点
    # @parm(content) String 子节点内容
    def insert_node(self, content):
        self.childTree.append(Tree(content))
    
    # @function 根据索引，删除子节点
    # @parm(index) Number(integer) 索引号
    def delete_node_by_index(self, index):
        return self.childTree.pop(index)

    def get_node_content(self):
        return self.content

class Graph:
    def __init__(self):
        super().__init__()
