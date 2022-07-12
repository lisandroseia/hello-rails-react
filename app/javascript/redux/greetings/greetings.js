const GET_GREETINGS = 'greetings/GET_GREETINGS';

const initialState = 'default greeting'

export const getGreetings = (payload) => ({
    type: GET_GREETINGS,
    payload
});


export const getGreetingsFromApi = () => async (dispatch) => {
    await fetch('greetings')
    .then((response) => response.json())
    .then((data) => {
        dispatch(getGreetings(data.greeting.text))
    })
    .catch(error => console.log(error))
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_GREETINGS: {
            return action.payload
        }
        default: 
        return state
    }
}

export default reducer