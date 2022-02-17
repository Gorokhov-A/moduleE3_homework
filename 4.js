let begin = 5;
let end = 15;

const intervalid = setInterval(function (numbr_begin, numbr_end){
    console.log(begin);
    
    if (begin > end - 1){
        clearInterval(intervalid);
    }
    begin += 1;
}, 1000, begin, end);
