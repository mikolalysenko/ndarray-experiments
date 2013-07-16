var ndarray = require("ndarray"),
    ops = require("ndarray-ops");

function initArray(nx, ny, nz) {
  return ndarray(new Float64Array(nx*ny*nz), [nx,ny,nz]);
}

function benchmark(A, B, C, nx, ny, nz, num_iter) {
  for(var count=0; count<num_iter; ++count) {
    ops.addseq(ops.addeq(A, B), 0.1);
    ops.subeq(B, ops.muls(C, A, 0.5));
  }
}

exports.benchmark = benchmark;
exports.initArray = initArray;
exports.prop_name = "ndarray-ops";
