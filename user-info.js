const playButton = document.getElementById('playBTn')
const username = document.getElementById('username')
const userid = document.getElementById('userid')

playButton.onclick = () => {
    if (username.value == '' || userid.value == '') {
        alert('Please provide your Name and ID!')
    }
    else {
        var Name = document.getElementById('username').value
        var uName = document.getElementById("userid").value
        if (localStorage.getItem('username') == null) {
            localStorage.setItem('username', '[]');
        }
        if (localStorage.getItem('userid') == null) {
            localStorage.setItem('userid', '[]');
        }
        var old_Name = JSON.parse(localStorage.getItem('username'));
        var old_uName = JSON.parse(localStorage.getItem('userid'));
        old_Name.push(Name);
        old_uName.push(uName);
        localStorage.setItem('username', JSON.stringify(old_Name))
        localStorage.setItem('userid', JSON.stringify(old_uName))

        location.href = "./mode.html"
    }
}