/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entryObj) => {
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            <h3>${entryObj.concept}</h3>
            <div class="whiteSpace">
                <p>${entryObj.entry}</p>
                <p>Mood: ${entryObj.mood}</p>
                <p>Posted on: ${entryObj.date}</p>
            </div>
            <div class="entryButtonDiv">
                <button id="edit--${entryObj.id}">Edit</button>
                <button id="delete--${entryObj.id}">Delete</button>
            </div>
        </section>
    `
}