import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import AddNewPost from '../components/newPosts/AddNewPost'

const NewPostScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'black', paddingTop: 40}}>
            <AddNewPost />
        </SafeAreaView>
    )
}

export default NewPostScreen
