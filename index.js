const input = document.querySelector("#data");
const button = document.querySelector("#btn");
const data = document.querySelector("#dataShow");

button.addEventListener("click", () => {
    const inputValue = input.value.trim();
    if (inputValue === "") {
        alert("Please enter something");
    } else {
        const createLi = document.createElement("li");
        const createspan = document.createElement("span");
        createspan.classList.add("remove"); 
        createspan.innerText = "Delete";
        createLi.append(inputValue);
        createLi.append(createspan);
        data.append(createLi);
        input.value = "";
    }
});


document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
        event.target.parentElement.remove();
    }
    
});
