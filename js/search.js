let mailinput = document.querySelector("#mailinput")
let nameinput = document.querySelector("#nameinput")
function checkValidation(){
    if(mailinput.value == "" || nameinput.value==""){
        invalid()
    }
    else{
        if(!validateEmail(mailinput.value)){
            error();
        }
        else{
            success();
            // $('#joinBtn').click(()=>{
            //     writeUserData($('#user_fullname').val(), $('#user_email').val());
            // });
        }
    }
}
function validateEmail(email) {
    var regex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
}
function invalid(){
    $.notification(
        ["Please fill the gap(s)"],
        {
            position: ['top', 'right'],
            messageType: 'warning',
            timeView: 6000,
        }
    )
}
function error(){
    $.notification(
        ["Please enter the valid mail"],
        {
            position: ['top', 'right'],
            messageType: 'error',
            timeView: 6000,
        }
    )
}
function success(){
    $.notification(
        ["Successfully joined"],
        {
            position: ['top', 'right'],
            messageType: 'success',
            timeView: 6000,
        }
    )
}
