import * as React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, TextInput, Header} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            text: ""
        }
    }

    render(){
        return(
            <View>
                <Image
                  source = {require("../PRO+C70+Images/write.png")}
                  style = {{width: 200, height: 200}}
                />
                <Header
                backgroundColor = {"#9c8210"}
                centerComponent = {{
                    text: "Write a Story",
                    style = {color: "#fff", fontSize: 35}
                }}/>

            <TextInput
              style = {styles.inputSmallBox}
              placeholder = "Story Title"
              value = {this.state.text}
              onChangeText = {text=>{this.setState({
                text: text
              })}}/>

            <TextInput
              style = {styles.inputSmallBox}
              placeholder = "Author"
              value = {this.state.text}
              onChangeText = {text=>{this.setState({
                text: text
              })}}/>

            <TextInput
              style = {styles.inputBigBox}
              placeholder = "Write Your Story"
              value = {this.state.text}
              onChangeText = {text=>{this.setState({
                text: text
              })}}
              multiline = {true}/>

            <TouchableOpacity
              style = {styles.submitButton}>
                  <Text
                    style = {styles.submitButtonText}>
                      Submit
                  </Text>
            </TouchableOpacity>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputSmallBox: {
        width:200,
        height: 200,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
    },
    inputBigBox: {
        width:200,
        height: 450,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 15
    },
    submitButton: {
        backgroundColor: "#FBC02D",
        width: 100
    },
    submitButtonText: {
        padding: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
})