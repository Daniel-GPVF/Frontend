

/*function klickreaction (parameter) {
    theDiv.style.color = "red";
    theDiv.style.backgroundColor = "blue"
    theDiv2.style.color = "white"
}

let theLink = document.getElementById("link1");
document.getElementById("link1").innerHTML = "neuer Text";
theLink.innerHTML = "neuster Text";
theLink.style.color = "red";
theLink.style.backgroundColor = "white"
theLink.style.fontSize = "30pt"

let theDiv = document.getElementById("div1")
document.getElementById("link1").addEventListener("click", klickreaction);

let theDiv2 = document.getElementById("div2")
document.getElementById("link1").addEventListener("click", klickreaction);
*/

// --- dark mode toggle ---

const checkbox = document.getElementById("checkbox");
const headline = document.getElementById("h1")

checkbox.addEventListener("change", () => {
    // change the theme of the website
    document.body.classList.toggle("dark")
});