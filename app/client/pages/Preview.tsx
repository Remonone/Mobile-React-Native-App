import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Text, Image, TouchableHighlight, View } from 'react-native'
import { styles } from '../styles/styles'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../types/Navigation'

type Props = StackScreenProps<RootStackParamList, "Preview">

const Preview = ({route, navigation}: Props) => {
    const [switcher, onSwitch] = useState(false)
    return (
        <View style={styles.container}>
            <View>
                <TouchableHighlight activeOpacity={0.2} underlayColor="#FAFAFA" style={switcher ? styles.fade : styles.main} onPress={() => onSwitch(true)}>
                <>
                    <View style={styles.preview}>
                        <Image source={require('../assets/preview-image.png')}/>
                        <Text style={[styles.heading1, {marginHorizontal: 80, textAlign: 'center', paddingTop: 55}]}>Welcome To India!</Text>
                        <Text style={[styles.subtitle1, {textAlign: 'center', marginHorizontal:60, paddingTop: 4}]}>The best real state application to complete your life.</Text>
                    </View>
                    <StatusBar style="auto" />
                </>
                </TouchableHighlight>
            </View> 
            <View style={ switcher ? styles.main : styles.fade}>
                <TouchableHighlight onPress={() => onSwitch(false)}>
                    <>
                        <Text>This is main Menu!</Text>
                    </>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Preview