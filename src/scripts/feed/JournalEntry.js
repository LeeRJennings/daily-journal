import { getLikes, getLoggedInUser } from "../data/dataManager.js";
import { formatDate } from "../helpers/formatDate.js";

export const JournalEntry = (entryObj) => {
    if (getLoggedInUser().id === entryObj.userId) {
        return ` 
            <section id="entry--${entryObj.id}" class="journalEntry">
                <h2>${entryObj.concept}</h2>
                <h4>Entry by: ${entryObj.user.name}</h4>
                <div class="whiteSpace">
                    <p>${entryObj.entry}</p>
                    <p>Mood: ${entryObj.mood}</p>
                    <p>Posted on: ${formatDate(entryObj.date)}</p>
                </div>
                <div class="entryButtonDiv">
                    <button id="edit--${entryObj.id}">Edit</button>
                    <button id="delete--${entryObj.id}">Delete</button>
                </div>
            </section>
    `
    } else {
        return `
            <section id="entry--${entryObj.id}" class="journalEntry">
                <h2>${entryObj.concept}</h2>
                <h4>Entry by: ${entryObj.user.name}</h4>
                <div class="whiteSpace">
                    <p>${entryObj.entry}</p>
                    <p>Mood: ${entryObj.mood}</p>
                    <p>Posted on: ${formatDate(entryObj.date)}</p>
                </div>
                <div class="entryButtonDiv">
                    <button id="like--${entryObj.id}">I dig it</button>
                    <p class="likes-text" id="likes--${entryObj.id}">${getNumberOfLikes(entryObj.id)}</p>
                </div>
            </section>
        `
    }
    
}

export const showJournalEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".entryLog");
    entryElement.innerHTML = JournalEntry();
}

const getNumberOfLikes = (postId) => {
    getLikes(postId)
    .then(response => {
        document.querySelector(`#likes--${postId}`).innerHTML = `👍 x ${response.length}`
    })
}