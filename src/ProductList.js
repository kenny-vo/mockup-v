import React, {Component} from 'react';
import SingleProduct from './Product'
import './ProductList.css'

class ProductList extends Component {
  render() {
    return (
      <div className="productList row">
        <SingleProduct/>
        <section>
          <div>
            <a className="" href>Prev</a>
            <span>Page 2 of 3</span>
            <a href>Next</a>
          </div>
        </section>
      </div>
    )
  }
}

export default ProductList
