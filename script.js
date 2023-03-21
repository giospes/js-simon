const btn = document.querySelector('button')
btn.addEventListener('click', play);

function play(){
    const NUM_NUMERI = 5
    const startPage = document.getElementById("start-page")
    const numberPage = document.getElementById("number-page")
    const selectPage = document.getElementById("select-page")
    const outputNumContainer = document.getElementById("num-selected-container")
    

    let numBlocks="", rdNUM =[];

    startPage.classList.add("d-none")
    numberPage.classList.remove("d-none")

    for(let i=0; i < NUM_NUMERI; i++){
        rdNUM[i] = Math.floor(Math.random()*100) + 1
        numBlocks += 
        `
        <div class="card bg-secondary number d-flex justify-content-center align-items-center">
            <span class ="fs-1 text-light">${rdNUM[i]}</span>
        </div>
        `
    }


    numberPage.innerHTML = numBlocks;

    setTimeout(() => {
        numberPage.classList.add("d-none");
        selectPage.classList.remove("d-none");
        outputNumContainer.classList.remove("d-none");
    }, 5000);
    printSquares(selectPage)


    const checkBtn = document.getElementById('check-btn')
    const numIndovinatiEL= document.getElementById('num-got')
    const numEstrattiEl= document.getElementById('num-extracted')

    let selectNum = []

    selectNum = select(document.querySelectorAll('.gs-square'), checkBtn)
    console.log(selectNum) 
    checkBtn.addEventListener('click',  () => {
        let estratti = "", counter = 0;
        selectPage.classList.add("d-none")
        checkBtn.classList.add("d-none")
        numEstrattiEl.classList.remove('d-none')
        numIndovinatiEL.classList.remove('d-none')
        for(let i=0; i<rdNUM.length; i++){
            estratti += rdNUM[i] + ' ';
            if(rdNUM.includes(selectNum[i])){
                counter++;
            }
        }
        numEstrattiEl.innerHTML += estratti
        numEstrattiEl.innerHTML += counter + ' '
    })
    
    
    


   
    

}



function printSquares(squareContainer){
    let square, squares = [];
    squareContainer.innerHTML =''
    for(let i = 1; i<=100; i++){
        square = document.createElement("div");
        square.innerHTML = `<span>${i}</span>`;
        square.className = "gs-square border bg-primary d-flex align-items-center justify-content-center"
        squares[i] = square;
    }
    squares.forEach(s => squareContainer.appendChild(s));
}

function select(sqrs, checkBtn){
    const output = document.getElementById("num-selected")
    let counter = 0, input=[];
    sqrs.forEach((sqr, index) => {
        
        sqr.addEventListener('click', function(){
            if(counter<5){
                input[counter] = parseInt(sqrs[index].querySelector("span").textContent)
                console.log(input)
                output.innerHTML +=  input[counter] + ' '
                counter++;
            } 
            if(input.length === 5){
                checkBtn.classList.remove('d-none');
                return input;
            } 
        })

    })

}