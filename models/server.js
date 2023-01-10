const express = require('express');
const cors = require('cors');




class Server {
  constructor() {
    this.app = express();
    this.paths = {
      ipTrackRequest: '/ip_request' 
    };
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.static( 'public' ));
  }

  routes() {
    this.app.use( this.paths.ipTrackRequest, require( '../routes/ipTrackRequest' ));
  }

  listen( port ) {
    this.app.listen( port , () => {
      console.log(`Server running on ${ port }`)
    });
  }
}

module.exports = Server;