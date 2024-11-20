import React from 'react'

const ComplexExpression = () => {

  const isEven = number => number % 2 === 0;
  const isOdd = number => number % 2 === 1;

  return (
    <div>
      <p>{isEven(4) ? "4 is even" : "4 is odd"}</p>
      <p>{isOdd(4) ? "4 is odd" : "4 is even"}</p>
    </div>
  )
}

export default ComplexExpression