call cd ..
call npm install https://github.com/ralphwetzel/node-red-mcu-plugin
call npm install @moddable-node-red/mcu --save-dev
call npm install node-red-dashboard --save-dev
@REM setup Moddable
call set MODDABLE=C:\pjt\moddable
call cd C://
call mkdir pjt
call cd pjt
call git clone https://github.com/Moddable-OpenSource/moddable.git
call cd %MODDABLE%\build\makefiles\win
call build
@REM setup ESP-IDF
call set IDF_PATH=C:\Espressif\frameworks\esp-idf-v5.1.2
call set IDF_TOOLS_PATH=C:\Espressif
call cd %IDF_PATH%
call %IDF_TOOLS_PATH%\idf_cmd_init.bat
call install.bat
