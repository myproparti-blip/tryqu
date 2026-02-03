# Cleanup script to remove unnecessary documentation files
$filesToRemove = @(
    "CONSULTATION_README.md",
    "CONSULTATION_SYSTEM_COMPLETE.md",
    "CONSULTATION_SETUP.md",
    "CONSULTATION_ERROR_HANDLING.md",
    "CONSULTATION_API_UPDATES.md",
    "CONSULTATION_CONTENT_UPDATES.md",
    "CONSULTATION_VERIFICATION.md",
    "GMAIL_QUICK_FIX.md",
    "GMAIL_TROUBLESHOOTING.md",
    "DOCUMENTATION_MAP.md"
)

foreach ($file in $filesToRemove) {
    $path = Join-Path -Path (Get-Location) -ChildPath $file
    if (Test-Path $path) {
        Remove-Item -Path $path -Force
        Write-Host "Removed: $file"
    }
}

Write-Host "Cleanup complete!"
