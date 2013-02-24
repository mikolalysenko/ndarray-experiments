"use strict";

function initArray(nx, ny, nz) {
  var result = Array(nx);
  for(var i=nx-1; i>=0; --i) {
    var ri = Array(ny);
    result[i] = ri;
    for(var j=ny-1; j>=0; --j) {
      ri[j] = new Float32Array(nz);
    }
  }
  return result;
}

function benchmark(nx, ny, nz, iter) {
  var A = initArray(nx,ny,nz)
    , B = initArray(nx,ny,nz);
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

module.exports = benchmark;
module.exports.prop_name = "array of typed arrays"