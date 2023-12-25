import os

import node_function as nf
creater = nf.NodeCreater()

folderName = input('Folder name?:')
os.mkdir('node/' + folderName)
nodeName = input('Node name?:')

creater.set(folderName, nodeName)
creater.debug()
creater.createNode()
