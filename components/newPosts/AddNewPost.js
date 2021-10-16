import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import PostUploaderForm from './PostUploaderForm'

const AddNewPost = () => {
    return (
        <View>
            <Header />
            {/* POST UPLOAD FORM */}
            <PostUploaderForm />
        </View>

    )
}

const Header = () => (
    <View style={styles.headerContainer}>
            <TouchableOpacity>
            <Image source={{
                uri: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/back.png/'
            }} 
            style={{width: 30, height: 30,}} />
            </TouchableOpacity>
            <Text style={styles.headerText}>New Post</Text>
            <Text></Text>
        </View>
)

const styles = StyleSheet.create ({
    container: {
        marginHorizontal: 10,
    },

    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 25,
    }
})

export default AddNewPost
