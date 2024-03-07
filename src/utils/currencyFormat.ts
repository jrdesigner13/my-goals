export function currencyFormat(value: number) {
  return value.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  })
}
