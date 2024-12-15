import { useState } from 'react'
import './TradesList.css'
import Trade from '../Trade/Trade'
import NewTrade from '../NewTrade/NewTrade'
import Modal from '../Modal/Modal'

const TradesList = (props) => {
  const [trades, setTrades] = useState([])

  function addTradeHandler(tradeData) {
    setTrades((existingTrades) => [tradeData, ...existingTrades])
  }

  return (
    <>
      {props.isJournalingTrade && (
        <Modal onClose={props.onStopJournalingTrade}>
          <NewTrade 
            onCancel={props.onStopJournalingTrade}
            onAddTrade={addTradeHandler}
          />
        </Modal>
      )}

      {trades.length >0 && (
        <ul className='trades'>
          {trades.map((trade) => 
            <Trade 
            key={trade.comments}
              entryDate={trade.entryDate}
              symbol={trade.symbol}
              timeframe={trade.timeframe}
              entrySignal={trade.entrySignal}
              direction={trade.direction}
              shares={trade.shares}
              entryPrice={trade.entryPrice}
              stop={trade.stop}
              riskAmount={trade.riskAmount}
              target={trade.target}
              exitDate={trade.exitDate}
              exitSignal={trade.exitSignal}
              exitPrice={trade.exitPrice}
              profitLoss={trade.profitLoss}
              comments={trade.comments}
            />
          )}
        </ul>
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


 