import { usersList } from "../models/usermodel.js";


export function handleUsers(req, res) {
  const usersData = usersList();
  console.log(usersData);

  res.render('user', { users: usersData });
}