import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import styles from '../../assets/styles'
const HomeScreen = (props) => {
    return (
        <View style={styles.sectionContainer}>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("ImageScreen")}
            >
                <Text style={styles.sectionTitle}>Goto Image Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Second")}
            >
                <Text style={styles.sectionTitle}>Goto Second Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen