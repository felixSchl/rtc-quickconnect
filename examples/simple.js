var quickconnect = require('../');

quickconnect({ ns: 'test', signaller: 'http://sig.rtc.io:50000' })
  .on('peer', function(conn, id, data, monitor) {
    console.log('got a new friend, id: ' + id, conn);
  });