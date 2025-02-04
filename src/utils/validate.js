export const checkValidateData=(email,password)=>{
    const validateEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!]).{8,}$/.test(password);

    if(!validateEmail) return "Email is not valid"
    if(!validatePassword) return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character (@#$%^&*!)"

    return null
}