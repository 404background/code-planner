call cd ..
call set HOME=%CD%
call set MODDABLE=%CD%\moddable
call cd moddable\examples\helloworld
call %IDF_TOOLS_PATH%\idf_cmd_init.bat
@REM for Simulator
call mcconfig -d -m -p win
@REM for moddable_two
@REM call mcconfig -d -m -p esp32/moddable_two
