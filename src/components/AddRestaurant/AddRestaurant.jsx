import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, postRestoraunt } from '../../store/reducers/restoraunt.reducer';

import styles from './AddRestaurant.module.css';

function AddRestaurant() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    average: "",
    status: "",
    kategorii: null
  });

  const categories = useSelector((store) => store.restoraunt.categories);

  const dispatch = useDispatch();

  const changeHandler = e => {
    setRestaurant(restaurant => {
      let value = e.target.value;;

      if (e.target.name === 'kategorii') {
        value = parseInt(value, 10);
      }

      return {
        ...restaurant,
        [e.target.name]: value,
      };
    });
  }

  const submitHandler = e => {
    e.preventDefault();

    const data = {
      data: {...restaurant}
    };

    dispatch(postRestoraunt(data));
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.group}>
          <select
            name="kategorii"
            className={styles.input}
            onChange={changeHandler}
          >
            <option defaultValue={restaurant.kategorii} hidden>
              Выберите категорию
            </option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="name"
            onChange={changeHandler}
            placeholder="Название ресторана"
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="description"
            onChange={changeHandler}
            placeholder="Описание ресторана"
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="number"
            onChange={changeHandler}
            name="average"
            placeholder="Средний чек"
          />
        </div>
        <div className={styles.group}>
          <select
            className={styles.input}
            name="status"
            onChange={changeHandler}
            value={restaurant.status}
          >
            <option defaultValue={restaurant.status} hidden>
              Выберите статус
            </option>
            <option value="opened">Открыто</option>
            <option value="closed">Закрыто</option>
          </select>
        </div>
        <div className={styles.group}>
          <button>Добавить ресторан</button>
        </div>
      </form>
    </div>
  );
}

export default AddRestaurant
