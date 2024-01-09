import { CssUnits } from "./style-units"

export type BoxFlex = {
  direction: 'column' | 'row',
  gap: CssUnits
}

export type BoxStyles = {
  width?: CssUnits,
  height?: CssUnits, radius?: CssUnits, background?: string
}