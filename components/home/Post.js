import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'
import { POSTS } from '../../data/Posts'

const Post = () => {
    return (
        <View style={{marginBottom: 30}}>
            <Divider width={1} orientation='vertical'/>
            {/* Post Header */}
            {POSTS.map((post, index) => (
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View key={index} style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 5,
                }}>
                    <Image source={{ uri: post.profile_picture }} style={styles.post} />
                    <Text style={{
                        color: 'white',
                        marginLeft: 5,
                    }}>
                        {post.user}
                    </Text>
                    </View>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>...</Text>
                </View>
                
            ))}    
        </View>
    )
}


const styles = StyleSheet.create({
    post: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    }
})

export default Post
