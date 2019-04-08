//signup

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();//Don't refresh the page

    //get user info
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    auth.createUserWithEmailAndPassword(email, password).then( cred => {
        console.log(cred.user);

        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })
})

//logout

const logOut = document.querySelector('#logout');
logOut.addEventListener('click', (e) =>{
    e.preventDefault();//Don't refresh the page

    auth.signOut().then( () => {
        console.log('User logged out');
    })
})

//login

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();//Don't refresh the page

    //get user info
    const email = loginForm['login-email'].value
    const password = loginForm['login-password'].value

    auth.signInWithEmailAndPassword(email, password).then( (cred) => {
        console.log(cred.user);
        //close the login modal and reset form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
})