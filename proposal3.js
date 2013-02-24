function initArray_rec(shape, typecons, n) {
  var d = shape.length-n;
  if(n === 1) {
    return new typecons(shape[d]);
  }
  var result = new Array(shape[d]);
  for(var i=0; i<result.length; ++i) {
    result[i] = initArray_rec(shape, typecons, n-1);
  }
  return result;
}

function initArray(shape, typecons) {
  return initArray_rec(shape, typecons, shape.length);
}

function benchmark(nx, ny, nz, iter) {
  var A = initArray([nx,ny,nz], Float32Array)
    , B = initArray([nx,ny,nz], Float32Array);
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