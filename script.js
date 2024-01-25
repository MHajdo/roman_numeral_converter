const inputNumber = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanNumbers = [
    {
        0: "",
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX"
    },
    {
        0: "",
        1: "X",
        2: "XX",
        3: "XXX",
        4: "XL",
        5: "L",
        6: "LX",
        7: "LXX",
        8: "LXXX",
        9: "XC"
    },
    {
        0: "",
        1: "C",
        2: "CC",
        3: "CCC",
        4: "CD",
        5: "D",
        6: "DC",
        7: "DCC",
        8: "DCCC",
        9: "CM"
    },
    {
        0: "",
        1: "M",
        2: "MM",
        3: "MMM",
    },
]

const numeralConverter = (input) => {
    let inputStr = String(input).split("");
    if (inputStr.length === 4) {
        return `${romanNumbers[3][inputStr[0]]}${romanNumbers[2][inputStr[1]]}${romanNumbers[1][inputStr[2]]}${romanNumbers[0][inputStr[3]]}`
    } else if (inputStr.length === 3) {
        return `${romanNumbers[2][inputStr[0]]}${romanNumbers[1][inputStr[1]]}${romanNumbers[0][inputStr[2]]}`
    } else if (inputStr.length === 2) {
        return `${romanNumbers[1][inputStr[0]]}${romanNumbers[0][inputStr[1]]}`
    } else if (inputStr.length === 1) {
        return `${romanNumbers[0][inputStr[0]]}`
    }
};

const checkInput = (input) => {
    if (!input || (!Number.isInteger(input))) {
        warning();
        result.innerText = "Please enter a valid number";
    } else if (input <= 0) {
        warning();
        result.innerText = "Please enter a number greater than or equal to 1"
    } else if (input > 3999) {
        warning();
        result.innerText = "Please enter a number less than or equal to 3999"
    } else {
        result.classList.remove("hidden", "warning");
        result.innerText = numeralConverter(input);
    }
}

const warning = () => {
    result.classList.remove("hidden");
    result.classList.add("warning");
}


convertButton.addEventListener("click", () => {
    checkInput(parseFloat(inputNumber.value));
})

inputNumber.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkInput(parseFloat(inputNumber.value));
    }
});