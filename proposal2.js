function initArray_rec(shape, stride, buffer, offset, n) {
  if(n === 1) {
    return buffer.subarray(offset, offset+shape[shape.length-1]);
  }
  var d = shape.length-n;
  var result = new Array(shape[d]);
  for(var i=0; i<result.length; ++i) {
    result[i] = initArray_rec(shape, stride, buffer, offset, n-1);
    offset += stride[d];
  }
  return result;
}

function initArray(shape, type) {
  var size = 1;
  var stride = new Array(shape.length);
  for(var i=shape.length-1; i>=0; --i) {
    stride[i] = size;
    size *= shape[i];
  }
  return initArray_rec(shape, stride, new type(size), 0, shape.length);
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