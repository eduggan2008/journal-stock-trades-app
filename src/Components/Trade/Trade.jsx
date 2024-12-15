import './Trade.css'

const Trade = (props) => {

  return (
    <>
    <div>
      <li className='trade'>
        <p className='entryDate'>Entry Date:  {props.entryDate}</p>
        <p className='symbol'>Symbol:  {props.symbol}</p>
        <p className='timeframe'>Timeframe:  {props.timeframe}</p>
        <p className='entrySignal'>Entry Signal:  {props.entrySignal}</p>
        <p className='direction'>Direction:  {props.direction}</p>
        <p className='shares'>Number of Shares:  {props.shares}</p>
        <p className='entryPrice'>Entry Price:  ${props.entryPrice}</p>
        <p className='stop'>Stop:  ${props.stop}</p>
        <p className='target'>Target:  ${props.target}</p>
        <p className='riskAmount'>Risk Amount:  ${props.riskAmount}</p>
        <p className='exitDate'>Exit Date:  {props.exitDate}</p>
        <p className='exitSignal'>Exit Signal:  {props.exitSignal}</p>
        <p className='exitPrice'>Exit Price:  ${props.exitPrice}</p>
        <p className='profitLoss'>Profit or Loss: ${props.profitLoss}</p>
        <p className='comments'>Comments:  {props.comments}</p>
      </li>
    </div>
    </>
  )
}

export default Trade


  