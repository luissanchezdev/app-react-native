import React from 'react'
import { Text, StyleSheet, ThemeAttributeBackgroundPropType } from 'react-native'
import theme from '../constants/theme'

// Esto se conoce como COMPONETIZAR
const styles = StyleSheet.create({
  heading: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.large,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.large
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  text: {
    color: theme.colors.textColorPrimary,
    fontSize: theme.fontSizes.small,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  small: {
    fontSize: theme.fontSizes.small
  },
  medium : {
    fontSize: theme.fontSizes.medium
  },
  large : {
    fontSize: theme.fontSizes.large
  },
  big: {
    fontSize: theme.fontSizes.big
  },
  colorPrimary : {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.secondary
  },
  textColorPrimary: {
    color: theme.colors.textColorPrimary
  },
  textColorSecondary: {
    color: theme.colors.textColorSecondary
  },
  backgroundColorPrimary: {
    backgroundColor: theme.colors.primary
  },
  paddingSmall : {
    padding: theme.paddingSizes.small 
  },
  paddingMedium : {
    padding: theme.paddingSizes.medium
  },
  paddingLarge : {
    padding: theme.paddingSizes.large
  },
  marginSmall : {
    margin: theme.marginSizes.small 
  },
  marginMedium : {
    margin: theme.marginSizes.medium
  },
  marginLarge : {
    margin: theme.marginSizes.large
  },
})

const cardStyle = StyleSheet.create({
  card : {
    padding: 15,
    margin: 5,
    backgroundColor: 'white',
    fontSize: 24,
    borderRadius: 10
  }
})

type StyledTextProps = {
  children: React.ReactNode,
  color?: 'primary' | 'secondary' | 'textColorPrimary' | 'textColorSecondary',
  fontSize?: 'small' | 'medium' | 'large' | 'big',
  fontWeight?: 'bold' | 'normal',
  margin?: 'small' | 'medium' | 'large',
  padding?: 'small' | 'medium' | 'large'
}

export default function StyledText({ children, color, fontSize, fontWeight, margin, padding, ...restOfProps } : StyledTextProps ){
  
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'big' && styles.big,
    fontSize === 'small' && styles.small,
    fontSize === 'medium' && styles.medium,
    fontSize === 'large' && styles.large,
    fontWeight === 'bold' && styles.bold,
    margin === 'small' && styles.marginSmall,
    margin === 'medium' && styles.marginMedium,
    margin === 'large' && styles.marginLarge,
    padding === 'small' && styles.paddingSmall,
    padding === 'medium' && styles.paddingMedium,
    padding === 'large' && styles.paddingLarge,
    { ...restOfProps }
  ]
 
  return (
    <Text style={ textStyles }>
      { children }
    </Text>
  )
}