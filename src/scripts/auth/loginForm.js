export const loginForm = () => {
    return `
        <div class="loginRegister">
            <div>
                <h3>Login</h3>
                <div>
                    <input value=""
                        name="name"
                        class="newPost--input"
                        type="text"
                        placeholder="User Name" />
                </div>
                <div>
                    <input value=""
                        name="email"
                        class="newPost--input"
                        type="text"
                        placeholder="name@place.com" />
                </div>

                <div class="loginRegisterButtons">
                    <button id="login--submit">Login</button>
                    <button id="login--cancel">Cancel</button>
                </div>
            </div>
        </div>
	`
}