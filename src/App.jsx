import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import {
  asyncIncrementCreator,
  asyncDecrementCreator,
} from './store/countReducer';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);

  return (
    <div className="App">
      <h1 className="count">{count}</h1>
      <div className="btns">
        <button
          className="btn"
          onClick={() => dispatch(asyncIncrementCreator())}
        >
          Increment +
        </button>
        <button
          className="btn"
          onClick={() => dispatch(asyncDecrementCreator())}
        >
          Decrement -
        </button>
        <button className="btn" onClick={() => console.log('Set Users')}>
          Set users
        </button>
      </div>
      {users.length ? (
        users.map((u) => (
          <div key={u.id} className="userBlock">
            <p>ID: {u.id}</p>
            <p>Name: {u.name}</p>
            <p>Phone: {u.phone}</p>
            <p>E-mail: {u.email}</p>
          </div>
        ))
      ) : (
        <h1 className="noUsers">Нет пользователей!</h1>
      )}
    </div>
  );
};

export default App;
