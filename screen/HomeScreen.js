import React from 'react'
import {SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import BottomTab, { bottomTabIcons } from '../components/home/BottomTab'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
            <Post />
            </ScrollView>
            <BottomTab icons={bottomTabIcons} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: 40,
    }
})

export default HomeScreen
