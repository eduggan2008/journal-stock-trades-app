import { useState } from 'react'
import './TradesForm.css'

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
    <div className="common-pages tradesForm">
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
            placeholder='Stock Symbal'
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

        </form>
      </div>
    </div>
  )
}

export default TradesForm



  /* const [formData, setFormData] = useState({product: "", quantity: 1});

  const handleChange = (e) => {
    setFormData(currentData => {
      return {
        ...currentData,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({product: "", quantity: 1});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="product">Product Name</label>
        <input type="text" id="product" name="product" placeholder="Enter Product Name" value={formData.product} onChange={handleChange} />

        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" name="quantity" placeholder="Enter Quantity" value={formData.quantity} onChange={handleChange} />

        <button>Add Item</button>
        
      </form>
    </div>
  ); */
