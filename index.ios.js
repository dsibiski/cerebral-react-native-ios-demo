import React from 'react-native';
var { AppRegistry } = React;

import Controller from './app/controller';
import AppContainer from './app/components/app-container'

var {
    setFirstName,
    setLastName,
    addItem,
    increaseItemRef,
    resetAllFields,
    displayList
} = require('./app/actions')

Controller.signal(
    'firstNameChanged',
    setFirstName
);

Controller.signal(
    'lastNameChanged',
    setLastName
);

Controller.signal(
    'formSubmitted',
    addItem,
    increaseItemRef,
    resetAllFields,
    displayList
);

const CerebralReactNativeIOSDemo = React.createClass({
  render() {
      return Controller.injectInto(AppContainer);
  }
});

AppRegistry.registerComponent('CerebralReactNativeIOSDemo', () => CerebralReactNativeIOSDemo);
