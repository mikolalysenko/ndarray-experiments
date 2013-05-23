function initArray(nx, ny, nz) {
  var result = new Array(nx);
  for(var i=nx-1; i>=0; --i) {
    var ri = new Array(ny);
    result[i] = ri;
    for(var j=ny-1; j>=0; --j) {
      ri[j] = new Float32Array(nz);
    }
  }
  return result;
}

function benchmark(A, B, nx, ny, nz, iter) {
  for(var count=0; count<iter; ++count) {
    for(var i=0; i<nx; ++i) {
      for(var j=0; j<ny; ++j) {
        for(var k=0; k<nz; ++k) {
          A[i][j][k] += B[i][j][k] + 0.1;
          B[i][j][k] -= A[i][j][k] * 0.5;
        }
      }
    }
  }
}

exports.benchmark = benchmark;
exports.initArray = initArray;
exports.prop_name = "array of typed arrays";