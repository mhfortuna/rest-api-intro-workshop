const { app } = require("./server");
const { config } = require("./config/config");
const { connect } = require("./db/connect");
// const { seedAll } = require("./db/seed");

connect().then(()=>{
  // seedAll();
  app.listen(config.app.port,()=>{
    console.log(`Listening on port ${config.app.port}`);
  });
})