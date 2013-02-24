function benchmark(nx, ny, nz, num_iter) {
  var sz = nx * ny * nz;
  var A = new Float32Array(sz),
      B = new Float32Array(sz);
  for(var count=0; count<num_iter; ++count) {
    for(var i=0; i<sz; ++i) {
      A[i] += B[i] + 0.1;
      B[i] -= A[i] * 0.5;
    }
  }
}

module.exports = benchmark;
module.exports.prop_name = "Flat Array";