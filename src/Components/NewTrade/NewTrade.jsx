import { useState } from 'react'
import '../NewTrade/NewTrade.css'
import { v4 as uuid } from 'uuid';

const NewTrade = ({ onAddTrade, onCancel }) => {
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

  function targetChangeHandler(event) {
    setTarget(event.target.value)
  } 

  function riskAmountChangeHandler(event) {
    setRiskAmount(event.target.value)
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
      /* id: uuid(), */
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
    onAddTrade(tradeData)
    onCancel()
  }

  return (
    <form className='form' onSubmit={submitHandler}> 
      <h2 className='journalEntryHeading'>Journal Your Trade</h2>

      <div>
        <label htmlFor='entryDate'>Entry Date</label>
        <input type='date' id='entryDate' required  onChange={entryDateChangeHandler} />
      </div>
      

      <div>
        <label htmlFor='symbol'>Symbol</label>
        <select type='text' id='symbol'  required  onChange={symbolChangeHandler} >
          <option value=''>--Please select a Stock--</option>
          <option value='AAPL'>AAPL</option>
          <option value='AMZN'>AMZN</option>
          <option value='C'>C</option>
          <option value='CSCO'>CSCO</option>
          <option value='GM'>GM</option>
        </select>
      </div>

      <div>
        <label htmlFor='timeframe'>Timeframe</label>
        <select type='text' id='timeframe' required rows={5} onChange={timeframeChangeHandler}>
          <option value=''>--Please Select a Timeframe--</option>
          <option value='1 Minute'>1 Minute</option>
          <option value='2 Minute'>2 Minute</option>
          <option value='3 Minute'>3 Minute</option>
          <option value='5 Minute'>5 Minute</option>
          <option value='10 Minute'>10 Minute</option>
          <option value='15 Minute'>15 Minute</option>
          <option value='60 Minute'>60 Minute</option>
          <option value='Daily'>Daily</option>
          <option value='Weekly'>Weekly</option>
          <option value='Monthly'>Monthly</option>
        </select>
      </div>  

      <div>
        <label htmlFor='entrySignal'>Entry Signal</label>
        <select type='text' id='entrySignal' required  onChange={entrySignalChangeHandler} >
          <option value=''>--Please select an Entry Signal</option>
          <option value='VBS'>VBS</option>
          <option value='VVSS'>VSS</option>
          <option value='RBI'>RBI</option>
          <option value='GBI'>GBI</option>
          <option value='Breakout'>Breakout</option>
          <option value='Breakdown'>Breakdown</option>
          <option value='Bar High Long'>Bar High Long</option>
          <option value='Bar Low Short'>Bar Low Short</option>
        </select>
      </div>

      <div>
        <label htmlFor='direction'>Direction</label>
        <select type='text' id='direction' required  onChange={directionChangeHandler} >
          <option value=''>--Please select a Direction</option>
          <option value='Long'>Long</option>
          <option value='Short'>Short</option>
        </select>
      </div>

      <div>
        <label htmlFor='shares'>Shares</label>
        <input type='number' id='shares' required  onChange={sharesChangeHandler} />
      </div>

      <div>
        <label htmlFor='entryPrice'>Entry Price</label>
        <input type='number' step='0.01' id='entryPrice' required  onChange={entryPriceChangeHandler} />
      </div> 

      <div>
        <label htmlFor='stop'>Stop Price</label>
        <input type='number' step='0.01' id='stop' required  onChange={stopChangeHandler} />
      </div>

      <div>
        <label htmlFor='target'>Target Price</label>
        <input type='number' step='0.01' id='target' required  onChange={targetChangeHandler} />
      </div>

      <div>
        <label htmlFor='riskAmount'>Dollar Risk Amount</label>
        <input type='number' step='0.01' id='riskAmount'  onChange={riskAmountChangeHandler} />
      </div>

      <div>
        <label htmlFor='exitDate'>Exit Date</label>
        <input type='date' id='exitDate' required  onChange={exitDateChangeHandler} />
      </div> 

      <div>
        <label htmlFor='exitSignal'>Exit Signal</label>
        <select type='text' id='exitSignal' required  onChange={exitSignalChangeHandler} >
          <option value=''>--Please select an Exit Signal</option>
          <option value='Full Stop Out'>Full Stop</option>
          <option value='Break Even Stop'>Break Even Stop</option>
          <option value='Big Bar Stop'>Big Bar Stop</option>
          <option value='Bar x Bar Stop'>Bar x Bar Stop</option>
          <option value='8ma Stop'>8ma Stop</option>
          <option value='20ma Stop'>20ma Stop</option>
          <option value='Pivot Stop'>Pivot Stop</option>
        </select>
      </div>

      <div>
        <label htmlFor='exitPrice'>ExitPrice</label>
        <input type='number' step='0.01' id='exitPrice' required  onChange={exitPriceChangeHandler} />
      </div>

      <div>
        <label htmlFor='profitLoss'>Profit or Loss</label>
        <input type='number' step='0.01' id='profitLoss'  onChange={profitLossChangeHandler} />
      </div>

      <div>
        <label htmlFor='comments'>Comments</label>
        <textarea id='comments' required  onChange={commentsChangeHandler} />
      </div>

      <div className='actions'>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default NewTrade
