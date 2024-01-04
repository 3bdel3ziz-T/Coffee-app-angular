

export type Sizes = [
  S: {
    size: Size['S'] | Dose['S'];
    price: Price;
  },
  M: {
    size: Size['M'] | Dose['M'],
    price: Price,
  },
  L: {
    size: Size['L'] | Dose['L'],
    price: Price,
  }
]

export type Dose = {
  "S": `${Amounts.S}gm`,
  "M": `${Amounts.M}gm`,
  "L": `${Amounts.L}gm`
}
export type Size = {
  "S": "S",
  "M": "M",
  "L": "L"
}

export type SizeOrDose =
  Size['S'] | Size['M'] | Size['L'] |
  Dose['S'] | Dose['M'] | Dose['L']

export type Price = `${number}`;

export enum Amounts {
  "S" = "250",
  "M" = "500",
  "L" = "1000"
}