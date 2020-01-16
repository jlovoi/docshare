const fetchUser = async ({ payload }) => {
  const headers = {
    "Content-Type": "application/json"
  };

  const user = await fetch(
    "http://localhost:3000/users/5e17f39172f40bfb497730fb",
    headers
  );

  return await user.json();
};

export default fetchUser;
