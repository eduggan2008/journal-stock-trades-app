import './Trade.css'

const Trade = (props) => {

  return (
    <>
    <div>
      <li className='trade'>
        <p className='entryDate'>{props.entryDate}</p>
        <p className='symbol'>{props.symbol}</p>
        <p className='timeframe'>{props.timeframe}</p>
        <p className='entrySignal'>{props.entrySignal}</p>
        <p className='direction'>{props.direction}</p>
        <p className='shares'>{props.shares}</p>
        <p className='entryPrice'>{props.entryPrice}</p>
        <p className='originalStop'>{props.originalStop}</p>
        <p className='target'>{props.target}</p>
        <p className='riskAmount'>{props.riskAmount}</p>
        <p className='exitDate'>{props.exitDate}</p>
        <p className='exitSignal'>{props.exitSignal}</p>
        <p className='exitPrice'>{props.exitPrice}</p>
        <p className='profitLoss'>{props.profitLoss}</p>
        <p className='comments'>{props.comments}</p>
      </li>
    </div>
    </>
  )
}

export default Trade


  