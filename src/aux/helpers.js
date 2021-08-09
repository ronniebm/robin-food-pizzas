/* function to validate email format */
export function validEmail( userEmail ) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( userEmail )) {
        return true;
    }
    alert("You have entered an invalid email address!");
    return false;
}

/* function to validate no empty password */
export function validPass( userPass ) {
    if (!userPass) {
        alert('Password is required');
        return false;
    }
    return true;
}