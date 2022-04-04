export const registerForm = () => {
	return `
        <div class="loginRegister">
            <div>
                <h3>Register</h3>
                <div>
                    <input value=""
                        name="registerName"
                        class="newPost--input"
                        type="text"
                        placeholder="User Name"/>
                </div>
                <div>
                    <input value=""
                        name="registerEmail"
                        class="newPost--input"
                        type="text"
                        placeholder="name@place.com"/>
                </div>
                
                <div class="loginRegisterButtons">
                    <button id="register--submit">Register</button>
                    <button id="register--cancel">Cancel</button>
                </div>
            </div>
        </div>
	`
}