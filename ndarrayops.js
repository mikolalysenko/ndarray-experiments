var ndarray = require("ndarray")
  , ops = require("ndarray-ops")

function benchmark(nx, ny, nz, num_iter) {
  var A = ndarray.zeros([nx,ny,nz])
  var B = ndarray.zeros([nx,ny,nz])
  var C = ndarray.zeros([nx,ny,nz])
  
  for(var count=0; count<num_iter; ++count) {
    ops.addseq(ops.addeq(A, B), 0.1)
    ops.subeq(B, ops.muls(C, A, 0.5))
  }
}

module.exports = benchmark
module.exports.prop_name = "ndarray-ops"
