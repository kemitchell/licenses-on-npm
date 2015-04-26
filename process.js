var through = require('through2');
var JSONStream = require('JSONStream');

process.stdin
  .pipe(JSONStream.parse())
  .pipe(through.obj(function(chunk, encoding, callback) {
    var license = chunk.license || 'None';
    if (license.hasOwnProperty('type')) {
      license = license.type;
    }
    process.stdout.write(chunk.name + '\t' + license + '\n');
  }));
