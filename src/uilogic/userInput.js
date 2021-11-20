let projectList = document.querySelector("ul");

function createUserInputElements() {


    if(this.getInitiatedNewProject() == false) {
       
        this.setInitiatedNewProject(true);

        let userInputContainer = document.createElement("div");
        userInputContainer.classList.add("user-input");

        let inputField = document.createElement("input");
        let confirmationButtonsContinaier = document.createElement("div");
        confirmationButtonsContinaier.classList.add("confirmation-buttons");

        let submitButton = document.createElement("button");
        let cancelButton = document.createElement("button");

        submitButton.classList.add("submit-btn");
        submitButton.textContent = "Submit";
        cancelButton.classList.add("cancel-btn");
        cancelButton.textContent = "Cancel";

        confirmationButtonsContinaier.appendChild(submitButton);
        confirmationButtonsContinaier.appendChild(cancelButton);

        userInputContainer.appendChild(inputField);
        userInputContainer.appendChild(confirmationButtonsContinaier);

        projectList.appendChild(userInputContainer);


    }

}

function removeUserInputElements() {

    projectList.removeChild(projectList.lastChild);

}

export {createUserInputElements, removeUserInputElements};