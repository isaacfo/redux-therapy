const {
    store,
    update,
    addNote,
    deleteNote
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

store.dispatch(updateNote('buy some milk'));
store.dispatch(updateNote('drink the milk'));
store.dispatch(updateNote('buy some cereal'));
store.dispatch(updateNote('eat the cereal'));
store.dispatch(updateNote('uu la la'));``

const idOfLastOne = store.getState().notes[store.getState().notes.length -1].id;
store.dispatch(updateNote)(idOfLastOne, 'go to lunch');
store.dispatch(deleteNote(idOfLastOne));