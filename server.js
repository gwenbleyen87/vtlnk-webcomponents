var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic(__dirname, { index: ['index.html', 'index.htm'] }))
    .listen(3000, () => console.log('Server running on 3000...'));