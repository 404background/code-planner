call cd ..
call set HOME=%CD%
call set MODDABLE=%CD%\moddable
call set IDF_PATH=C:\Espressif\frameworks\esp-idf-v5.1.1
call set IDF_TOOLS_PATH=C:\Espressif
call npm install @ralphwetzel/node-red-mcu-plugin --save-dev
call npm install @moddable-node-red/mcu --save-dev
call npm install node-red-dashboard --save-dev
call git clone https://github.com/Moddable-OpenSource/moddable.git
call cd %MODDABLE%\build\makefiles\win
call build
@REM call cd %IDF_PATH%
@REM call %IDF_TOOLS_PATH%\idf_cmd_init.bat
@REM call install.bat
@REM call cd %HOME%
@REM call cd esp32
@REM call git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
@REM call cd esp-idf
@REM call install.sh
