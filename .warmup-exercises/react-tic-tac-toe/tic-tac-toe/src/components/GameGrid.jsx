import Square from './Square';

export default function GameGrid() {

  /* Normally, we .map() out items from some array of data,
     but in this case we just know we need 9 squares.

     So we just need some way of generating an array of numbers
     to map Squares from:

     - Array(n)          -> gives us an array with n empty slots
     - Array(n).keys()   -> gives us an iterator of the indices, 0, ..., (n-1)
     - [...someSequence] -> uses the spread operator to generate a new array,
                            since Array().keys() is an iterator, not an array.
  */

  return (
    <div className="grid">
    {
      [...Array(9).keys()].map(
        (n) => { return <Square key={n} value="O" /> }
      )
    }
    </div>
  )
}