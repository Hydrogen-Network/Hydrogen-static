"use strict";
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");
const registerButton = document.getElementById("uv-register-sw");

if (location.pathname.startsWith(__uv$config.prefix)) {
  error.textContent = "Error: The service worker is not registered.";
  registerButton.classList.add("show");
}

registerButton.addEventListener("click", async () => {
  try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    registerButton.classList.remove("show");
  }
});









  container.querySelector("#noctura-nav-input").onkeydown = function (e) {
    if (e.key == "Enter") {
      location.pathname.includes("/~/aero/")
        ? new Function(
            `return this.location.href = "/~/aero/${encodeURIComponent(
              this.value
            )}"`
          )()
        : new Function(`return this.location.href = "${this.value}"`)();
      new Function(`return this.location.href = "${this.value}"`)();
    }

    return e;
  };
