import { Text, View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import { PostProps } from '../constants'


/* const styles = StyleSheet.create({
  card : {
    padding: 15,
    margin: 5,
    backgroundColor: 'white',
    fontSize: 24,
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0,0,0,0.25)'
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: '#198abc'
  },
  text: {
    fontSize: 16
  }
}) */

const Post : ({ post } : { post : PostProps}) => React.JSX.Element = ({ post }) => {
  const big = true

  return (
    <View key={ post.id } style={ styles.card }>
      <StyledText color='textColorPrimary' fontWeight='normal' fontSize='medium' padding='small' >{ post.title }</StyledText>
      <StyledText fontSize='small' color='textColorSecondary' padding='small'>{ post.body }</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  card : {
    margin: 10,
    gap: 5,
    backgroundColor: 'white',
    fontSize: 24,
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0,0,0,0.25)'
  }
})

export default Post