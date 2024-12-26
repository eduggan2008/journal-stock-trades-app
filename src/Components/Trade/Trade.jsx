import './Trade.css'

const Trade = ({ entryDate, symbol, timeframe, entrySignal, direction, shares, entryPrice, stop, target, riskAmount, exitDate, exitSignal, exitPrice, profitLoss, comments }) => {

  return (

    <>
      <tr className="table-row">
        <td className='entryDate'>{entryDate}</td>
        <td className='symbol'>{symbol}</td>
        <td className='timeframe'>{timeframe}</td>
        <td className='entrySignal'>{entrySignal}</td>
        <td className='direction'>{direction}</td>
        <td className='shares'>{shares}</td>
        <td className='entryPrice'>${entryPrice}</td>
        <td className='stop'> ${stop}</td>
        <td className='target'>${target}</td>
        <td className='riskAmount'>${riskAmount}</td>
        <td className='exitDate'>{exitDate}</td>
        <td className='exitSignal'>{exitSignal}</td>
        <td className='exitPrice'>${exitPrice}</td>
        <td className='profitLoss'>${profitLoss}</td>
        <td className='comments'>{comments}</td>
      </tr>
    </>
  )
}

export default Trade

