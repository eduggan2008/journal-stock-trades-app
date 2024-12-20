import './Trade.css'

const Trade = (props) => {

  return (

    <>
        {/* <tr className='trade'> */}
        <tr className="table-row">
          <td className='entryDate'>{props.entryDate}</td>
          <td className='symbol'>{props.symbol}</td>
          <td className='timeframe'>{props.timeframe}</td>
          <td className='entrySignal'>{props.entrySignal}</td>
          <td className='direction'>{props.direction}</td>
          <td className='shares'>{props.shares}</td>
          <td className='entryPrice'>${props.entryPrice}</td>
          <td className='stop'> ${props.stop}</td>
          <td className='target'>${props.target}</td>
          <td className='riskAmount'>${props.riskAmount}</td>
          <td className='exitDate'>{props.exitDate}</td>
          <td className='exitSignal'>{props.exitSignal}</td>
          <td className='exitPrice'>${props.exitPrice}</td>
          <td className='profitLoss'>${props.profitLoss}</td>
          <td className='comments'>{props.comments}</td>
        </tr>
    </>
  )
}

export default Trade

{/* <li className='trade'>
  <p className='entryDate'>Entry Date:  {props.entryDate}</p>
  <p className='symbol'>Stock Symbol:  {props.symbol}</p>
  <p className='timeframe'>Timeframe:  {props.timeframe}</p>
  <p className='entrySignal'>Entry Signal:  {props.entrySignal}</p>
  <p className='direction'>Direction:  {props.direction}</p>
  <p className='shares'>Number of Shares:  {props.shares}</p>
  <p className='entryPrice'>Entry Price:  ${props.entryPrice}</p>
  <p className='stop'>Stop Price:  ${props.stop}</p>
  <p className='target'>Target Price:  ${props.target}</p>
  <p className='riskAmount'>Risk Amount:  ${props.riskAmount}</p>
  <p className='exitDate'>Exit Date:  {props.exitDate}</p>
  <p className='exitSignal'>Exit Signal:  {props.exitSignal}</p>
  <p className='exitPrice'>Exit Price:  ${props.exitPrice}</p>
  <p className='profitLoss'>Profit or Loss: ${props.profitLoss}</p>
  <p className='comments'>Comments:  {props.comments}</p>
</li> */}