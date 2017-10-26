import React from 'react';
import image from '../images/cash-calculator.svg'

class App extends React.Component {

  constructor(props){
    super(props);

  }
  render(){
    return (
      <div>
        <header>
          <img src={image} />
          <h1>Currency Converter</h1>
        </header>
        <div className="content">
          <div className="row row-select-currency">
            <div className="col-md-6 col-md-offset-3">
              <h2>Select Currency</h2>
              <p>
                {
                  //Select currency
                }
                <select>
                  <option value="A">Option A</option>
                  <option value="B">Option B</option>
                </select>
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-sm-6 currency-from-input">
              <h3 className="currency-flag AUD">Australian Dollars</h3>
              {
                  //Currency A input
              }
              <div className="input-group">
                <span className="input-group-addon">$</span>
                <input type="number" defaultValue={0} className="form-control" aria-describedby="basic-addon2" step="1" pattern="\d\.\d{2}"  />
                <span className="input-group-addon" id="basic-addon2">AUD</span>
              </div>

            </div>
            <div className="col-sm-6 currency-to-input">
              <h3 className="currency-flag USD">United States Dollars</h3>
              {
                  //Currency B input
              }
              <div className="input-group">
                <span className="input-group-addon">$</span>
                <input type="number" defaultValue={0} className="form-control" aria-describedby="basic-addon3" step="1" pattern="\d\.\d{2}"  />
                <span className="input-group-addon" id="basic-addon3">USD</span>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {
                  //Update to currently selected currency
              }
              <p>
                Exchange Rate $ 1 AUD = $ 0.7041 USD
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;