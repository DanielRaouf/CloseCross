import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/Home/HomeScreen';

export const Router = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
    },
    {
      headerMode: 'none',
    },
  ),
);
