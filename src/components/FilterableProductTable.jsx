import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

// Sample product data
const PRODUCTS = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

export default function FilterableProductTable() {
  const [filterText,setFilterText] = useState("")
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div>
        <SearchBar
        filterText = {filterText}
        inStockOnly = {inStockOnly}
        onFilterTextChange = {setFilterText}
        onInStockChange = {setInStockOnly}
        />
        <ProductTable
        filterText = {filterText}
        inStockOnly = {inStockOnly}
        products = {PRODUCTS}
        />
    </div>
  )
}
