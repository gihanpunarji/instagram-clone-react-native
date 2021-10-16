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
        <View style={{marginBottom: 30,}}>
            <Divider width={1} orientation='vertical'/>        
            {POSTS.map((post, index) => (
                <View key={index}>
                {/* POST HEADER */}
                    <PostHeader post={post}/>
                {/* POST IMAGE */}
                <View key={index}>
                    <PostImage post={post} />
                </View>
                {/* POST FOOTER */}
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.leftFooterIconContainer}>
                        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
                        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
                        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}} key={index}>
                        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
                    </View>
                </View>
                {/* LIKES */}
                <View>
                    <Like post={post} />
                </View>
                {/* CAPTION */}
                <View>
                    <Caption post={post} />
                </View>
                {/* COMMENT SECTION */}
                <View>
                    <CommentSection post={post} />
                </View>
                {/* COMMENTS */}
                <View>
                    <Comments post={post} />
                </View>
                    <Divider width={1} orientation='vertical'/>    
                </View>
            ))}    
        </View>
    )
}

const PostHeader = ({post}) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 5}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
                <Image source={{ uri: post.profile_picture }} style={styles.post} />
            </View>
            <Text style={{
                color: 'white',
                marginLeft: 5}}>
                {post.user}
            </Text>
        </View>
        <Text style={{color: 'white',  fontWeight: 'bold', fontSize: 18}}>...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View>
        <Image source={{uri: post.imageUrl}} style={{height: 450, width: '100%', resizeMode: 'cover'}}></Image>
    </View>
)

const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}} />
    </TouchableOpacity>
)

const Like = ({post}) => (
    <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5}}>{post.likes + ' likes'}</Text>
)

const Caption = ({post}) => (
    <View style={{marginLeft: 6}}>
        <Text style={{color: 'white'}}>
        <Text style={{fontWeight: 'bold'}}>{post.user} : </Text>
        <Text>{post.caption}</Text>
    </Text>
    </View>
)

const CommentSection = ({post}) => (
    <View style={{marginTop: 5}}>
        {post.comments.length && (
            <Text style={{color: 'gray', marginLeft: 5}}> 
            View{post.comments.length > 1 ? ' all ': ''}
            {post.comments.length > 1 ? post.comments.length : ' '}
            {post.comments.length > 1 ? ' comments' : ' comment'}
        </Text>
        )}
    </View>
)

const Comments = ({post}) => (
    <View style={{marginBottom: 20}}>
        {post.comments.map((comment, index) => (
            <View key={index}>  
                <Text style={{color: 'white', marginLeft: 5}}>
                    {comment.user} : {comment.comment}
                </Text>
            </View>
        ))}
    </View>
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
        marginBottom: 4,
    },

})

export default Post
