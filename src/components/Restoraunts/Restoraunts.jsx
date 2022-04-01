import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestoraunts } from '../../store/reducers/restoraunt.reducer';

function Restoraunts() {
  const restoraunts = useSelector(store => store.restoraunt.data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestoraunts());
  }, [dispatch]);

  return (
    <ul>
      {
        restoraunts.map(restor => {
          return <li key={restor.id}>
            <h4>{restor.name}</h4>
            <p>{restor.description}</p>
          </li>
        })
      }
    </ul>
  )
}

export default Restoraunts
