import { useState } from 'react'
import './TradesList.css'
import Trade from '../Trade/Trade'
import NewTrade from '../NewTrade/NewTrade'
import Modal from '../Modal/Modal'

const TradesList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true)
  const [entryDate, setEntryDate] = useState('')
  const [symbol, setSymbol] = useState('')
  const [timeframe, setTimeframe] = useState('')
  const [entrySignal, setEntrySignal] = useState('')
  const [direction, setDirection] = useState('')
  const [shares, setShares] = useState('')
  const [entryPrice, setEntryPrice] = useState('')
  const [originalStop, setOriginalStop] = useState('')
  const [riskAmount, setRiskAmount] = useState('')
  const [target, setTarget] = useState('')
  const [exitDate, setExitDate] = useState('')
  const [exitSignal, setExitSignal] = useState('')
  const [exitPrice, setExitPrice] = useState('')
  const [profitLoss, setProfitLoss] = useState('')
  const [comments, setComments] = useState('')
  
  function hideModalHandler(event) {
    event.preventDefault()
    setModalIsVisible(false)
  }

  function entryDateChangeHandler(event) {
    event.preventDefault()
    setEntryDate(event.target.value)
  } 

  function symbolChangeHandler(event) {
    event.preventDefault()
    setSymbol(event.target.value)
  } 

  function timeframeChangeHandler(event) {
    event.preventDefault()
    setTimeframe(event.target.value)
  } 

  function entrySignalChangeHandler(event) {
    event.preventDefault()
    setEntrySignal(event.target.value)
  } 

  function directionChangeHandler(event) {
    event.preventDefault()
    setDirection(event.target.value)
  } 

  function sharesChangeHandler(event) {
    event.preventDefault()
    setShares(event.target.value)
  } 

  function entryPriceChangeHandler(event) {
    event.preventDefault()
    setEntryPrice(event.target.value)
  } 

  function originalStopChangeHandler(event) {
    event.preventDefault()
    setOriginalStop(event.target.value)
  } 

  function riskAmountChangeHandler(event) {
    event.preventDefault()
    setRiskAmount(event.target.value)
  } 

  function targetChangeHandler(event) {
    event.preventDefault()
    setTarget(event.target.value)
  } 

  function exitDateChangeHandler(event) {
    event.preventDefault()
    setExitDate(event.target.value)
  } 

  function exitSignalChangeHandler(event) {
    event.preventDefault()
    setExitSignal(event.target.value)
  } 

  function exitPriceChangeHandler(event) {
    event.preventDefault()
    setExitPrice(event.target.value)
  } 

  function profitLossChangeHandler(event) {
    event.preventDefault()
    setProfitLoss(event.target.value)
  } 

  function commentsChangeHandler(event) {
    event.preventDefault()
    setComments(event.target.value)
  } 


  return (

    <>
    {modalIsVisible && (
      <Modal onClose={hideModalHandler}>
        <NewTrade 
          onEntryDateChange={entryDateChangeHandler}
          onSymbolChange={symbolChangeHandler} 
          onTimeframeChange={timeframeChangeHandler} 
          onEntrySignalChange={entrySignalChangeHandler} 
          onDirectionChange={directionChangeHandler} 
          onSharesChange={sharesChangeHandler} 
          onEntryPriceChange={entryPriceChangeHandler}
          onOriginalStopChange={originalStopChangeHandler}
          onRiskAmountChange={riskAmountChangeHandler}
          onTargetChange={targetChangeHandler}
          onExitDateChange={exitDateChangeHandler}
          onExitSignalChange={exitSignalChangeHandler}
          onExitPriceChange={exitPriceChangeHandler}
          onProfitLossChange={profitLossChangeHandler}
          onCommentsChange={commentsChangeHandler}
        />
      </Modal>
    )}

      <ul className='trades'>
        <Trade 
          entryDate={entryDate}
          symbol={symbol}
          timeframe={timeframe}
          entrySignal={entrySignal}
          direction={direction}
          shares={shares}
          entryPrice={entryPrice}
          originalStop={originalStop}
          riskAmount={riskAmount}
          target={target}
          exitDate={exitDate}
          exitSignal={exitSignal}
          exitPrice={exitPrice}
          profitLoss={profitLoss}
          comments={comments}
        />
        
        <Trade 
          entryDate='12/05/2024'
          symbol='AAPL'
          timeframe='2 Minute'
          entrySignal='RBI'
          direction='Long'
          shares='200'
          entryPrice='183'
          originalStop='182'
          riskAmount='200'
          target='186'
          exitDate='12/08/2024'
          exitSignal='Target Hit'
          exitPrice='186'
          profitLoss='600'
          comments='Good entry and patience allowing trade to develop.  Great Trade!'
        />
       

        <Trade 
          entryDate='12/04/2024'
          symbol='AMZN'
          timeframe='2 Minute'
          entrySignal='VSS'
          direction='Short'
          shares='200'
          entryPrice='126'
          originalStop='127'
          riskAmount='200'
          target='123'
          exitDate='12/07/2024'
          exitSignal='Stop Out'
          exitPrice='127'
          profitLoss='(-)200'
          comments='Stopped out, but entry was good.  Trade just did not work out.'
        />
       
      </ul>
    </>    
  )
}

export default TradesList


 