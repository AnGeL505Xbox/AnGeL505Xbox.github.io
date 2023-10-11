function searchBar() { window.location.href = "./search.html" }
var count = 1
function showNav() {
    count++;
    if (count > 1) {
        document.getElementById("searchPhone").style.width = "72.5%";
        document.getElementById("searchPhone").style.marginLeft = "2.5%";
        document.getElementById("navPhonePanel").style.display = "block";
        document.getElementById("navPhonePanel").style.display = "block";
        count = 0;
    } else if (count == 1) {
        document.getElementById("searchPhone").style.width = "95%";
        document.getElementById("searchPhone").style.marginLeft = "5%";
        document.getElementById("navPhonePanel").style.display = "none";
    }
}
function changeStory() { window.location.href = "./reading.html" }
function changePage(page) {
    switch (page) {
        case 1:
            window.location.href = "./reading.html";
            break;
            case 2:
            window.location.href = "./reading2.html";
            break;
    }
}