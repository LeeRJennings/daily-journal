console.log("filter isn't working correctly")

import { entryList } from "./feed/JournalEntryList.js"
import { getUsers, getPosts, usePostCollection } from "./data/dataManager.js"
import { events } from "./events/events.js"
import { showNewEntryForm } from "./feed/newEntryForm.js"
import { footer } from "./footer/footer.js"

const postElement = document.querySelector(".entryLog");

export const showEntryList = () => {
    //Get a reference to the location on the DOM where the list will display
	getPosts().then((allPosts) => {
		postElement.innerHTML = entryList(allPosts);
	})
}

 export const showFilteredPosts = (year) => {
	//get a copy of the post collection
	const epoch = Date.parse(`01/01/${year}`);
	//filter the data
	const filteredData = usePostCollection().filter(singlePost => {
		if (singlePost.date >= epoch) {
			console.log(singlePost.date)
			return singlePost
	  }
	})
	postElement.innerHTML = entryList(filteredData);
  }

export const moodFilteredPosts = (mood) => {
	const filteredData = usePostCollection().filter(singlePost => {
		if (singlePost.mood === mood) {
			return singlePost
		}
	})
	postElement.innerHTML = entryList(filteredData)
}

const journalStartUp = () => {
	showEntryList()
	events()
	showNewEntryForm()
	footer()
}

journalStartUp()

// getUsers()
// .then(data => {
//     console.log("User Data", data)
// }