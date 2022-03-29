import { formatDate } from "../helpers/formatDate.js";

export const JournalEntry = (entryObj) => {
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            <h3>${entryObj.concept}</h3>
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
}

export const showJournalEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".entryLog");
    entryElement.innerHTML = JournalEntry();
}