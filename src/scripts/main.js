// TODO 2) give the cancel buttons on the login/register page functionality 5) organize CSS 6) give search bar functionality 7) like posts

import { entryList } from "./feed/JournalEntryList.js"
import { getUsers, getPosts, usePostCollection, setLoggedInUser } from "./data/dataManager.js"
import { events } from "./events/events.js"
import { showNewEntryForm } from "./feed/newEntryForm.js"
import { footer } from "./footer/footer.js"
import { postEdit } from "./feed/postEdit.js"
import { header } from "./header/header.js"
import { loginForm } from "./auth/loginForm.js"
import { registerForm } from "./auth/registerForm.js"

const postElement = document.querySelector(".entryLog")
const newEntryEl = document.querySelector(".journalEntryForm")

//========================================================= shows all entries =========================================================
export const showEntryList = () => {
    //Get a reference to the location on the DOM where the list will display
	getPosts().then((allPosts) => {
		postElement.innerHTML = entryList(allPosts);
	})
}

//========================================================= filters posts by year =========================================================
export const yearFilteredPosts = (year) => {
	const filteredData = usePostCollection().filter(singlePost => {
		if (singlePost.date.split("-")[0] >= year) {
			return singlePost
	  }
	})
	postElement.innerHTML = entryList(filteredData);
  }

//========================================================= filters posts by mood =========================================================
export const moodFilteredPosts = (mood) => {
	const filteredData = usePostCollection().filter(singlePost => {
		if (singlePost.mood === mood) {
			return singlePost
		}
	})
	postElement.innerHTML = entryList(filteredData)
}

//========================================================= displays edit post form =========================================================
export const showEdit = (postObj) => {
	newEntryEl.innerHTML = postEdit(postObj)
}

//========================================================= displays login and register forms =========================================================
const showLoginRegister = () => {
	header()
	newEntryEl.innerHTML = `${loginForm()} <hr/> <hr/> ${registerForm()}`
	postElement.innerHTML = "" 
}

//========================================================= checks for a logged in user =========================================================
export const checkForUser = () => {
	if (sessionStorage.getItem("user")) {
		setLoggedInUser(JSON.parse(sessionStorage.getItem("user")))
		journalStartUp()
	} else {
		showLoginRegister()
	}
}

//========================================================= starts the page =========================================================
export const journalStartUp = () => {
	showEntryList()
	showNewEntryForm()
	footer()
	header()
}

events()
checkForUser()