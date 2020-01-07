export function showPassword(mdpID, eyeID){
    document.getElementById(eyeID).className="fa fa-eye"
    document.getElementById(mdpID).type = 'text'
}

export function hidePassword(mdpID, eyeID){
    document.getElementById(eyeID).className="fa fa-eye-slash"
    document.getElementById(mdpID).type = 'password'
}

export function toggleMdpEye(mdpID, eyeID){
    if (document.getElementById(mdpID).type ==='password'){
        showPassword(mdpID, eyeID)
    }else hidePassword(mdpID, eyeID)
}

export function showPassword2(mdpID, eyeID){
    document.getElementById(eyeID).className="fa fa-eye fa-2x"
    document.getElementById(mdpID).type = 'text'
}

export function hidePassword2(mdpID, eyeID){
    document.getElementById(eyeID).className="fa fa-eye-slash fa-2x"
    document.getElementById(mdpID).type = 'password'
}


export function toggleMdpEye2(mdpID, eyeID){
    if (document.getElementById(mdpID).type ==='password'){
        showPassword2(mdpID, eyeID)
    }else hidePassword2(mdpID, eyeID)
}

function writeErrors(errorVariable, errorMessage){
    return errorVariable.length !==0?
    ("\n"+errorMessage):
    (errorMessage)
}

export function verifyMdpStrength(mdpValue, mdpLength){
    var errors=''
    if(mdpValue.length<mdpLength){
       errors += `Password is less than ${mdpLength} characters`
    }
    if(mdpValue.search(/[a-z]/i)<0){
        errors += writeErrors(errors, "Password must contain at least a letter")
    }
    if(mdpValue.search(/[0-9]/i)<0){
        errors += writeErrors(errors, "Password must contain at least a number")
    }

    return errors.length !==0?(errors):('')
}

// export function isValidUser (comparisonAttr, tableName, userId, propsElmt) {
//     return eval(`propsElmt.${tableName}`).find(user=>{
//         return eval(`user.${comparisonAttr}`) === userId
//     })
// }