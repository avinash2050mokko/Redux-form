import React from 'react'
import {View,Text} from 'react-native'

export default class DisplayUser extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Display"
        };
    };

    render(){
        return(<Text>Display</Text>)
    }
}