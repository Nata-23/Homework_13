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
    const user1 = storage.get(data);
  } catch (responseError) {
    if (responseError.status === 404) {
      console.log("User is not found");
    } else {
      console.error(error);
    }
  }
};

getGitHubUser(user);
