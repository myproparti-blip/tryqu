@echo off
REM Cleanup script to remove unnecessary files

echo Removing unnecessary documentation files...
del "CONSULTATION_README.md" 2>nul
del "CONSULTATION_SYSTEM_COMPLETE.md" 2>nul
del "CONSULTATION_SETUP.md" 2>nul
del "CONSULTATION_ERROR_HANDLING.md" 2>nul
del "CONSULTATION_API_UPDATES.md" 2>nul
del "CONSULTATION_CONTENT_UPDATES.md" 2>nul
del "CONSULTATION_VERIFICATION.md" 2>nul
del "GMAIL_QUICK_FIX.md" 2>nul
del "GMAIL_TROUBLESHOOTING.md" 2>nul
del "DOCUMENTATION_MAP.md" 2>nul

echo Removing unused placeholder assets...
del "public\placeholder.svg" 2>nul
del "public\placeholder.jpg" 2>nul
del "public\placeholder-user.jpg" 2>nul
del "public\placeholder-logo.svg" 2>nul
del "public\placeholder-logo.png" 2>nul

echo Removing unused API routes...
rmdir /s /q "app\api\geo" 2>nul
rmdir /s /q "app\api\consultations-realtime" 2>nul
rmdir /s /q "app\api\consultations-stream" 2>nul
rmdir /s /q "app\api\send-consultation-resend" 2>nul

echo Removing unused hooks...
del "hooks\useGeolocation.ts" 2>nul

echo Cleanup complete!
echo.
echo Removed:
echo - 10 documentation files
echo - 5 placeholder images
echo - 4 unused API routes
echo - 1 unused hook
echo.
echo Ready to push lean code!
pause
