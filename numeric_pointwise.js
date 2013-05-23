var numeric = require("numeric");

var operator = numeric.pointwise(
  ["ret[i]", "x[i]"],
  [
    "ret[i] += x[i] + 0.1",
    "x[i] -= ret[i] * 0.5"
  ].join("\n")
);

function initArray(nx, ny, nz) {
  return numeric.rep([nx,ny,nz], 0);
}

function benchmark(A, B, nx, ny, nz, num_iter) {
  for(var count=0; count<num_iter; ++count) {
    operator(A, B);
  }
}

exports.benchmark = benchmark;
exports.initArray = initArray;
exports.prop_name = "numeric.js pointwise()";