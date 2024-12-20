import './ReadOnlyLog.css'

const ReadOnlyLog = ({ trade, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="table-row">
      <td>
        <button type='button' className='editBtn' onClick={(event) => handleEditClick(event, trade)}>Edit</button>
        <button type='button' className='deleteBtn' onClick={() => handleDeleteClick(trade.id)}>Delete</button>
      </td>
      
      <td className="table-data" scope="row">{trade.entryDate}</td>
      <td className="table-data" scope="row">{trade.symbol}</td>
      <td className="table-data" scope="row">{trade.timeframe}</td>
      <td className="table-data" scope="row">{trade.entrySignal}</td>
      <td className="table-data" scope="row">{trade.direction}</td>
      <td className="table-data" scope="row">{trade.shares}</td>
      <td className="table-data" scope="row">{trade.entryPrice}</td>
      <td className="table-data" scope="row">{trade.stopPrice}</td>
      <td className="table-data" scope="row">{trade.target}</td>
      <td className="table-data" scope="row">{trade.stop}</td>
      <td className="table-data" scope="row">{trade.exitDate}</td>
      <td className="table-data" scope="row">{trade.exitSignal}</td>
      <td className="table-data" scope="row">{trade.exitPrice}</td>
      <td className="table-data" scope="row">{trade.profitLoss}</td>
      <td className="table-data" scope="row">{trade.comments}</td>
    </tr>

  )
}

export default ReadOnlyLog