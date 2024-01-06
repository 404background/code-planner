from function import node_function as nf

folderName = input('Folder name?:')
nodeName = input('Node name?:')

creater = nf.NodeCreater(folderName, nodeName)
creater.debug()
creater.createNode()
