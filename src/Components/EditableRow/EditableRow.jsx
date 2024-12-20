import './EditableRow.css'

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <tr>
      <td>
        <button type='submit' className='saveBtn'>Save</button>
        <button type='button' className='cancelBtn' onClick={handleCancelClick}>Cancel</button>
      </td>
      
      <td>
        <input type='date' name='entryDate' id='entryDate' required value={editFormData.entryDate} onChange={handleEditFormChange} />
      </td>

      <td>
        <select type='text' name='symbol' id='symbol'  required value={editFormData.symbol} onChange={handleEditFormChange} >
          <option value=''>--Please select a Stock--</option>
          <option value='AAPL'>AAPL</option>
          <option value='AMZN'>AMZN</option>
          <option value='C'>C</option>
          <option value='CSCO'>CSCO</option>
          <option value='GM'>GM</option>
          <option value='SBUX'>SBUX</option>
        </select>
      </td>

      <td>
        <select type='text' name='timeframe' id='timeframe' required value={editFormData.timeframe} onChange={handleEditFormChange} >
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
      </td>  

      <td>
        <select type='text' name='entrySignal' id='entrySignal' required value={editFormData.entrySignal} onChange={handleEditFormChange} >
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
      </td>

      <td>
        <select type='text' name='direction' id='direction' required value={editFormData.direction} onChange={handleEditFormChange} >
          <option value=''>--Please select a Direction</option>
          <option value='Long'>Long</option>
          <option value='Short'>Short</option>
        </select>
      </td>

      <td>
        <input type='number' name='shares' id='shares' required value={editFormData.shares} onChange={handleEditFormChange} />
      </td>

      <td>
        <input type='number' step='0.01' name='entryPrice' id='entryPrice' required value={editFormData.entryPrice}onChange={handleEditFormChange} />
      </td> 

      <td>
        <input type='number' step='0.01' name='stop' id='stop' required value={editFormData.stop} onChange={handleEditFormChange} />
      </td>

      <td>
        <input type='number' step='0.01' name='target' id='target' required value={editFormData.target} onChange={handleEditFormChange} />
      </td>

      <td>
        <input type='number' step='0.01' name='riskAmount' id='riskAmount' value={editFormData.riskAmount} onChange={handleEditFormChange} />
      </td>

      <td>
        <input type='date' name='exitDate' id='exitDate' required value={editFormData.exitDate} onChange={handleEditFormChange} />
      </td> 

      <td>
        <select type='text' name='exitSignal' id='exitSignal' required value={editFormData.exitSignal} onChange={handleEditFormChange} >
          <option value=''>--Please select an Exit Signal</option>
          <option value='Full Stop Out'>Full Stop</option>
          <option value='Break Even Stop'>Break Even Stop</option>
          <option value='Big Bar Stop'>Big Bar Stop</option>
          <option value='Bar x Bar Stop'>Bar x Bar Stop</option>
          <option value='8ma Stop'>8ma Stop</option>
          <option value='20ma Stop'>20ma Stop</option>
          <option value='Pivot Stop'>Pivot Stop</option>
        </select>
      </td>

      <td>
        <input type='number' step='0.01' name='exitPrice' id='exitPrice' required value={editFormData.exitPrice} onChange={handleEditFormChange} />
      </td>

      <td>
        <input type='number' step='0.01' name='profitLoss' id='profitLoss' value={editFormData.profitLoss} onChange={handleEditFormChange} />
      </td>

      <td>
        <textarea name='comments' id='comments' required value={editFormData.comments} onChange={handleEditFormChange} />
      </td>

    </tr>
  )
}

export default EditableRow



