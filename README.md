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
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =      7ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     17ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =     10ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =     11ms
   Proposal #6  array of native arrays                   Total Init =      0ms  Execution =     27ms
   Proposal #7  array of typed arrays                    Total Init =      6ms  Execution =      7ms
   Proposal #8  array of contiguous typed arrays         Total Init =      4ms  Execution =      7ms
   Proposal #9  numeric.js simple                        Total Init =      1ms  Execution =     33ms
   Proposal #10 numeric.js pointwise()                   Total Init =      0ms  Execution =     55ms
   Proposal #11 ndarray-ops                              Total Init =      0ms  Execution =     23ms
   Proposal #12 cwise                                    Total Init =      1ms  Execution =      6ms
Running experiment with dimensions = 64 x 64 x 64
   Proposal #1  raw native array                         Total Init =     45ms  Execution =    285ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =    268ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =    738ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =    423ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =    377ms
   Proposal #6  array of native arrays                   Total Init =      1ms  Execution =   1624ms
   Proposal #7  array of typed arrays                    Total Init =    103ms  Execution =    273ms
   Proposal #8  array of contiguous typed arrays         Total Init =     68ms  Execution =    315ms
   Proposal #9  numeric.js simple                        Total Init =      4ms  Execution =    991ms
   Proposal #10 numeric.js pointwise()                   Total Init =      1ms  Execution =   3068ms
   Proposal #11 ndarray-ops                              Total Init =      0ms  Execution =    706ms
   Proposal #12 cwise                                    Total Init =      0ms  Execution =    217ms
Running experiment with dimensions = 512 x 512 x 4
   Proposal #1  raw native array                         Total Init =    248ms  Execution =   1114ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =   1085ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =   3033ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =   1807ms
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =   1610ms
   Proposal #6  array of native arrays                   Total Init =    153ms  Execution =   6738ms
   Proposal #7  array of typed arrays                    Total Init =   5530ms  Execution =   1558ms
   Proposal #8  array of contiguous typed arrays         Total Init =   4408ms  Execution =   1532ms
   Proposal #9  numeric.js simple                        Total Init =    191ms  Execution =  17256ms
   Proposal #10 numeric.js pointwise()                   Total Init =    111ms  Execution =  18132ms
   Proposal #11 ndarray-ops                              Total Init =      0ms  Execution =   3485ms
   Proposal #12 cwise                                    Total Init =      0ms  Execution =   1105ms
Running experiment with dimensions = 512 x 4 x 512
   Proposal #1  raw native array                         Total Init =    267ms  Execution =   1158ms
   Proposal #2  raw typed array                          Total Init =      2ms  Execution =   1084ms
   Proposal #3  object with array accessor               Total Init =      1ms  Execution =   2792ms
   Proposal #4  object with flat accessor                Total Init =      2ms  Execution =   1647ms
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =   1473ms
   Proposal #6  array of native arrays                   Total Init =     25ms  Execution =   6447ms
   Proposal #7  array of typed arrays                    Total Init =     50ms  Execution =   1133ms
   Proposal #8  array of contiguous typed arrays         Total Init =     36ms  Execution =   1116ms
   Proposal #9  numeric.js simple                        Total Init =     12ms  Execution =   5473ms
   Proposal #10 numeric.js pointwise()                   Total Init =     21ms  Execution =  13237ms
   Proposal #11 ndarray-ops                              Total Init =      4ms  Execution =   2692ms
   Proposal #12 cwise                                    Total Init =      3ms  Execution =    800ms
Running experiment with dimensions = 4 x 512 x 512
   Proposal #1  raw native array                         Total Init =    275ms  Execution =   1140ms
   Proposal #2  raw typed array                          Total Init =      2ms  Execution =   1081ms
   Proposal #3  object with array accessor               Total Init =      2ms  Execution =   2787ms
   Proposal #4  object with flat accessor                Total Init =      1ms  Execution =   1645ms
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =   1471ms
   Proposal #6  array of native arrays                   Total Init =     24ms  Execution =   6442ms
   Proposal #7  array of typed arrays                    Total Init =     49ms  Execution =   1100ms
   Proposal #8  array of contiguous typed arrays         Total Init =     35ms  Execution =   1101ms
   Proposal #9  numeric.js simple                        Total Init =     22ms  Execution =   5495ms
   Proposal #10 numeric.js pointwise()                   Total Init =     23ms  Execution =  12903ms
   Proposal #11 ndarray-ops                              Total Init =      4ms  Execution =   2695ms
   Proposal #12 cwise                                    Total Init =      3ms  Execution =    805ms
Running experiment with dimensions = 2 x 2 x 2048
   Proposal #1  raw native array                         Total Init =      0ms  Execution =     23ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =      8ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     22ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =     13ms
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =     11ms
   Proposal #6  array of native arrays                   Total Init =      0ms  Execution =     51ms
   Proposal #7  array of typed arrays                    Total Init =      1ms  Execution =      7ms
   Proposal #8  array of contiguous typed arrays         Total Init =      1ms  Execution =      8ms
   Proposal #9  numeric.js simple                        Total Init =      0ms  Execution =     26ms
   Proposal #10 numeric.js pointwise()                   Total Init =      0ms  Execution =     96ms
   Proposal #11 ndarray-ops                              Total Init =      0ms  Execution =     24ms
   Proposal #12 cwise                                    Total Init =      1ms  Execution =      7ms
Running experiment with dimensions = 2048 x 2 x 2
   Proposal #1  raw native array                         Total Init =      0ms  Execution =     21ms
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =      9ms
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     27ms
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =     16ms
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =     14ms
   Proposal #6  array of native arrays                   Total Init =      0ms  Execution =     58ms
   Proposal #7  array of typed arrays                    Total Init =     86ms  Execution =     29ms
   Proposal #8  array of contiguous typed arrays         Total Init =     75ms  Execution =     20ms
   Proposal #9  numeric.js simple                        Total Init =      1ms  Execution =    171ms
   Proposal #10 numeric.js pointwise()                   Total Init =      1ms  Execution =    208ms
   Proposal #11 ndarray-ops                              Total Init =      0ms  Execution =     43ms
   Proposal #12 cwise                                    Total Init =      0ms  Execution =     12ms
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

