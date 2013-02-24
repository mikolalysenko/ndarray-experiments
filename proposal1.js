function ArrayN(data, offset, stride, shape) {
  this.data = data;
  this.offset = offset;
  this.stride = stride;
  this.shape = shape;
}

ArrayN.prototype.get = function(x) {
  var pointer = this.offset;
  for(var i=0; i<this.shape.length; ++i) {
    pointer += x[i] * this.stride[i];
  }
  return this.data[pointer];
}

ArrayN.prototype.set = function(x, v) {
  var pointer = this.offset;
  for(var i=0; i<this.shape.length; ++i) {
    pointer += x[i] * this.stride[i];
  }
  return this.data[pointer] = v;
}

function initArray(shape, type) {
  var stride = new Array(shape.length);
  var size = 1;
  for(var i=shape.length-1; i>=0; --i) {
    stride[i] = size;
    size *= shape[i];
  }
  return new ArrayN(new type(size), 0, stride, shape);
}

function benchmark(nx, ny, nz, num_iter) {
  var A = initArray([nx,ny,nz], Float32Array)
    , B = initArray([nx,ny,nz], Float32Array);
  var idx = [0,0,0];
  for(var count=0; count<num_iter; ++count) {
    for(idx[0]=0; idx[0]<nx; ++idx[0]) {
      for(idx[1]=0; idx[1]<nx; ++idx[1]) {
        for(idx[2]=0; idx[2]<nx; ++idx[2]) {
          A.set(idx, A.get(idx) + B.get(idx) + 0.1);
          B.set(idx, B.get(idx) - A.get(idx) * 0.5);
        }
      }
    }
  }
}

module.exports = benchmark;