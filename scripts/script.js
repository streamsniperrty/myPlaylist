window.onload = function() {
    let addMusicButton = document.getElementById("addMusicButton");
    let table = document.getElementById("table");
    let addSongSidebar = document.getElementById("addSongSidebar");
    let submit = document.getElementById("submit");
    let myForm = document.getElementById("myForm");
    let main = document.getElementById("main");
    let widthSidebar = Math.round(window.innerWidth * 0.22);
    const close = document.getElementById("close");

    const name = document.getElementById("name");
    let artist = document.getElementById("artist");
    const album = document.getElementById("album");
    const songLength = document.getElementById("songLength");
    const link = document.getElementById("link");
    const photo = document.getElementById("photo");

    let songs = document.getElementById("songs");
    let songCount = 2;
    let i = 3;

    // The event
    let popOutState = false;

    addMusicButton.addEventListener("click", () => {
        // let theWindow = window.open("../pages/addSong.html", "", "width=800, height=500");
        // theWindow.moveTo((window.innerWidth / 4), (window.innerHeight / 4));
        main.classList.remove("initAnim");

        if (popOutState == false) {
            main.classList.remove("animationOutForMain");
            addSongSidebar.classList.add("addSongReposition");
            main.classList.add("animationInForMain");
            popOutState = true;
        } else if (popOutState == true) {
            addSongSidebar.classList.remove("addSongReposition");
            main.classList.add("animationOutForMain");
            popOutState = false;
            main.classList.remove("animationInForMain");
        }
    });

    close.addEventListener("click", () => {
        main.classList.add("animationOutForMain");
        addSongSidebar.classList.remove("addSongReposition");
        popOutState = false;
        main.classList.remove("animationInForMain")
    });

    submit.addEventListener("click", () => {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell3.innerHTML = name.value + "<br /> <span style=\"font-size: 15px;\">" + artist.value + "</span>";
        artist = String(artist);
        console.log(artist.length);
        cell4.innerHTML = album.value;
        cell5.innerHTML = songLength.value;
        cell5.style.textAlign = "right";

        alert("Song sucessfully added!");
        myForm.reset();
        songCount += 1;
        songs.innerHTML = songCount;
        i++;

        main.classList.add("animationOutForMain");
        addSongSidebar.classList.remove("addSongReposition");
        popOutState = false;
        main.classList.remove("animationInForMain");
    });
}
