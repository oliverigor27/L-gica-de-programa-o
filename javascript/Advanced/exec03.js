let v = [9, 20, 17, 10, 18, 25, 25, 15, 2, 15, 17, 17, 16, 11, 3, 11, 25, 16, 12];

let firstGreat = 0;
let secondgreat = 0;

v.forEach(item => {
    if(firstGreat < item) 
    {
        secondgreat = firstGreat;
        firstGreat = item;
    }


    if(item > secondgreat && item !== firstGreat)
    {
        secondgreat = item;
    }
});

console.log(firstGreat);
console.log(secondgreat);
