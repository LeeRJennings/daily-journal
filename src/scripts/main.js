console.log("sup breh")
import { EntryListComponent } from "./JournalEntryList.js"
import { getUsers, getPosts } from "./data/dataManager.js"

EntryListComponent()

getUsers()
.then(data => {
    console.log("User Data", data)
})

getPosts()
.then(data => {
    console.log("Post Data", data)
})