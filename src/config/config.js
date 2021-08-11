require("dotenv").config();

const {
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_PRODUCTION,
  PORT = 4000,
  ACCESS_TOKEN_SECRET,
  NODE_ENV = "development",
} = process.env;

const CONFIG = {
  production: {
    app: {
      port: PORT,
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
    auth: {
      secret: ACCESS_TOKEN_SECRET,
    },
  },
  development: {
    app: {
      port: PORT,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
    auth: {
      secret: ACCESS_TOKEN_SECRET,
    },
  },
};

module.exports = {
  config: CONFIG[NODE_ENV],
};
