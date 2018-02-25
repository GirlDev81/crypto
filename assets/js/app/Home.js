import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'


export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Tiff'
    }
  }
  render () {
    return (
      <section id="home">
        <div className="container">
         <div className="col-md-6">
          <img src="/img/Bitcoin_euro.png" className="bitcoin-logo"/>
          <div className="ads">Add Ad Here</div>
         </div>

         <div className="col-md-6">
          <h2>Convert Your Crypto</h2>
            <label>Cryto Amount:</label>
              <input type="text" name="amount"/>
                <label>Date:</label>
                 <DatePicker selected={this.props.globalState.date} onChange={this.props.handleDateChange}/>
                <button type="submit">Convert</button>
         </div>
        </div>
      </section>)
  }
}
