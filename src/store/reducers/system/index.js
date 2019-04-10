// ====== System Reducer.
const initState = {
    people : [
        { id : 52545, name : 'Sharon Nemirovski', status : 'on', floor : 12, uptime : '01:25:00'},
        { id : 56784, name : 'Mark Dicky', status : 'off', floor : 0, uptime : '00:00:00'},
        { id : 56471, name : 'Maor Alush', status : 'off', floor : 0, uptime : '00:00:00'},
        { id : 52147, name : 'Daniel Gutin', status : 'off', floor : 0, uptime : '00:00:00'},
        { id : 56784, name : 'Mark Dicky', status : 'off', floor : 0, uptime : '00:00:00'},
        { id : 56471, name : 'Maor Alush', status : 'off', floor : 0, uptime : '00:00:00'},
        { id : 52147, name : 'Daniel Gutin', status : 'off', floor : 0, uptime : '00:00:00'},
    ]
}


export default (state = initState, { type, payload }) => {
    switch(type) {
        default :
            return state;
    }
}