const setUpModal = function(){


    const createProjectBtn = document.querySelector('#add-project-btn')

    // Get the modal 
    const modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    createProjectBtn.onclick = function() {
        modal.style.display = "block";
      }

    span.onclick = function() {
        modal.style.display = "none";
    }
      
}





export { setUpModal }