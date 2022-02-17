function wrapper(numbr){
    return inner_function = inner_numbr => {
        return numbr + inner_numbr;
}
}

let add6 = wrapper(6);
console.log(add5(3));