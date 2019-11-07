import {createStackNavigator} from "react-navigation";
import Main from "./pgs/main.js";

export default createStackNavigator({
    Main
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor: "red"
        },
        headerTintColor: "#FFF",
    }
});