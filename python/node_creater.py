import sys
import os
from function import node_function as nf

print(sys.argv)

creater = nf.NodeCreater(*sys.argv[1:])
creater.debug()
creater.createNode()
