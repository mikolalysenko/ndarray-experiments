var ndarray = require("ndarray"),
    cwise = require("cwise");

var operator = cwise({
  args: ["array", "array"],
  body: function(a, b) {
    a += b + 0.1;
    b -= a * 0.5;
  }
});

function initArray(nx, ny, nz) {
  return ndarray(new Float64Array(nx*ny*nz), [nx, ny, nz]);
}

function benchmark(A, B, nx, ny, nz, num_iter) {
  for(var count=0; count<num_iter; ++count) {
    operator(A, B);
  }
}

exports.benchmark = benchmark;
exports.initArray = initArray;
exports.prop_name = "cwise";