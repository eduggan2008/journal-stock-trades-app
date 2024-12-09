import './Journal.css'
import TradesList from '../../TradesList/TradesList'

const Journal = () => {
  return (
    <div className="common-pages journal">
      <h1 className="common-heading">Stock Trading Journal</h1>
      <h2 className="common-subheading">Journal Your Trades</h2>

      <TradesList />

    </div>
  )
}

export default Journal
