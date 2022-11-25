// src/config/config.js

require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT || 33061,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: 'employees_associations_development',
  },
  test: {
    ...config,
    database: 'employees_associations_test',
    logging: false,
  },
  production: {
    ...config,
    database: 'employees_associations_production',
  },
};