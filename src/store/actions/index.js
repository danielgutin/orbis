// Actions Dispatching Obj for reducers.
// Related constants.
import { 
    SETUP_INPUT_CHANGE,
    SETUP_SIGN_WORKER, 
    SETUP_CLEAR_FIELDS, 
    SETUP_UNACTIVE_WORKER,
    SETUP_EDIT_WORKER
} from './constants';
import { notification } from 'antd';



// ===== Setup related Actions.
// input change in setup fields.
export const setupInputChange = ( field, content ) => {
    return { type : SETUP_INPUT_CHANGE, payload : { field, content }}
}

// sigining new Worker to the system.
export const activateWorker = (uniqueID, id, name, harness) => {
    return dispatch => {
        if (!uniqueID) {
            const openNotification = () => {
                notification['success']({
                    message: 'New Worker Addiotion',
                    description: `Worker with id : ${id} and harness id: ${harness} added to Monitored List`,
                    duration: 3
                });
              };
            openNotification();
        }
        dispatch({ type : SETUP_SIGN_WORKER, payload : { uniqueID, id, name, harness }})
        dispatch({ type: SETUP_CLEAR_FIELDS });
    }  
}

// Unactivate worker by its ID.
export const unActivateWorker = (id) => {
    return { type : SETUP_UNACTIVE_WORKER, payload : id };
}

// Edit Worker info.
export const editWorkerDetails = (uniqueID, id, name, harness) => {
    return { type : SETUP_EDIT_WORKER, payload: { uniqueID, id, name, harness }}
}