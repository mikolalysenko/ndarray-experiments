var proposals = [
  require("./proposal0.js"),
  require("./proposal1.js"),
  require("./proposal2.js"),
  require("./proposal3.js"),
  require("./proposal4.js"),
  require("./proposal5.js")
];

function doTest(nx, ny, nz) {
  console.log("Running experiment with dimensions = ", nx, "x", ny, "x", nz);
  for(var i=0; i<proposals.length; ++i) {
    var prop = proposals[i];
    var start_t = new Date();
    for(var j=0; j<16; ++j) {
      prop(nx, ny, nz, 16);
    }
    var end_t = new Date();
    console.log("\tProposal #", i, prop.prop_name, ": Elapsed time =  ", (end_t - start_t));
  }
}

doTest(4,4,1);

doTest(16, 16, 16);
doTest(64, 64, 64);

doTest(128, 128, 1);
doTest(128, 128, 3);
doTest(128, 128, 4);

doTest(1, 512, 512);
doTest(3, 512, 512);
doTest(4, 512, 512);