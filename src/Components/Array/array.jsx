// Filename - components/array.js

// Javascript object named array 
// with 3 key-values
const array = [
  {
      id: "1",
      entryDate: "2024-01-02",
      symbol: "AAPL",
      timeframe: "2 Minute",
      entrySignal: "EB",
      direction: "Long",
      shares: "200",
      entryPrice: "187.50", 
      originalStop: "187.00",
      targetOne: "189.00",
      riskAmount: "100.00",
      exitDate: "2024-01-02",
      exitSignal: "Bar x Bar",
      exitPrice: "188.75",
      profitLoss: "250.00",
      comments: "Good trade!"
  },
  {
      id: "2",
      entryDate: "2024-01-02",
      symbol: "SQ",
      timeframe: "5 Minute",
      entrySignal: "VSS",
      direction: "Short",
      shares: "200",
      entryPrice: "82.75", 
      originalStop: "83.25",
      targetOne: "81.25",
      riskAmount: "100.00",
      exitDate: "2024-01-02",
      exitSignal: "Break Even Stop",
      exitPrice: "82.75",
      profitLoss: "0.00",
      comments: "Good entry, but moved stop too break even too quickly"
  },
  {
      id: "3",
      entryDate: "2024-01-02",
      symbol: "CSCO",
      timeframe: "5 Minute",
      entrySignal: "Breakout",
      direction: "Long",
      shares: "200",
      entryPrice: "46.20", 
      originalStop: "45.70",
      targetOne: "47.70",
      riskAmount: "100.00",
      exitDate: "2024-01-02",
      exitSignal: "8ma",
      exitPrice: "46.99",
      profitLoss: "158.00",
      comments: "Not the best entry, but I was patient holding on to my exit strategy!"
  },
];

export default array;

