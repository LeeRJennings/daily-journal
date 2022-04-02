let loggedInUser = {}

//========================================================= gets logged in user for use in other modules =========================================================
export const getLoggedInUser = () => {
	return loggedInUser;
}

//========================================================= logs out a user =========================================================
export const logoutUser = () => {
    loggedInUser = {}
}

let postCollection = [];

export const usePostCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...postCollection];
}

//========================================================= gets array of users =========================================================
export const getUsers = () => {
    return fetch("http://localhost:6464/users")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

//========================================================= gets array of posts =========================================================
export const getPosts = () => {
    return fetch("http://localhost:6464/posts?_sort=date&_order=desc&_expand=user")
    .then(response => response.json())
    .then(parsedResponse => {
        // console.log("data with user", parsedResponse)
        postCollection = parsedResponse
        return parsedResponse;
    })
}

//========================================================= gets array of posts from one user =========================================================
export const getUsersPosts = () => {
    const userId = getLoggedInUser().id
    return fetch(`http://localhost:6464/posts?userId=${userId}&_expand=user&_sort=date&_order=desc`)
    .then(response => response.json())
    .then(parsedResponse => {
        postCollection = parsedResponse
        return parsedResponse
    })
}

//========================================================= creates a new post =========================================================
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

//========================================================= deletes a post =========================================================
export const deletePost = postId => {
    return fetch(`http://localhost:6464/posts/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}

export const getSinglePost = (postId) => {
    return fetch(`http://localhost:6464/posts/${postId}`)
        .then(response => response.json())
}

//========================================================= updates a post =========================================================
export const updatePost = postObj => {
    return fetch(`http://localhost:6464/posts/${postObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
        .then(response => response.json()) 
}

//========================================================= sets a logged in user =========================================================
export const setLoggedInUser = (userObj) => {
    loggedInUser = userObj
}

//========================================================= logs a user in =========================================================
export const loginUser =(userObj) => {
    return fetch(`http://localhost:6464/users?name=${userObj.name}&email=${userObj.email}`)
    .then(response => response.json())
    .then(parsedUser => {
        if (parsedUser.length > 0) {
            setLoggedInUser(parsedUser[0])
            return getLoggedInUser()
        } else {
            return false
        }
    })
}

//========================================================= registers a new user and logs them in =========================================================
export const registerUser = (userObj) => {
    return fetch(`http://localhost:6464/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    })
    .then(response => response.json())
    .then(parsedUser => {
        setLoggedInUser(parsedUser)
        return getLoggedInUser()
    })
}