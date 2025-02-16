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
      shares: "10",
      entryPrice: "187.75", 
      originalStop: "192.75",
      targetOne: "172.75",
      riskAmount: "50.00",
      exitDate: "",
      exitPrice: "",
      reasonForExit: "",
      winLossBreakeven: "",
      profitLoss: "",
      comments: ""
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
]

export default array;

