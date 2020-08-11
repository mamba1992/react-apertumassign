export const filterUsers = (users) => {
  return users.filter(
    (user) =>
      user.age >= 20 &&
      user.age < 30 &&
      (user.firstName + user.lastName).length >= 10
  );
};
