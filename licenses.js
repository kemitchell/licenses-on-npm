var Dat = require('dat');

var dat = new Dat('./', function(error) {
  if (error) {
    throw error;
  }
  dat.createReadStream()
    .on('data', function(data) {
      var license = data.license || 'None';
      if (license.hasOwnProperty('type')) {
        license = license.type;
      }
      if (
        typeof license !== 'string' ||
        license === ''
      ) {
        license = 'unknown';
      }
      process.stdout.write(data.name + '\t' + license.toUpperCase() + '\n');
    });
});
