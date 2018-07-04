import express from "express";
import mongoose from "mongoose";
import graphqlHTTP from "express-graphql";
import ScoreModel from "./models/score";
import AbilityModel from "./models/ability";
import util from 'util'
import fs from 'fs'
import schema from "./graphql";
var cors = require('cors')
const app = express();
app.use(cors())
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
app.get("/user/score", (req, res) => {
    let person = require('./personAbility')
    let personAbility = new person()
    let val = personAbility[req.query.uid];
    ScoreModel.find({uid: req.query.uid}, function(err, post){
        let map = {};
        let arr = []
        console.log(post);
        if (!post) {
            throw new Error("Error while fetching score...");
            res.json({data: [map], status: 200, error: 'error'})
        }
        let num = 0;
        let len = post.length;
        if (!len) {
            for(let k in val) {
                if (k !== 'name') {
                    arr.push(val[k])
                }
            }
            res.json({data: arr, status: 200})
        }
        post.map(function ({aid, goal}) {

            AbilityModel.findById(aid, function(err, data) {
                num += 1;
                if (data) {
                    let {type, _id} = data;
                    // console.log(_id);
                    val[aid]['value'] += parseFloat(goal)

                } else {
                    res.json({data: {}, status: 200})
                }
                if (len === num) {
                    for(var k in val) {
                        if (k !== 'name') {
                            arr.push(val[k])
                        }
                    }
                    res.json({data: arr, status: 200})
                }
            })
            })

    }


)

});
app.use(
  "/graphql",
  graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true
  }))
);
app.listen(3004, () => {
  console.log("graphql at port 3004");
});
