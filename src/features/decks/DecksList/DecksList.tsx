import s from './DecksList.module.css'
import {Decks, decksAPI} from '../decks-api';
import {AppDispatch, AppRootState, useAppDispatch, useAppSelector} from '../../../app/store';
import {useEffect} from 'react';
import { setDecksAC} from '../decks-reducer';
import {DeckItem} from './DeckItem/DeckItem';
import {FetchDecksTC} from '../decks-thunks';


export const DecksList = () => {
  const decks=useAppSelector((state)=>state.decks.decks)
  const dispatch=useAppDispatch()
useEffect(()=>{
    dispatch(FetchDecksTC())
  /*decksAPI.getDecks()
      .then((res)=>{
        dispatch(setDecksAC(res.data.items))
      })*/
},[])

  return <ul className={s.list}>
    {decks.map((desk)=>(
        <DeckItem key={desk.id} deck={desk}/>
        )
    )}
  </ul>

}
