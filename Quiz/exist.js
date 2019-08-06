const fs = require('fs');

// This is NOT asynchronous (some modules have synch and asynch versions)
if (fs.existsSync('../message.txt')) {
  console.log('The file exists.');
}
