const {
  DB_USER = "otmbjylx",
  DB_PASSWORD = "KVc8_Zc4-XjznT5Ztr4tx1OztjQFPM9L",
  DB_NAME = "otmbjylx",
  DB_HOST = "topsy.db.elephantsql.com",
  // DB_PORT = "5432",
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    // port: DB_PORT,
    dialect: "postgres"
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    // port: DB_PORT,
    dialect: "postgres"
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    // port: DB_PORT,
    dialect: "postgres"
  }
}
