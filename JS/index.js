const addText = (event) => {
  const elementoSelezionato = event.target;
  elementoSelezionato.classlist.add("selected");
};

const addTask = () => {
  const valueInput = document.getElementById("inputText").value;
  if (valueInput === "") {
    alert("Inserisci testo");
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("lista");
    newDiv.innerText = valueInput;
    newDiv.onclick = addText;
    document.getElementById("lista").appendChild(newDiv);
    document.getElementById("inputText").value = "";
  }
};

/*const addTaskEnter = inserireTesto(event) => {
  const inputEnter = document.getElementById("inputText").value;
  if (event.key === "Enter") {
    alert("Inserisci testo");
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("lista");
    newDiv.innerText = inputEnter;
    newDiv.onclick = addText;
    document.getElementById("lista").appendChild(newDiv);
    document.getElementById("inputText").value = "";
  }
}*/
