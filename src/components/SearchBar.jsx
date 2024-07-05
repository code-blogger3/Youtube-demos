import React from 'react'

export default function SearchBar({filterText,inStockOnly, onFilterTextChange, onInStockChange}) {
  return (
   <form>
    <input
    type='text'
    placeholder='Search...'
value={filterText}
onChange={(e)=>onFilterTextChange(e.target.value)}
    />
    <p>
      <input
      type='checkbox'
value={inStockOnly}
onChange={(e) =>onInStockChange(e.target.value)}
      />
      {' '}
      Only show products in stock
    </p>
   </form>
  )
}
