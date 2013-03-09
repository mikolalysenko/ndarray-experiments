#Question

What is the most efficient way to implement multidimensional arrays in JavaScript?

**UPDATE**  Experiments for [numeric.js](http://www.numericjs.com/), [cwise](https://github.com/mikolalysenko/cwise) and [ndarray-ops](https://github.com/mikolalysenko/ndarray-ops) added

# Experiment
To run the experiment, just do:

    node experiment.js

# Results:

    Running experiment with dimensions =  16 x 16 x 16
      Proposal # 0 raw native array                         Elapsed time =   19
      Proposal # 1 raw typed array                          Elapsed time =   7
      Proposal # 2 object with array accessor               Elapsed time =   97
      Proposal # 3 object with flat accessor                Elapsed time =   10
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   10
      Proposal # 5 array of native arrays                   Elapsed time =   28
      Proposal # 6 array of typed arrays                    Elapsed time =   81
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   77
      Proposal # 8 numeric.js simple                        Elapsed time =   43
      Proposal # 9 numeric.js pointwise()                   Elapsed time =   67
      Proposal # 10 ndarray-ops                              Elapsed time =   25
      Proposal # 11 cwise                                    Elapsed time =   7
    Running experiment with dimensions =  64 x 64 x 64
      Proposal # 0 raw native array                         Elapsed time =   8673
      Proposal # 1 raw typed array                          Elapsed time =   285
      Proposal # 2 object with array accessor               Elapsed time =   5643
      Proposal # 3 object with flat accessor                Elapsed time =   437
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   394
      Proposal # 5 array of native arrays                   Elapsed time =   1696
      Proposal # 6 array of typed arrays                    Elapsed time =   1534
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   1403
      Proposal # 8 numeric.js simple                        Elapsed time =   11255
      Proposal # 9 numeric.js pointwise()                   Elapsed time =   8156
      Proposal # 10 ndarray-ops                              Elapsed time =   761
      Proposal # 11 cwise                                    Elapsed time =   258
    Running experiment with dimensions =  512 x 512 x 4
      Proposal # 0 raw native array                         Elapsed time =   13855
      Proposal # 1 raw typed array                          Elapsed time =   1153
      Proposal # 2 object with array accessor               Elapsed time =   23834
      Proposal # 3 object with flat accessor                Elapsed time =   1893
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   1779
      Proposal # 5 array of native arrays                   Elapsed time =   11578
      Proposal # 6 array of typed arrays                    Elapsed time =   90506
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   81326
      Proposal # 8 numeric.js simple                        Elapsed time =   84642
      Proposal # 9 numeric.js pointwise()                   Elapsed time =   54247
      Proposal # 10 ndarray-ops                              Elapsed time =   3696
      Proposal # 11 cwise                                    Elapsed time =   1222
    Running experiment with dimensions =  512 x 4 x 512
      Proposal # 0 raw native array                         Elapsed time =   13834
      Proposal # 1 raw typed array                          Elapsed time =   1164
      Proposal # 2 object with array accessor               Elapsed time =   23363
      Proposal # 3 object with flat accessor                Elapsed time =   1690
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   1552
      Proposal # 5 array of native arrays                   Elapsed time =   6993
      Proposal # 6 array of typed arrays                    Elapsed time =   1878
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   1872
      Proposal # 8 numeric.js simple                        Elapsed time =   42563
      Proposal # 9 numeric.js pointwise()                   Elapsed time =   30237
      Proposal # 10 ndarray-ops                              Elapsed time =   2953
      Proposal # 11 cwise                                    Elapsed time =   901
    Running experiment with dimensions =  4 x 512 x 512
      Proposal # 0 raw native array                         Elapsed time =   13979
      Proposal # 1 raw typed array                          Elapsed time =   1155
      Proposal # 2 object with array accessor               Elapsed time =   23452
      Proposal # 3 object with flat accessor                Elapsed time =   1709
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   1570
      Proposal # 5 array of native arrays                   Elapsed time =   7009
      Proposal # 6 array of typed arrays                    Elapsed time =   1866
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   1860
      Proposal # 8 numeric.js simple                        Elapsed time =   42783
      Proposal # 9 numeric.js pointwise()                   Elapsed time =   30353
      Proposal # 10 ndarray-ops                              Elapsed time =   2920
      Proposal # 11 cwise                                    Elapsed time =   946
    Running experiment with dimensions =  2 x 2 x 2048
      Proposal # 0 raw native array                         Elapsed time =   87
      Proposal # 1 raw typed array                          Elapsed time =   9
      Proposal # 2 object with array accessor               Elapsed time =   191
      Proposal # 3 object with flat accessor                Elapsed time =   13
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   13
      Proposal # 5 array of native arrays                   Elapsed time =   51
      Proposal # 6 array of typed arrays                    Elapsed time =   10
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   16
      Proposal # 8 numeric.js simple                        Elapsed time =   190
      Proposal # 9 numeric.js pointwise()                   Elapsed time =   161
      Proposal # 10 ndarray-ops                              Elapsed time =   25
      Proposal # 11 cwise                                    Elapsed time =   14
    Running experiment with dimensions =  2048 x 2 x 2
      Proposal # 0 raw native array                         Elapsed time =   81
      Proposal # 1 raw typed array                          Elapsed time =   10
      Proposal # 2 object with array accessor               Elapsed time =   194
      Proposal # 3 object with flat accessor                Elapsed time =   17
      Proposal # 4 object with flat accessor, no offset     Elapsed time =   15
      Proposal # 5 array of native arrays                   Elapsed time =   99
      Proposal # 6 array of typed arrays                    Elapsed time =   1286
      Proposal # 7 array of contiguous typed arrays         Elapsed time =   1149
      Proposal # 8 numeric.js simple                        Elapsed time =   612
      Proposal # 9 numeric.js pointwise()                   Elapsed time =   484
      Proposal # 10 ndarray-ops                              Elapsed time =   50
      Proposal # 11 cwise                                    Elapsed time =   17
      

#Generic Observations

* Obviously 1D typed arrays are best performance
* Using `get([i,j,k])` for indexing is terrible.  `get(i,j,k)` is more than 10x faster.
* Similarly, it is pointless to store a separate offset field.  That can be handled using the the subarray() method from a typed array.
* Wrapped objects nearly match the performance of typed arrays, within a factor <2
* Arrays-of-arrays are 5-100x slower than objects, but have the advantage of interoperating with other libraries.
* Contiguous typed array allocation is strictly faster by a small margin (~5%), so if you are going down that route might as well do it.
* For arrays of arrays, it is a trade off by between typed arrays and native arrays.  Native arrays are faster if the last dimension is small, while typed arrays are faster if it is large.

## Reasonable Approaches to Arrays

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
    + Need to convert to typed array when interfaced with WebGL
    + Hard to ensure validity.  (eg, checking all rows are actually rows)
    
* Array-of-typed-arrays
    + Same access pattern as array-of-arrays
    + Complete representation of shape data
    + Compatible with numeric.js
    + Good when last component is large (eg volume data)
    + Bad when last component is small
    + With contiguous allocation, can support direct WebGL uploads
    + Even harder to validate; need to check if array is contiguous and all types match

* Custom multidimensional array object
    + Near optimal performance
    + Semantically complete
    + Easy/simple validation
    + Can be directly uploaded to GPU
    + Awkward/non-standard interface, will require libraries standardize on convention
    
Based on performance considerations, I am currently leaning toward option 4, but dissenting opinions are welcome.


# **UPDATE** Observations about Libraries

* numeric.js is internally built using the array-of-native-arrays approach, and so it is naturally slower than using a typed array
* Also, the implementation of numeric_simple.js uses mul() which returns a copy (and so it is much slower)
* ndarray-ops uses cwise internally, and so it is generally speaking slower than cwise, but may still be useful for some simple operations (like array copying/assignment/basic pointwise operations)
* cwise uses macro expansion to inline functions and unroll loops, and reaches performance which is comparable to a native 1D typed array, with some small overhead due to unboxing primitives.

