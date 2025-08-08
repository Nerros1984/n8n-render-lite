// Este archivo arranca n8n como app HTTP
const { exec } = require('child_process');
exec('n8n', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  if (stderr) console.error(`Stderr: ${stderr}`);
  if (stdout) console.log(`Stdout: ${stdout}`);
});
