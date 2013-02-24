Question:  What is the most efficient way to implement multidimensional arrays in JavaScript?


Results:

    Running experiment with dimensions =  16 x 16 x 16
      Proposal # 0 raw native array                         Elapsed time =   14
      Proposal # 1 raw typed array                          Elapsed time =   7
      Proposal # 2 object with array accessor               Elapsed time =   99
      Proposal # 3 object with flat accessor                Elapsed time =   10
      Proposal # 4 array of native arrays                   Elapsed time =   28
      Proposal # 5 array of typed arrays                    Elapsed time =   79
      Proposal # 6 array of contiguous typed arrays         Elapsed time =   79
    Running experiment with dimensions =  64 x 64 x 64
      Proposal # 0 raw native array                         Elapsed time =   3375
      Proposal # 1 raw typed array                          Elapsed time =   285
      Proposal # 2 object with array accessor               Elapsed time =   5670
      Proposal # 3 object with flat accessor                Elapsed time =   433
      Proposal # 4 array of native arrays                   Elapsed time =   1747
      Proposal # 5 array of typed arrays                    Elapsed time =   1447
      Proposal # 6 array of contiguous typed arrays         Elapsed time =   1435
    Running experiment with dimensions =  512 x 512 x 4
      Proposal # 0 raw native array                         Elapsed time =   13735
      Proposal # 1 raw typed array                          Elapsed time =   1146
      Proposal # 2 object with array accessor               Elapsed time =   22975
      Proposal # 3 object with flat accessor                Elapsed time =   1848
      Proposal # 4 array of native arrays                   Elapsed time =   9353
      Proposal # 5 array of typed arrays                    Elapsed time =   77792
      Proposal # 6 array of contiguous typed arrays         Elapsed time =   70115
    Running experiment with dimensions =  512 x 4 x 512
      Proposal # 0 raw native array                         Elapsed time =   13702
      Proposal # 1 raw typed array                          Elapsed time =   1162
      Proposal # 2 object with array accessor               Elapsed time =   22595
      Proposal # 3 object with flat accessor                Elapsed time =   1700
      Proposal # 4 array of native arrays                   Elapsed time =   6928
      Proposal # 5 array of typed arrays                    Elapsed time =   1803
      Proposal # 6 array of contiguous typed arrays         Elapsed time =   1910
    Running experiment with dimensions =  4 x 512 x 512
      Proposal # 0 raw native array                         Elapsed time =   14462
      Proposal # 1 raw typed array                          Elapsed time =   1169
      Proposal # 2 object with array accessor               Elapsed time =   22979
      Proposal # 3 object with flat accessor                Elapsed time =   1698
      Proposal # 4 array of native arrays                   Elapsed time =   6890
      Proposal # 5 array of typed arrays                    Elapsed time =   1766
      Proposal # 6 array of contiguous typed arrays         Elapsed time =   1893
    Running experiment with dimensions =  2 x 2 x 2048
      Proposal # 0 raw native array                         Elapsed time =   87
      Proposal # 1 raw typed array                          Elapsed time =   8
      Proposal # 2 object with array accessor               Elapsed time =   183
      Proposal # 3 object with flat accessor                Elapsed time =   13
      Proposal # 4 array of native arrays                   Elapsed time =   50
      Proposal # 5 array of typed arrays                    Elapsed time =   10
      Proposal # 6 array of contiguous typed arrays         Elapsed time =   10
    Running experiment with dimensions =  2048 x 2 x 2
      Proposal # 0 raw native array                         Elapsed time =   79
      Proposal # 1 raw typed array                          Elapsed time =   9
      Proposal # 2 object with array accessor               Elapsed time =   191
      Proposal # 3 object with flat accessor                Elapsed time =   17
      Proposal # 4 array of native arrays                   Elapsed time =   72
      Proposal # 5 array of typed arrays                    Elapsed time =   1190
      Proposal # 6 array of contiguous typed arrays         Elapsed time =   1083

Conclusions:

Flat array is baseline performance, unlikely to get much better in multidim case.  Custom accessor is pretty good, consistently second fastest.  numeric vs. typed arrays is a trade off.  If final axis is small, numeric's plain old arrays are better.  If it is large, typed arrays/ buffers are better.  Using views and contiguous memory seems to be a little better than not using them on average, but for large arrays the difference comes out in the wash.

