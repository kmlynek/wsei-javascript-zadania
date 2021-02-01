// 1

const getList = element => [...element].map(element => element.tagName);
getList(document.querySelectorAll(".more-divs"));

// 2

const showInfo = element => {
    console.log(element.innerHTML)
    console.log(element.outerHTML)
    console.log(String(element.classList))
    console.log([...element.classList])
    console.log(element.dataset)
}
showInfo(document.querySelector(".short-list"))

// 3

const dataElement = document.querySelector("#datasetCheck");

const handleMath = element => {
    let summary;
    let substraction;
    let args = Object.values(element.dataset).map(item => parseInt(item)).filter(item => Boolean(item) === true);
    summary = args.reduce((a,b) => a + b)
    substraction = args.reduce((a,b) => a - b)

    return {summary, substraction}
}

handleMath(dataElement);

// 4

document.querySelector('#spanText').textContent = "dowolny nowy tekst"

// 5

document.querySelector('#spanText').className = "nowa_klasa_dodana"

// 6

const showClasses = classes => {
    [...classes].forEach(item => console.log(item));
    console.log([...classes].reduce((a,b) => a + "+" + b))
}
showClasses(document.querySelector('#classes').classList)

// 7
const addDataElement = elements => {
    let element = [...elements.children].filter(item => item.attributes.length === 0);
    element.forEach(item => item.dataset.text = "text")
}

addDataElement(document.querySelector('#longList'))

// 8
const div = document.querySelector('#myDiv')
const createObj = (str) => {
    return {
        newClass: str
    }
};
const secondFunction = ({ newClass }) => newClass;
const getClass = secondFunction(createObj('mojaNowa_klasa'));
div.className = getClass;

// 9

const setClass = number => {
    let classValue = "";
    if (number % 2 === 0) {
        classValue = "even"
    } else {
        classValue = "odd";
    }
    document.querySelector('#numbers').className = classValue
}

setClass(Math.floor(Math.random() * 10));

// 10

const showItemsValues = elements => {
    return [...elements.children].map(item => item.textContent)
}

showItemsValues(document.querySelector('#longList'));

// 11

const changeItemsValues = elements => {
    return [...elements].forEach(item => item.textContent = Math.floor(Math.random()*10))
}

changeItemsValues(document.querySelector('#longList').children);
