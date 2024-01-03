call cd ..
call set HOME=%CD%
@REM setup Moddable
call set MODDABLE=%CD%\moddable
call npm install @ralphwetzel/node-red-mcu-plugin --save-dev
call npm install @moddable-node-red/mcu --save-dev
call npm install node-red-dashboard --save-dev
call git clone https://github.com/Moddable-OpenSource/moddable.git
call cd %MODDABLE%\build\makefiles\win
call build
@REM setup ESP-IDF
call set IDF_PATH=C:\Espressif\frameworks\esp-idf-v5.1.2
call set IDF_TOOLS_PATH=C:\Espressif
call cd %USERPROFILE%
call mkdir esp32
call cd esp32
call git clone -b v5.1.2 --recursive https://github.com/espressif/esp-idf.git
call cd %IDF_PATH%
call %IDF_TOOLS_PATH%\idf_cmd_init.bat
call install.bat
