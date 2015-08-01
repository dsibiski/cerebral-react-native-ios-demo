import React from 'react-native';
var { NavigatorIOS } = React;

import Main from './main';

class AppContainer extends React.Component {
    render() {
        return (
            <React.NavigatorIOS
                style={{flex: 1}}
                barTintColor='#48BBEC'
                initialRoute={{
                    title: 'Cerebral on React Native!',
                    component: Main
                }}
            />
        );
    }
};

export default AppContainer;
