//passcode = prompt('Enter Passcode!');



function makenoise(){
    console.log('Pling pling');
};

makenoise()


const makeNoise = function(){
    console.log('Making noise');
};

makeNoise();


const power = function(base,exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    };
    return result;
};

console.log(power(2,10));