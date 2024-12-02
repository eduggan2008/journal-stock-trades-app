import './Trades.css'
import { useState } from 'react';
import TradesForm from '../TradesForm/TradesForm'
import { v4 as uuid } from "uuid";

const Trades = () => {

  const [trades, setTrades] = useState([
    {id: uuid(), entryDate: "11-25-2024", symbol: 'AAPL', shares: 100, entryPrice: 128, exitPrice: 129, profitLoss: 100},
    {id: uuid(), entryDate: "11-25-2024", symbol: 'SQ', shares: 200, entryPrice: 67, exitPrice: 68, profitLoss: 200},
    {id: uuid(), entryDate: "11-26-2024", symbol: 'AMZN', shares: 100, entryPrice: 137, exitPrice: 136, profitLoss: -100},
  ]);

  const addTrade = (trade) => {
    setTrades((currentTrades) => {
      return [
        ...currentTrades,
        {id: uuid(), ...trade}
      ]
    })
  }

  return (
    <div className="common-pages trades">
      <h1 className="common-heading">Stock Trading Journal</h1>
      <h2 className='common-subheading'>Enter Trade Details</h2>
        <TradesForm addTrade={addTrade} />

      <h2 className="common-subheading">Spreadsheet of Trades Taken</h2>

      <ul>
        {trades.map(i => (
          <li key={i.id}>
            {i.entryDate}
            {i.symbol}
            {i.shares}
            {i.entryPrice}
            {i.exitPrice}
            {i.profitLoss}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Trades



