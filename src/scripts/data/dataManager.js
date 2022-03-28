const loggedInUser = {
	id: 1,
	name: "Lee",
	email: "Lee@lee.net"
}

export const getLoggedInUser = () => {
	return loggedInUser;
}

let postCollection = [];

export const usePostCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...postCollection];
}

export const getUsers = () => {
    return fetch("http://localhost:6464/users")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

export const getPosts = () => {
    return fetch("http://localhost:6464/posts?_sort=id&_order=desc")
    .then(response => response.json())
    .then(parsedResponse => {
        postCollection = parsedResponse
        return parsedResponse;
    })
}

export const createPost = postObj => {
    return fetch("http://localhost:6464/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })
        .then(response => response.json())
  }