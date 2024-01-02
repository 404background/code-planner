call git clone https://github.com/Moddable-OpenSource/moddable.git
call set HOME=%CD%
call set MODDABLE=%CD%\moddable
call set IDF_PATH=C:\Espressif\frameworks\esp-idf-v5.1.1
call set IDF_TOOLS_PATH=C:\Espressif
call cd %IDF_PATH%
call %IDF_TOOLS_PATH%\idf_cmd_init.bat
call install.bat
call npm install @ralphwetzel/node-red-mcu-plugin
call npm install @moddable-node-red/mcu
call npm install node-red-dashboard
call cd %HOME%
call cd ../esp32
call git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
call cd esp-idf
call install.sh
