/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { JournalEntry } from "./JournalEntry.js"

// ====================================== entry list creation from dailyJournal.json ======================================
// ===================== ^^ not entirely true, doesn't get created until showEntryList() in main.js ^^ =====================

export const entryList = (allPosts) => {
	let postHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const postObject of allPosts) {
			//what is a postObject?
			postHTML += JournalEntry(postObject)
		}
		return postHTML;
}