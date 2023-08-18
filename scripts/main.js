//input value collector function
function getInputValue(fieldId) {
  const inputValue = document.getElementById(fieldId);
  const value = parseFloat(inputValue.value);
  inputValue.value = "";
  return value;
}
//element set text function
function elemenValueSet(id, result) {
  document.getElementById(id).innerText = result.toFixed(2);
}
//calculator function 1
function baseHeight(base, height) {
  const calculation = 0.5 * base * height;
  return calculation;
}
//calculator function 2
function widthHeight(width, height) {
  const calculation = width * height;
  return calculation;
}
//calculator function 3
function abPI(a, b) {
  const calculation = Math.PI * a * b;
  return calculation;
}

//find a element id using parent and child nodes
function findElementNodes(elementTarget, index1, index2) {
  return elementTarget.parentNode.parentNode.childNodes[index1].childNodes[
    index2
  ].id;
}
/**
 *this is main function this will receive 7 parameters
 * @param {string} target
 * @param {string} calculatorName
 * @param {number} index1
 * @param {number} index2
 * @param {number} index3
 * @param {number} setIndex1
 * @param {number} setIndex2
 */
function short(
  target,
  calculatorName,
  index1,
  index2,
  index3,
  setIndex1,
  setIndex2
) {
  const elementID1 = findElementNodes(target, index1, index2);
  const elementID2 = findElementNodes(target, index1, index3);
  const id1Value = getInputValue(elementID1);
  const id2Value = getInputValue(elementID2);
  const result = calculatorName(id1Value, id2Value);
  const setElementId = findElementNodes(target, setIndex1, setIndex2);
  elemenValueSet(setElementId, result);
}

function calculator1(target) {
  short(target, baseHeight, 5, 1, 9, 7, 1);
  const calcName = target.parentNode.parentNode.childNodes[1].innerText;
  const calcValue =
    target.parentNode.parentNode.childNodes[7].childNodes[1].innerText;
  const h3 = document.createElement("h3");
  h3.classList.add("font-bold");
  h3.innerHTML = `${calcName} <span id="cmToMeter">${calcValue}</span> <span id="cm2m">cm<sup>2</sup></span> <button class="btn mt-3 ml-2 btn-sm" id="meterBtn">To Meter</button>`;
  const calculationEntry = document.getElementById("calculation-entry");
  calculationEntry.appendChild(h3);
}
function calculator2(target) {
  short(target, widthHeight, 5, 1, 9, 7, 1);
}
function calculateEllipseArea(target) {
  short(target, abPI, 5, 1, 9, 7, 1);
}
