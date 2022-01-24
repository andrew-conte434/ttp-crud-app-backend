const Sequelize = require('sequelize')
const pkg = require('../../package.json')


const db = new Sequelize(
    process.env.DATABASE_url || `postgres://postgres:sql123@localhost:5432/${pkg.name}`,
    {
        // user: 'postgres',
        // password: 'sql123',
        logging : false
    }
)

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db