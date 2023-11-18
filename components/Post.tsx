import { Text, View, FlatList } from 'react-native'

const Post = ({ post }) => {
  console.log({ post })

  return (
    <View key={ post.id }>
      <Text>{ post.title }</Text>
      <Text>{ post.body }</Text>
    </View>
  )
}

export default Post