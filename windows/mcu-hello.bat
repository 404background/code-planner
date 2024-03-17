call "C:\Program Files\Microsoft Visual Studio\2022\Community\\VC\Auxiliary\Build\vcvars32.bat"
call cd ..
call set MODDABLE=C:\pjt\moddable
call cd %MODDABLE%\examples\helloworld
@REM for Simulator
call mcconfig -d -m -p win
@REM for moddable_two
@REM call mcconfig -d -m -p esp32/moddable_two
