var numeric = require("numeric")

var operator = numeric.pointwise(
  ["ret[i]", "x[i]"],
  [
    "ret[i] += x[i] + 0.1",
    "x[i] -= ret[i] * 0.5"
  ].join("\n")
)

function benchmark(nx, ny, nz, num_iter) {
  var A = numeric.rep([nx,ny,nz], 0)
  var B = numeric.rep([nx,ny,nz], 0)
  
  for(var count=0; count<num_iter; ++count) {
    operator(A,B)
  }
}

module.exports = benchmark
module.exports.prop_name = "numeric.js pointwise()"