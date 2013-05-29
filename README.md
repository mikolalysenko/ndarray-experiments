# Question

What is the most efficient way to implement multidimensional arrays in JavaScript?

**UPDATE**  Experiments for [numeric.js](http://www.numericjs.com/), [cwise](https://github.com/mikolalysenko/cwise) and [ndarray-ops](https://github.com/mikolalysenko/ndarray-ops) added

# Experiment
To run the experiment, just do:

    node experiment.js

# Results:

With:

* Core i7 @ 2.3 GHz.  8GB RAM
* Mac OS X 10.8.3
* Node v0.10.5
* cwise 0.1.2
* ndarray 0.2.4
* ndarray-ops 0.1.3
* numeric 1.2.6

```
Running experiment with dimensions = 16 x 16 x 16
   Proposal #1  raw native array                         Total Init =      0ms  Execution =      6ms
   Proposal #2  raw typed array                          Total Init =      1ms  Execution =      9ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     25ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =     10ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =      9ms
   Proposal #6  array of native arrays                   Total Init =      0ms  Execution =     28ms
   Proposal #7  array of native arrays (fast init)       Total Init =      1ms  Execution =      6ms
   Proposal #8  array of typed arrays                    Total Init =      5ms  Execution =      7ms
   Proposal #9  array of contiguous typed arrays         Total Init =      4ms  Execution =      6ms
   Proposal #10 numeric.js simple                        Total Init =      0ms  Execution =     23ms
   Proposal #11 numeric.js pointwise()                   Total Init =      0ms  Execution =     56ms
   Proposal #12 ndarray-ops                              Total Init =      0ms  Execution =     25ms
   Proposal #13 cwise                                    Total Init =      0ms  Execution =      6ms
Running experiment with dimensions = 64 x 64 x 64
   Proposal #1  raw native array                         Total Init =     49ms  Execution =    292ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =    270ms
   Proposal #3  object with array accessor               Total Init =      1ms  Execution =    741ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =    428ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =    381ms
   Proposal #6  array of native arrays                   Total Init =      1ms  Execution =   1632ms
   Proposal #7  array of native arrays (fast init)       Total Init =      6ms  Execution =    274ms
   Proposal #8  array of typed arrays                    Total Init =     92ms  Execution =    300ms
   Proposal #9  array of contiguous typed arrays         Total Init =     68ms  Execution =    320ms
   Proposal #10 numeric.js simple                        Total Init =      6ms  Execution =    989ms
   Proposal #11 numeric.js pointwise()                   Total Init =      2ms  Execution =   3115ms
   Proposal #12 ndarray-ops                              Total Init =      0ms  Execution =    716ms
   Proposal #13 cwise                                    Total Init =      0ms  Execution =    222ms
Running experiment with dimensions = 512 x 512 x 4
   Proposal #1  raw native array                         Total Init =    256ms  Execution =   1140ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =   1109ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =   3034ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =   1831ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =   1629ms
   Proposal #6  array of native arrays                   Total Init =    152ms  Execution =   6871ms
   Proposal #7  array of native arrays (fast init)       Total Init =    107ms  Execution =   1508ms
   Proposal #8  array of typed arrays                    Total Init =   5448ms  Execution =   1548ms
   Proposal #9  array of contiguous typed arrays         Total Init =   4478ms  Execution =   1544ms
   Proposal #10 numeric.js simple                        Total Init =     80ms  Execution =  17549ms
   Proposal #11 numeric.js pointwise()                   Total Init =     97ms  Execution =  17947ms
   Proposal #12 ndarray-ops                              Total Init =      0ms  Execution =   3508ms
   Proposal #13 cwise                                    Total Init =      0ms  Execution =   1140ms
Running experiment with dimensions = 512 x 4 x 512
   Proposal #1  raw native array                         Total Init =    283ms  Execution =   1151ms
   Proposal #2  raw typed array                          Total Init =      1ms  Execution =   1104ms
   Proposal #3  object with array accessor               Total Init =      1ms  Execution =   2829ms
   Proposal #4  object with flat accessor                Total Init =      1ms  Execution =   1675ms
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =   1486ms
   Proposal #6  array of native arrays                   Total Init =     24ms  Execution =   6507ms
   Proposal #7  array of native arrays (fast init)       Total Init =     13ms  Execution =   1053ms
   Proposal #8  array of typed arrays                    Total Init =     48ms  Execution =   1141ms
   Proposal #9  array of contiguous typed arrays         Total Init =     35ms  Execution =   1122ms
   Proposal #10 numeric.js simple                        Total Init =     16ms  Execution =   5392ms
   Proposal #11 numeric.js pointwise()                   Total Init =     16ms  Execution =  13377ms
   Proposal #12 ndarray-ops                              Total Init =      4ms  Execution =   2722ms
   Proposal #13 cwise                                    Total Init =      3ms  Execution =    812ms
Running experiment with dimensions = 4 x 512 x 512
   Proposal #1  raw native array                         Total Init =    267ms  Execution =   1152ms
   Proposal #2  raw typed array                          Total Init =      1ms  Execution =   1099ms
   Proposal #3  object with array accessor               Total Init =      2ms  Execution =   2869ms
   Proposal #4  object with flat accessor                Total Init =      2ms  Execution =   1678ms
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =   1490ms
   Proposal #6  array of native arrays                   Total Init =     24ms  Execution =   6480ms
   Proposal #7  array of native arrays (fast init)       Total Init =     13ms  Execution =   1065ms
   Proposal #8  array of typed arrays                    Total Init =     48ms  Execution =   1135ms
   Proposal #9  array of contiguous typed arrays         Total Init =     45ms  Execution =   1114ms
   Proposal #10 numeric.js simple                        Total Init =     20ms  Execution =   5396ms
   Proposal #11 numeric.js pointwise()                   Total Init =     13ms  Execution =  12948ms
   Proposal #12 ndarray-ops                              Total Init =      5ms  Execution =   2716ms
   Proposal #13 cwise                                    Total Init =      3ms  Execution =    813ms
Running experiment with dimensions = 2 x 2 x 2048
   Proposal #1  raw native array                         Total Init =      1ms  Execution =     22ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =      9ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     22ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =     13ms
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =     11ms
   Proposal #6  array of native arrays                   Total Init =      0ms  Execution =     50ms
   Proposal #7  array of native arrays (fast init)       Total Init =      0ms  Execution =      8ms
   Proposal #8  array of typed arrays                    Total Init =      1ms  Execution =      8ms
   Proposal #9  array of contiguous typed arrays         Total Init =      1ms  Execution =      8ms
   Proposal #10 numeric.js simple                        Total Init =      0ms  Execution =     27ms
   Proposal #11 numeric.js pointwise()                   Total Init =      0ms  Execution =     94ms
   Proposal #12 ndarray-ops                              Total Init =      0ms  Execution =     24ms
   Proposal #13 cwise                                    Total Init =      0ms  Execution =      7ms
Running experiment with dimensions = 2048 x 2 x 2
   Proposal #1  raw native array                         Total Init =      0ms  Execution =     21ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =      9ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     27ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =     17ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =     15ms
   Proposal #6  array of native arrays                   Total Init =      2ms  Execution =     57ms
   Proposal #7  array of native arrays (fast init)       Total Init =      1ms  Execution =     17ms
   Proposal #8  array of typed arrays                    Total Init =     84ms  Execution =     19ms
   Proposal #9  array of contiguous typed arrays         Total Init =     69ms  Execution =     26ms
   Proposal #10 numeric.js simple                        Total Init =      1ms  Execution =    158ms
   Proposal #11 numeric.js pointwise()                   Total Init =      0ms  Execution =    222ms
   Proposal #12 ndarray-ops                              Total Init =      0ms  Execution =     43ms
   Proposal #13 cwise                                    Total Init =      0ms  Execution =     13ms
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

