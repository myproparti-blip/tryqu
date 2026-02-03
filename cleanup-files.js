#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const filesToRemove = [
  // Documentation files
  'CONSULTATION_README.md',
  'CONSULTATION_SYSTEM_COMPLETE.md',
  'CONSULTATION_SETUP.md',
  'CONSULTATION_ERROR_HANDLING.md',
  'CONSULTATION_API_UPDATES.md',
  'CONSULTATION_CONTENT_UPDATES.md',
  'CONSULTATION_VERIFICATION.md',
  'GMAIL_QUICK_FIX.md',
  'GMAIL_TROUBLESHOOTING.md',
  'DOCUMENTATION_MAP.md',
  'cleanup.ps1',
  'CLEANUP_SUMMARY.md',
];

const dirsToRemove = [
  'app/api/geo',
  'app/api/consultations-realtime',
  'app/api/consultations-stream',
  'app/api/send-consultation-resend',
];

const imagesToRemove = [
  'public/placeholder.svg',
  'public/placeholder.jpg',
  'public/placeholder-user.jpg',
  'public/placeholder-logo.svg',
  'public/placeholder-logo.png',
];

const hooksToRemove = [
  'hooks/useGeolocation.ts',
];

console.log('🧹 Starting cleanup...\n');

let deleted = 0;

// Remove files
[...filesToRemove, ...imagesToRemove, ...hooksToRemove].forEach(file => {
  const filePath = path.join(__dirname, file);
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`✅ Deleted: ${file}`);
      deleted++;
    }
  } catch (err) {
    console.log(`⚠️  Skipped: ${file} (${err.message})`);
  }
});

// Remove directories
dirsToRemove.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  try {
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Deleted: ${dir}/`);
      deleted++;
    }
  } catch (err) {
    console.log(`⚠️  Skipped: ${dir}/ (${err.message})`);
  }
});

console.log(`\n✨ Cleanup complete! Removed ${deleted} items.\n`);
console.log('📊 Summary:');
console.log(`   - 10 documentation files`);
console.log(`   - 4 unused API route directories`);
console.log(`   - 5 placeholder images`);
console.log(`   - 1 unused hook\n`);
console.log('Ready to commit lean code! 🚀');
