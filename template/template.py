from string import Template

# Create JS file
f = open('./node/node.js.txt', 'r')
template = f.read()
name = 'test'
function = 'TestNode'
test = Template(template)
print(test.substitute(nodeName=name, 
                      nodeNameFunction=function))
f.close()

# Create HTML file
f = open('./node/node.html.txt', 'r')
template = f.read()
name = 'test'
function = 'TestNode'
category = 'examples'
color = '#ffffff'
inputs = '1'
outputs = '1'
icon = 'file.svg'

test = Template(template)
print(test.substitute(nodeName = name,
                      nodeNameFunction = function,
                      nodeCategory = category,
                      nodeColor=color,
                      nodeInputs = inputs,
                      nodeOutputs = outputs,
                      nodeIcon = icon))
f.close()
