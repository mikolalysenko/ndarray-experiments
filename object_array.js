function ArrayN(data, offset, stride, shape) {
  this.data = data;
  this.offset = offset;
  this.stride = stride;
  this.shape = shape;
}

ArrayN.prototype.get = function(x) {
  return this.data[x[0] * this.stride[0] + x[1] * this.stride[1] + x[2] * this.stride[2] + this.offset];
}

ArrayN.prototype.set = function(x, v) {
  this.data[x[0] * this.stride[0] + x[1] * this.stride[1] + x[2] * this.stride[2] + this.offset] = v;
}

function initArray(shape) {
  var stride = new Array(shape.length);
  var size = 1;
  for(var i=shape.length-1; i>=0; --i) {
    stride[i] = size;
    size *= shape[i];
  }
  return new ArrayN(new Float32Array(size), 0, stride, shape);
}

function benchmark(nx, ny, nz, num_iter) {
  var A = initArray([nx,ny,nz])
    , B = initArray([nx,ny,nz]);
  var idx = [0,0,0];
  for(var count=0; count<num_iter; ++count) {
    for(idx[0]=0; idx[0]<nx; ++idx[0]) {
      for(idx[1]=0; idx[1]<ny; ++idx[1]) {
        for(idx[2]=0; idx[2]<nz; ++idx[2]) {
          A.set(idx, A.get(idx) + B.get(idx) + 0.1);
          B.set(idx, B.get(idx) - A.get(idx) * 0.5);
        }
      }
    }
  }
}

module.exports = benchmark;
module.exports.prop_name = "object with array accessor";