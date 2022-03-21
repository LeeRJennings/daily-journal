const newEntryForm = () => {
    return `
    <h2>Daily Journal</h2>
            
                <form action="">
                    <div class="dateAndMood">
                        <fieldset>
                            <label for="journalDate">Date of Entry:</label>
                            <input type="date" name="journalDate" id="journalDate">
                        </fieldset>  
                        
                        <fieldset>
                            <label for="mood">Mood for the Day:</label>
                            <select name="mood" id="mood">
                                <option value="happy">Happy</option>
                                <option value="ok">OK</option>
                                <option value="sad">Sad</option>
                            </select>
                        </fieldset>
                    </div>
                
                    <fieldset>
                        <label for="conceptsCovered">Concepts Covered:</label>
                        <input type="text" name="conceptsCovered" id="conceptsCovered">
                    </fieldset>
                
                    <fieldset>
                        <label for="journalEntry">Journal Entry:</label>
                        <textarea name="journalEntry" id="journalEntry" rows="10" col="20"></textarea>
                    </fieldset>
                
                    <div class="recordButtonDiv">
                        <button id="recordEntryButton" type="button">Record Journal Entry</button>
                        <button id="cancelEntryButton" type="button">Cancel</button>
                    </div>
                </form>
            `
}

export const showNewEntryForm = () => {
    const formElement = document.querySelector(".journalEntryForm")
    formElement.innerHTML = newEntryForm()
}