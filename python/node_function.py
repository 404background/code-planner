class NodeCreater:
    def __init__(self):
        self.fileName = ""
        self.folderName = ""
        self.nodeName = ""
    
    
    def set(self, folderName, nodeName):
        self.folderName = folderName
        self.nodeName = nodeName
        self.fileName = nodeName
    
    def debug(self):
        print(self.folderName)
        print(self.nodeName)
    
    def _add_name_folder(self, name):
        return 'node/' + self.folderName + '/' + name
        
        
    def createJS(self):
        f = open(self._add_name_folder(self.fileName) + '.js', "w")
        
        f.close()
    
    def createHTML(self):
        f = open(self._add_name_folder(self.fileName) + '.html', "w")
        
        f.close()
    
    def createPackage(self):
        f = open(self._add_name_folder('package.json'), "w")
        
        f.close()
    
    #for Node-RED MCU
    def createManifest(self):
        f = open(self._add_name_folder('manifest.json'), "w")
        
        f.close()

    def createNode(self):
        self.createJS()
        self.createHTML()
        self.createPackage()