console.log("sup breh")
import { EntryListComponent, entryList } from "./feed/JournalEntryList.js"
import { getUsers, getPosts } from "./data/dataManager.js"

// EntryListComponent()

const showEntryList = () => {
    //Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".entryLog");
	getPosts().then((allPosts) => {
		postElement.innerHTML = entryList(allPosts);
	})
}

showEntryList()

// getUsers()
// .then(data => {
//     console.log("User Data", data)
// })

// getPosts()
// .then(data => {
//     console.log("Post Data", data)
// })