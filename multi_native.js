
"use strict";

function initArray(nx, ny, nz) {
  var line = new Array(nz);
  for(var i=nz-1; i>=0; --i) {
    line[i] = 0.0;
  }
  var result = Array(nx);
  for(var i=nx-1; i>=0; --i) {
    var ri = Array(ny);
    result[i] = ri;
    for(var j=ny-1; j>=0; --j) {
      ri[j] = line.slice(0);
    }
  }
  return result;
}

function benchmark(nx, ny, nz, num_iter) {
  var A = initArray(nx, ny, nz);
  var B = initArray(nx, ny, nz);
  for(var count=0; count<num_iter; ++count) {
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
module.exports.prop_name = "array of native arrays";