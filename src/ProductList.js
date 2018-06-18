import React, {Component} from 'react';
import SingleProduct from './Product'
import './ProductList.css'

class ProductList extends Component {
  render() {
    return (
      <div className="productList row">
        <SingleProduct />
      </div>
    )
  }
}

export default ProductList
