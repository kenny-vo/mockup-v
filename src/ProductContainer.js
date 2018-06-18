import React, {Component} from 'react';
import ProductList from './ProductList';

class ProductContainer extends Component {

  render(){
      return (
        <div className="productContainer container">
          <ProductList/>
        </div>
      )
    }
  }

export default ProductContainer
