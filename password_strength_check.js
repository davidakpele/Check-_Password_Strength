var password = document.getElementById('password')
var strengthBar = document.getElementById('password_strength')
/**
 * Strong password values
 */
let strong_pass = {
    lowerCase: 8,
    upperCase: 3,
    digits: 2,
    symbols: 2,
}

/**
 * medium_password
 */
let medium_pass = {
    lowerCase: 5,
    upperCase: 1,
    digits: 1,
    symbols: 1,
}

/**
 * Patterns
 */
let lowerCase = /[a-z]/g;
let upperCase = /[A-Z]/g;
let digits = /[0-9]/g;
let symbols = /[^a-zA-Z-0-9]/g;


password.addEventListener('input', function(){
    let pass = this.value
    // Lower Case Characters length in Password
    var lc_len = pass.match(lowerCase) !== null ? pass.match(lowerCase).length : 0; 
    // Upper Case Characters length in Password
    var uc_len = pass.match(upperCase) !== null ? pass.match(upperCase).length : 0; 
    // Digit Characters length in Password
    var d_len = pass.match(digits) !== null ? pass.match(digits).length : 0; 
    // Symbols length in Password
    var sym_len = pass.match(symbols) !== null ? pass.match(symbols).length : 0; 

    
    // console.log(`lowerCase:`+lc_len)
    // console.log(`upperCase:`+uc_len)
    // console.log(`digits:`+d_len)
    // console.log(`symbols:`+sym_len)
    
    var strength,strength_text, strengthClass;

    if(lc_len >= strong_pass.lowerCase && uc_len >= strong_pass.upperCase && d_len >= strong_pass.digits && sym_len >= strong_pass.symbols){
        // Password is strong
        strength = 100;
        strength_text = "Password is Strong!!!";
        strengthClass = "bg-primary"
    }else if(lc_len >= medium_pass.lowerCase && uc_len >= medium_pass.upperCase && d_len >= medium_pass.digits && sym_len >= medium_pass.symbols){
        // Password is in Medium Strength
        strength = 66.66;
        strength_text = "Password is Good!!!";
        strengthClass = "bg-success"
    }else if(pass.length > 0){
        // Password is Weak
        strength = 33.33;
        strengthClass = "bg-danger"
        strength_text = "Password is Weak!!!";
    }else{
        // Password is null
        strength = 0;
        strengthClass = ""
        strength_text = ""
    }

    //Progress Bar
    var strengthBar_progress = strengthBar.querySelector(".progress-bar")

    // Remove Progress Bar Background color ClassName
    strengthBar_progress.classList.remove('bg-primary')
    strengthBar_progress.classList.remove('bg-success')
    strengthBar_progress.classList.remove('bg-danger')

    // Add Progress Bar Background color ClassName if available
    if(strengthClass !== "")
        strengthBar_progress.classList.add(strengthClass);

    // Set the Progress Bar Filled Width
    strengthBar_progress.style.width = strength + "%"
    // Set the Progress Bar Value Now Attribute
    strengthBar_progress.setAttribute('aria-valuenow', strength)

    // Set the Progress Bar Text
    if(strength_text !== "")
        strengthBar.querySelector(".progress-bar").innerText = strength_text;

})
