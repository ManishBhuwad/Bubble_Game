var timmer= 60;
var score = 0;
var hit=0;
var plt = document.querySelector(".plot");

function timeCounter(){
    counter = document.querySelector("#count")
    var timeInt = setInterval(() => {

        if(timmer>0){
            timmer--;
        counter.textContent = timmer
        }else{
            clearInterval(timeInt)
            plt.textContent="Game Over"
        }
        
    }, 1000);   
}

function generateHit(){
    hit = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hit
    
}

function calScore(){
    scr= document.querySelector('#scrval')
    plt.addEventListener('click',(e)=>{
        e.target.style.backgroundColor = "red"
        setTimeout(() => {
            if(Number(e.target.textContent) == hit){
                e.target.style.backgroundColor="green"
                score +=10
                scr.textContent = score
            }

            
            bubbleMaker();
            generateHit();
        }, );
   
         
    })
}

function bubbleMaker(){
    
    var count = `<div class="bubble">1</div>`;
    for(let i=1; i<192; i++){
        var rand = Math.floor(Math.random()*10)
        count += `<div class="bubble">${rand}</div>`
        plt.innerHTML = count;
    }
}


generateHit();      
timeCounter()
bubbleMaker();
calScore()