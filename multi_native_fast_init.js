function initArray(nx, ny, nz) {
  var line = new Array(nz);
  for(var i=nz-1; i>=0; --i) {
    line[i] = 0.1;
    line[i] = 0.0;
  }
  var result = new Array(nx);
  for(var i=nx-1; i>=0; --i) {
    var ri = new Array(ny);
    result[i] = ri;
    for(var j=ny-1; j>=0; --j) {
      ri[j] = line.slice(0);
      ri[j][0] = 0.1;
      ri[j][0] = 0.0;
    }
  }
  return result;
}

function benchmark(A, B, nx, ny, nz, num_iter) {
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

exports.benchmark = benchmark;
exports.initArray = initArray;
exports.prop_name = "array of native arrays (fast init)";