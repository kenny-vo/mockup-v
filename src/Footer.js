import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
       <div className="container">
         <hr/>
         <a className="prev" >{"<"} Prev</a>
           <span>Page 2 of 3</span>
         <a className="next" >Next {">"}</a>
        </div>
     </footer>
    )
  }
}

export default Footer
