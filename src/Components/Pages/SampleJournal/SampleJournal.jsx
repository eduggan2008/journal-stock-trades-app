import { useState, Fragment } from 'react'
import './SampleJournal.css'
import data from '../../mock-data.json'
import { v4 as uuid } from 'uuid';
import EditableRow from '../../EditableRow/EditableRow';
import ReadOnlyLog from '../../ReadOnlyLog/ReadOnlyLog';

const SampleJournal = () => {

  const [trades, setTrades] = useState(data)

  const [addFormData, setAddFormData] = useState({
    entryDate: '',
    symbol: '',
    timeframe: '',
    entrySignal: '',
    direction: '',
    shares: '',
    entryPrice: '',
    stop: '',
    target: '',
    riskAmount: '',
    exitDate: '',
    exitSignal: '',
    exitPrice: '',
    profitLoss: '',
    comments: '',
  })

  const [editFormData, setEditFormData] = useState({
    entryDate: '',
    symbol: '',
    timeframe: '',
    entrySignal: '',
    direction: '',
    shares: '',
    entryPrice: '',
    stop: '',
    target: '',
    riskAmount: '',
    exitDate: '',
    exitSignal: '',
    exitPrice: '',
    profitLoss: '',
    comments: '',
  })

  const [editTradeId, setEditTradeId] = useState(null)
  
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function showModalHandler(event) {
    setModalIsVisible(true)
  }

  function hideModalHandler(event) {
    setModalIsVisible(false)
  }


  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = {...editFormData}
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newTrade = {
      id: uuid(),
      entryDate: addFormData.entryDate,
      symbol: addFormData.symbol,
      timeframe: addFormData.timeframe,
      entrySignal: addFormData.entrySignal,
      direction: addFormData.direction,
      shares: addFormData.shares,
      entryPrice: addFormData.entryPrice,
      stop: addFormData.stop,
      target: addFormData.target,
      riskAmount: addFormData.riskAmount,
      exitDate: addFormData.exitDate,
      exitSignal: addFormData.exitSignal,
      exitPrice: addFormData.exitPrice,
      profitLoss: addFormData.profitLoss,
      comments: addFormData.comments
    }


    const newTrades = [...trades, newTrade]
    setTrades(newTrades)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedTrade = {
      id: editTradeId,
      entryDate: editFormData.entryDate,
      symbol: editFormData.symbol,
      timeframe: editFormData.timeframe,
      entrySignal: editFormData.entrySignal,
      direction: editFormData.direction,
      shares: editFormData.shares,
      entryPrice: editFormData.entryPrice,
      stop: editFormData.stop,
      target: editFormData.target,
      riskAmount: editFormData.riskAmount,
      exitDate: editFormData.exitDate,
      exitSignal: editFormData.exitSignal,
      exitPrice: editFormData.exitPrice,
      profitLoss: editFormData.profitLoss,
      comments: editFormData.comments
    }

    const newTrades = [...trades]
    const index = trades.findIndex((trade) => trade.id === editTradeId)

    newTrades[index] = editedTrade

    setTrades(newTrades)
    setEditTradeId(null)
  }

  const handleEditClick = (event, trade) => {
    event.preventDefault()

    setEditTradeId(trade.id)

    const formValues = {
      entryDate: trade.entryDate,
      symbol: trade.symbol,
      timeframe: trade.timeframe,
      entrySignal: trade.entrySignal,
      direction: trade.direction,
      shares: trade.shares,
      entryPrice: trade.entryPrice,
      stop: trade.stop,
      target: trade.target,
      riskAmount: trade.riskAmount,
      exitDate: trade.exitDate,
      exitSignal: trade.exitSignal,
      exitPrice: trade.exitPrice,
      profitLoss: trade.profitLoss,
      comments: trade.comments
    }

    setEditFormData(formValues)
  }
  

  const handleCancelClick = () => {
    setEditTradeId(null)
  }

  const handleDeleteClick = (tradeId) => {
    const newTrades = [...trades]

    const index = trades.findIndex((trade) => trade.id === tradeId)

    newTrades.splice(index, 1)

    setTrades(newTrades)
  }

  return (
    <div className='common-pages log'>
      <h1 className="common-heading">Stock Trading Journal</h1>
      <h2 className="common-subheading">Trading Log</h2>

      <form className='form' onSubmit={handleAddFormSubmit}> 
        <h2 className='journalEntryHeading'>Journal Your Trade</h2>

        <div>
          <label htmlFor='entryDate'>Entry Date</label>
          <input type='date' name='entryDate' id='entryDate' required onChange={handleAddFormChange} />
        </div>

        <div>
          <label htmlFor='symbol'>Symbol</label>
          <select type='text' name='symbol' id='symbol'  required onChange={handleAddFormChange} >
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
          <select type='text' name='timeframe' id='timeframe' required rows={5} onChange={handleAddFormChange} >
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
          <select type='text' name='entrySignal' id='entrySignal' required onChange={handleAddFormChange} >
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
          <select type='text' name='direction' id='direction' required onChange={handleAddFormChange} >
            <option value=''>--Please select a Direction</option>
            <option value='Long'>Long</option>
            <option value='Short'>Short</option>
          </select>
        </div>

        <div>
          <label htmlFor='shares'>Shares</label>
          <input type='number' name='shares' id='shares' required onChange={handleAddFormChange} />
        </div>

        <div>
          <label htmlFor='entryPrice'>Entry Price</label>
          <input type='number' step='0.01' name='entryPrice' id='entryPrice' required onChange={handleAddFormChange} />
        </div> 

        <div>
          <label htmlFor='stop'>Stop Price</label>
          <input type='number' step='0.01' name='stop' id='stop' required onChange={handleAddFormChange} />
        </div>

        <div>
          <label htmlFor='target'>Target Price</label>
          <input type='number' step='0.01' name='target' id='target' required onChange={handleAddFormChange} />
        </div>

        <div>
          <label htmlFor='riskAmount'>Dollar Risk Amount</label>
          <input type='number' step='0.01' name='riskAmount' id='riskAmount' onChange={handleAddFormChange} />
        </div>

        <div>
          <label htmlFor='exitDate'>Exit Date</label>
          <input type='date' name='exitDate' id='exitDate' required onChange={handleAddFormChange} />
        </div> 

        <div>
          <label htmlFor='exitSignal'>Exit Signal</label>
          <select type='text' name='exitSignal' id='exitSignal' required onChange={handleAddFormChange} >
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
          <input type='number' step='0.01' name='exitPrice' id='exitPrice' required onChange={handleAddFormChange} />
        </div>

        <div>
          <label htmlFor='profitLoss'>Profit or Loss</label>
          <input type='number' step='0.01' name='profitLoss' id='profitLoss' onChange={handleAddFormChange} />
        </div>

        <div>
          <label htmlFor='comments'>Comments</label>
          <textarea name='comments' id='comments' required onChange={handleAddFormChange} />
        </div>

        <div className='actions'>
          <button type='submit'>Submit</button>
        </div>
      </form>

      <form onSubmit={handleEditFormSubmit}>
        <table className="table">
        {/* <table className="sample-table-container"> */}
          <thead className='thead'>
            <tr className='table-row'>
              <th className='table-heading'>Actions</th>
              <th className="table-heading" scope="col">Entry Date</th> 
              <th className="table-heading" scope="col">Stock Symbol</th> 
              <th className="table-heading" scope="col">Timeframe</th> 
              <th className="table-heading" scope="col">Entry Signal</th>  
              <th className="table-heading" scope="col">Direction</th> 
              <th className="table-heading" scope="col">Number of Shares</th> 
              <th className="table-heading money" scope="col">Entry Price</th> 
              <th className="table-heading money" scope="col">Stop</th> 
              <th className="table-heading money" scope="col">Target</th> 
              <th className="table-heading money" scope="col">Risk Amount</th> 
              <th className="table-heading" scope="col">Exit Date</th> 
              <th className="table-heading" scope="col">Exit Signal</th> 
              <th className="table-heading money" scope="col">Exit Price</th> 
              <th className="table-heading" scope="col">Profit/Loss</th> 
              <th className="table-heading comments" scope="col">Comments</th>  
            </tr>
          </thead>
          
          <tbody>
            {trades.map((trade) => (
              <Fragment>
                {editTradeId === trade.id ? (
                  <EditableRow 
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyLog 
                    trade={trade} 
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default SampleJournal
