import React,{Component} from "react";
import {Text,View} from "react-native";

export default class Main extends Component{
    static navigationOptions = {
        title : "Dynoflix",
        headerTitleStyle: {
            flex : 1,
            textAlign : "center"
        }
    };
    render(){
        return(
            <View>
                <Text>Pagina Main</Text>
            </View>
        );
    }
}