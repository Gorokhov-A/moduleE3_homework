function is_simple(numbr){
    if (numbr > 1000){
        return "Wrong data."
    }
    if (numbr == 1 || numbr == 0 || numbr % 2 == 0){
        return `${numbr} not simple number.`
    }
    let div = numbr - 1;
    let result = true //simple number

    while (div > 2){
        if (numbr % div == 0){
            return `${numbr} not simple number.`;
        }
        div -= 1;
    }
    return result? `${numbr} simple number.`:`${numbr} not simple number.`;

}

console.log(is_simple(prompt("Input number under 1000")));