import { getLoggedInUser, createPost, deletePost, getSinglePost, updatePost } from "../data/dataManager.js"
import { showNewEntryForm } from "../feed/newEntryForm.js"
import { showEntryList, yearFilteredPosts, moodFilteredPosts, showEdit } from "../main.js" 

export const events = () => {
    const mainEl = document.querySelector("main")
    const footerEl = document.querySelector("footer")
    const headerEl = document.querySelector("header")

    footerEl.addEventListener("change", event => {
        if (event.target.id === "yearSelection") {
          const yearAsNumber = parseInt(event.target.value)
          //invoke a filter function passing the year as an argument
          yearFilteredPosts(yearAsNumber);
        }
      })

    footerEl.addEventListener("change", event => {
        if (event.target.id === "moodSelection") {
            const moodToFilterBy = event.target.value
            moodFilteredPosts(moodToFilterBy)
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

    mainEl.addEventListener("click", event => {
        if (event.target.id.startsWith("delete")) {
            const postId = event.target.id.split("--")[1]
            deletePost(postId)
            .then(showEntryList)
        }
    })

    mainEl.addEventListener("click", event => {
        if (event.target.id.startsWith("edit")) {
            const postId = event.target.id.split("--")[1]
            getSinglePost(postId)
            .then(response => {
                showEdit(response)
            })
            window.scrollTo({
                top: 12,
                left: 0,
                behavior: "smooth",
              });
        }
    })

    mainEl.addEventListener("click", event => {
        if (event.target.id.startsWith("updateEntryButton")) {
            const postId = event.target.id.split("--")[1]

            let date = document.querySelector("input[name='postDate']").value
            let mood = document.querySelector("input[name='mood']").value
            let concept = document.querySelector("input[name='conceptsCovered']").value
            let journalEntry = document.querySelector("textarea[name='journalEntry']").value

            const postObject = {
                date: date,
                mood: mood,
                concept: concept,
                entry : journalEntry,
                userId: getLoggedInUser().id,
                id: parseInt(postId)
            }

            updatePost(postObject)
            .then(response => {
                showEntryList()
            })
            .then(response => {
                showNewEntryForm()
            })
        }
    })

    mainEl.addEventListener("click", event => {
        if (event.target.id === "cancelEditButton") {
            showNewEntryForm()
        }
    })

    headerEl.addEventListener("click", event => {
        if (event.target.id === "homeIcon") {
            window.scrollTo({
                top: 12,
                left: 0,
                behavior: "smooth",
              }) 
        }
    })
}