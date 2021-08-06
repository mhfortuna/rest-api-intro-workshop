require("dotenv").config();

const {
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_PRODUCTION,
  PORT = 4000,
  NODE_ENV = "development"
} = process.env

const CONFIG = {
  production: {
    app: {
      port: PORT,
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION
    },
  },
  development: {
    app: {
      port: PORT,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    }

  }
}

module.exports = {
  config: CONFIG[NODE_ENV]
}