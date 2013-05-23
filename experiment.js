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

function padTo(str, nchars, where) {
  if (str.length < nchars) {
    if (where === "left") // left pad
      str = (new Array(nchars + 1 - str.length)).join(' ') + str;
    else // right pad
      str += (new Array(nchars + 1 - str.length)).join(' ');
  }

  return str;
}

function doTest(nx, ny, nz) {
  console.log("Running experiment with dimensions =", nx, "x", ny, "x", nz);
  for(var i=0; i<proposals.length; ++i) {
    var prop = proposals[i],
        bench = prop.benchmark,
        A, B, C, initTime, runTime;

    try {
      initTime = Date.now();
      A = prop.initArray(nx, ny, nz);
      B = prop.initArray(nx, ny, nz);

      if (bench.length === 7) {
        C = prop.initArray(nx, ny, nz);
        initTime = (Date.now() - initTime) + "ms";
        runTime = Date.now();
        for(var j=0; j<16; ++j) {
          bench(A, B, C, nx, ny, nz, 16);
        }
      } else {
        initTime = (Date.now() - initTime) + "ms";
        runTime = Date.now();
        for(var j=0; j<16; ++j) {
          bench(A, B, nx, ny, nz, 16);
        }
      }
      runTime = (Date.now() - runTime) + "ms";
    } catch (e) {
      initTime = runTime = "FAILED";
    }

    console.log("   Proposal", "#" + padTo((i + 1).toString(), 2),
                padTo(prop.prop_name, 40),
                "Total Init =", padTo(initTime.toString(), 8, "left"),
                " Execution =", padTo(runTime.toString(), 8, "left"));
  }
}

doTest(16, 16, 16);
doTest(64, 64, 64);

doTest(512, 512, 4);
doTest(512, 4, 512);
doTest(4, 512, 512);

doTest(2, 2, 2048);
doTest(2048, 2, 2);