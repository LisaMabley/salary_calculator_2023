export function formatAsUSD(number) {
  // For more information about formatting numbers as international currency,
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}
