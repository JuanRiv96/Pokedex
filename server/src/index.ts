import server from './app';
import sequelize from './db';
import { PORT } from './utils/config';

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at', PORT); // eslint-disable-line no-console
  });
});
