import React,{Component} from "react";
import {Text,View} from "react-native";
import api from "../services/api";
export default class Main extends Component{
    static navigationOptions = {
        title : "Dynoflix",
        headerTitleStyle: {
            flex : 1,
            textAlign : "center"
        }
    };
    state = {
        results : [],
    }
    componentDidMount(){
        this.loadMovies();
    }

    loadMovies = async () => {
        const response = await api.get();

        const {results} = response.data;

        this.setState({results});
    }

    render(){
        return(
            <View>
                {this.state.results.map(movies => (
                    <Text key={movies.id}>{movies.original_title}</Text>
                ))}
            </View>
        );
    }
}