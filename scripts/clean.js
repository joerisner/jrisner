import { exec } from 'child_process';

exec('rm -rf ./dist ./specs/report/ ./playwright/.cache/', (err, stdout) => {
  if (err) {
    console.error('clean command failed:', err);
    return;
  }

  if (stdout) console.log(stdout);
});
