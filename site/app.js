const button = document.querySelector("#runButton");
const steps = [...document.querySelectorAll("[data-step]")];

button.addEventListener("click", async () => {
  button.disabled = true;
  for (const item of steps) {
    item.querySelector(".status").textContent = "Diproses";
    await new Promise((resolve) => setTimeout(resolve, 700));
    item.querySelector(".status").textContent = "Selesai";
  }
  button.disabled = false;
});
