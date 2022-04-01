export const header = () => {
    const headerEl = document.querySelector("header")
    headerEl.innerHTML = `
    <div id="navBar">
        <div id="notTheLogoutDiv">
            <div id="headerImage">
                <img id="homeIcon" src="./images/crossed-swords-emoji-no-bg.png" alt="crossed swords emoji"/>
            </div>
            <h1>Daily Journal</h1>
            <input type="text" name="searchBar" id="searchBar" placeholder="Search journal entries..."/>
            <button id="seeUsersPosts">See My Posts</button>
        </div>
        <div id="logoutDiv">
            <button id="logout" class="fakeLink">Logout</button>
        </div>
    </div>
    `
}