// import App from './src/App.js';
// import { AppRegistry } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

// AppRegistry.registerComponent('App', () => App);

// export default App;
import React from 'react';
// import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigations/Tab';


const App = () => {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    )
}

export default App;

// /* src/App.js */

