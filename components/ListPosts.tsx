import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { posts } from '../constants/data'
import StyledText from './StyledText'
import Post from './Post'

const styles = StyleSheet.create({
  container : {
    display: 'flex',
    gap: 10,
    padding: 10
  },
  title : {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#198abc',
    padding: 10
  }
})

const ListPost = () => {

  return (
    <>
      <StyledText fontSize='big' color='primary' fontWeight='bold' > Posts </StyledText>
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
    </>
  )
}

export default ListPost