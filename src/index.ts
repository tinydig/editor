import "./styles.less"

function editor() {
    const element = document.createElement("div");
    element.classList.add("editor");
    element.innerHTML = "editor"

    return element;
}

document.body.appendChild(editor());
