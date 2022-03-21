import { getLoggedInUser, createPost } from "../data/dataManager.js"
import { showEntryList, showFilteredPosts } from "../main.js" 

export const events = () => {
    const mainEl = document.querySelector("main")

    mainEl.addEventListener("click", event => {
        if (event.target.className === "journalEntry") {
            confirm(`You just clicked post #${event.target.id.split("--")[1]}`)
        }
    })

    mainEl.addEventListener("click", event => {
        if (event.target.id.startsWith("edit")) {
            console.log(`The user would like to edit post #${event.target.id.split("--")[1]}`)
        }
    })

    mainEl.addEventListener("click", event => {
        if (event.target.id.startsWith("delete")) {
            alert("Sure would be nice if this did something, right?")
        }
    })
    // function that clears out the input field
    const clearEntryField = () => {
        document.querySelector("input[name='journalDate']").value = ""
        document.querySelector("select[name='mood']").value = ""
        document.querySelector("input[name='conceptsCovered']").value = ""
        document.querySelector("textarea[name='journalEntry']").value = ""
    }

    // event listener that clears out the input fields when the cancel button is clicked
    mainEl.addEventListener("click", event => {
        if (event.target.id === "cancelEntryButton") {
            clearEntryField()
        }
    })
    
      
    //event listener that creates a new post when the save button is clicked
    mainEl.addEventListener("click", event => {
        // event.preventDefault();
        if (event.target.id === "recordEntryButton") {
        //collect the input values into an object to post to the DB
          let date = document.querySelector("input[name='journalDate']").value
          let mood = document.querySelector("select[name='mood']").value
          let concept = document.querySelector("input[name='conceptsCovered']").value
          let journalEntry = document.querySelector("textarea[name='journalEntry']").value
          //we have not created a user yet - for now, we will hard code `1`.
          //we can add the current time as well
          const postObject = {
            date: date,
            mood: mood,
            concept: concept,
            entry : journalEntry,
            userId: getLoggedInUser().id
          }
      
        createPost(postObject)
        .then(showEntryList)
        clearEntryField()
        }
    })

    document.querySelector("footer").addEventListener("change", event => {
        if (event.target.id === "yearSelection") {
          const yearAsNumber = parseInt(event.target.value)
          console.log(`User wants to see posts since ${yearAsNumber}`)
          //invoke a filter function passing the year as an argument
          showFilteredPosts(yearAsNumber);
        }
      })
}