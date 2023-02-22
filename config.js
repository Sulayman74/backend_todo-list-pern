const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER_BDD,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT_CONFIG,
  database: process.env.DATABASE,
});
// const pool = new Pool({
//   user: "postgres",
//   password: "pirate",
//   host: "localhost",
//   port: 5432,
//   database: "perntodo",
// });

module.exports = pool;
