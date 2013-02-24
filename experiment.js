var proposals = [
  require("./proposal0.js"),
  require("./proposal1.js"),
  require("./proposal2.js"),
  require("./proposal3.js"),
  require("./proposal4.js")
];

for(var i=0; i<proposals.length; ++i) {
  var prop = proposals[i];
  var start_t = new Date();
  for(var j=0; j<16; ++j) {
    prop(64, 64, 64, 16);
  }
  var end_t = new Date();
  console.log("Proposal #", (i+1), ": Elapsed time: ", (end_t - start_t));
}