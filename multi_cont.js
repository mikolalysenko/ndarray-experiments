function initArray(nx, ny, nz) {
  var buffer = new Float32Array(nx * ny * nz),
      result = new Array(nx),
      offset = 0;
  for(var i=nx-1; i>=0; --i) {
    var ri = new Array(ny);
    result[i] = ri;
    for(var j=ny-1; j>=0; --j) {
      ri[j] = buffer.subarray(offset, offset + nz);
      offset += nz;
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
exports.prop_name = "array of contiguous typed arrays";