import './Log.css'

const Log = () => {
  return (
    <div className="common-pages log">
      <h1 className="common-heading">Stock Trading Journal</h1>
      <h2 className="common-subheading">Trading Log</h2>

      <table className="table">
        <thead className='thead'>
          <tr className="table-row">
            <th className="table-heading" scope="col">#</th>
            <th className="table-heading" scope="col">Entry Date</th> 
            <th className="table-heading" scope="col">Stock Symbol</th> 
            <th className="table-heading" scope="col">Timeframe</th> 
            <th className="table-heading" scope="col">Entry Signal</th> 
            <th className="table-heading" scope="col">Direction</th> 
            <th className="table-heading" scope="col">Number of Shares</th> 
            <th className="table-heading money" scope="col">Entry Price</th> 
            <th className="table-heading money" scope="col">Original Stop</th> 
            <th className="table-heading money" scope="col">Initial Target</th> 
            <th className="table-heading money" scope="col">Risk Amount</th> 
            <th className="table-heading" scope="col">Exit Date</th> 
            <th className="table-heading" scope="col">Exit Signal</th> 
            <th className="table-heading money" scope="col">Exit Price</th> 
            <th className="table-heading" scope="col">Profit/Loss</th> 
            <th className="table-heading comments" scope="col">Comments</th>  
          </tr>
        </thead>

        <tbody className='tbody'>

          <tr className="table-row">
            <td className="table-data" scope="row">5</td>
            <td className="table-data" scope="row">12/05/2023</td>
            <td className="table-data" scope="row">QID</td>
            <td className="table-data" scope="row">Daily</td>
            <td className="table-data" scope="row">Bull Elephant</td>
            <td className="table-data" scope="row">Long</td>
            <td className="table-data" scope="row">100</td>
            <td className="table-data" scope="row">$10.86</td>
            <td className="table-data" scope="row">$10.40</td>
            <td className="table-data" scope="row">$12.36</td>
            <td className="table-data" scope="row">$50.00</td>
            <td className="table-data" scope="row">01/05/2024</td>
            <td className="table-data" scope="row">Trailed out</td>
            <td className="table-data" scope="row">$11.25</td>
            <td className="table-data" scope="row">$39.00</td>
            <td className="table-data" scope="row">Out too early</td>
          </tr>

          <tr className="table-row">
            <td className="table-data" scope="row">4</td>
            <td className="table-data" scope="row">12/06/2023</td>
            <td className="table-data" scope="row">ANF</td>
            <td className="table-data" scope="row">Daily</td>
            <td className="table-data" scope="row">Breakout</td>
            <td className="table-data" scope="row">Long</td>
            <td className="table-data" scope="row">10</td>
            <td className="table-data" scope="row">$78.92</td>
            <td className="table-data" scope="row">$74.60</td>
            <td className="table-data" scope="row">$91.71</td>
            <td className="table-data" scope="row">$50.00</td>
            <td className="table-data" scope="row">12/13/2023</td>
            <td className="table-data" scope="row">Trailed out</td>
            <td className="table-data" scope="row">$82.95</td>
            <td className="table-data" scope="row">$40.30</td>
            <td className="table-data" scope="row">Out too early</td>
          </tr>
        
          <tr className="table-row">
            <td className="table-data" scope="row">3</td>
            <td className="table-data" scope="row">10/31/2023</td>
            <td className="table-data" scope="row">ALL</td>
            <td className="table-data" scope="row">Daily</td>
            <td className="table-data" scope="row">Breakout</td>
            <td className="table-data" scope="row">Long</td>
            <td className="table-data" scope="row">10</td>
            <td className="table-data" scope="row">$127.12</td>
            <td className="table-data" scope="row">$124.32</td>
            <td className="table-data" scope="row">$135.51</td>
            <td className="table-data" scope="row">$28.00</td>
            <td className="table-data" scope="row">11/02/2023</td>
            <td className="table-data" scope="row">Target hit</td>
            <td className="table-data" scope="row">$135.54</td>
            <td className="table-data" scope="row">$84.20</td>
            <td className="table-data" scope="row">Should have used profit maximizer</td>
          </tr>

          <tr className="table-row">
            <td className="table-data" scope="row">2</td>
            <td className="table-data" scope="row">10/06/2023</td>
            <td className="table-data" scope="row">X</td>
            <td className="table-data" scope="row">Daily</td>
            <td className="table-data" scope="row">Pullback</td>
            <td className="table-data" scope="row">Long</td>
            <td className="table-data" scope="row">20</td>
            <td className="table-data" scope="row">$33.08</td>
            <td className="table-data" scope="row">$32.13</td>
            <td className="table-data" scope="row">$35.93</td>
            <td className="table-data" scope="row">$25.00</td>
            <td className="table-data" scope="row">10/16/2023</td>
            <td className="table-data" scope="row">Stopped Out</td>
            <td className="table-data" scope="row">$33.07</td>
            <td className="table-data" scope="row">(-) $0.20</td>
            <td className="table-data" scope="row">Break even</td>
          </tr>

          <tr className="table-row">
            <td className="table-data" scope="row">1</td>
            <td className="table-data" scope="row">10/03/2023</td>
            <td className="table-data" scope="row">QQQ</td>
            <td className="table-data" scope="row">Daily</td>
            <td className="table-data" scope="row">Breakout</td>
            <td className="table-data" scope="row">Long</td>
            <td className="table-data" scope="row">20</td>
            <td className="table-data" scope="row">$354.20</td>
            <td className="table-data" scope="row">$353.70</td>
            <td className="table-data" scope="row">$355.70</td>
            <td className="table-data" scope="row">$10.00</td>
            <td className="table-data" scope="row">10/03/2023</td>
            <td className="table-data" scope="row">Stopped Out</td>
            <td className="table-data" scope="row">$353.70</td>
            <td className="table-data" scope="row">(-) $10.00</td>
            <td className="table-data" scope="row">Stop loss hit</td>
          </tr>

        </tbody>
      </table>

    </div>
  )
}

export default Log
