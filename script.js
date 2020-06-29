'use strict';

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

var n = randomInteger(3,5);
var array = [];
var l=0;

do {
    array.push(randomInteger(0,5));
    l++;
}while(l<n);
n = null;

console.log("Исходный массив: " +array.join(" "));

//ЗАДАЧА 1
/*var kol=0;
var max=0;
let arr=[];
let x=[];
for(var i=0; i<array.length; i++){
    kol=0;
    if(arr.length>0){
        arr.splice(0, arr.length);
    }

    for(var k=i+1; k<array.length; i++, k++)
    {
        if(array[i]<array[k]){
            kol+=1;
            arr.push(array[i]);
            arr.push(array[k]);

             for(var j=0; j<arr.length; j++){
                for(var a=j+1; a<arr.length; a++){
                    if(arr[j]===arr[j+1]) {
                        arr.splice(j, 1);
                    }
                }
            }

        }
        else{
            break;
        }
    }

    if(kol>max){
        max=kol;
        x=arr;
    }

}
console.log("Максимальная серия: " + max);
console.log("Ряд чисел с максимальной серией: " + x.join(" "));*/

//ЗАДАЧА 2

/*var kol=0;
var t=0;
let arr=[];
let x=[];

for(var i=0; i<array.length; i++){
    kol=0;
    if(arr.length>0){
        arr.splice(0, arr.length);
    }

    for(var k=i+1; k<array.length; i++, k++)
    {
        if(array[i]<array[k]){
            kol+=1;
            arr.push(array[i]);
            arr.push(array[k]);

            for(var j=0; j<arr.length; j++){
                for(var a=j+1; a<arr.length; a++){
                    if(arr[j]===arr[a]) {
                        arr.splice(j, 1);
                    }
                }
            }
        }
        else{
            break;
        }
    }

    if(kol>0){
        x=arr;
        t++;
        console.log("Серия " + t + ": "  + x.join(" "));
    }
}*/

//ЗАДАЧА 3
/*var kol=1;
let arr=[];
let arr1=[];
for(var i=0; i<array.length; i++){
    kol=1;
    for(var j=i+1; j<array.length; j++){
        if(array[i]===array[j]){
            kol=kol+1;
            array.splice(j,1);
            j-=1;
        }
    }

    if(kol<3){
        arr.push(array[i]);
    }

}
console.log("Новый массив: " +arr.join(" "));*/

//ЗАДАЧА 4
var x=0;
var y=0;
let arr=[];

for (var i=0; i<array.length; i++){

    if(i % 2 === 0){
        x=0;
        y=0;

        while(x<array[i]){
            arr.push(0);
            x+=1;
        }
    }

    else{
        while(y<array[i]){
            arr.push(1);
            y+=1;
        }
    }
}
console.log("Числа: " +arr.join(" "));
