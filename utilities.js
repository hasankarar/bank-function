function getInputFieldValueId(inputFieldId) {
    const newDepositeInputValue = document.getElementById(inputFieldId);
    const newDepositeInputValueSrting = newDepositeInputValue.value;
    const newDepositeInputValueSrtingAmount = parseFloat(newDepositeInputValueSrting);
    newDepositeInputValue.value = '';
    return newDepositeInputValueSrtingAmount;
}


function getElementValueId(elementID) {
    const element = document.getElementById(elementID);
    const elementStrint = element.innerText;
    const elementStrintAmount = parseFloat(elementStrint);
    return elementStrintAmount;

}

function setElementAmount(elementId, total) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = total;
}
