/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournalEntries } from "./JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered

export const EntryListComponent = () => {
    const entryLog = document.querySelector(".entryLog")
    // Use the journal entry data from the data module component
    const entries = getJournalEntries()
    let entryHTMLRep = ""

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryHTMLRep += JournalEntryComponent(entry)
    }
    entryLog.innerHTML += `${entryHTMLRep}`
}