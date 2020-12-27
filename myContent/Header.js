import React, {Component} from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import {adding, clear} from '../redux/Action'
import {styles} from '../myStyles/HeaderStyles'

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <TextInput
                placeholder="name"
                onChangeText = {(text) => this.name1 = text}
                style={styles.inputText}/>
                <TextInput
                placeholder="number"
                onChangeText = {(text)=> this.number1 = text}
                style={styles.inputText}/>
                <TouchableOpacity
                onPress = {()=> this.props.add(this.name1, this.number1)}
                style={styles.buttons}>
                    <Text style={styles.buttonsText}>Press</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {()=> this.props.clear()}
                style={styles.buttons}>
                    <Text style={styles.buttonsText}>Clear</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        add: (name, number)=>dispatch(adding(name, number)),
        clear: () => dispatch(clear())
    }

}

export default connect(null, mapDispatchToProps)(Header);