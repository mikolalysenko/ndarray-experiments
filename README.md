# Question

What is the most efficient way to implement multidimensional arrays in JavaScript?

**UPDATE**  Experiments for [numeric.js](http://www.numericjs.com/), [cwise](https://github.com/mikolalysenko/cwise) and [ndarray-ops](https://github.com/mikolalysenko/ndarray-ops) added

# Experiment
To run the experiment, just do:

    node experiment.js

# Results:

With:

* Core i7-3770k
* Windows 7 x64
* Node v0.10.5
* cwise 0.0.2
* ndarray 0.2.3
* ndarray-ops 0.1.3
* numeric 1.2.6

```
Running experiment with dimensions = 16 x 16 x 16
   Proposal #1  raw native array                         Total Init =      0ms  Execution =      7ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =      4ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     13ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =      7ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =      9ms
   Proposal #6  array of native arrays                   Total Init =      0ms  Execution =      7ms
   Proposal #7  array of typed arrays                    Total Init =      6ms  Execution =      8ms
   Proposal #8  array of contiguous typed arrays         Total Init =      4ms  Execution =      5ms
   Proposal #9  numeric.js simple                        Total Init =      0ms  Execution =     18ms
   Proposal #10 numeric.js pointwise()                   Total Init =      0ms  Execution =     41ms
   Proposal #11 ndarray-ops                              Total Init =      0ms  Execution =     19ms
   Proposal #12 cwise                                    Total Init =      0ms  Execution =      4ms
Running experiment with dimensions = 64 x 64 x 64
   Proposal #1  raw native array                         Total Init =     33ms  Execution =    230ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =    219ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =    582ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =    344ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =    307ms
   Proposal #6  array of native arrays                   Total Init =      1ms  Execution =   1310ms
   Proposal #7  array of typed arrays                    Total Init =     61ms  Execution =    231ms
   Proposal #8  array of contiguous typed arrays         Total Init =     60ms  Execution =    241ms
   Proposal #9  numeric.js simple                        Total Init =      6ms  Execution =    788ms
   Proposal #10 numeric.js pointwise()                   Total Init =      1ms  Execution =   2503ms
   Proposal #11 ndarray-ops                              Total Init =      0ms  Execution =    563ms
   Proposal #12 cwise                                    Total Init =      0ms  Execution =    173ms
Running experiment with dimensions = 512 x 512 x 4
   Proposal #1  raw native array                         Total Init =    188ms  Execution =    908ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =    880ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =   2466ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =   1475ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =   1372ms
   Proposal #6  array of native arrays                   Total Init =    115ms  Execution =   5557ms
   Proposal #7  array of typed arrays                    Total Init =   3998ms  Execution =   1341ms
   Proposal #8  array of contiguous typed arrays         Total Init =   3256ms  Execution =   1326ms
   Proposal #9  numeric.js simple                        Total Init =    126ms  Execution =  13516ms
   Proposal #10 numeric.js pointwise()                   Total Init =     62ms  Execution =  14124ms
   Proposal #11 ndarray-ops                              Total Init =      0ms  Execution =   2791ms
   Proposal #12 cwise                                    Total Init =      0ms  Execution =      8ms
Running experiment with dimensions = 512 x 4 x 512
   Proposal #1  raw native array                         Total Init =    178ms  Execution =    942ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =    881ms
   Proposal #3  object with array accessor               Total Init =      1ms  Execution =   2301ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =   1342ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =   1201ms
   Proposal #6  array of native arrays                   Total Init =     18ms  Execution =   5243ms
   Proposal #7  array of typed arrays                    Total Init =     37ms  Execution =    862ms
   Proposal #8  array of contiguous typed arrays         Total Init =     34ms  Execution =    908ms
   Proposal #9  numeric.js simple                        Total Init =     12ms  Execution =   4285ms
   Proposal #10 numeric.js pointwise()                   Total Init =     17ms  Execution =  10533ms
   Proposal #11 ndarray-ops                              Total Init =      1ms  Execution =   2191ms
   Proposal #12 cwise                                    Total Init =      0ms  Execution =    649ms
Running experiment with dimensions = 4 x 512 x 512
   Proposal #1  raw native array                         Total Init =    206ms  Execution =    930ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =    878ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =   2313ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =   1349ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =   1202ms
   Proposal #6  array of native arrays                   Total Init =     15ms  Execution =   5216ms
   Proposal #7  array of typed arrays                    Total Init =     32ms  Execution =    852ms
   Proposal #8  array of contiguous typed arrays         Total Init =     26ms  Execution =    901ms
   Proposal #9  numeric.js simple                        Total Init =     15ms  Execution =   4214ms
   Proposal #10 numeric.js pointwise()                   Total Init =      9ms  Execution =  10421ms
   Proposal #11 ndarray-ops                              Total Init =      6ms  Execution =   2192ms
   Proposal #12 cwise                                    Total Init =   FAILED  Execution =   FAILED
Running experiment with dimensions = 2 x 2 x 2048
   Proposal #1  raw native array                         Total Init =      0ms  Execution =     14ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =      6ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     17ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =     10ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =      9ms
   Proposal #6  array of native arrays                   Total Init =      0ms  Execution =     40ms
   Proposal #7  array of typed arrays                    Total Init =      0ms  Execution =      6ms
   Proposal #8  array of contiguous typed arrays         Total Init =      0ms  Execution =      7ms
   Proposal #9  numeric.js simple                        Total Init =      0ms  Execution =     21ms
   Proposal #10 numeric.js pointwise()                   Total Init =      0ms  Execution =     73ms
   Proposal #11 ndarray-ops                              Total Init =      0ms  Execution =     19ms
   Proposal #12 cwise                                    Total Init =      0ms  Execution =   5172ms
Running experiment with dimensions = 2048 x 2 x 2
   Proposal #1  raw native array                         Total Init =      0ms  Execution =      8ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =      7ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     21ms
   Proposal #4  object with flat accessor                Total Init =      1ms  Execution =     12ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =     11ms
   Proposal #6  array of native arrays                   Total Init =     11ms  Execution =     45ms
   Proposal #7  array of typed arrays                    Total Init =     62ms  Execution =     13ms
   Proposal #8  array of contiguous typed arrays         Total Init =     51ms  Execution =     17ms
   Proposal #9  numeric.js simple                        Total Init =      1ms  Execution =    125ms
   Proposal #10 numeric.js pointwise()                   Total Init =      0ms  Execution =    171ms
   Proposal #11 ndarray-ops                              Total Init =      0ms  Execution =     34ms
   Proposal #12 cwise                                    Total Init =      0ms  Execution =      1ms
```      

# Generic Observations

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

