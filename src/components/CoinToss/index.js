// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    Total: 0,
    Head: 0,
    Tail: 0,
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        Total: prevState.Total + 1,
        Head: prevState.Head + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        isHead: false,
        Total: prevState.Total + 1,
        Tail: prevState.Tail + 1,
      }))
    }
  }

  render() {
    const {Total, Head, Tail, isHead} = this.state
    const imgUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="des">Heads (or) Tails</p>
          <img src={imgUrl} className="img" alt="toss result" />
          <button
            className="coin-button"
            type="button"
            onClick={this.onClickToss}
          >
            Toss coin
          </button>
          <div className="des-container">
            <p className="total">Total: {Total}</p>
            <p className="total">Heads: {Head}</p>
            <p className="total">Tails: {Tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
