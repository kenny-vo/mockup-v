import React, {Component} from 'react';
import ProductList from './ProductList';
import './productContainer.css';


class ProductContainer extends Component {

  render(){
      return (
        <div className="productContainer container-fluid">
          <ProductList/>
        </div>
      )
    }
  }

export default ProductContainer
