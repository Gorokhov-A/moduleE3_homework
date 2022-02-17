
function even_odd(){
    let arr = [0,1,2,3,null];
    let counter = arr.length;
    if (counter) {
      if (counter == 1) {
        return `Only zero item in array`}
      else {
        let even = Math.floor((counter - 1) / 2);
        return `Количество четных элементов: ${even}\nКоличество нечетных элементов: ${counter - even - 1}`;
      }
    }
    else {
       return `Empty array`;
    }
}

console.log(even_odd());