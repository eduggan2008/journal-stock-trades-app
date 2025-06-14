// Filename - components/array.js

// Javascript object named array 
// with 3 key-values
const array = [
  {
      id: "1",
      entryDate: "2025-01-06",
      symbol: "BABA",
      timeframe: "15 Minute",
      reasonForEntry: "EB",
      direction: "Long",
      shares: "50",
      entryPrice: "87.10", 
      originalStop: "86.00",
      targetOne: "90.40",
      riskAmount: "55.00",
      exitDate: "2025-01-06",
      exitPrice: "85.99",
      reasonForExit: "Stop Out",
      winLossBreakeven: "Loss",
      profitLoss: "-55.50",
      comments: "Not the best entry, but decent enough.  Trade just didn't work out."
  },
  {
      id: "2",
      entryDate: "2025-01-08",
      symbol: "AAPL",
      timeframe: "Daily",
      reasonForEntry: "Breakdown",
      direction: "Short",
      shares: "10",
      entryPrice: "240.90", 
      originalStop: "245.80",
      targetOne: "226.20",
      riskAmount: "49.00",
      exitDate: "2025-01-14",
      exitPrice: "233.09",
      reasonForExit: "Bar x Bar",
      winLossBreakeven: "Win",
      profitLoss: "78.10",
      comments: "Good entry.  Will see if time shows whether or not the exit was good."
  },  
  {
      id: "3",
      entryDate: "2025-01-08",
      symbol: "QID",
      timeframe: "Daily",
      reasonForEntry: "EB",
      direction: "Long",
      shares: "25",
      entryPrice: "32.51", 
      originalStop: "30.50",
      targetOne: "38.54",
      riskAmount: "50.25",
      exitDate: "2025-01-15",
      exitPrice: "32.52",
      reasonForExit: "Trail Stop",
      winLossBreakeven: "Break Even",
      profitLoss: "0.25",
      comments: "Moved stop to BE after a 1R move.  Got stopped out at BE."
  },  
  {
      id: "4",
      entryDate: "2025-02-03",
      symbol: "SDS",
      timeframe: "Daily",
      reasonForEntry: "EB",
      direction: "Long",
      shares: "100",
      entryPrice: "19.40", 
      originalStop: "18.40",
      targetOne: "22.40",
      riskAmount: "100.00",
      exitDate: "2025-02-13",
      exitPrice: "18.42",
      reasonForExit: "Stop out",
      winLossBreakeven: "Loss",
      profitLoss: "-97.75",
      comments: "Probably not the best entry, EB but not clearing."
  },  
  {
      id: "5",
      entryDate: "2025-02-06",
      symbol: "GOOGL",
      timeframe: "Daily",
      reasonForEntry: "Breakdown",
      direction: "Short",
      shares: "20",
      entryPrice: "185.98", 
      originalStop: "187.25",
      targetOne: "174.25",
      riskAmount: "50.00",
      exitDate: "2025-02-24",
      exitPrice: "178.86",
      reasonForExit: "Trail Stop",
      winLossBreakeven: "Win",
      profitLoss: "142.40",
      comments: "Added to the trade and adjusted stop to the pivot."
  },  
  {
      id: "6",
      entryDate: "2025-02-07",
      symbol: "QID",
      timeframe: "Daily",
      reasonForEntry: "EB",
      direction: "Long",
      shares: "25",
      entryPrice: "31.13", 
      originalStop: "30.13",
      targetOne: "32.63",
      riskAmount: "25.00",
      exitDate: "2025-02-13",
      exitPrice: "30.49",
      reasonForExit: "Stop Out",
      winLossBreakeven: "Loss",
      profitLoss: "-16.00",
      comments: "Moved stop because I didn/t like the way the stock has been trading lately."
  }, 
  {
    id: "7",
    entryDate: "2025-02-21",
    symbol: "BABA",
    timeframe: "Daily",
    reasonForEntry: "Bearish Gapdown",
    direction: "Long Put Option",
    shares: "200",
    entryPrice: "0.35", 
    originalStop: "0.00",
    targetOne: "0.75",
    riskAmount: "70.00",
    exitDate: "2025-02-24",
    exitPrice: "0.45",
    reasonForExit: "Trail stop",
    winLossBreakeven: "Win",
    profitLoss: "19.00",
    comments: "This was a long 250417 P97.5 Put Option 2 contracts"
  },  
  {
    id: "8",
    entryDate: "2025-02-24",
    symbol: "SDS",
    timeframe: "Daily",
    reasonForEntry: "Bull Elephant at support",
    direction: "Long",
    shares: "50",
    entryPrice: "19.09", 
    originalStop: "18.74",
    targetOne: "25.00",
    riskAmount: "35.00",
    exitDate: "2025-02-26",
    exitPrice: "19.15",
    reasonForExit: "BE stop",
    winLossBreakeven: "Break Even",
    profitLoss: "3.00",
    comments: "Good entry.  Moved stop to BE too early"
  }, 
  {
    id: "9",
    entryDate: "2025-02-26",
    symbol: "SDS",
    timeframe: "Daily",
    reasonForEntry: "RBI",
    direction: "Long",
    shares: "100",
    entryPrice: "19.40", 
    originalStop: "18.92",
    targetOne: "25.00",
    riskAmount: "48.00",
    exitDate: "2025-02-28",
    exitPrice: "19.44",
    reasonForExit: "BE stop",
    winLossBreakeven: "Break Even",
    profitLoss: "4.00",
    comments: "Again, good entry but moved stop to BE too early"
  }, 
  {
    id: "10",
    entryDate: "2025-03-03",
    symbol: "SDS",
    timeframe: "Daily",
    reasonForEntry: "Bull 180",
    direction: "Long",
    shares: "150",
    entryPrice: "20.27", 
    originalStop: "19.77",
    targetOne: "22.25",
    riskAmount: "75.00",
    exitDate: "2025-03-04",
    exitPrice: "20.61",
    reasonForExit: "Trail stop",
    winLossBreakeven: "Win",
    profitLoss: "51.00",
    comments: "Good trade that didn't follow through on 2nd half.  Took profits on 100 shares, BE stop out on last 50 shares"
  }, 
  {
    id: "11",
    entryDate: "2025-03-05",
    symbol: "SPXL",
    timeframe: "5 Minute",
    reasonForEntry: "Scalp",
    direction: "Long",
    shares: "25",
    entryPrice: "156.01", 
    originalStop: "155.51",
    targetOne: "158.00",
    riskAmount: "12.50",
    exitDate: "2025-03-05",
    exitPrice: "157.54",
    reasonForExit: "Trail stop",
    winLossBreakeven: "Win",
    profitLoss: "38.25",
    comments: "Good scalp trade againt the trend after multiple down days.  Tightened stop to 3R after almost reaching original target."
  }, 
  {
    id: "12",
    entryDate: "2025-03-10",
    symbol: "TSLA",
    timeframe: "5 Minute",
    reasonForEntry: "Bull (+)180",
    direction: "Long",
    shares: "10",
    entryPrice: "240.08", 
    originalStop: "237.08",
    targetOne: "249.08",
    riskAmount: "30.00",
    exitDate: "2025-03-10",
    exitPrice: "240.36",
    reasonForExit: "BE stop out",
    winLossBreakeven: "Break Even",
    profitLoss: "2.80",
    comments: "Good trade.  After break even stop put in stock turned around and made huge new lows on very heavy volumn"
  }, 
  {
    id: "13",
    entryDate: "2025-03-11",
    symbol: "TSLA",
    timeframe: "15 Minute",
    reasonForEntry: "Bull Elephant after huge down day",
    direction: "Long",
    shares: "10",
    entryPrice: "224.63", 
    originalStop: "222.00",
    targetOne: "234.00",
    riskAmount: "26.30",
    exitDate: "2025-03-11",
    exitPrice: "229.72",
    reasonForExit: "Trailing Stop",
    winLossBreakeven: "Win",
    profitLoss: "50.90",
    comments: "Good trade, except I accidentally put in a limit order instead of a stop loss order for exit, and it was filled instantly."
  }, 
  {
    id: "14",
    entryDate: "2025-03-14",
    symbol: "SPXL",
    timeframe: "5 Minute",
    reasonForEntry: "Bull Elephant off 200ma",
    direction: "Long",
    shares: "10",
    entryPrice: "140.13", 
    originalStop: "138.00",
    targetOne: "146.50",
    riskAmount: "21.30",
    exitDate: "2025-03-15",
    exitPrice: "143.93",
    reasonForExit: "Take profit 1/2, Bar x Bar 1/2",
    winLossBreakeven: "Win",
    profitLoss: "37.95",
    comments: "Good trade.  Could have held longer though."
  }, 
  {
    id: "15",
    entryDate: "2025-03-24",
    symbol: "BABA",
    timeframe: "Daily",
    reasonForEntry: "Breakdown",
    direction: "Short",
    shares: "20",
    entryPrice: "132.68", 
    originalStop: "135.37",
    targetOne: "122.00",
    riskAmount: "53.80",
    exitDate: "2025-03-27",
    exitPrice: "134.40",
    reasonForExit: "Stopped out",
    winLossBreakeven: "Loss",
    profitLoss: "-34.35",
    comments: "Good initial entry, but added size on a confirmation of the entry bar low, which was a mistake."
  }, 
  {
    id: "16",
    entryDate: "2025-03-28",
    symbol: "QID",
    timeframe: "5 Minute",
    reasonForEntry: "Breakout",
    direction: "Long",
    shares: "25",
    entryPrice: "36.68", 
    originalStop: "36.25",
    targetOne: "38.00",
    riskAmount: "10.75",
    exitDate: "2025-03-28",
    exitPrice: "37.48",
    reasonForExit: "Trail stop hit",
    winLossBreakeven: "Win",
    profitLoss: "20.00",
    comments: "Good trade but could have held longer.  It did reach 3R"
  }, 
  {
    id: "17",
    entryDate: "2025-03-31",
    symbol: "GOOG",
    timeframe: "Daily",
    reasonForEntry: "Gap and Snap",
    direction: "Long",
    shares: "10",
    entryPrice: "156.00", 
    originalStop: "152.00",
    targetOne: "168.00",
    riskAmount: "40.00",
    exitDate: "2025-04-01",
    exitPrice: "157.71",
    reasonForExit: "Trail stop hit",
    winLossBreakeven: "Win",
    profitLoss: "17.10",
    comments: "I wanted to be flat before Trump's big Tariff announcement tomorrow. Very good decision!"
  }, 
  {
    id: "18",
    entryDate: "2025-04-03",
    symbol: "QID",
    timeframe: "1 Minute",
    reasonForEntry: "Scalp a pullback buy setup",
    direction: "Long",
    shares: "25",
    entryPrice: "39.71", 
    originalStop: "39.49",
    targetOne: "40.37",
    riskAmount: "5.50",
    exitDate: "2025-04-03",
    exitPrice: "39.49",
    reasonForExit: "Stop out",
    winLossBreakeven: "Loss",
    profitLoss: "-5.50",
    comments: "Good trade that didn't follow through"
  }, 
  {
    id: "19",
    entryDate: "2025-04-04",
    symbol: "BABA",
    timeframe: "1 Minute",
    reasonForEntry: "W-Bottom Setup",
    direction: "Long",
    shares: "25",
    entryPrice: "117.04", 
    originalStop: "116.50",
    targetOne: "120.00",
    riskAmount: "13.50",
    exitDate: "2025-04-04",
    exitPrice: "117.03",
    reasonForExit: "Break even stop hit",
    winLossBreakeven: "Break Even",
    profitLoss: "-0.25",
    comments: "Moved stop to BE after 2R move.  Full stop would have been hit so good moving stop to BE"
  }, 
  {
    id: "20",
    entryDate: "2025-04-04",
    symbol: "BABA",
    timeframe: "1 Minute",
    reasonForEntry: "BT bar at 5 minute support area",
    direction: "Long",
    shares: "25",
    entryPrice: "115.12", 
    originalStop: "114.50",
    targetOne: "120.00",
    riskAmount: "15.50",
    exitDate: "2025-04-04",
    exitPrice: "144.45",
    reasonForExit: "Stop out",
    winLossBreakeven: "Loss",
    profitLoss: "-16.75",
    comments: "After a 2R move I decided not to move stop to BE.  It turns out I should have moved the stop after all."
  }, 
  {
    id: "21",
    entryDate: "2025-04-16",
    symbol: "AAPL",
    timeframe: "Daily",
    reasonForEntry: "Sell Setup",
    direction: "Short",
    shares: "25",
    entryPrice: "199.19", 
    originalStop: "204.19",
    targetOne: "184.19",
    riskAmount: "125.00",
    exitDate: "2025-04-22",
    exitPrice: "194.85",
    reasonForExit: "Various",
    winLossBreakeven: "Win",
    profitLoss: "108.60",
    comments: "Stop to BE after 1/2R move. Trail stop out 15 shares @ $195.00. Tight intraday trail stop 5 shares. Final stop BE 5 shares."
  }, 
  {
    id: "22",
    entryDate: "2025-04-30",
    symbol: "QID",
    timeframe: "Daily",
    reasonForEntry: "None",
    direction: "Long",
    shares: "25",
    entryPrice: "35.55", 
    originalStop: "34.00",
    targetOne: "39.00",
    riskAmount: "38.75",
    exitDate: "2025-05-01",
    exitPrice: "33.16",
    reasonForExit: "Stop out",
    winLossBreakeven: "Loss",
    profitLoss: "-59.75",
    comments: "Bad entry, I was guessing price might bounce. Stop out bigger than planned due to gap down below stop."
  }, 
  {
    id: "23",
    entryDate: "2025-05-09",
    symbol: "GOOG",
    timeframe: "Daily",
    reasonForEntry: "Inside Bar",
    direction: "Short",
    shares: "25",
    entryPrice: "154.03", 
    originalStop: "157.00",
    targetOne: "145.00",
    riskAmount: "74.25",
    exitDate: "2025-05-12",
    exitPrice: "159.06",
    reasonForExit: "Stop out",
    winLossBreakeven: "Loss",
    profitLoss: "-125.75",
    comments: "Stopped out at the open after a huge gap aginst me.  I paid an extra $2.06 in slippage per share due to the large gap up.  2R loss!"
  }, 
  {
    id: "24",
    entryDate: "2025-05-21",
    symbol: "SPXL",
    timeframe: "Daily",
    reasonForEntry: "Bear elephant bar anticipatory",
    direction: "Short",
    shares: "10",
    entryPrice: "147.97", 
    originalStop: "157.00",
    targetOne: "130.00",
    riskAmount: "90.30",
    exitDate: "2025-05-23",
    exitPrice: "143.08",
    reasonForExit: "Trail stop",
    winLossBreakeven: "Win",
    profitLoss: "48.80",
    comments: "On a big gap down in my favor, tightened stops intraday to lock some profits"
  }, 
  {
    id: "25",
    entryDate: "2025-05-27",
    symbol: "SHOP",
    timeframe: "Daily",
    reasonForEntry: "Pullback to support",
    direction: "Long",
    shares: "10",
    entryPrice: "104.50", 
    originalStop: "101.50",
    targetOne: "113.50",
    riskAmount: "30.00",
    exitDate: "2025-05-31",
    exitPrice: "107.93",
    reasonForExit: "Trail stop",
    winLossBreakeven: "Win",
    profitLoss: "34.25",
    comments: "5-30 move trail stop on 5 shares on strong move up intraday.  5-31 trail stop bar x bar final 5 shares"
  }, 
  {
    id: "26",
    entryDate: "2025-06-03",
    symbol: "CF",
    timeframe: "5 Minute",
    reasonForEntry: "Bear elephant gift zone",
    direction: "Short",
    shares: "50",
    entryPrice: "92.23", 
    originalStop: "93.00",
    targetOne: "91.50",
    riskAmount: "38.50",
    exitDate: "2025-06-03",
    exitPrice: "92.01",
    reasonForExit: "Trail stop",
    winLossBreakeven: "Win",
    profitLoss: "11.25",
    comments: "This was a day trade FYI. Should have been more patient with 2nd lot (25 shares).  IPT hit and then some!"
  }, 
]

export default array;


// NOTE: Use this as a template for new entries:

/*

  {
    id: "",
    entryDate: "",
    symbol: "",
    timeframe: "",
    reasonForEntry: "",
    direction: "",
    shares: "",
    entryPrice: "", 
    originalStop: "",
    targetOne: "",
    riskAmount: "",
    exitDate: "",
    exitPrice: "",
    reasonForExit: "",
    winLossBreakeven: "",
    profitLoss: "",
    comments: ""
  }, 
*/
