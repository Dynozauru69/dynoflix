import React,{Component} from "react";
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from "react-native";
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
        movieInfo:{},
        results : [],
        page: 1,
    };
    componentDidMount(){
        this.loadMovies();
    }

    loadMovies = async (page = 1) => {
        const response = await api.get();

        const {results,...movieInfo} = response.data;

        this.setState({results,movieInfo})
    };
    loadMore = () =>{
        const {page,movieInfo} = this.state;

        if (page === movieInfo.total_pages) return;

        const pageNumber = page +1;

        this.loadMovies(pageNumber)
    };
    renderItem = ({ item }) => (
        <View style = {styles.movieContainer}>
            <Text style = {styles.movieTitle}>{item.original_title}</Text>
            <Text style = {styles.movieDescription}>{item.overview}</Text>

            <TouchableOpacity style = {styles.movieButton} onPress = {() =>{}}>
                <Text style = {styles.movieButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );
    render(){
        return(
            <View style = {styles.container}>
                <FlatList
                    contentContainerStyle = {styles.list}
                    data = {this.state.results}
                    keyExtractor = {item => item.id}
                    renderItem = {this.renderItem}
                    onEndReached = {this.loadMore}
                    onEndReachedThreshold = {0.1}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    list:{
        padding: 20
    },
    movieContainer:{
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    movieTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'#333'
    },
    movieDescription:{
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },
    movieButton:{
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    movieButtonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    }
});