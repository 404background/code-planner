import sys
import os
from function import node_function as nf

print(sys.argv)

folderName = sys.argv[1]
nodeName = sys.argv[2]

creater = nf.NodeCreater(folderName, nodeName)
# creater.set(folderName, nodeName)
creater.debug()
creater.createNode()
