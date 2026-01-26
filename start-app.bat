@echo off
echo [INFO] Starting Local Test Environment...

:: Check if node_modules exists, install if missing
if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    call npm install
) else (
    echo [INFO] Dependencies already installed.
)

:: Start the local development server
echo [INFO] Launching TSX application...
call npm run dev

pause