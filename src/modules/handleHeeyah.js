// document.getElementById("chuckBtn").addEventListener("click", handleHeeyah);

window.handleHeeyah = handleHeeyah

export default function handleHeeyah() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("norrisJoke").innerText = data.value;
    })
    .catch((error) => {
      document.getElementById("norrisJoke").innerText =
        "Error fetching joke!";
      console.error("Error:", error);
    });
}
