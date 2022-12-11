import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultShowScreen from "./src/screens/ResultsShowScreen";
import SearchScreen from "./src/screens/searchScreen";
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);
export default createAppContainer(navigator);
