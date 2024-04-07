@REM npm install
call cd ..
call npm install https://github.com/ralphwetzel/node-red-mcu-plugin
call npm install @moddable-node-red/mcu --save-dev
call npm install node-red-dashboard --save-dev

@REM setup Moddable
IF EXIST "C:\Program Files\Microsoft Visual Studio\2022\Community\\VC\Auxiliary\Build\vcvars32.bat" (
    call "C:\Program Files\Microsoft Visual Studio\2022\Community\\VC\Auxiliary\Build\vcvars32.bat"
    call set MODDABLE=C:\pjt\moddable
    call cd C://
    call mkdir pjt
    call cd pjt
    call git clone https://github.com/Moddable-OpenSource/moddable.git
    call git pull
    call cd %MODDABLE%\build\makefiles\win
    call build
) ELSE (
    echo error: not found Visual Studio 2022 Community 
    echo Please access the following URL to install
    echo
    exit /b 1
)

@REM setup ESP-IDF
IF EXIST "C:\Espressif" (
    call set IDF_PATH=C:\Espressif\frameworks\esp-idf-v5.1.2
    call set IDF_TOOLS_PATH=C:\Espressif
    call cd %IDF_PATH%
    call %IDF_TOOLS_PATH%\idf_cmd_init.bat
    call install.bat
) ELSE (
    echo error: not found esp-idf
    echo Please access the following URL and install to C://Espressif.
    echo https://dl.espressif.com/dl/idf-installer/espressif-ide-setup-2.12.0-with-esp-idf-5.1.2.exe
    exit /b 1
)

