// React.
import React, { Fragment } from 'react';

// Router.
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Views (Screens).
import Home from './views/Home/index';
import MeetPeople from './views/MeetPeople/index';

/**
 * TODO: Find how to apply styles to the stack navigator.
 */
export const MainNavigator = createStackNavigator(
    {
        MeetPeople: {
            screen: MeetPeople,
        },
        Home: { screen: Home },
    },
    {
        headerMode: 'none',
        initialRouteName: 'MeetPeople',
        // initialRouteName: 'Home'
    });

const AppMain = createAppContainer(MainNavigator);

export default AppMain;
