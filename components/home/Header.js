import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo}
                source={require('../../assets/header-logo.png')} />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
               <TouchableOpacity>
               <Image style={styles.icon}
                    source={{
                        uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
                    }} />
               </TouchableOpacity>
               <TouchableOpacity>
               <Image style={styles.icon}
                    source={{
                        uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
                    }} />
               </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>
                        11
                    </Text>
               </View>
               <Image style={styles.icon}
                    source={{
                        uri: 'https://i.pinimg.com/originals/64/0a/10/640a1064aa3daf513a5fd34e5216c95f.png'
                    }} />
               </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    iconsContainer: {
        flexDirection: 'row'
    },

    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },

    icon: {
        width: 30,
        height: 30,
        marginLeft: 8,
        resizeMode: 'contain',
    },

    unreadBadge: {
        backgroundColor: '#ff3250',
        position: 'absolute',
        bottom: 20,
        left: 18,
        width: 25,
        height: 18,
        borderRadius: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },

    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
    }
})

export default Header
