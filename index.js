import storage from "./storage.js";
const user = "https://jsonplaceholder.typicode.com/posts/1";

const getGitHubUser = async (user) => {
  try {
    const response = await fetch(user);
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    console.log("data", data);
    const user1 = storage.set(data);
  } catch (responseError) {
    if (responseError.status === 404) {
      console.log("User is not found");
    } else {
      console.error(error);
    }
  }
};

const userJSON = storage.get(user);
console.log(userJSON);
if (userJSON) {
  console.log("from storage");
  console.log(userJSON);
}
getGitHubUser(user);

// storage.remove("theme");

//3
// const isValidDateFormat = (str) => {
//   let regexp = /^\d{4}\/\d{2}\/\d{2}\s\d\d:\d\d$/;
//   return regexp.test(str);
// };
// console.log(isValidDateFormat("2012/09/18 12:10")); // true
// console.log(isValidDateFormat("12.02.2022 12:10")); // false
