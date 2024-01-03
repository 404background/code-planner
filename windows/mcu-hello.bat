call cd ..
call set HOME=%CD%
call set MODDABLE=%CD%\moddable
call set IDF_PATH=C:\Espressif\frameworks\esp-idf-v5.1.1
call set IDF_TOOLS_PATH=C:\Espressif
call cd moddable\examples\helloworld
call mcconfig -d -m -p win
