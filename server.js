var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic(__dirname, { index: ['index.html', 'index.htm'] }))
    .listen(3001, () => console.log('Server running on 3001...'));