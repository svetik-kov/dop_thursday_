import {Decks, decksAPI} from './decks-api';
import {Dispatch} from 'redux';

const initialState = {
    decks: [] as Decks[], // todo: add type
    searchParams: {
        name: '',
    },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: ActionType): DecksState => {
    switch (action.type) {
        case 'SET-DECKS':
            return {...state, decks: action.decks.map(d => d)}
        default:
            return state
    }
    //return state
}

export const setDecksAC = (decks: Decks[]) => {
    return {type: 'SET-DECKS', decks}
}


export type SetDecksType = ReturnType<typeof setDecksAC>
type ActionType = SetDecksType