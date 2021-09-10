#!/usr/bin/env node

import { conectaDB } from '../schema/dbConexion'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from '../schema/typeDefs';
import { resolvers } from '../schema/resolvers';

import app from '../app';
import debugLib from 'debug';
import http from 'http';
const debug = debugLib('your-project-name:server');


/**
 * Conecta con Mongodb
 */

conectaDB();


var port = normalizePort(process.env.PORT || '5050');
app.set('port', port);

/**
 * Inicia Apollo Server
*/

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const appollo = async (app, apo) => { 
  let r = await apo.start();
  apolloServer.applyMiddleware({ app: app });
  return r;
};

appollo(app, apolloServer);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

server.listen(port, () => console.log(`Run HTTP server on port: `, port));
server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}


function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
