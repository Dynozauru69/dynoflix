import {createStackNavigator} from "react-navigation";
import Main from "./pgs/main.js";
import Movie from "./pgs/movie";

export default createStackNavigator({
    Main,
    Movie
},{
    navigationOptions : {
        headerStyle:{
            backgroundColor: "red"
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
            flex : 1,
            textAlign : "center"
        }
    }
});