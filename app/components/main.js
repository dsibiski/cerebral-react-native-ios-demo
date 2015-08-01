import React from 'react-native';
var {
    Text,
    TextInput,
    View,
    TouchableHighlight,
    StyleSheet,
    ListView
} = React;

import { HOC } from 'cerebral-react-immutable-store';

class Main extends React.Component {
    _onSubmit() {
        if (this.props.firstName !== '' && this.props.lastName !== '') {
            this.props.signals.formSubmitted();
            this.refs.firstNameField.focus();
        }
    }

    _renderItem(item, index) {
        return (
            <View key={index}>
                <Text style={styles.normalText}>
                    {item.firstName + ' ' + item.lastName}
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    ref='firstNameField'
                    placeholder='First Name'
                    style={styles.input}
                    value={this.props.firstName}
                    onChangeText={(text) => this.props.signals.firstNameChanged(true, {value: text}) }
                />
                <TextInput
                    ref='lastNameField'
                    placeholder='Last Name'
                    style={styles.input}
                    value={this.props.lastName}
                    onChangeText={(text) => this.props.signals.lastNameChanged({value: text}) }
                />
                <TouchableHighlight style={styles.button} onPress={this._onSubmit.bind(this)}>
                    <Text style={styles.buttonText}>+ Add Name</Text>
                </TouchableHighlight>
                <View>
                    <Text style={styles.headerText}>Names Added:</Text>
                    {this.props.itemList.map(this._renderItem)}
                </View>
            </View>
        );
    }
};

Main = HOC(Main, {
    itemList: ['itemList'],
    firstName: ['firstName'],
    lastName: ['lastName']
});

var styles = StyleSheet.create({
    container: {
        marginTop: 44,
        padding: 25
    },
    headerText: {
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold'
    },
    normalText: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 5
    },
    input: {
        marginTop: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
    },
    button: {
        height: 36,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
        marginTop: 20,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
});

export default Main;
