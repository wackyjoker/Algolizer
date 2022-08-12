import ISorting from './types'

const BubbleSort:ISorting<Array<number>> = (unsortedArray) => {
  // declare the array
  const sortedArray = []
  // finding the maxinum number of an array *Traverse* O(1) to O(n)
  sortedArray.push(Math.max(...unsortedArray)) // O(n+1)
  // extract the number from unsorted array worst case O(n) best case O(1) .splice(index-1,index 1)

  // add the number to new array O(1)

  return sortedArray
}

export default BubbleSort
