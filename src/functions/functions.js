export const fetchUsers = () =>
  fetch("https://randomuser.me/api/?results=50").then(res => res.json());
