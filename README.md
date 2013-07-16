# Question

What is the most efficient way to implement multidimensional arrays in JavaScript?

**UPDATE**  Experiments for [numeric.js](http://www.numericjs.com/), [cwise](https://github.com/mikolalysenko/cwise) and [ndarray-ops](https://github.com/mikolalysenko/ndarray-ops) added

# Experiment
To run the experiment in node, just do:

    node experiment.js
    
If you want to try it in your browser, you can install beefy by typing:

    npm install -g beefy
    
Then running

    beefy experiment.js --open

# Results:

These are the results of running the experiment in the latest version of Chrome V8.

With:

* Core i7 @ 2.3 GHz.  8GB RAM
* Mac OS X 10.8.3
* Google Chrome 27
* cwise 0.3.3
* ndarray 1.0.4
* ndarray-ops 1.1.0
* numeric 1.2.6


```
Running experiment with dimensions = 16 x 16 x 16 experiment.js:30
   Proposal #1  raw native array                         Total Init =      0ms  Execution =      8ms 
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =      9ms 
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     15ms 
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =     10ms 
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =     11ms 
   Proposal #6  array of native arrays                   Total Init =      1ms  Execution =     25ms 
   Proposal #7  array of native arrays (fast init)       Total Init =      1ms  Execution =      5ms 
   Proposal #8  array of typed arrays                    Total Init =      0ms  Execution =      9ms 
   Proposal #9  array of contiguous typed arrays         Total Init =      1ms  Execution =      9ms 
   Proposal #10 numeric.js simple                        Total Init =      0ms  Execution =     47ms 
   Proposal #11 numeric.js pointwise()                   Total Init =      0ms  Execution =     64ms 
   Proposal #12 ndarray-raw                              Total Init =      4ms  Execution =      8ms 
   Proposal #13 ndarray-ops                              Total Init =      0ms  Execution =     52ms 
   Proposal #14 cwise                                    Total Init =      0ms  Execution =      9ms 
Running experiment with dimensions = 64 x 64 x 64 experiment.js:30
   Proposal #1  raw native array                         Total Init =     57ms  Execution =    660ms 
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =    471ms 
   Proposal #3  object with array accessor               Total Init =      1ms  Execution =    732ms 
   Proposal #4  object with flat accessor                Total Init =      1ms  Execution =    470ms 
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =    464ms 
   Proposal #6  array of native arrays                   Total Init =      3ms  Execution =   1516ms 
   Proposal #7  array of native arrays (fast init)       Total Init =     22ms  Execution =    244ms 
   Proposal #8  array of typed arrays                    Total Init =      7ms  Execution =    462ms 
   Proposal #9  array of contiguous typed arrays         Total Init =      4ms  Execution =    556ms 
   Proposal #10 numeric.js simple                        Total Init =      9ms  Execution =  11902ms 
   Proposal #11 numeric.js pointwise()                   Total Init =      5ms  Execution =   3399ms 
   Proposal #12 ndarray-raw                              Total Init =      1ms  Execution =    256ms 
   Proposal #13 ndarray-ops                              Total Init =      3ms  Execution =    770ms 
   Proposal #14 cwise                                    Total Init =      0ms  Execution =    201ms 
Running experiment with dimensions = 512 x 512 x 4 experiment.js:30
   Proposal #1  raw native array                         Total Init =    199ms  Execution =   1130ms 
   Proposal #2  raw typed array                          Total Init =      4ms  Execution =   1857ms 
   Proposal #3  object with array accessor               Total Init =      5ms  Execution =   3025ms 
   Proposal #4  object with flat accessor                Total Init =      5ms  Execution =   1895ms 
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =   1853ms 
   Proposal #6  array of native arrays                   Total Init =    162ms  Execution =   6221ms 
   Proposal #7  array of native arrays (fast init)       Total Init =    138ms  Execution =   1147ms 
   Proposal #8  array of typed arrays                    Total Init =    543ms  Execution =   1975ms 
   Proposal #9  array of contiguous typed arrays         Total Init =    395ms  Execution =   1921ms 
   Proposal #10 numeric.js simple                        Total Init =     81ms  Execution =  59890ms 
   Proposal #11 numeric.js pointwise()                   Total Init =     81ms  Execution =  17571ms 
   Proposal #12 ndarray-raw                              Total Init =      3ms  Execution =   1172ms 
   Proposal #13 ndarray-ops                              Total Init =      3ms  Execution =   3799ms 
   Proposal #14 cwise                                    Total Init =      3ms  Execution =    940ms 
Running experiment with dimensions = 512 x 4 x 512 experiment.js:30
   Proposal #1  raw native array                         Total Init =    228ms  Execution =   1841ms 
   Proposal #2  raw typed array                          Total Init =      1ms  Execution =   1856ms 
   Proposal #3  object with array accessor               Total Init =      1ms  Execution =   2886ms 
   Proposal #4  object with flat accessor                Total Init =      1ms  Execution =   1871ms 
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =   1869ms 
   Proposal #6  array of native arrays                   Total Init =     34ms  Execution =   6015ms 
   Proposal #7  array of native arrays (fast init)       Total Init =     25ms  Execution =    741ms 
   Proposal #8  array of typed arrays                    Total Init =      6ms  Execution =   1875ms 
   Proposal #9  array of contiguous typed arrays         Total Init =      4ms  Execution =   1891ms 
   Proposal #10 numeric.js simple                        Total Init =     31ms  Execution =  45547ms 
   Proposal #11 numeric.js pointwise()                   Total Init =     15ms  Execution =  13322ms 
   Proposal #12 ndarray-raw                              Total Init =      3ms  Execution =   1003ms 
   Proposal #13 ndarray-ops                              Total Init =      5ms  Execution =   2766ms 
   Proposal #14 cwise                                    Total Init =      3ms  Execution =    767ms 
Running experiment with dimensions = 4 x 512 x 512 experiment.js:30
   Proposal #1  raw native array                         Total Init =    208ms  Execution =   2232ms 
   Proposal #2  raw typed array                          Total Init =      1ms  Execution =   1885ms 
   Proposal #3  object with array accessor               Total Init =      1ms  Execution =   2907ms 
   Proposal #4  object with flat accessor                Total Init =      1ms  Execution =   1884ms 
   Proposal #5  object with flat accessor, no offset     Total Init =      1ms  Execution =   1870ms 
   Proposal #6  array of native arrays                   Total Init =     37ms  Execution =   5959ms 
   Proposal #7  array of native arrays (fast init)       Total Init =     26ms  Execution =    762ms 
   Proposal #8  array of typed arrays                    Total Init =      6ms  Execution =   1883ms 
   Proposal #9  array of contiguous typed arrays         Total Init =      4ms  Execution =   1912ms 
   Proposal #10 numeric.js simple                        Total Init =     23ms  Execution =  39231ms 
   Proposal #11 numeric.js pointwise()                   Total Init =     16ms  Execution =  13258ms 
   Proposal #12 ndarray-raw                              Total Init =      3ms  Execution =   1002ms 
   Proposal #13 ndarray-ops                              Total Init =      5ms  Execution =   2773ms 
   Proposal #14 cwise                                    Total Init =      3ms  Execution =    770ms 
Running experiment with dimensions = 2 x 2 x 2048 experiment.js:30
   Proposal #1  raw native array                         Total Init =      0ms  Execution =     16ms 
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =     16ms 
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     26ms 
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =     17ms 
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =     17ms 
   Proposal #6  array of native arrays                   Total Init =      0ms  Execution =     49ms 
   Proposal #7  array of native arrays (fast init)       Total Init =      0ms  Execution =      7ms 
   Proposal #8  array of typed arrays                    Total Init =      0ms  Execution =     16ms 
   Proposal #9  array of contiguous typed arrays         Total Init =      0ms  Execution =     16ms 
   Proposal #10 numeric.js simple                        Total Init =      0ms  Execution =    230ms 
   Proposal #11 numeric.js pointwise()                   Total Init =      1ms  Execution =    139ms 
   Proposal #12 ndarray-raw                              Total Init =      0ms  Execution =      8ms 
   Proposal #13 ndarray-ops                              Total Init =      0ms  Execution =     49ms 
   Proposal #14 cwise                                    Total Init =      0ms  Execution =      9ms 
Running experiment with dimensions = 2048 x 2 x 2 experiment.js:30
   Proposal #1  raw native array                         Total Init =      1ms  Execution =     15ms 
   Proposal #2  raw typed array                          Total Init =      0ms  Execution =     15ms 
   Proposal #3  object with array accessor               Total Init =      0ms  Execution =     34ms 
   Proposal #4  object with flat accessor                Total Init =      0ms  Execution =     25ms 
   Proposal #5  object with flat accessor, no offset     Total Init =      0ms  Execution =     23ms 
   Proposal #6  array of native arrays                   Total Init =      1ms  Execution =     51ms 
   Proposal #7  array of native arrays (fast init)       Total Init =      2ms  Execution =     17ms 
   Proposal #8  array of typed arrays                    Total Init =      7ms  Execution =     20ms 
   Proposal #9  array of contiguous typed arrays         Total Init =      6ms  Execution =     19ms 
   Proposal #10 numeric.js simple                        Total Init =     21ms  Execution =    458ms 
   Proposal #11 numeric.js pointwise()                   Total Init =      2ms  Execution =    303ms 
   Proposal #12 ndarray-raw                              Total Init =      0ms  Execution =     17ms 
   Proposal #13 ndarray-ops                              Total Init =      0ms  Execution =     83ms 
   Proposal #14 cwise                                    Total Init =      0ms  Execution =     18ms 
```      

# UPDATE

Interesting things to note:

* v8 can optimize arrays of native arrays very well, providing that they are initialized in the right way very carefully.
* The downside to using native arrays though is that you can't do constant time transposing and slicing, so ndarrays may still be preferable for this reason.
* While it isn't as fast as using cwise, directly accessing ndarrays performs pretty well providing you iterate in the order of the stride of the ndarray.

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

