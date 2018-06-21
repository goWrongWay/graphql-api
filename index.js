import express from "express";
import mongoose from "mongoose";
import graphqlHTTP from "express-graphql";

import schema from "./graphql";

const app = express();

mongoose.connect(
  "mongodb://malin:malin1857@ds119059.mlab.com:19059/graphql-api"
);
const db = mongoose.connection;
db
  .on("error", () => {
    console.log("fail");
  })
  .once("open", () => {
    console.log("connected to DB");
  });
app.get("/", (req, res) => {
  res.send("hello");
});
app.use(
  "/graphql",
  graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true
  }))
);
app.listen(3000, () => {
  console.log("graphql at port 3000");
});
