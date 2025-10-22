// function updateTime() {
//   const timeElement = document.getElementById("current-time");
//   if (timeElement) {
//     timeElement.textContent = Date.now();
//   }
// }

// updateTime();
// // Optionally update every second
// setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const successMsg = document.getElementById("success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // get input values
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // clear errors
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    let valid = true;

    if (name.value.trim() === "") {
      valid = false;
      document.getElementById("error-name").textContent = "Name is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      valid = false;
      document.getElementById("error-email").textContent =
        "Enter a valid email.";
    }

    if (subject.value.trim() === "") {
      valid = false;
      document.getElementById("error-subject").textContent =
        "Subject is required.";
    }

    if (message.value.trim().length < 10) {
      valid = false;
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters.";
    }

    if (valid) {
      successMsg.hidden = false;
      form.reset();
    } else {
      successMsg.hidden = true;
    }
  });
});
