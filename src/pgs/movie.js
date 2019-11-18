import React, { Component } from "react";
import {View ,Text} from "react-native";

Movie.navigationOptions = ({ navigation }) =>({
    title: navigation.state.params.movie.title
});

export default class Movie extends Component{
    render(){
        return(
    <View>
        <Text>{navigation.state.params.movie.overview}</Text>
    </View>
        )}
};