var numeric = require("numeric")

function benchmark(nx, ny, nz, num_iter) {
  var A = numeric.rep([nx,ny,nz], 0)
  var B = numeric.rep([nx,ny,nz], 0)
  
  for(var count=0; count<num_iter; ++count) {
    numeric.addeq(A, 0.1)
    numeric.addeq(A, B)
    numeric.subeq(B, numeric.mul(A, 0.5))
  }
}

module.exports = benchmark
module.exports.prop_name = "numeric.js simple"