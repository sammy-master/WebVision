function renderUser(user) {
    document.getElementById("result").innerHTML =
        "<h2>Student Details</h2>" +
        "<p><b>Name:</b> " + user.name + "</p>" +
        "<p><b>Username:</b> " + user.username + "</p>" +
        "<p><b>Email:</b> " + user.email + "</p>" +
        "<p><b>Phone:</b> " + user.phone + "</p>" +
        "<p><b>Website:</b> <a href='" + user.website + "' target='_blank'>" + user.website + "</a></p>";
}

function loadData() {
    var fallbackUser = {
        "name": "Saksham Sharma",
        "username": "saksham_sammy1",
        "email": "saksham.sharma24@pcu.edu.in",
        "phone": "8851XXXX06",
        "website": "https://personal-portfolio-pi-three-59.vercel.app"
    };

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "User.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                try {
                    var user = JSON.parse(xhr.responseText);
                    renderUser(user);
                } catch (e) {
                    renderUser(fallbackUser);
                }
            } else {
                renderUser(fallbackUser);
            }
        }
    };

    xhr.onerror = function () {
        renderUser(fallbackUser);
    };

    try {
        xhr.send();
    } catch (e) {
        renderUser(fallbackUser);
    }
}
