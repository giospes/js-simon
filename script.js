const btn = document.querySelector('button')
btn.addEventListener('click', play);

function play(){
    const NUM_NUMERI = 5
    const startPage = document.getElementById("start-page")
    const numberPage = document.getElementById("number-page")
    let numBlocks="", rdNUM;

    startPage.classList.add("d-none")
    numberPage.classList.remove("d-none")

    for(let i=0; i < NUM_NUMERI; i++){
        rdNUM = Math.floor(Math.random()*100) + 1
        numBlocks += 
        `
        <div class="card bg-secondary number d-flex justify-content-center align-items-center">
            <span class ="fs-1 text-light">${rdNUM}</span>
        </div>
        `
    }

    
    numberPage.innerHTML = numBlocks;

    

}