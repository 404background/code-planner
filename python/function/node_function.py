import os
from string import Template

class NodeCreater:
    def __init__(self, folderName, nodeName, category="examples", color="#ffffff", inputs="1", outputs="1", icon="file.svg"):
        directory = 'user/create/node/' + folderName
        if not os.path.exists(directory):
            os.mkdir(directory)
        self.folderName = folderName
        self.nodeName = nodeName
        self.fileName = nodeName
        self.functionName = nodeName[0].upper() + nodeName[1:]
        self.category = category
        self.color = color
        self.inputs = inputs
        self.outputs = outputs
        self.icon = icon
    
    def debug(self):
        print(vars(self))
    
    def _add_name_folder(self, name):
        return './user/create/node/' + self.folderName + '/' + name
    
    def _add_name_template(self, name):
        return './template/node/' + name
        
        
    def createJS(self):
        f = open(self._add_name_template('node.js.txt'), 'r')
        template = f.read()
        template = Template(template)
        text = template.substitute(nodeName=self.nodeName, 
                                   nodeNameFunction=self.functionName)
        f.close()
        
        f = open(self._add_name_folder(self.fileName) + '.js', "w")
        f.write(text)
        f.close()
    
    def createHTML(self):
        f = open(self._add_name_template('node.html.txt'), 'r')
        template = f.read()
        test = Template(template)
        text = test.substitute(nodeName = self.nodeName,
                            nodeNameFunction = self.functionName,
                            nodeCategory = self.category,
                            nodeColor=self.color,
                            nodeInputs = self.inputs,
                            nodeOutputs = self.outputs,
                            nodeIcon = self.icon)
        f.close()
        
        f = open(self._add_name_folder(self.fileName) + '.html', "w")
        f.write(text)
        f.close()
    
    def createPackage(self):
        f = open(self._add_name_template('package.json.txt'), 'r')
        template = f.read()
        test = Template(template)
        text = test.substitute(folderName = self.folderName,
                               nodeName = self.nodeName)
        f.close()
        
        f = open(self._add_name_folder('package.json'), "w")
        f.write(text)
        f.close()
    
    #for Node-RED MCU
    def createManifest(self):
        f = open(self._add_name_folder('manifest.json'), "w")
        
        f.close()

    def createNode(self):
        self.createJS()
        self.createHTML()
        self.createPackage()
