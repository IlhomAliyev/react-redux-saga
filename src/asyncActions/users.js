export const fetchUsers = () => {
  return (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(json));
  };
};
