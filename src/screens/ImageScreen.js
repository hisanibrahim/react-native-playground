import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import ImageDetail from '../components/ImageDetail'
const ImageScreen = () => {
    return <View>
        <ImageDetail
            title="Forest"
            imageUrl={require("../../assets/forest.jpg")}
        />
        <ImageDetail
            title="Beach"
            imageUrl={require("../../assets/beach.jpg")}
        />
        <ImageDetail
            title="Mountain"
            imageUrl={require("../../assets/mountain.jpg")}
        />
    </View>
}
export default ImageScreen