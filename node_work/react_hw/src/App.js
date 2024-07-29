import './App.css';
import { useState } from 'react';

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

export default function FilterableProductTable() {
  return (
    <div>
      <SearchBar />
      <ProductTable products= {PRODUCTS} />
    </div>
  );
}
function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}
function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;
  products.forEach((element) => {
    if (element.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={element.category} key={element.category} />);
    }
    rows.push(<ProductRow product = {element} key={element.name} />);
    lastCategory = element.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
function ProductCategoryRow({ category }) {
  return (
    <tr colSpan="2">
      <th>{category}</th>
    </tr>
  );
}
function ProductRow({ product }) {
  const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
