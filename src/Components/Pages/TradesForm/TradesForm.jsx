import { useState } from 'react'
import './TradesForm.css'
import ButtonUsage from '../../Button/Button'

const TradesForm = ({addTrade}) => {

  const [formData, setFormData] = useState({
    entryDate: '',
    symbol: '',
    shares: '',
    entryPrice: '',
    exitPrice: '',
    profitLoss: '',
  })

  const handleChange = (e) => {
    setFormData(currentData => {
      return {
        ...currentData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTrade(formData)
    setFormData({
      entryDate: '',
      symbol: '',
      shares: '',
      entryPrice: '',
      exitPrice: '',
      profitLoss: '',
    })
  }

  return (
    <div className="common-pages">
      <div>
        <form className='tradesForm' onSubmit={handleSubmit}>
        
          <label htmlFor='entryDate'>Entry Date</label>
          <input 
            type='date' 
            id='entryDate'
            name='entryDate'
            placeholder='Entry Date'
            value={formData.entryDate}
            onChange={handleChange}
          />

          <label htmlFor='symbol'>Symbol</label>
          <input 
            type='text' 
            id='symbol'
            name='symbol'
            placeholder='Stock Symbol'
            value={formData.symbol}
            onChange={handleChange}
          />

          <label htmlFor='shares'>Number of Shares</label>
          <input 
            type='number' 
            id='shares'
            name='shares'
            placeholder='Number of Shares'
            value={formData.shares}
            onChange={handleChange}
          />

          <label htmlFor='entryPrice'>Entry Price</label>
          <input 
            type='number' 
            id='entryPrice'
            name='entryPrice'
            placeholder='Entry Price'
            value={formData.entryPrice}
            onChange={handleChange}
          />

          <label htmlFor='exitPrice'>Exit Price</label>
          <input 
            type='number' 
            id='exitPrice'
            name='exitPrice'
            placeholder='Exit Price'
            value={formData.exitPrice}
            onChange={handleChange}
          />

          <label htmlFor='profitLoss'>Profit / Loss</label>
          <input 
            type='number' 
            id='profitLoss'
            name='profitLoss'
            placeholder='Profit / Loss'
            value={formData.profitLoss}
            onChange={handleChange}
          />

          <button className='submit' >Submit Trade</button>
          <ButtonUsage />

        </form>
      </div>
    </div>
  )
}

export default TradesForm


