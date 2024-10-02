import { calculateInvestmentResults } from "../util/investment.js"

export default function Results({ userInput }) {
  let resultData = calculateInvestmentResults(userInput);

  console.log(resultData);
  return <p>Results</p>;
}
