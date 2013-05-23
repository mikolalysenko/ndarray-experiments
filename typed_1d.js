function initArray(nx, ny, nz) {
  var sz = nx * ny * nz;
  return new Float32Array(sz);
}

function benchmark(A, B, nx, ny, nz, num_iter) {
  var sz = nx * ny * nz;
  for(var count=0; count<num_iter; ++count) {
    for(var i=0; i<sz; ++i) {
      A[i] += B[i] + 0.1;
      B[i] -= A[i] * 0.5;
    }
  }
}

exports.benchmark = benchmark;
exports.initArray = initArray;
exports.prop_name = "raw typed array";