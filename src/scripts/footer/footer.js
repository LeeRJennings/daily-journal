export const footer = () => {
    const footerEl = document.querySelector("footer")
    footerEl.innerHTML = `
        <footer class="footer">
            <section class="footer__item">
                <div class="footerText">
                    Lee Jennings, Nashville Software School: Cohort 55 &copy;${new Date().getFullYear()}
                </div> 
                <div class="footerText">
                    Posts since 
                    <select id="yearSelection">
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                    </select>
                    <span id="postCount"></span>
                </div>
            </section>
        </footer>
    `
}