export const postEdit = (postObj) => {
    return `
        <form action="">
            <h2>Update Your Post</h2>             
            
            <fieldset>
                <label for="conceptsCovered">Concepts Covered:</label>
                <input type="text" name="conceptsCovered" id="conceptsCovered" value="${postObj.concept}">
            </fieldset>
        
            <fieldset>
                <label for="journalEntry">Journal Entry:</label>
                <textarea name="journalEntry" id="journalEntry" rows="10" col="20">${postObj.entry}</textarea>
            </fieldset>
        
            <div class="recordButtonDiv">
                <button id="updateEntryButton--${postObj.id}" type="button">Update Journal Entry</button>
                <button id="cancelEditButton" type="button">Cancel</button>
            </div>

            <input type="hidden" value="${postObj.id}" name="postId">
            <input type="hidden" value="${postObj.date}" name="postDate">
            <input type="hidden" value="${postObj.mood}" name="mood">

        </form>
    `
}