import React from "react";
import {View ,Text , Image} from "react-native";

const Movie = ({ navigation }) => {
    return(
        <View>
            <Image 
            style = {{ flex:1, }}
            source={{uri: `https://image.tmdb.org/t/p/original${navigation.state.params.movie.poster_path}`}}
            />
            <Text>{navigation.state.params.movie.overview}</Text>
        </View>
    );
} 


Movie.navigationOptions = ({ navigation }) =>({
    title: navigation.state.params.movie.title
});
export default Movie;