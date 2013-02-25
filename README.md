#Question

What is the most efficient way to implement multidimensional arrays in JavaScript?

# Experiment
To run the experiment, just do:

    node experiment.js

# Results:

    Running experiment with dimensions =  16 x 16 x 16
      Proposal # 0 raw native array                         Elapsed time =   14
      Proposal # 1 raw typed array                          Elapsed time =   8
      Proposal # 2 object with array accessor               Elapsed time =   99
      Proposal # 3 object with flat accessor                Elapsed time =   11
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   9
      Proposal # 5 array of native arrays                   Elapsed time =   30
      Proposal # 6 array of typed arrays                    Elapsed time =   82
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   86
    Running experiment with dimensions =  64 x 64 x 64
      Proposal # 0 raw native array                         Elapsed time =   3559
      Proposal # 1 raw typed array                          Elapsed time =   293
      Proposal # 2 object with array accessor               Elapsed time =   5828
      Proposal # 3 object with flat accessor                Elapsed time =   460
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   406
      Proposal # 5 array of native arrays                   Elapsed time =   1846
      Proposal # 6 array of typed arrays                    Elapsed time =   1514
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   1495
    Running experiment with dimensions =  512 x 512 x 4
      Proposal # 0 raw native array                         Elapsed time =   14289
      Proposal # 1 raw typed array                          Elapsed time =   1183
      Proposal # 2 object with array accessor               Elapsed time =   23133
      Proposal # 3 object with flat accessor                Elapsed time =   1896
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   1692
      Proposal # 5 array of native arrays                   Elapsed time =   9411
      Proposal # 6 array of typed arrays                    Elapsed time =   78900
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   71694
    Running experiment with dimensions =  512 x 4 x 512
      Proposal # 0 raw native array                         Elapsed time =   14555
      Proposal # 1 raw typed array                          Elapsed time =   1141
      Proposal # 2 object with array accessor               Elapsed time =   23183
      Proposal # 3 object with flat accessor                Elapsed time =   1703
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   1557
      Proposal # 5 array of native arrays                   Elapsed time =   6995
      Proposal # 6 array of typed arrays                    Elapsed time =   1851
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   1787
    Running experiment with dimensions =  4 x 512 x 512
      Proposal # 0 raw native array                         Elapsed time =   14489
      Proposal # 1 raw typed array                          Elapsed time =   1137
      Proposal # 2 object with array accessor               Elapsed time =   23257
      Proposal # 3 object with flat accessor                Elapsed time =   1728
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   1557
      Proposal # 5 array of native arrays                   Elapsed time =   6906
      Proposal # 6 array of typed arrays                    Elapsed time =   1850
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   1787
    Running experiment with dimensions =  2 x 2 x 2048
      Proposal # 0 raw native array                         Elapsed time =   86
      Proposal # 1 raw typed array                          Elapsed time =   9
      Proposal # 2 object with array accessor               Elapsed time =   178
      Proposal # 3 object with flat accessor                Elapsed time =   13
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   12
      Proposal # 5 array of native arrays                   Elapsed time =   52
      Proposal # 6 array of typed arrays                    Elapsed time =   10
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   10
    Running experiment with dimensions =  2048 x 2 x 2
      Proposal # 0 raw native array                         Elapsed time =   76
      Proposal # 1 raw typed array                          Elapsed time =   9
      Proposal # 2 object with array accessor               Elapsed time =   188
      Proposal # 3 object with flat accessor                Elapsed time =   16
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   16
      Proposal # 5 array of native arrays                   Elapsed time =   68
      Proposal # 6 array of typed arrays                    Elapsed time =   1181
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   1114

#Observations:

* Obviously 1D typed arrays are best performance wise
* Using `get([i,j,k])` for indexing is terrible performance wise.  `get(i,j,k)` is more than 10x faster.
* Similarly, it is pointless to store a separate offset field.  That can be handled using the the subarray() method from a typed array.
* Wrapped objects nearly match the performance of typed arrays, which makes sense given that
* Arrays-of-arrays are slower by a wide margin, but have the advantage of working best with other libraries.
* Contiguous typed array allocation is marginally faster, might as well do it if you are using arrays-of-typed arrays
* For arrays of arrays, it is a trade off by between typed arrays and native arrays.  Native arrays are faster if the last dimensions are small, while typed arrays are faster if they are large.


# Reasonable Options

Excluding obviously stupid things,

* Flat typed array, with manual index
    + Very fast
    + But also messy, requires repeating certain patterns everywhere
    + Does not carry semantic information like array shape
    + Higher dimensional `subarray` not supported, can only slice along first axis.

* Array-of-native arrays
    + Simple, JS/idiomatic access pattern
    + Complete representation of shape data
    + Compatible with numeric.js
    + Good for images or situations where last component is relatively small
    + Bad when last component list large
    + Need to convert to typed array when interface with WebGL
    + Hard to ensure validity.  (eg, checking all rows are actually rows)
    
* Array-of-typed-arrays
    + Same access pattern as array-of-arrays
    + Complete representation of shape data
    + Compatible with numeric.js
    + Good when last component is large (eg volume data)
    + Bad when last component is small
    + With contiguous allocation, can support direct WebGL uploads
    + Also hard to validate; even harder to check if array is contiguous

* Custom multidimensional array object
    + Near optimal performance
    + Semantically complete
    + Can be directly uploaded to GPU
    + Awkward/non-standard interface, will require libraries standardize on interface
