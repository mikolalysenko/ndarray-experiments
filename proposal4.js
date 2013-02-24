var numeric = require("numeric");

function benchmark(nx, ny, nz, num_iter) {
  var A = numeric.rep([nx,ny,nz], 0.0),
      B = numeric.rep([nx,ny,nz], 0.0);
  for(var count=0; count<num_iter; ++count) {
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
module.exports.prop_name = "numeric.js";