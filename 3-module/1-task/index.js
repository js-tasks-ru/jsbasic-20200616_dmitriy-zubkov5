/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let usersName = users.map((user) => user.name);
  return usersName;
}
