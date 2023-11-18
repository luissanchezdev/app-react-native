import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { posts } from '../constants/data'
import Post from './Post'

const ListPost = () => {
  console.log({ posts })

  return (
    <FlatList
      data = { posts }
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem = { ({ item : post}) => {
       return (
        <Post post={ post } />
       )
      }}
    >
    </FlatList>
  )
}

export default ListPost