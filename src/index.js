const { app } = require("./server");
const { config } = require("./config/config");
const { connect } = require("./db/connect");

connect().then(()=>{
  app.listen(config.app.port,()=>{
    console.log(`Listening on port ${config.app.port}`);
  })
})