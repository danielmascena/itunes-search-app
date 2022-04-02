import config from './config';
import express from 'express';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());


server.set('view engine', 'ejs');



server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
