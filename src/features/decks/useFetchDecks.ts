import {useAppDispatch, useAppSelector} from '../../app/store';
import {useEffect} from 'react';
import {FetchDecksTC} from './decks-thunks';

export const useFetchDecks=()=>{
    const decks=useAppSelector((state)=>state.decks.decks)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(FetchDecksTC())

    },[])
    return {decks}
}