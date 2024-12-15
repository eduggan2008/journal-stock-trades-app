import { useState } from 'react'
import '../NewTrade/NewTrade.css'

const NewTrade = (props) => {
  const [entryDate, setEntryDate] = useState('')
  const [symbol, setSymbol] = useState('')
  const [timeframe, setTimeframe] = useState('')
  const [entrySignal, setEntrySignal] = useState('')
  const [direction, setDirection] = useState('')
  const [shares, setShares] = useState('')
  const [entryPrice, setEntryPrice] = useState('')
  const [stop, setStop] = useState('')
  const [riskAmount, setRiskAmount] = useState('')
  const [target, setTarget] = useState('')
  const [exitDate, setExitDate] = useState('')
  const [exitSignal, setExitSignal] = useState('')
  const [exitPrice, setExitPrice] = useState('')
  const [profitLoss, setProfitLoss] = useState('')
  const [comments, setComments] = useState('')
  
  function entryDateChangeHandler(event) {
    setEntryDate(event.target.value)
  } 

  function symbolChangeHandler(event) {
    setSymbol(event.target.value)
  } 

  function timeframeChangeHandler(event) {
    setTimeframe(event.target.value)
  } 

  function entrySignalChangeHandler(event) {
    setEntrySignal(event.target.value)
  } 

  function directionChangeHandler(event) {
    setDirection(event.target.value)
  } 

  function sharesChangeHandler(event) {
    setShares(event.target.value)
  } 

  function entryPriceChangeHandler(event) {
    setEntryPrice(event.target.value)
  } 

  function stopChangeHandler(event) {
    setStop(event.target.value)
  } 

  function riskAmountChangeHandler(event) {
    setRiskAmount(event.target.value)
  } 

  function targetChangeHandler(event) {
    setTarget(event.target.value)
  } 

  function exitDateChangeHandler(event) {
    setExitDate(event.target.value)
  } 

  function exitSignalChangeHandler(event) {
    setExitSignal(event.target.value)
  } 

  function exitPriceChangeHandler(event) {
    setExitPrice(event.target.value)
  } 

  function profitLossChangeHandler(event) {
    setProfitLoss(event.target.value)
  } 

  function commentsChangeHandler(event) {
    setComments(event.target.value)
  } 

  function submitHandler(event) {
    event.preventDefault()
    const tradeData = {
      entryDate: entryDate,
      symbol: symbol,
      timeframe: timeframe,
      entrySignal: entrySignal,
      direction: direction,
      shares: shares,
      entryPrice: entryPrice,
      stop: stop,
      target: target,
      riskAmount: riskAmount,
      exitDate: exitDate,
      exitSignal: exitSignal,
      exitPrice: exitPrice,
      profitLoss: profitLoss,
      comments: comments,
    }
    props.onAddTrade(tradeData)
    props.onCancel()
  }

  return (
    <form className='form' onSubmit={submitHandler}> 
      <h2 className='journalEntryHeading'>Journal Your Trade</h2>
      <p>
        <label htmlFor='entryDate'>Entry Date</label>
        <input type='date' id='entryDate' required  onChange={entryDateChangeHandler} />
      </p>
      <p>
        <label htmlFor='symbol'>Symbol</label>
        <input type='text' id='symbol' required  onChange={symbolChangeHandler} />
      </p>
      <p>
        <label htmlFor='timeframe'>Timeframe</label>
        <input type='text' id='timeframe' required rows={5} onChange={timeframeChangeHandler}/>
      </p>  
      <p>
        <label htmlFor='entrySignal'>Entry Signal</label>
        <input type='text' id='entrySignal' required  onChange={entrySignalChangeHandler} />
      </p>
      <p>
        <label htmlFor='direction'>Direction</label>
        <input type='text' id='direction' required  onChange={directionChangeHandler} />
      </p>
      <p>
        <label htmlFor='shares'>Shares</label>
        <input type='number' id='shares' required  onChange={sharesChangeHandler} />
      </p>
      <p>
        <label htmlFor='entryPrice'>Entry Price</label>
        <input type='number' id='entryPrice' required  onChange={entryPriceChangeHandler} />
      </p> 
      <p>
        <label htmlFor='stop'>Stop</label>
        <input type='number' id='stop' required  onChange={stopChangeHandler} />
      </p>
      <p>
        <label htmlFor='target'>Target</label>
        <input type='number' id='target' required  onChange={targetChangeHandler} />
      </p>
      <p>
        <label htmlFor='riskAmount'>Risk Amount</label>
        <input type='number' id='riskAmount' required  onChange={riskAmountChangeHandler} />
      </p>
      <p>
        <label htmlFor='exitDate'>Exit Date</label>
        <input type='date' id='exitDate' required  onChange={exitDateChangeHandler} />
      </p> 
      <p>
        <label htmlFor='exitSignal'>Exit Signal</label>
        <input type='text' id='exitSignal' required  onChange={exitSignalChangeHandler} />
      </p>
      <p>
        <label htmlFor='exitPrice'>ExitPrice</label>
        <input type='number' id='exitPrice' required  onChange={exitPriceChangeHandler} />
      </p>
      <p>
        <label htmlFor='profitLoss'>Profit or Loss</label>
        <input type='number' id='profitLoss' required  onChange={profitLossChangeHandler} />
      </p>
      <p>
        <label htmlFor='comments'>Comments</label>
        <textarea id='profitLoss' required  onChange={commentsChangeHandler} />
      </p>

      <p className='actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  )
}

export default NewTrade
