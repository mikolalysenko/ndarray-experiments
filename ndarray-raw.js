var ndarray = require("ndarray")

function initArray(nx, ny, nz) {
  return ndarray(new Float64Array(nx*ny*nz), [nx, ny, nz]);
}

function benchmark(A, B, nx, ny, nz, num_iter) {
  for(var count=0; count<num_iter; ++count) {
    for(var i=0; i<nx; ++i) {
      for(var j=0; j<ny; ++j) {
        for(var k=0; k<nz; ++k) {
          A.set(i, j, k, A.get(i, j, k) + B.get(i, j, k) + 0.1);
          B.set(i, j, k, B.get(i, j, k) - A.get(i, j, k) * 0.5);
        }
      }
    }
  }
}

exports.benchmark = benchmark;
exports.initArray = initArray;
exports.prop_name = "ndarray-raw";