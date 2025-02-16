import './Edit.css'
import { useEffect, useState } from "react";
import { MdUpdate, MdBackspace } from 'react-icons/md'
import array from "../Array/array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
  
  const [entryDate, setEntryDate] = useState("");
  const [symbol, setSymbol] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [reasonForEntry, setReasonForEntry] = useState("");
  const [direction, setDirection] = useState("");
  const [shares, setShares] = useState("");
  const [entryPrice, setEntryPrice] = useState("");
  const [originalStop, setOriginalStop] = useState("");
  const [targetOne, setTargetOne] = useState("");
  const [riskAmount, setRiskAmount] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [exitPrice, setExitPrice] = useState("");
  const [reasonForExit, setReasonForExit] = useState("");
  const [winLossBreakeven, setWinLossBreakeven] = useState("");
  const [profitLoss, setProfitLoss] = useState("");
  const [comments, setComments] = useState("");
  const [id, setid] = useState("");

  // Used for navigation with logic in javascript
  let history = useNavigate();

  // Getting an index of an entry with an id
  let index = array
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

    // Function for handling the edit and
    // pushing changes of editing
    const handelSubmit = (e) => {
      e.preventDefault();

     /*  if (entryDate == "" || symbol == "" || timeframe == "" || reasonForEntry == "" || direction == "" || shares == "" || entryPrice == "" || originalStop == "" || targetOne == "" || riskAmount == "" || exitDate == "" || exitPrice == "" || reasonForExit == "" || winLossBreakeven == "" || profitLoss == "" || comments == "" ) {
        alert("invalid input");
        return;
      } */
     
    if (entryDate == '') {
      alert('Entry Date is required');
     return
    }

    if (symbol == '') {
      alert('Symbol is required')
      return
    }

    if (timeframe == '') {
      alert('Timeframe is required');
     return
    }

    if (reasonForEntry == '') {
      alert('Reason For Entry is required')
      return
    }

    if (direction == '') {
      alert('Direction is required');
     return
    }

    if (shares == '') {
      alert('Shares is required')
      return
    }

    if (entryPrice == '') {
      alert('Entry Price is required');
     return
    }

    if (originalStop == '') {
      alert('Original Stop is required')
      return
    }


      // Getting an index of an array
      let a = array[index];

      // replacing input textfield value from existing data for editing trade data
      a.entryDate = entryDate;
      a.symbol = symbol;
      a.timeframe = timeframe;
      a.reasonForEntry = reasonForEntry;
      a.direction = direction;
      a.shares = shares;
      a.entryPrice = entryPrice;
      a.originalStop = originalStop;
      a.targetOne = targetOne;
      a.riskAmount = riskAmount;
      a.exitDate = exitDate;
      a.exitPrice = exitPrice;
      a.reasonForExit = reasonForExit;
      a.winLossBreakeven = winLossBreakeven;
      a.profitLoss = profitLoss;
      a.comments = comments;

      // Redirecting
      history("/tradesData");
    };

    // Useeffect for page rendering only once
    useEffect(() => {
      setEntryDate(localStorage.getItem("Entry Date", entryDate));
      setSymbol(localStorage.getItem("Symbol", symbol));
      setTimeframe(localStorage.getItem("Timeframe", timeframe));
      setReasonForEntry(localStorage.getItem("Reason For Entry", reasonForEntry));
      setDirection(localStorage.getItem("Direction", direction));
      setShares(localStorage.getItem("Shares", shares));
      setEntryPrice(localStorage.getItem("Entry Price", entryPrice));
      setOriginalStop(localStorage.getItem("Original Stop", originalStop));
      setTargetOne(localStorage.getItem("Target One", targetOne));
      setRiskAmount(localStorage.getItem("Risk Amount", riskAmount));
      setExitDate(localStorage.getItem("Exit Date", exitDate));
      setExitPrice(localStorage.getItem("Exit Price", exitPrice));
      setReasonForExit(localStorage.getItem("Reason For Exit", reasonForExit));
      setWinLossBreakeven(localStorage.getItem("Win/Loss/Breakeven", winLossBreakeven));
      setProfitLoss(localStorage.getItem("Profit/Loss", profitLoss));
      setComments(localStorage.getItem("Comments", comments));
      setid(localStorage.getItem("id"));
    }, []);


    return (
      <div className="common-pages edit">
        <h1 className="common-heading">Stock Trading Journal</h1>
        <h2 className="common-subheading">Edit Trade</h2>

        <form className='form'>
        <h3 className='journalEntryHeading'>Edit Your Trade</h3>

        <div>
          <label htmlFor='entryDate'>Entry Date</label>
          <input 
            type='date' 
            id='entryDate' 
            name='entryDate' 
            value={entryDate}
            required  
            onChange={(e) =>
              setEntryDate(e.target.value)
            } 
          />
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='symbol'>Symbol</label>
          <select 
            type='text' 
            id='symbol' 
            name='symbol' 
            value={symbol}
            required  
            onChange={(e) =>
              setSymbol(e.target.value)
            } 
          >
            <option value=''>--Please select a Stock--</option>
            <option value='AAPL'>AAPL</option>
            <option value='AEP'>AEP</option>
            <option value='AI'>AI</option>
            <option value='AIG'>AIG</option>
            <option value='AKAM'>AKAM</option>
            <option value='AMAT'>AMAT</option>
            <option value='AMD'>AMD</option>
            <option value='AMZN'>AMZN</option>
            <option value='BA'>BA</option>
            <option value='BABA'>BABA</option>
            <option value='BAC'>BAC</option>
            <option value='BBY'>BBY</option>
            <option value='C'>C</option>
            <option value='CL'>CL</option>
            <option value='CSCO'>CSCO</option>
            <option value='CTSH'>CTSH</option>
            <option value='CVS'>CVS</option>
            <option value='CVX'>CVX</option>
            <option value='DD'>DD</option>
            <option value='DELL'>DELL</option>
            <option value='DIA'>DIA</option>
            <option value='DIS'>DIS</option>
            <option value='DUK'>DUK</option>
            <option value='EBAY'>EBAY</option>
            <option value='GILD'>GILD</option>
            <option value='GIS'>GIS</option>
            <option value='GE'>GE</option>
            <option value='GM'>GM</option>
            <option value='GME'>GME</option>
            <option value='GOOG'>GOOG</option>
            <option value='INTC'>INTC</option>
            <option value='JPM'>JPM</option>
            <option value='KO'>KO</option>
            <option value='LOW'>LOW</option>
            <option value='LVS'>LVS</option>
            <option value='MARA'>MARA</option>
            <option value='MET'>MET</option>
            <option value='MRK'>MRL</option>
            <option value='MRVL'>MRVL</option>
            <option value='MS'>MS</option>
            <option value='MU'>MU</option>
            <option value='NKE'>NKE</option>
            <option value='NUGT'>NUGT</option>
            <option value='ON'>ON</option>
            <option value='ORCL'>ORCL</option>
            <option value='OXY'>OXY</option>
            <option value='PM'>PM</option>
            <option value='PYPL'>PYPL</option>
            <option value='QCOM'>QCOM</option>
            <option value='QID'>QID</option>
            <option value='QQQ'>QQQ</option>
            <option value='RIOT'>RIOT</option>
            <option value='SBUX'>SBUX</option>
            <option value='SCHW'>SCHW</option>
            <option value='SDS'>SDS</option>
            <option value='SHOP'>SHOP</option>
            <option value='SMCI'>SMCI</option>
            <option value='SNAP'>SNAP</option>
            <option value='SPXL'>SPXL</option>
            <option value='SPY'>SPY</option>
            <option value='SQ'>SQ</option>
            <option value='TGT'>TGT</option>
            <option value='TQQQ'>TQQQ</option>
            <option value='UAL'>UAL</option>
            <option value='UBER'>UBER</option>
            <option value='USO'>USO</option>
            <option value='V'>V</option>
            <option value='VZ'>VZ</option>
            <option value='W'>W</option>
            <option value='WFC'>WFC</option>
            <option value='WMT'>WMT</option>
            <option value='XOM'>XOM</option>
          </select>
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='timeframe'>Timeframe</label>
          <select 
            type='text' 
            id='timeframe'
            name='timeframe'
            value={timeframe}
            required  
            onChange={(e) =>
              setTimeframe(e.target.value)
            }
          >
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
          <p className='message'>Error Message</p>
        </div>  

        <div>
          <label htmlFor='reasonForEntry'>Reason For Entry</label>
          <select 
            type='text' 
            id='reasonForEntry' 
            name='reasonForEntry' 
            value={reasonForEntry}
            required  
            onChange={(e) =>
              setReasonForEntry(e.target.value)
            }
          >
            <option value=''>--Please select an Reason For Entry</option>
            <option value='EB'>EB</option>
            <option value='EB+'>EB+</option>
            <option value='TB'>TB</option>
            <option value='TB+'>TB+</option>
            <option value='180'>180</option>
            <option value='Acorn'>Acorn</option>
            <option value='CC'>CC</option>
            <option value='VBS'>VBS</option>
            <option value='VSS'>VSS</option>
            <option value='RBI'>RBI</option>
            <option value='GBI'>GBI</option>
            <option value='8ma Catch'>8ma Catch</option>
            <option value='20ma Catch'>20ma Catch</option>
            <option value='Breakout'>Breakout</option>
            <option value='Breakdown'>Breakdown</option>
          </select>
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='direction'>Direction</label>
          <select 
            type='text' 
            id='direction' 
            name='direction' 
            value={direction}
            required  
            onChange={(e) =>
              setDirection(e.target.value)
            }
          >
            <option value=''>--Please select a Direction</option>
            <option value='Long'>Long</option>
            <option value='Short'>Short</option>
          </select>
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='shares'>Shares</label>
          <input 
            type='number' 
            id='shares' 
            name='shares' 
            value={shares}
            required  
            onChange={(e) =>
              setShares(e.target.value)
            } 
          />
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='entryPrice'>Entry Price</label>
          <input 
            type='number' 
            step='0.01' 
            id='entryPrice' 
            name='entryPrice' 
            value={entryPrice}
            required  
            onChange={(e) =>
              setEntryPrice(e.target.value)
            } 
          />
          <p className='message'>Error Message</p>
        </div> 

        <div>
          <label htmlFor='originalStop'>Original Stop Price</label>
          <input 
            type='number' 
            step='0.01'
            id='originalStop'
            name='originalStop'
            value={originalStop}
            required  
            onChange={(e) =>
              setOriginalStop(e.target.value)
            }
          />
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='targetOne'>Target Price</label>
          <input 
            type='number' 
            step='0.01' 
            id='targetOne'
            name='targetOne'
            value={targetOne}
            // required  
            onChange={(e) =>
              setTargetOne(e.target.value)
            }
          />
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='riskAmount'>Risk Amount</label>
          <input 
            type='number' 
            step='0.01' 
            id='riskAmount'  
            name='riskAmount'  
            value={riskAmount}
            // required  
            onChange={(e) =>
              setRiskAmount(e.target.value)
            }
          />
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='exitDate'>Exit Date</label>
          <input 
            type='date' 
            id='exitDate' 
            name='exitDate' 
            value={exitDate}
            // required  
            onChange={(e) =>
              setExitDate(e.target.value)
            }
          />
          <p className='message'>Error Message</p>
        </div> 

        <div>
          <label htmlFor='exitPrice'>ExitPrice</label>
          <input 
            type='number' 
            step='0.01' 
            id='exitPrice' 
            name='exitPrice' 
            value={exitPrice}
            // required  
            onChange={(e) =>
              setExitPrice(e.target.value)
            }
          />
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='reasonForExit'>Reason For Exit</label>
          <select 
            type='text' 
            id='reasonForExit' 
            name='reasonForExit' 
            value={reasonForExit}
            // required  
            onChange={(e) =>
              setReasonForExit(e.target.value)
            }
          >
            <option value=''>--Please select a Reason For Exit</option>
            <option value='Stop Out'>Stop Out</option>
            <option value='Break Even Stop'>Break Even Stop</option>
            <option value='Big Bar Stop'>Big Bar Stop</option>
            <option value='Bar x Bar Stop'>Bar x Bar Stop</option>
            <option value='8ma Stop'>8ma Stop</option>
            <option value='20ma Stop'>20ma Stop</option>
            <option value='Pivot Stop'>Pivot Stop</option>
          </select>
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='winLossBreakeven'>Win/Loss/Breakeven</label>
          <select 
            type='text' 
            id='winLossBreakeven' 
            name='winLossBreakeven' 
            value={winLossBreakeven}
            // required  
            onChange={(e) =>
              setWinLossBreakeven(e.target.value)
            }
          >
            <option value=''>--Please select Win, Loss or Breakeven</option>
            <option value='Win'>Win</option>
            <option value='Loss'>Loss</option>
            <option value='Breakeven'>Breakeven</option>
          </select>
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='profitLoss'>Profit or Loss</label>
          <input 
            type='number' 
            step='0.01' 
            id='profitLoss'  
            name='profitLoss'  
            value={profitLoss}
            // required  
            onChange={(e) =>
              setProfitLoss(e.target.value)
            }
          />
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='comments'>Comments</label>
          <textarea 
            id='comments' 
            name='comments' 
            value={comments}
            // required  
            onChange={(e) =>
              setComments(e.target.value)
            }
          />
          <p className='message'>Error Message</p>
        </div>    
      </form>

      <div className='actions'>
        <Link className="" to="/tradesData">
          <button 
            className='backButton'
            type="button" 
            >
              <MdBackspace size={18}  />
              Back
          </button>
        </Link>

        <button
          className='updateButton'
          onClick={(e) => handelSubmit(e)}
          type="submit"
        >
          <MdUpdate size={18}  />
          Update  
        </button>
      </div>
    </div>
  );
}

export default Edit;

