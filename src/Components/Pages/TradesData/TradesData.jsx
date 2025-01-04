import './TradesData.css'
import {  MdPostAdd, MdEditNote, MdDeleteForever } from 'react-icons/md'
import array from "../../Array/array";
import { Link, useNavigate } from "react-router-dom";


function TradesData() {
  
  // Using useNavigation for redirecting to pages
  let history = useNavigate();
    
  function setID(id, entryDate, symbol, timeframe, entrySignal, direction, shares, entryPrice, originalStop, targetOne, riskAmount, exitDate, exitSignal, exitPrice, profitLoss, comments) {
    localStorage.setItem("id", id);
    localStorage.setItem("Entry Date", entryDate);
    localStorage.setItem("Symbol", symbol);
    localStorage.setItem("Timeframe", timeframe);
    localStorage.setItem("Entry Signal", entrySignal);
    localStorage.setItem("Direction", direction);
    localStorage.setItem("Shares", shares);
    localStorage.setItem("Entry Price", entryPrice);
    localStorage.setItem("Original Stop", originalStop);
    localStorage.setItem("Target One", targetOne);
    localStorage.setItem("Risk Amount", riskAmount);
    localStorage.setItem("Exit Date", exitDate);
    localStorage.setItem("Exit Signal", exitSignal);
    localStorage.setItem("Exit Price", exitPrice);
    localStorage.setItem("Profit/Loss", profitLoss);
    localStorage.setItem("Comments", comments);
  }

  // Function to delete a trade
  function deleted(id) {
    let index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

      // Deleting the trade with the specified index
      array.splice(index, 1);

      // Redirecting 
      history("/tradesData");
    }

    return (
      <div className='common-pages tradesData'>
        <h1 className="common-heading">Stock Trading Journal</h1>
        <h2 className="common-subheading">Trades Data</h2>

        
        <div className="">
          <Link to="/record">
            <button className='button'>
              <MdPostAdd size={18} />
              Enter a new trade
            </button>
          </Link>
        </div>

        <table className="">
          <thead className="">
            <tr>
              <th>Entry Date</th>
              <th>Symbol</th>
              <th>Timeframe</th>
              <th>Entry Signal</th>
              <th>Direction</th>
              <th>Shares</th>
              <th>Entry Price</th>
              <th>Original Stop</th>
              <th>Target One</th>
              <th>Risk Amount</th>
              <th>Exit Date</th>
              <th>Exit Signal</th>
              <th>Exit Price</th>
              <th>Profit/Loss</th>
              <th>Comments</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {array.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.entryDate}</td>
                  <td>{item.symbol}</td>
                  <td>{item.timeframe}</td>
                  <td>{item.entrySignal}</td>
                  <td>{item.direction}</td>
                  <td>{item.shares}</td>
                  <td>{item.entryPrice}</td>
                  <td>{item.originalStop}</td>
                  <td>{item.targetOne}</td>
                  <td>{item.riskAmount}</td>
                  <td>{item.exitDate}</td>
                  <td>{item.exitSignal}</td>
                  <td>{item.exitPrice}</td>
                  <td>{item.profitLoss}</td>
                  <td>{item.comments}</td>
                  <td>
                    <Link to={`/edit`}>
                      <button
                        className='button'
                        onClick={() => setID(item.id, item.entryDate, item.symbol, item.timeframe, item.entrySignal, item.direction, item.shares, item.entryPrice, item.originalStop, item.targetOne, item.riskAmount, item.exitDate, item.exitSignal, item.exitPrice, item.profitLoss, item.comments)}
                      >
                        <MdEditNote size={18}  />
                        Edit
                      </button>
                    </Link>
                  </td>

                  <td>
                    <button
                      className='button'
                      onClick={() => deleted(item.id)}
                    >
                      <MdDeleteForever size={18}  />
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}

export default TradesData

