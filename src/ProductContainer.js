import React, {Component} from 'react';
import ProductList from './ProductList';
import Footer from './Footer';
import './productContainer.css';


class ProductContainer extends Component {

  render(){
      return (
        <div className="productContainer container-fluid">
          <ProductList/>
          <Footer/>

        </div>
      )
    }
  }

export default ProductContainer
