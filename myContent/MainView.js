import React, {Component} from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

class MainView extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <ScrollView>
                    {this.props.list.map((i, index) => (
                        <View  key={index}>
                            <Text style={{fontSize:20}}>Name: {i.name}, Number: {i.number}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        list: state.list
    }
}

export default connect(mapStateToProps)(MainView);