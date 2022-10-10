import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  render() {
    const {denomination, cashWithdrawalAmount} = this.props
    const {value} = denomination
    const onCashWithdrawal = () => {
      cashWithdrawalAmount(value)
    }
    return (
      <li>
        <button className="button" type="button" onClick={onCashWithdrawal}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
