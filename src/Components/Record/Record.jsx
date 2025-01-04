import './Record.css'
import { useState } from "react";
import array from "../Array/array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom"
import { MdBackspace, MdAddCircleOutline } from 'react-icons/md'

function Record() {

  const [entryDate, setEntryDate] = useState("");
  const [symbol, setSymbol] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [entrySignal, setEntrySignal] = useState("");
  const [direction, setDirection] = useState("");
  const [shares, setShares] = useState("");
  const [entryPrice, setEntryPrice] = useState("");
  const [originalStop, setOriginalStop] = useState("");
  const [targetOne, setTargetOne] = useState("");
  const [riskAmount, setRiskAmount] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [exitSignal, setExitSignal] = useState("");
  const [exitPrice, setExitPrice] = useState("");
  const [profitLoss, setProfitLoss] = useState("");
  const [comments, setComments] = useState("");

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();   

    const ids = uuid(); // Creating unique id
    let uni = ids.slice(0, 8); // Slicing unique id (uni)

    // Fetching a value from usestate and pushing value to javascript object
    let a = entryDate,
        b = symbol,
        c = timeframe,
        d = entrySignal,
        f = direction,
        g = shares,
        h = entryPrice,
        i = originalStop,
        j = targetOne,
        k = riskAmount,
        l = exitDate,
        m = exitSignal,
        n = exitPrice,
        o = profitLoss,
        p = comments;

    if (entryDate == "" || symbol == "" || timeframe == "" || entrySignal == "" || direction == "" || shares == "" || entryPrice == "" || originalStop == "" || targetOne == "" || riskAmount == "" || exitDate == "" || exitSignal == "" || exitPrice == "" || profitLoss == "" || comments == "" ) {
      alert("invalid input");
      return;
    }

    array.push({ id: uni, entryDate: a, symbol: b, timeframe: c, entrySignal: d, direction: f, shares: g, entryPrice: h, originalStop: i, targetOne: j, riskAmount: k, exitDate: l, exitSignal: m, exitPrice: n, profitLoss: o, comments: p });

    // Redirecting 
    history("/tradesData");
  };

  return (
    <div className="common-pages record">
      <h1 className="common-heading">Stock Trading Journal</h1>
      <h2 className="common-subheading">Record Your Trade</h2>

      <form className='form'> 
        <h3 className='journalEntryHeading'>Record Your Trade</h3>
        <div>
          <label htmlFor='entryDate'>Entry Date</label>
          <input 
            type='date' 
            id='entryDate' 
            name='entryDate' 
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
          <label htmlFor='entrySignal'>Entry Signal</label>
          <select 
            type='text' 
            id='entrySignal' 
            name='entrySignal' 
            required  
            onChange={(e) =>
              setEntrySignal(e.target.value)
            }
          >
            <option value=''>--Please select an Entry Signal</option>
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
            required  
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
            required  
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
            required  
            onChange={(e) =>
              setExitDate(e.target.value)
            }
          />
          <p className='message'>Error Message</p>
        </div> 

        <div>
          <label htmlFor='exitSignal'>Exit Signal</label>
          <select 
            type='text' 
            id='exitSignal' 
            name='exitSignal' 
            required  
            onChange={(e) =>
              setExitSignal(e.target.value)
            }
          >
            <option value=''>--Please select an Exit Signal</option>
            <option value='Full Stop Out'>Full Stop</option>
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
          <label htmlFor='exitPrice'>ExitPrice</label>
          <input 
            type='number' 
            step='0.01' 
            id='exitPrice' 
            name='exitPrice' 
            required  
            onChange={(e) =>
              setExitPrice(e.target.value)
            }
          />
          <p className='message'>Error Message</p>
        </div>

        <div>
          <label htmlFor='profitLoss'>Profit or Loss</label>
          <input 
            type='number' 
            step='0.01' 
            id='profitLoss'  
            name='profitLoss'  
            required  
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
            required  
            onChange={(e) =>
              setComments(e.target.value)
            }
          />
          <p className='message'>Error Message</p>
        </div>
      </form> 

      <div className='actions'>
        <button
          className='button'
          onClick={(e) => handelSubmit(e)}
          type="submit"
        >
          <MdAddCircleOutline size={18}  />
          Submit
        </button>

        <Link className="" to="/tradesData">
          <button
            className='button' 
            size="lg"
          >
            <MdBackspace size={18}  />
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Record;


