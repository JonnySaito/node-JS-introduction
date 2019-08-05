const fs = require('fs');

// Assuming that 'path/file.txt' is a regular file.
fs.unlink('../unwantedFile.txt', (err) => {
  if (err) throw err;
  console.log('unwantedFile.txt was deleted');
});
