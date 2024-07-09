const password = document.getElementById("pw");
const confirmPassword = document.getElementById("cpw");
const messageErr = document.getElementById('message')
function check () 
    {
        if (password.value != confirmPassword.value) 
            {
                messageErr.style.color = 'red';
                messageErr.innerHTML = 'not matching';
            }
            else
            {
                document.getElementById('message').innerHTML = '';
            }
    }


