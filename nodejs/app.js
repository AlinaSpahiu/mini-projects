const importedUsers = require("./users");
console.log("notDestructed, getting users and nums: ", importedUsers)
console.log("notDestructed, getting just users: ", importedUsers.users)
console.log("notDestructed, getting just nums: ", importedUsers.nums)

console.log("--------------------")

// destructuring:
const { users, nums } = require("./users");
console.log("notDestructed, getting users and nums: ", users, nums)
console.log("notDestructed, getting just users: ", users)
console.log("notDestructed, getting just nums: ", nums)