/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournalEntries } from "../data/JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// ====================================== entry list creation from journalData.js ======================================
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

// ====================================== entry list creation from dailyJournal.json ======================================
// ===================== ^^ not entirely true, doesn't get created until showEntryList() in main.js ^^ =====================

export const entryList = (allPosts) => {
	let postHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const postObject of allPosts) {
			//what is a postObject?
			postHTML += JournalEntryComponent(postObject)
		}
		return postHTML;
}