var proposals = [
  require("./native_1d.js"),
  require("./typed_1d.js"),
  require("./object_array.js"),
  require("./object_flat.js"),
  require("./object_flat_no_offset.js"),
  require("./multi_native.js"),
  require("./multi_typed.js"),
  require("./multi_cont.js"),
  require("./numeric_simple.js"),
  require("./numeric_pointwise.js"),
  require("./ndarrayops.js"),
  require("./cwise.js")
];

function padTo(str, nchars) {
  while(str.length < nchars) {
    str += " ";
  }
  return str;
}

function doTest(nx, ny, nz) {
  console.log("Running experiment with dimensions = ", nx, "x", ny, "x", nz);
  for(var i=0; i<proposals.length; ++i) {
    var prop = proposals[i];
    var start_t = new Date();
    for(var j=0; j<16; ++j) {
      prop(nx, ny, nz, 16);
    }
    var end_t = new Date();
    console.log("\tProposal #", i, padTo(prop.prop_name, 40), "Elapsed time =  ", (end_t - start_t));
  }
}

doTest(16, 16, 16);
doTest(64, 64, 64);

doTest(512, 512, 4);
doTest(512, 4, 512);
doTest(4, 512, 512);

doTest(2, 2, 2048);
doTest(2048, 2, 2);