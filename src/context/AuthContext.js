import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try signin
        // handle success by updating state
        // handle failure by sending err msg somewhere.
    };
};

const signout = (dispatch) => {
    return () => {
        // somehow sign out!
    }; 
};

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password});
        
        await AsyncStorage.setItem('token', response.data.token);

        dispatch({ type: 'signup', payload: response.data.token });

        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.' + JSON.stringify(err) });
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
);