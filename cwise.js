var ndarray = require("ndarray")
var cwise = require("cwise")

var operator = cwise({
  args: ["array", "array"],
  body: function(a, b) {
    a += b + 0.1
    b -= a * 0.5
  }
})

function benchmark(nx, ny, nz, num_iter) {
  var A = ndarray.zeros([nx,ny,nz])
  var B = ndarray.zeros([nx,ny,nz])
  
  for(var count=0; count<num_iter; ++count) {
    operator(A,B)
  }
}

module.exports = benchmark
module.exports.prop_name = "cwise"