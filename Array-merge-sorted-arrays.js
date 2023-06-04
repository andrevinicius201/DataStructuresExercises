function mergeTwoSortedArrays(array1, array2){
    let mergedArrays = []
  
    if(array1.length === 0 && array2.length != 0){
      mergedArrays = array2
    }
    if(array2.length === 0 && array1.length != 0){
      mergedArrays = array1
    }
  
    array1Index = 0
    array2Index = 0
  
    while(array1[array1Index] != undefined || array2[array2Index] != undefined){
      if(!array2[array2Index] ||  array1[array1Index] < array2[array2Index]){
        mergedArrays.push(array1[array1Index])
        array1Index++
      } else {
        mergedArrays.push(array2[array2Index])
        array2Index++
      }
    }
    return mergedArrays
  }
  
  
  let result = mergeTwoSortedArrays([2,4,5], [3,4,8,10,11])
  console.log(result)