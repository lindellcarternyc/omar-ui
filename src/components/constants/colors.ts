export const Red = '#ef476f'
export const Yellow = '#ffd166'
export const Green = '#06d6a0'
export const MediumBlue = '#118ab2'
export const DarkBlue = '#073b4c'
export const MediumGray = '#aeaeae'
export const White = '#ffffff'
export const Black = '#353535'

export interface Shade {
  light: string
  medium: string
  dark: string
}

const ColorName = {
  // 'gray' | 'blue' | 'yellow'
  gray: 'gray',
  blue: 'blue',
  yellow: 'yellow',
  red: 'red',
  darkblue: 'darkblue',
  green: 'green'
} as const

export type ColorKey = keyof typeof ColorName

export const GrayShade: Shade = {
  light: '#cccccc',
  medium: MediumGray,
  dark: '#858585'
}

export const MediumBlueShade: Shade = {
  light: '#1fb7ea',
  medium: MediumBlue,
  dark: '#0c6583'
}

export const WhiteShade: Shade = {
  light: White,
  medium: White,
  dark: White
}

export const BlackShade: Shade = {
  light: Black,
  medium: Black,
  dark: Black
}

export const YellowShade: Shade = {
  light: '#ffe099',
  medium: '#ffd166',
  dark: '#ffc847'
}

export const RedShade: Shade = {
  light: '#f47c98',
  medium: Red,
  dark: '#bc1038'
}

export const DarkBlueShade: Shade = {
  light: '#0e7395',
  medium: DarkBlue,
  dark: '#052b38'
}

export const GreenShade: Shade = {
  light: '#10f9bb',
  medium: Green,
  dark: '#049f76'
}