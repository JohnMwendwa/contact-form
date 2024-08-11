const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const queryType = document.querySelector("input[name='query-type']");
const message = document.querySelector("#message");
const consent = document.querySelector("#consent");
const submitButton = document.querySelector("form button");

// Error messages
const firstNameError = document.querySelector(".first__error");
const lastNameError = document.querySelector(".last__error");
const emailError = document.querySelector(".email__error");
const queryTypeError = document.querySelector(".query__error");
const messageError = document.querySelector(".message__error");
const consentError = document.querySelector(".consent__error");

// Success message
const successMessage = document.querySelector(".success__message");

// Form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // First Name
  if (firstName.value === "") {
    firstNameError.textContent = "First name cannot be empty";
    firstName.classList.add("input__error");
  } else {
    firstNameError.textContent = "";
    firstName.classList.remove("input__error");
  }

  // Last Name
  if (lastName.value === "") {
    lastNameError.textContent = "Last name cannot be empty";
    lastName.classList.add("input__error");
  } else {
    lastNameError.textContent = "";
    lastName.classList.remove("input__error");
  }

  // Email
  if (email.value === "") {
    emailError.textContent = "Email cannot be empty";
    email.classList.add("input__error");
  } else if (!email.value.includes("@")) {
    emailError.textContent = "Please enter a valid email";
    email.classList.add("input__error");
  } else {
    emailError.textContent = "";
    email.classList.remove("input__error");
  }

  // Query Type
  if (!queryType.checked) {
    queryTypeError.textContent = "Please select a query type";
  } else {
    queryTypeError.textContent = "";
  }

  // Message
  if (message.value === "") {
    messageError.textContent = "Message cannot be empty";
    message.classList.add("input__error");
  } else {
    messageError.textContent = "";
    message.classList.remove("input__error");
  }

  // Consent
  if (!consent.checked) {
    consentError.textContent =
      "To submit this form, please consent to being contacted";
  } else {
    consentError.textContent = "";
  }

  // Success message
  if (
    firstName.value &&
    lastName.value &&
    email.value &&
    queryType.checked &&
    message.value &&
    consent.checked
  ) {
    successMessage.classList.add("show");
    submitButton.disabled = true;
    submitButton.style.cursor = "not-allowed";
    submitButton.style.backgroundColor = "#ccc";
    submitButton.textContent = "Submitted";

    // Reset form after 10 seconds
    setTimeout(() => {
      successMessage.classList.remove("show");
      submitButton.disabled = false;
      submitButton.style.cursor = "pointer";
      submitButton.style.backgroundColor = "var(--green-600)";
      submitButton.textContent = "Submit";

      form.reset();
    }, 10000);
  } else {
    successMessage.classList.remove("show");
  }
});
