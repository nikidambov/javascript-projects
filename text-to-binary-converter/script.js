
let button = document.getElementById("button");

button.addEventListener("click", displayDate);

function displayDate() {
    let input = document.getElementById('input').value;
    const binaryText = Array.from(input).map((each) => each.charCodeAt(0).toString(2)).join(" ");

    document.getElementById('result').value = binaryText;
    document.getElementById('input').value = '';
}



