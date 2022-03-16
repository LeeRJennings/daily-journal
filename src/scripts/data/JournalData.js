/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        mood: "Ok",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS."
    },
    {
        id: 2,
        date: "02/15/2022",
        mood: "Ok",
        concept: "functions",
        entry: "We started learning the fundamentals of js functions today. It was cool but also a lot of information and my brain hurt."
    },
    {
        id: 3,
        date: "02/23/2022",
        mood: "Happy",
        concept: "team projects and github",
        entry: "Today we started our group projects. It's great to work with my classmates. The Github workflow flow charts are the best!"
    },
    {
        id: 4,
        date: "03/01/2022",
        mood: "Happy",
        concept: "debugging",
        entry: "We started learning how to debug js issues. I really liked the trouble-shooting aspect of it. Don't overlook tiny syntax issues."
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}