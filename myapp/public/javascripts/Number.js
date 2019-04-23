class Number{

    //get number from front-end
    constructor(num){
        this.num = num;
    }


    multiply(){
        var ran = random();
        while (ran == this.num) ran = random();
        console.log(ran);
        console.log(this.num)
        var ans = this.num * ran;
        return `{"number":${this.num}, random":${ran}, "answer":${ans}}`;
    };

};

random = function() {
    var ran = Math.random()*12+1;
    console.log(Math.floor(ran));
    return Math.floor(ran);
};  

const number = new Number(3);


console.log(number.multiply());


