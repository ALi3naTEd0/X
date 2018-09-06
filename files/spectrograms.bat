@echo off

setlocal

echo %processor_architecture% | findstr /i amd64 > nul && set soxProgDir=%programfiles(x86)%||set soxProgDir=%programfiles%

%systemdrive%
cd %soxProgDir%

for /f %%x in (
  'dir /ad /b * ^| findstr "^sox-[0-9].*$"'
) do set soxDir=%soxProgDir%\%%x

echo.
echo Found SOX at %soxDir%\sox.exe
echo.

%~d0
cd "%~dp0"

for /r %%i in (*.flac;*.mp3;*.wav) do (

  echo Generating spectrogram for %%i

  if not exist "%%~dpi\spectrograms" md "%%~dpi\spectrograms\"
  "%soxdir%\sox.exe" "%%i" -n remix 1 spectrogram -t "%%~nxi" -x 1000 -o "%%~dpi\spectrograms\%%~nxi.png"
)

echo.
echo Done!
echo.

endlocal

@pause
echo.

