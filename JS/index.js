const addClass = (event) => {
  const elementoSelezionato = event.target;
  elementoSelezionato.classlist.add("selected");
};
const addTask = (event) => {
  const valueInput = document.getElementById("inputText").value;
  if (valueInput === "") {
    alert("Inserisci testo");
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("lista");
    newDiv.innerText = valueInput;
    newDiv.onclick = addClass;
    document.getElementById("lista").appendChild(newDiv);
    document.getElementById("inputText").value = "";
  }
};
