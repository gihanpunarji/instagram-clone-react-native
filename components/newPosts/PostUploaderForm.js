import React, { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import * as Yup from 'yup'
import { Formik} from 'formik'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { Button } from 'react-native-elements'

const PLACEHOLDER_IMG = 'https://th.bing.com/th/id/OIP.YUw9H5PRVyu9XYcjmsbHaQHaEK?w=318&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'

const uploadPostSchema = Yup.object().shape({
    imageUrl : Yup.string().url().required('A URL Required.'),
    caption : Yup.string().max(2200, 'Caption has reached the character limit.')
})

const PostUploaderForm = () => {

    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    return (
        <Formik 
        initialValues={{caption: '', imageUrl: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={uploadPostSchema}
        validateOnMount={true} >

        {({ 
            handleBlur, 
            handleChange, 
            handleSubmit, 
            values, 
            errors,
            isValid,
        }) =>

        <>
        <View style={{margin: 20, 
            flexDirection: 'row', 
            justifyContent: 'space-between'}}>
            <Image source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}} style={{width: 100, height: 100}} />

            <View style={{flex: 1, marginLeft: 10}}>
                <TextInput placeholder='Write a caption' 
                placeholderTextColor='gray'
                multiline={true} 
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
                style={{color: 'white', fontSize: 20}} />
            </View>

        </View>
        <Divider width={.3} orientation='vertical' />
        <TextInput placeholder='Enter a image URL' 
            placeholderTextColor='gray'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            style={{color: 'white', fontSize: 16, marginTop: 5, marginBottom: 5}} />
            {errors.imageUrl && (
                <Text style={{color: 'red'}}>
                    {errors.imageUrl}
                </Text>
            )}

            <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
        </>
        }
        </Formik>
    )
}

export default PostUploaderForm
