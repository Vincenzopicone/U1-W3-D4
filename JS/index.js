const inserireTesto = (event) => {
  if (event.key === "Enter") {
    const testoInserito = document.getElementById("inputText").value;
    if (testoInserito === "") {
      const nuovoDiv = document.createElement("div");
      nuovoDiv.classList.add("lista");
      nuovoDiv.innerHTML = testoInserito;
      document.getElementById("lista").appendChild(nuovoDiv);
      document.getElementById("inputText").value = "";
    }
  }
};
