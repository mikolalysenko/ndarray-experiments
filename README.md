Question:  What is the most efficient way to implement multidimensional arrays in JavaScript?


Results:

    Running experiment with dimensions =  4 x 4 x 1
      Proposal # 0 Flat Array : Elapsed time =   5
      Proposal # 1 Object with array indexing : Elapsed time =   3
      Proposal # 2 packed typed array wrapped by array : Elapsed time =   6
      Proposal # 3 array of typed arrays : Elapsed time =   6
      Proposal # 4 numeric.js : Elapsed time =   1
      Proposal # 5 Specialized object with flat accessor : Elapsed time =   2
    Running experiment with dimensions =  16 x 16 x 16
      Proposal # 0 Flat Array : Elapsed time =   7
      Proposal # 1 Object with array indexing : Elapsed time =   93
      Proposal # 2 packed typed array wrapped by array : Elapsed time =   70
      Proposal # 3 array of typed arrays : Elapsed time =   75
      Proposal # 4 numeric.js : Elapsed time =   29
      Proposal # 5 Specialized object with flat accessor : Elapsed time =   7
    Running experiment with dimensions =  64 x 64 x 64
      Proposal # 0 Flat Array : Elapsed time =   295
      Proposal # 1 Object with array indexing : Elapsed time =   5718
      Proposal # 2 packed typed array wrapped by array : Elapsed time =   1415
      Proposal # 3 array of typed arrays : Elapsed time =   1509
      Proposal # 4 numeric.js : Elapsed time =   1673
      Proposal # 5 Specialized object with flat accessor : Elapsed time =   435
    Running experiment with dimensions =  128 x 128 x 1
      Proposal # 0 Flat Array : Elapsed time =   17
      Proposal # 1 Object with array indexing : Elapsed time =   388
      Proposal # 2 packed typed array wrapped by array : Elapsed time =   4408
      Proposal # 3 array of typed arrays : Elapsed time =   4829
      Proposal # 4 numeric.js : Elapsed time =   149
      Proposal # 5 Specialized object with flat accessor : Elapsed time =   35
    Running experiment with dimensions =  128 x 128 x 3
      Proposal # 0 Flat Array : Elapsed time =   56
      Proposal # 1 Object with array indexing : Elapsed time =   1091
      Proposal # 2 packed typed array wrapped by array : Elapsed time =   4447
      Proposal # 3 array of typed arrays : Elapsed time =   4885
      Proposal # 4 numeric.js : Elapsed time =   357
      Proposal # 5 Specialized object with flat accessor : Elapsed time =   90
    Running experiment with dimensions =  128 x 128 x 4
      Proposal # 0 Flat Array : Elapsed time =   72
      Proposal # 1 Object with array indexing : Elapsed time =   1444
      Proposal # 2 packed typed array wrapped by array : Elapsed time =   4441
      Proposal # 3 array of typed arrays : Elapsed time =   4883
      Proposal # 4 numeric.js : Elapsed time =   463
      Proposal # 5 Specialized object with flat accessor : Elapsed time =   116
    Running experiment with dimensions =  1 x 512 x 512
      Proposal # 0 Flat Array : Elapsed time =   285
      Proposal # 1 Object with array indexing : Elapsed time =   5653
      Proposal # 2 packed typed array wrapped by array : Elapsed time =   429
      Proposal # 3 array of typed arrays : Elapsed time =   439
      Proposal # 4 numeric.js : Elapsed time =   1628
      Proposal # 5 Specialized object with flat accessor : Elapsed time =   416
    Running experiment with dimensions =  3 x 512 x 512
      Proposal # 0 Flat Array : Elapsed time =   866
      Proposal # 1 Object with array indexing : Elapsed time =   16956
      Proposal # 2 packed typed array wrapped by array : Elapsed time =   1317
      Proposal # 3 array of typed arrays : Elapsed time =   1362
      Proposal # 4 numeric.js : Elapsed time =   5184
      Proposal # 5 Specialized object with flat accessor : Elapsed time =   1281
    Running experiment with dimensions =  4 x 512 x 512
      Proposal # 0 Flat Array : Elapsed time =   1186
      Proposal # 1 Object with array indexing : Elapsed time =   22800
      Proposal # 2 packed typed array wrapped by array : Elapsed time =   1785
      Proposal # 3 array of typed arrays : Elapsed time =   1761
      Proposal # 4 numeric.js : Elapsed time =   6944
      Proposal # 5 Specialized object with flat accessor : Elapsed time =   1660
      
      
Conclusions:

Flat array is baseline performance, unlikely to get much better in multidim case.  Custom accessor is pretty good, consistently second fastest.  numeric vs. typed arrays is a trade off.  If final axis is small, numeric's plain old arrays are better.  If it is large, typed arrays/ buffers are better.  Using views and contiguous memory seems to be a little better than not using them on average, but for large arrays the difference comes out in the wash.