/* import './EditableRow.css'

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <tr>
      <td>
        <button type='submit'>Save</button>
        <button type='button' onClick={handleCancelClick}>Cancel</button>
      </td>
      
      <td>
        <label htmlFor='entryDate'>Entry Date</label>
        <input type='date' name='entryDate' id='entryDate' required value={editFormData.entryDate} onChange={handleEditFormChange} />
      </td>

      <td>
        <label htmlFor='symbol'>Symbol</label>
        <select type='text' name='symbol' id='symbol'  required value={editFormData.symbol} onChange={handleEditFormChange} >
          <option value=''>--Please select a Stock--</option>
          <option value='AAPL'>AAPL</option>
          <option value='AMZN'>AMZN</option>
          <option value='C'>C</option>
          <option value='CSCO'>CSCO</option>
          <option value='GM'>GM</option>
          <option value='SBUX'>SBUX</option>
        </select>
      </td>

      <td>
        <label htmlFor='timeframe'>Timeframe</label>
        <select type='text' name='timeframe' id='timeframe' required value={editFormData.timeframe} onChange={handleEditFormChange} >
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
      </td>  

      <td>
        <label htmlFor='entrySignal'>Entry Signal</label>
        <select type='text' name='entrySignal' id='entrySignal' required value={editFormData.entrySignal} onChange={handleEditFormChange} >
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
      </td>

      <td>
        <label htmlFor='direction'>Direction</label>
        <select type='text' name='direction' id='direction' required value={editFormData.direction} onChange={handleEditFormChange} >
          <option value=''>--Please select a Direction</option>
          <option value='Long'>Long</option>
          <option value='Short'>Short</option>
        </select>
      </td>

      <td>
        <label htmlFor='shares'>Shares</label>
        <input type='number' name='shares' id='shares' required value={editFormData.shares} onChange={handleEditFormChange} />
      </td>

      <td>
        <label htmlFor='entryPrice'>Entry Price</label>
        <input type='number' step='0.01' name='entryPrice' id='entryPrice' required value={editFormData.entryPrice}onChange={handleEditFormChange} />
      </td> 

      <td>
        <label htmlFor='stop'>Stop Price</label>
        <input type='number' step='0.01' name='stop' id='stop' required value={editFormData.stop} onChange={handleEditFormChange} />
      </td>

      <td>
        <label htmlFor='target'>Target Price</label>
        <input type='number' step='0.01' name='target' id='target' required value={editFormData.target} onChange={handleEditFormChange} />
      </td>

      <td>
        <label htmlFor='riskAmount'>Dollar Risk Amount</label>
        <input type='number' step='0.01' name='riskAmount' id='riskAmount' value={editFormData.riskAmount} onChange={handleEditFormChange} />
      </td>

      <td>
        <label htmlFor='exitDate'>Exit Date</label>
        <input type='date' name='exitDate' id='exitDate' required value={editFormData.exitDate} onChange={handleEditFormChange} />
      </td> 

      <td>
        <label htmlFor='exitSignal'>Exit Signal</label>
        <select type='text' name='exitSignal' id='exitSignal' required value={editFormData.exitSignal} onChange={handleEditFormChange} >
          <option value=''>--Please select an Exit Signal</option>
          <option value='Full Stop Out'>Full Stop</option>
          <option value='Break Even Stop'>Break Even Stop</option>
          <option value='Big Bar Stop'>Big Bar Stop</option>
          <option value='Bar x Bar Stop'>Bar x Bar Stop</option>
          <option value='8ma Stop'>8ma Stop</option>
          <option value='20ma Stop'>20ma Stop</option>
          <option value='Pivot Stop'>Pivot Stop</option>
        </select>
      </td>

      <td>
        <label htmlFor='exitPrice'>ExitPrice</label>
        <input type='number' step='0.01' name='exitPrice' id='exitPrice' required value={editFormData.exitPrice} onChange={handleEditFormChange} />
      </td>

      <td>
        <label htmlFor='profitLoss'>Profit or Loss</label>
        <input type='number' step='0.01' name='profitLoss' id='profitLoss' value={editFormData.profitLoss} onChange={handleEditFormChange} />
      </td>

      <td>
        <label htmlFor='comments'>Comments</label>
        <textarea name='comments' id='comments' required value={editFormData.comments} onChange={handleEditFormChange} />
      </td>

    </tr>
  )
}

export default EditableRow */