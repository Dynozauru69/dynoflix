import React from "react";
import {View ,Text , Image ,StyleSheet} from "react-native";

const Movie = ({ navigation }) => {
    return(
        <View
        style = {
            {
                flex: 1,
                padding: 20,
                borderRadius: 5,
                borderColor: '#DDD',
                borderWidth: 1,
                backgroundColor: '#FFF',
                marginBottom: 10,
                marginTop: 10,
            }
        }
        >
            <Image 
            style = {{ 
                        height: 300, 
                        width: 200, 
                        alignSelf: 'center', 
                        marginBottom: 10,
                    }}
            source={{uri: `https://image.tmdb.org/t/p/w200${navigation.state.params.movie.poster_path}`}}
            />
            <Text
            style = {{marginBottom: 5,}}
            >{navigation.state.params.movie.overview}</Text>
            <Text
            style = {{
                color: 'grey',
                marginBottom: 5,
        }}
            >Avalição: {navigation.state.params.movie.vote_average}</Text>
            <Text
            style = {{
                color: 'grey',
                marginBottom: 5,
            }}
        >Popularidade: {navigation.state.params.movie.popularity}</Text>
        </View>
    );
} 


Movie.navigationOptions = ({ navigation }) =>({
    title: navigation.state.params.movie.title
});
export default Movie;