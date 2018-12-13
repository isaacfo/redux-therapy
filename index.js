const {
    store,
    updateContent
} = require('./store');


// ==========================================================
// APP
// ==========================================================


// #6- set up subsciptions for notifications of when the state changes 
// and perform changes to the state
store.subscribe(() => {
    console.log('-------------');
    console.log(store.getState());
    console.log('-------------')
});

store.dispatch(updateContent('buy some milk'));
store.dispatch(updateContent('drink the milk'));
store.dispatch(updateContent('buy some cereal'));
store.dispatch(updateContent('eat the cereal'));
store.dispatch(updateContent('uu la la'));``