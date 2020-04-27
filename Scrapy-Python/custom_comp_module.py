# -*- coding: utf-8 -*-
from PyQt5.QtWidgets import (QWidget, QSlider, QApplication, QHBoxLayout, QVBoxLayout)
from PyQt5.QtCore import QObject, Qt, pyqtSignal
from PyQt5.QtGui import QPainter, QFont, QColor, QPen
import sys

class Communicate(QObject):
    updateBW = pyqtSignal(int)

class BurningWidget(QWidget):
    def __init__(self):
        super().__init__()

    def initUI(self):
        self.setMinimunsize(1, 30)
        self.value = 75
        self.num = [75, 150, 225, 300, 375, 450, 525,600, 675]

    def setValue(self, value):
        self.value = value
    
    def paintEvent(self, e):
        qp = QPainter()
        qp.begin(self)
        self.drawWiget(qp)
        qp.end()
    
    def drawWidget(self, qp):
        MAX_CAPACITY = 700
        OVER_CAPACITY = 750

        font = QFont("Serif", 7, QFont.Light)
        qp.setFont(font)

        size = self.size()

