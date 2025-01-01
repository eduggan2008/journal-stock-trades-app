import { useState } from 'react'
import './TradesList.css'
import Trade from '../Trade/Trade'
import NewTrade from '../NewTrade/NewTrade'
import Modal from '../Modal/Modal'
import { v4 as uuid } from 'uuid';

const TradesList = ({ isJournalingTrade, onStopJournalingTrade }) => {
  const [trades, setTrades] = useState([])

  function addTradeHandler(tradeData) {
    setTrades((existingTrades) => [tradeData, ...existingTrades])
  }

  return (
    <>
      {isJournalingTrade && (
        <Modal onClose={onStopJournalingTrade}>
          <NewTrade 
            onCancel={onStopJournalingTrade}
            onAddTrade={addTradeHandler}
          />
        </Modal>
      )}

      {trades.length >0 && (
        <table className="table">
          <thead className='thead'>
            <tr className="table-row">
              <th className="table-heading" scope="col">Entry Date</th> 
              <th className="table-heading" scope="col">Stock Symbol</th> 
              <th className="table-heading" scope="col">Timeframe</th> 
              <th className="table-heading" scope="col">Entry Signal</th> 
              <th className="table-heading" scope="col">Direction</th> 
              <th className="table-heading" scope="col">Number of Shares</th> 
              <th className="table-heading money" scope="col">Entry Price</th> 
              <th className="table-heading money" scope="col">Original Stop</th> 
              <th className="table-heading money" scope="col">Initial Target</th> 
              <th className="table-heading money" scope="col">Risk Amount</th> 
              <th className="table-heading" scope="col">Exit Date</th> 
              <th className="table-heading" scope="col">Exit Signal</th> 
              <th className="table-heading money" scope="col">Exit Price</th> 
              <th className="table-heading" scope="col">Profit/Loss</th> 
              <th className="table-heading comments" scope="col">Comments</th>  
              <th className="table-heading" scope="col">Edit</th>  
              <th className="table-heading" scope="col">Delete</th>  
            </tr>
          </thead>

          <tbody className='tbody'>
            {trades.map((trade) => 
              <Trade 
                key={uuid}
                entryDate={trade.entryDate}
                symbol={trade.symbol}
                timeframe={trade.timeframe}
                entrySignal={trade.entrySignal}
                direction={trade.direction}
                shares={trade.shares}
                entryPrice={trade.entryPrice}
                originalStop={trade.originalStop}
                riskAmount={trade.riskAmount}
                target={trade.target}
                exitDate={trade.exitDate}
                exitSignal={trade.exitSignal}
                exitPrice={trade.exitPrice}
                profitLoss={trade.profitLoss}
                comments={trade.comments}
              />
            )}
          </tbody>
        </table>
      )}

      {trades.length === 0 && (
        <div className='noPostsYet'>
          <h3>There are no Trades yet</h3>
          <h4>Enter a trade now!</h4>
        </div>
      )}    
    </>    
  )
}

export default TradesList


 