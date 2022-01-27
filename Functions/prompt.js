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

let x = 10;

if (true){
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
// y is not visible
//console.log(x + y);

function greet(who){
    console.log('Hello, ' + who)
}

greet('Ayume!')


function chicken(){
    return egg();
};

function egg(){
    return chicken();
};

//console.log(chicken() + ' came first')