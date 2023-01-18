function buttonClick() {
    const text = getInputText();
    addElement(text);
    clearText();
}

function getInputText() {
    const input = document.querySelector('.text-field')
    return input.value;
}

function addElement(text) {
    const listItem = document.createElement("li");
    listItem.innerHTML = text;
    
    const list = document.querySelector('.list');
    list.append(listItem);
}

function clearText() {
    const input = document.querySelector('.text-field');
    input.value="";
}