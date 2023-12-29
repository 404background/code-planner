from function import node_function as nf

creater = nf.NodeCreater()

folderName = input('Folder name?:')
nodeName = input('Node name?:')

creater.set(folderName, nodeName)
creater.debug()
creater.createNode()
