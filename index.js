const dotenv = require('dotenv');
const app = require('./server/server');

dotenv.config({ path: './config.env' });

app.listen(process.env.PORT, () => {
  console.log('Listening');
});
