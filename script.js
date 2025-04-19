const description = document.getElementById("description");
const changeTextBtn = document.getElementById("change-text-button");

changeTextBtn.addEventListener("click", () => {
    description.textContent = "This is the new text that replaces the old one.";
});

const dynamicBox = document.getElementById("dynamic-box");
const toggleBoxBtn = document.getElementById("toggle-box-button");

toggleBoxBtn.addEventListener("click", () => {
    dynamicBox.classList.toggle("highlighted");
});

const addElementBtn = document.createElement("button");
addElementBtn.textContent = "Add New Element";
document.body.appendChild(addElementBtn);

addElementBtn.addEventListener("click", () => {
    const newElement = document.createElement("div");
    newElement.textContent = "New Element";
    newElement.className = "new-element";
    document.body.appendChild(newElement);
});