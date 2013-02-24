function benchmark(nx, ny, nz, num_iter) {
  var sz = nx * ny * nz;
  var A = new Array(sz),
      B = new Array(sz);
  for(var i=sz-1; i>=0; --i) {
    A[i] = B[i] = 0.0;
  }
  for(var count=0; count<num_iter; ++count) {
    for(var i=0; i<sz; ++i) {
      A[i] += B[i] + 0.1;
      B[i] -= A[i] * 0.5;
    }
  }
}

module.exports = benchmark;
module.exports.prop_name = "raw native array";