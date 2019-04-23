class Game{

    //get status, time remain and score from front-end
    constructor(status, time, score){
        this.status = status;
        this.time = time;
        this.score = score;
    }

    count(){
        if(this.status == "win"){
            this.time--;
            this.score++;
        } else {
            this.time--;
        }
    }
    
    toString(){
        return `{"status":${this.status}, "time":${this.time}, "score":${this.score}};`
    }
}

const gg = new Game("win", 2, 3);

console.log(gg.count());
console.log(gg.toString());

