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
        </section>
    `
}