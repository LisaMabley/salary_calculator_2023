/**
 * Receives a number (integer or float)
 * @returns a string representing that number formatted in U.S. dollars
 * (with a dollar sign, commas between the thousands, and two decimal places).
 * Used in EmployeeCard and PageFooter.
 */

export function formatAsUSD(number) {
  const numberAsCurrencyString = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
  return numberAsCurrencyString;
}
