import { GraphQLID, GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";

import { scoreType } from "../../types/score";

import ScoreModel from "../../../models/score";
import AbilityModel from "../../../models/ability";

export default {
    type: new GraphQLList(scoreType),

    args: {
    uid: {
      name: "UID",
      type: new GraphQLNonNull(GraphQLString)
    }
  },
    resolve(root, params) {
        const events = ScoreModel.find({uid: params.uid}).exec();
        if (!events) {
            throw new Error("Error while fetching score...");
        }
        return events;
         //.exec(function(err, data) {
    //     let map = {};
    //     data.map(function ({aid, goal}) {
    //         console.log(aid);
    //         if (aid in map) {
    //           map[aid] += goal;
    //         } else {
    //           map[aid] = goal;
    //         }
    //     })
    //     let aType = AbilityModel.findById("5b31cf06ed0eab272c732415").exec(function(err, aData) {
    //     })
    //     return data;
    //
    // })
    //   console.log(a);
    //  return a.then(data => {
    //    return data
    //  })
      // return a
      // console.log(uScore);
      // let aType = AbilityModel.findOne({aid: uScore.aid})
      // console.log(uScore);
      // uScore.deleteOne({
      //     eid: '5b31f00fe2ea7a2cb0b8c821'
      // })
      // uScore.findOne({aid: uScore. })

      // return uScore
      // return UserModel.findById(params.name).exec();
  }
};
