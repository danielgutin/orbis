// ====== System Reducer.
import { 
    SETUP_INPUT_CHANGE, 
    SETUP_SIGN_WORKER, 
    SETUP_CLEAR_FIELDS,
    SETUP_UNACTIVE_WORKER,
    SETUP_EDIT_WORKER
} from '../../actions/constants';

const initState = {
   newWorker : {
       id : '',
       name : '',
       harness : '',
       uniqueID : 0
   },
   listOfActivated : [], // list of { uniqueID: 321321321 ,id : '1321315', name : 'Daniel Gutin', harness : '54654'}
   setupMode : 'create' // create / edit 
}


export default (state = initState, { type, payload }) => {
    switch(type) {
        // setup input field change action.
        case SETUP_INPUT_CHANGE:
            const { field, content } = payload;
            const newWorkerUpdate = Object.assign({}, state.newWorker);
            newWorkerUpdate[field] = content;
            return {
                ...state,
                newWorker : newWorkerUpdate
            }

        // Setup sign new worker.
        case SETUP_SIGN_WORKER:
            const { uniqueID, id, name, harness } = payload;
            // if uniqueID is undefined, it means it is a new Worker.
            // if uniqueID is value, which means a edit form submit.
            if (!uniqueID) {
                return {
                    ...state,
                    listOfActivated : [...state.listOfActivated, { uniqueID :  Math.floor(Math.random() * Math.floor(10000000)), id, name, harness }]
                }
            }

            // updating the specific worker.
            let updatedActivatedList = state.listOfActivated.map((worker) => {
                if (worker.uniqueID === uniqueID) {
                    worker.id = id;
                    worker.name = name;
                    worker.harness = harness;
                }
                return worker;
            })

            return {
                ...state,
                listOfActivated : updatedActivatedList
            }
           

        // Clear setup fields.
        case SETUP_CLEAR_FIELDS:
            return {
                ...state,
                setupMode : 'create',
                newWorker : Object.assign({}, { 
                    id : '',
                    name : '',
                    harness : '',
                    uniqueID : ''
                })
            }

        // Unactivate Worker by its id.
        case SETUP_UNACTIVE_WORKER:
            return {
                ...state,
                setupMode : 'create', 
                listOfActivated : state.listOfActivated.filter((worker) => worker.id !== payload)
            }

        // Edit worker info.
        case SETUP_EDIT_WORKER:
            return {
                ...state,
                setupMode : 'edit',
                newWorker : Object.assign({}, { 
                    id : payload.id,
                    name : payload.name,
                    harness : payload.harness,
                    uniqueID : payload.uniqueID
                })
            }
        default :
            return state;
    }
}