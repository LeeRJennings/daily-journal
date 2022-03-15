const loggedInUser = {
	id: 1,
	name: "Lee",
	email: "Lee@lee.net"
}

export const getLoggedInUser = () => {
	return loggedInUser;
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

    return fetch("http://localhost:6464/posts")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}