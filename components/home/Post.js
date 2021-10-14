import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import { POSTS } from '../../data/Posts'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-like-instagram-flatart-icons-outline-flatarticons.png',
        likedImageUrl: 'https://img.icons8.com/color/48/ffffff/filled-like.png'
    },
    {
        name: 'Comment',
        imageUrl: 'https://img.icons8.com/ios/50/ffffff/topic.png'
    },
    {
        name: 'Share',
        imageUrl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-send-basic-ui-elements-flatart-icons-outline-flatarticons.png'
    },
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/material-outlined/24/ffffff/bookmark-ribbon--v1.png'
    }
]

const Post = () => {
    return (
        <View style={{marginBottom: 30}}>
            <Divider width={1} orientation='vertical'/>        
            {POSTS.map((post, index) => (
                <View>
                    <View>
                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            {/* Post Header */}
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
                        {/* Post Image */}
                            <View>
                                <Image source={{uri: post.imageUrl}} style={{height: 450, width: '100%', resizeMode: 'cover'}} />
                            </View>
                        </View>
                        {/* Post Footer */}
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.leftFooterIconContainer}>
                                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
                                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
                                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
                            </View>
                        </View>
                    </View>
                    <Divider width={1} orientation='vertical'/>
                </View>
            ))}    
        </View>
    )
}

const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    post: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    },

    footerIcon: {
        width: 33,
        height: 33,
        margin: 5,
    },

    leftFooterIconContainer: {
        width: '32%',
        color: 'white',
        flexDirection: 'row',
        marginBottom: 10,
    },

})

export default Post
