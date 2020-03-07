const fetchAllUsers = async () => {
  const headers = {
    "Content-Type": "application/json"
  };

  const users = await fetch("http://localhost:8000/users/", headers);

  return await users.json();
};

export default fetchAllUsers;
