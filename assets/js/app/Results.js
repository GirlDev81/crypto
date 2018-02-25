import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Tiff'
    }
  }
  render () {
    return (
      <section id="results">
        <div className="container">
          <div className="ads">Your add here</div>
            <div className="col-md-12">
              <h3>Your £15000 pound investment is now worth</h3>
               <h1>£8000</h1>
                <h4>You have made 400% profit</h4>
                 <a href="#" className="main-btn active">
                  Create an account to keep track of your Crypto
                 </a>
            </div>
        </div>
      </section>)
  }
}
