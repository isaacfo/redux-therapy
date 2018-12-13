const {createStore} = require('redux');
const uuid = require('uuid/v4');




// ==========================================================
// SETUP
// ==========================================================
// #1- Describe the state
const defaultState = {
    notes: [

        {
            id: uuid(),
            content:''
        }
    ]
}


// #2- List out all the changes you could make to state
/*
- UPDATE_CONTENT
- ADD_NOTE
- DELETE_NOTE
*/
const ACTION_UPDATE = {
    type: 'ACTION_UPDATE'
    // content: '?????'
    // id: '??????'
};

const ACTION_ADD = {
    type: 'ACTION_ADD',
    //content: '???'
};

const ACTION_DEL = {
    type: 'ACTION_DEL',
    // id: '???'
};


// #3- Write action creator functions
// These are fucntions that use/return those descriptions
// of changes you can make to state
const updateContent = (id, content) => {
    return {
        ...ACTION_UPDATE,
        id,
        content
    }
};

const addNote = (content) => {
    return {
        ...ACTION_ADD,
        content
    }
};

const deleteNote = (content) => {
    return {
        ...ACTION_DEL,
        id
    }
};


// #4- Write a reducer fucntion that accepts state and an action
// and returns the next version of the state
const note = (state, action) => {
    switch(action.type) {
        case ACTION_UPDATE.type:
        // if so do stuff
            return {
                notes: state.notes.map(note => {
                    if (note.id=== action.id) {
                        return {
                             ...note,
                             // alternative to spread operator: just copy all the exisiting keys 
                            //  id: note.id,
                            //  content: note.content,

                            // immeditaley overwrite the content with what
                            // came in throuh the action 
                            content: action.content
                        }
                    
                    }else {
                        // this is not the on to update
                        // just return the original
                        // return note:

                        // Anal retentive
                    }
                })
                note: {
                    content: action.content
                }
            }
        
        case ACTION_ADD.type:
            return {
                notes: [
                    // bringing in the previous content in the state
                    ...state.notes,
                    { //defining new id for the result of the action 
                        id: uuid(),
                        // the content created from the action 
                        content: action.content
                    }
                ]
            }
        default:
            return state;
    }
}


// #5- Creat a store that uses your reducer
const store = createStore(note);
// #5 and a half - export the store and the action creators 
module.exports = {
    store,
    updateContent
};