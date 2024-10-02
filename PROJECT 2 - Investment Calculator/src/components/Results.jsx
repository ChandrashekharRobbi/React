import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {
  let resultData = calculateInvestmentResults(userInput);
  let inititalInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          let totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            inititalInvestment;

          let totalAmountInterested =
            yearData.valueEndOfYear - yearData.interest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInterested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
