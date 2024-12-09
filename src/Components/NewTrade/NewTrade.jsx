import '../NewTrade/NewTrade.css'

const NewTrade = (props) => {

  return (
    <form className='form'> 
      <h2 className='journalEntryHeading'>Journal Your Trade</h2>
      <p>
        <label htmlFor='entryDate'>Entry Date</label>
        <input type='date' id='entryDate' required  onChange={props.onEntryDateChange} />
      </p>
      <p>
        <label htmlFor='symbol'>Symbol</label>
        <input type='text' id='symbol' required  onChange={props.onSymbolChange} />
      </p>
      <p>
        <label htmlFor='timeframe'>Timeframe</label>
        <input type='text' id='timeframe' required rows={5} onChange={props.onTimeframeChange}/>
      </p>  
      <p>
        <label htmlFor='entrySignal'>Entry Signal</label>
        <input type='text' id='entrySignal' required  onChange={props.onEntrySignalChange} />
      </p>
      <p>
        <label htmlFor='direction'>Direction</label>
        <input type='text' id='direction' required  onChange={props.onDirectionChange} />
      </p>
      <p>
        <label htmlFor='shares'>Shares</label>
        <input type='number' id='shares' required  onChange={props.onSharesChange} />
      </p>
      <p>
        <label htmlFor='entryPrice'>Entry Price</label>
        <input type='number' id='entryPrice' required  onChange={props.onEntryPriceChange} />
      </p> 
      <p>
        <label htmlFor='originalStop'>Original Stop</label>
        <input type='number' id='originalStop' required  onChange={props.onOriginalStopChange} />
      </p>
      <p>
        <label htmlFor='target'>Target</label>
        <input type='number' id='target' required  onChange={props.onTargetChange} />
      </p>
      <p>
        <label htmlFor='riskAmount'>Risk Amount</label>
        <input type='number' id='riskAmount' required  onChange={props.onRiskAmountChange} />
      </p>
      <p>
        <label htmlFor='exitDate'>Exit Date</label>
        <input type='date' id='exitDate' required  onChange={props.onExitDateChange} />
      </p> 
      <p>
        <label htmlFor='exitSignal'>Exit Signal</label>
        <input type='text' id='exitSignal' required  onChange={props.onExitSignalChange} />
      </p>
      <p>
        <label htmlFor='exitPrice'>ExitPrice</label>
        <input type='number' id='exitPrice' required  onChange={props.onExitPriceChange} />
      </p>
      <p>
        <label htmlFor='profitLoss'>Profit or Loss</label>
        <input type='number' id='profitLoss' required  onChange={props.onProfitLossChange} />
      </p>
      <p>
        <label htmlFor='comments'>Comments</label>
        <textarea id='profitLoss' required  onChange={props.onCommentsChange} />
      </p>
    </form>
  )
}

export default NewTrade

