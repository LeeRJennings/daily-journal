export const events = () => {
    const mainEl = document.querySelector("main")

    mainEl.addEventListener("click", evt => {
        if (evt.target.id === "recordEntryButton") {
            console.log("The user would like to submit this entry")
        }
    })
    
    mainEl.addEventListener("click", evt => {
        if (evt.target.className === "journalEntry") {
            confirm(`You just clicked post #${evt.target.id.split("--")[1]}`)
        }
    })

    mainEl.addEventListener("click", evt => {
        if (evt.target.id.startsWith("edit")) {
            console.log(`The user would like to edit post #${evt.target.id.split("--")[1]}`)
        }
    })

    mainEl.addEventListener("click", evt => {
        if (evt.target.id.startsWith("delete")) {
            alert("Sure would be nice if this did something, right?")
        }
    })
}