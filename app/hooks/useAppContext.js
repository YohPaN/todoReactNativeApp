import { useContext } from 'react'
import { store } from '../state/AppContext'

export default function useAppContext() {
  const { state, dispatch } = useContext(store);
  return { state, dispatch };
}