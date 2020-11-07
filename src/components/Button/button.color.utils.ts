import * as Colors from '../constants/colors'
import { ButtonColor, ButtonVariant } from './button.component'

const shadeToButtonColor = (shade: Colors.Shade): ButtonColor => {
  return {
    default: shade.medium,
    accent: shade.light,
    disabled: shade.dark
  }
}

export const backgroundFromColorName = (colorName: Colors.ColorKey): ButtonColor => {
  return shadeToButtonColor(Colors.ShadeMap[colorName])
}

export const backgroundColor = (args: { colorName: Colors.ColorKey, variant: ButtonVariant }): ButtonColor => {
  if (args.variant === 'default') return backgroundFromColorName(args.colorName)
  return {
    default: 'transparent',
    accent: 'transparent',
    disabled: 'transparent'
  }
}

export const textColorFromColorName = (colorName: Colors.ColorKey): ButtonColor => {
  switch (colorName) {
    case 'gray': {
      return shadeToButtonColor(Colors.BlackShade)
    }
    default: {
      return shadeToButtonColor(Colors.WhiteShade)
    }
  }
}

export const textColor = (args: { colorName: Colors.ColorKey, variant: ButtonVariant }): ButtonColor => {
  if (args.variant === 'default') return textColorFromColorName(args.colorName)
  return shadeToButtonColor(Colors.ShadeMap[args.colorName])
}

export const borderColor = (args: { colorName: Colors.ColorKey, variant: ButtonVariant }): ButtonColor => {
  if (args.variant === 'outline') {
    return shadeToButtonColor(Colors.ShadeMap[args.colorName])
  }

  return {
    default: 'transparent',
    accent: 'transparent',
    disabled: 'transparent'
  }
}