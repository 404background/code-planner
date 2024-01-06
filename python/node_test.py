from function import node_function as nf

folderName = input('Folder name?:')
nodeName = input('Node name?:')

#folderName, nodeName, category="examples", color="#ffffff"
# inputs="1", outputs="1", icon="file.svg"
creater = nf.NodeCreater(folderName, nodeName)
creater.debug()
creater.createNode()
