const playButton = document.getElementById('startButton')
const uName = document.getElementById('name')
const idname = document.getElementById('idname')

playButton.onclick = () => {
    if (uName.value == '' || idname.value == '') {
        alert('Please provide your Name and ID!')
    }
    else {
        var Name = document.getElementById("name").value
        var uName = document.getElementById("idname").value
        if (localStorage.getItem('name') == null) {
            localStorage.setItem('name', '[]');
        }
        if (localStorage.getItem('idname') == null) {
            localStorage.setItem('idname', '[]');
        }
        var old_Name = JSON.parse(localStorage.getItem('name'));
        var old_uName = JSON.parse(localStorage.getItem('idname'));
        old_Name.push(Name);
        old_uName.push(uName);
        localStorage.setItem('name', JSON.stringify(old_Name))
        localStorage.setItem('idname', JSON.stringify(old_uName))

        location.href = "./mode.html"
    }
}