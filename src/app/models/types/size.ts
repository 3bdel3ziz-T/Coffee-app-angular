

export type Sizes = [
  S: {
    size: Size['S'];
    price: `${number}`;
  },
  M: {
    size: Size['M'],
    price: `${number}`,
  },
  L: {
    size: Size['L'],
    price: `${number}`,
  }
]

export type Size = {
  "S": "S" | `${Amounts.S}gm`,
  "M": "M" | `${Amounts.M}gm`,
  "L": "L" | `${Amounts.L}gm`
}

export enum Amounts {
  "S" = "250",
  "M" = "500",
  "L" = "1000"
}