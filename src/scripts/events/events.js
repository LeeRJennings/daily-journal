import { getLoggedInUser, createPost, deletePost, getSinglePost, updatePost, logoutUser, loginUser, registerUser, getUsersPosts } from "../data/dataManager.js"
import { showNewEntryForm } from "../feed/newEntryForm.js"
import { showEntryList, yearFilteredPosts, moodFilteredPosts, showEdit, journalStartUp, checkForUser } from "../main.js" 
import { loginForm } from "../auth/loginForm.js"
import { registerForm } from "../auth/registerForm.js"
import { entryList } from "../feed/JournalEntryList.js"

export const events = () => {
//========================================================= variables pointing to different parts of the DOM =========================================================
    const mainEl = document.querySelector("main")
    const footerEl = document.querySelector("footer")
    const headerEl = document.querySelector("header")

//========================================================= function to clear out fields on new entry form =========================================================
    const clearEntryField = () => {
        document.querySelector("input[name='journalDate']").value = ""
        document.querySelector("select[name='mood']").value = ""
        document.querySelector("input[name='conceptsCovered']").value = ""
        document.querySelector("textarea[name='journalEntry']").value = ""
    }

//========================================================= scrolls to top of the page =========================================================
    headerEl.addEventListener("click", event => {
        if (event.target.id === "homeIcon") {
            window.scrollTo({
                top: 12,
                left: 0,
                behavior: "smooth",
            }) 
        }
    })

//========================================================= logs a user out =========================================================
    headerEl.addEventListener("click", event => {
        if (event.target.id === "logout") {
            logoutUser()
            sessionStorage.clear()
            checkForUser()
        }
    })

//=========================================================  =========================================================
    headerEl.addEventListener("click", event => {
        if (event.target.id === "seeUsersPosts") {
            const entryEl = document.querySelector(".entryLog")
            getUsersPosts()
            .then(posts => {
                entryEl.innerHTML = entryList(posts)
            })
        }
    })

//========================================================= clear out fields on new entry form on button click =========================================================
    mainEl.addEventListener("click", event => {
        if (event.target.id === "cancelEntryButton") {
            clearEntryField()
        }
    })
    
      
//========================================================= saves a new post =========================================================
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

//========================================================= deletes a post =========================================================
    mainEl.addEventListener("click", event => {
        if (event.target.id.startsWith("delete")) {
            const postId = event.target.id.split("--")[1]
            deletePost(postId)
            .then(showEntryList)
        }
    })

//========================================================= begins edits on a single post =========================================================
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

//========================================================= saves edits on a single post =========================================================
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

//========================================================= shows new entry form when cancel button for edit form clicked =========================================================
    mainEl.addEventListener("click", event => {
        if (event.target.id === "cancelEditButton") {
            showNewEntryForm()
        }
    })

//========================================================= logs existing user into the site =========================================================
    mainEl.addEventListener("click", event => {
        if (event.target.id === "login--submit") {
            const userObject = {
                name: document.querySelector("input[name='name']").value,
                email: document.querySelector("input[name='email']").value
            }
            loginUser(userObject)
            .then(dbUserObj => {
                if(dbUserObj) {
                    sessionStorage.setItem("user", JSON.stringify(dbUserObj))
                    journalStartUp()
                } else {
                    const entryEl = document.querySelector(".journalEntryForm")
                    entryEl.innerHTML = `<p class="center">That user does not exist. Right to jail. We have the best users. Because of jail. <br> You can also try again, or sign up for free.</p> ${loginForm()} <hr/> <hr/> ${registerForm()}`
                }
            })
        }
    })

//========================================================= registers a new user and logs them in =========================================================
    mainEl.addEventListener("click", event => {
        if (event.target.id === "register--submit") {
            const userObject = {
                name: document.querySelector("input[name='registerName']").value,
                email: document.querySelector("input[name='registerEmail']").value
            }
            registerUser(userObject)
            .then(dbUserObj => {
                sessionStorage.setItem("user", JSON.stringify(dbUserObj))
                journalStartUp()
            })
        }
    })

//========================================================= filters posts by year =========================================================
    footerEl.addEventListener("change", event => {
        if (event.target.id === "yearSelection") {
        const yearAsNumber = parseInt(event.target.value)
        //invoke a filter function passing the year as an argument
        yearFilteredPosts(yearAsNumber);
        }
    })

//========================================================= filters posts by mood =========================================================
    footerEl.addEventListener("change", event => {
        if (event.target.id === "moodSelection") {
            const moodToFilterBy = event.target.value
            moodFilteredPosts(moodToFilterBy)
        }
    })

}