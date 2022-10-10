import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  cashWithdrawalAmount = value => {
    const {amount} = this.state
    const balance = amount - value
    this.setState({amount: balance})
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="account-profile-details">
            <p className="account-profile">S</p>
            <p className="account-username">Sarah Williams</p>
          </div>
          <div className="amount-display-container">
            <p className="balance-title">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="amount-in-rupees">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withdraw-title">Withdraw</p>
            <p className="description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="withdraw-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denomination={eachItem}
                  cashWithdrawalAmount={this.cashWithdrawalAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
