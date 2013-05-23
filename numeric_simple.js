var numeric = require("numeric");

function initArray(nx, ny, nz) {
  return numeric.rep([nx,ny,nz], 0);
}

function benchmark(A, B, nx, ny, nz, num_iter) {
  for(var count=0; count<num_iter; ++count) {
    numeric.addeq(A, 0.1);
    numeric.addeq(A, B);
    numeric.subeq(B, numeric.mul(A, 0.5));
  }
}

exports.benchmark = benchmark;
exports.initArray = initArray;
exports.prop_name = "numeric.js simple";