
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

function zeros(shape, type) {
  var stride = new Array(shape.length);
  var size = 1;
  for(var i=shape.length-1; i>=0; ++i) {
    stride[i] = size;
    size *= shape[i];
  }
  return new ArrayN(type(size), 0, stride, shape);
}
