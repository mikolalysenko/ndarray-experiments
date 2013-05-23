function initArray(nx, ny, nz) {
  var sz = nx * ny * nz;
  var result = new Array(sz);
  for(var i=sz-1; i>=0; --i) {
    result[i] = 0.0;
  }
  return result;
}

function benchmark(A, B, nx, ny, nz, num_iter) {
  var sz = nx * ny * nz;
  for(var count=0; count<num_iter; ++count) {
    for(var i=sz-1; i>=0; --i) {
      A[i] += B[i] + 0.1;
      B[i] -= A[i] * 0.5;
    }
  }
}

exports.benchmark = benchmark;
exports.initArray = initArray;
exports.prop_name = "raw native array";