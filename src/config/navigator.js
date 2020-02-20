import {NavigationActions, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {connect} from 'react-redux';
import React from 'react';
import routes from './routes';

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
const AppNavigator = createStackNavigator(routes);

export default createAppContainer(AppNavigator);
