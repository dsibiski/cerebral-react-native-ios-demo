export default {
    setFirstName(args, state) {
        state.set('firstName', args.value);
    },

    setLastName(args, state) {
        state.set('lastName', args.value);
    },

    addItem(args, state) {
        const firstName = state.get('firstName');
        const lastName = state.get('lastName');
        let ref = state.get('nextItemRef');
        state.set(['items', ref], {
            firstName: firstName,
            lastName: lastName
        });
    },

    increaseItemRef(args, state) {
        let ref = state.get('nextItemRef');
        state.set('nextItemRef', ++ref);
    },

    resetAllFields(args, state) {
        state.set('firstName', '');
        state.set('lastName', '');
    },

    displayList(args, state) {
        const items = state.get('items');
        state.set('itemList', Object.keys(items));
    }
};
