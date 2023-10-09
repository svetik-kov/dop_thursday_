import {decksAPI} from './decks-api';
import {setDecksAC} from './decks-reducer';
import {Dispatch} from 'redux';

export const FetchDecksTC = () => {
    return (dispatch: Dispatch) => {
        decksAPI.getDecks()
            .then((res) => {
                dispatch(setDecksAC(res.data.items))
            })
    }
}