import { exec } from 'child_process';

exec('rm -rf ./dist ./cypress/downloads ./cypress/screenshots ./cypress/videos', (err, stdout) => {
  if (err) {
    console.error('clean command failed:', err);
    return;
  }

  if (stdout) console.log(stdout);
});
