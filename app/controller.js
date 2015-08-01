import Controller from 'cerebral-react-immutable-store';

const ListMapping = function () {
    return {
        value: [],
        deps: {items: ['items']},
        get(value, deps) {
            return value.map(function (ref) {
                return deps.items[ref];
            });
        }
    };
}

const itemFields = {
    firstName: '',
    lastName: ''
};

// The initial state of the application
const state = {
    items: {},
    itemList: ListMapping,
    nextItemRef: 0,
    ...itemFields
};

// Any default arguments you want each action to receive
const defaultArgs = {
    //Nothing right now...
};

// Instantiate the controller
export default Controller(state, defaultArgs);
