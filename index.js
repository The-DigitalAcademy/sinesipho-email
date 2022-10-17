// Get the modal
var modal = document.getElementById('id01');

// when the user clicks anywhere outside of modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}