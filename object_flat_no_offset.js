function Array3(nx, ny, nz) {
  this.data = new Float32Array(nx * ny * nz);
  this.shape = [nx,ny,nz];
  this.stride = [ny*nz, nz, 1];
}

Array3.prototype.get = function(i, j, k) {
  return this.data[this.stride[0] * i + this.stride[1] * j + this.stride[2] * k];
};

Array3.prototype.set = function(i,j,k, v) {
  this.data[this.stride[0] * i + this.stride[1] * j + this.stride[2] * k] = v;
};

function initArray(nx, ny, nz) {
  return new Array3(nx, ny, nz);
}

function benchmark(A, B, nx, ny, nz, num_iter) {
  for(var count=0; count<num_iter; ++count) {
    for(var i=0; i<nx; ++i) {
      for(var j=0; j<ny; ++j) {
        for(var k=0; k<nz; ++k) {
          A.set(i, j, k, A.get(i, j, k) + B.get(i, j, k) + 0.1);
          B.set(i, j, k, B.get(i, j, k) - A.get(i, j, k) * 0.5);
        }
      }
    }
  }
}

exports.benchmark = benchmark;
exports.initArray = initArray;
exports.prop_name = "object with flat accessor, no offset";