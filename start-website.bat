@echo off
cd /d "%~dp0"
echo Starting your love website...
echo.
echo When it is ready, open:
echo http://127.0.0.1:5174
echo.
npm.cmd install
npm.cmd run dev -- --port 5174
