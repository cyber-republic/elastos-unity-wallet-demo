import { createStackNavigator , createAppContainer } from 'react-navigation';
import Start from '../components/start/Start';

const AppNav = createStackNavigator({
      Start: {
        screen: Start,
        headerMode: 'none',
        header: null,
      }
    },
    {
      initialRouteName: 'Start',
    }
  );

  const AppContainer = createAppContainer(AppNav);
  export default AppContainer;
