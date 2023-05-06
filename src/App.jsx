import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { decrementCreator, incrementCreator } from "./store/countReducer";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);

  return (
    <div className="App">
      <h1 className="count">{count}</h1>
      <div className="btns">
        <button className="btn" onClick={() => dispatch(incrementCreator())}>
          Increment +
        </button>
        <button className="btn" onClick={() => dispatch(decrementCreator())}>
          Decrement -
        </button>
        <button className="btn" onClick={() => fetchUsers}>
          Get users
        </button>
      </div>
      {users.length ? (
        users.map((u) => (
          <div className="userBlock">
            <p>{u.name}</p>
          </div>
        ))
      ) : (
        <h1 className="noUsers">Нет пользователей!</h1>
      )}
    </div>
  );
};

export default App;
