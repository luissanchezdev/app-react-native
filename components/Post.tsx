import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
})

const Post = ({ post }) => {
  console.log({ post })

  return (
    <View key={ post.id } style={ styles.card }>
      <Text style={ styles.title}>{ post.title }</Text>
      <Text style={ styles.text }>{ post.body }</Text>
    </View>
  )
}

export default Post