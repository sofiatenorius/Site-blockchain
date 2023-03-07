const form = document.getElementById("form");
const email = document.getElementById("email");
const number = document.getElementById("number");
const text = document.getElementById("text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value;
  const numberValue = number.value;
  const textValue = text.value;

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (numberValue === "") {
    setErrorFor(number, "O número é obrigatório.");
  } else if (numberValue.length < 11) {
    setErrorFor(number, "Insira o número com o DD.");
  }
  else if (numberValue === "") {
    setErrorFor(number, "O número de telefone é obrigatório.");
  } else {
    setSuccessFor(number);
  }

  if (textValue===''){
    setErrorFor(text,"Este campo é obrigatório")
  } else if (textValue.length < 15){
    setErrorFor(text,"Explique melhor como podemos ajudar!")
  }else {
    setSuccessFor(text);
  }
  
  const formControls = form.querySelectorAll(".form-controls");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-controls success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-controls error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-controls success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
