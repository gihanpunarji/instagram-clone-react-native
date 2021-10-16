import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/search.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/search.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/video.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/video.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
    },
    {
        name: 'Profile',
        active: 'https://instagram.fcmb1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/242272186_1140377576453045_3786076417699444676_n.jpg?_nc_ht=instagram.fcmb1-2.fna.fbcdn.net&_nc_ohc=l3YzoiPEgesAX9T2XvU&tn=HzTcdO_Jwah9WEiw&edm=ABfd0MgBAAAA&ccb=7-4&oh=7394bdebdfa3ee82ed5fe2d36758698d&oe=616DDD98&_nc_sid=7bff83',
        inactive: 'https://instagram.fcmb1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/242272186_1140377576453045_3786076417699444676_n.jpg?_nc_ht=instagram.fcmb1-2.fna.fbcdn.net&_nc_ohc=l3YzoiPEgesAX9T2XvU&tn=HzTcdO_Jwah9WEiw&edm=ABfd0MgBAAAA&ccb=7-4&oh=7394bdebdfa3ee82ed5fe2d36758698d&oe=616DDD98&_nc_sid=7bff83',
    }
]

const BottomTab = ({icons}) => {

    const [activeTabs, setActiveTab] = useState("Home")
    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{uri: activeTabs === icon.name ? icon.active : icon.inactive}}
            style={[styles.icon, 
            icon.name === 'Profile' ? styles.profilePicture(): null,
            activeTabs === 'Profile' && icon.name === activeTabs 
            ? styles.profilePicture(activeTabs)
            : null,
            ]} />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
                <View style={styles.container}>
                {icons.map((icon, index) => (      
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 400,
        backgroundColor: '#000'
    },

    icon: {
        width: 30,
        height: 30,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    profilePicture: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: '#fff',
    })
})

export default BottomTab
