function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    return random;
}

function getHumanChoice(){
    const btnOne = document.getElementById('buttonOne');
    const btnTwo = document.getElementById('buttonTwo');
    const btnThree = document.getElementById('buttonThree');

    btnOne.addEventListener('click',() =>{
        playGame(1);
    });
    btnTwo.addEventListener('click',() =>{
        playGame(2);
    });
    btnThree.addEventListener('click',() =>{
        playGame(3);
    });
    
}

function playGame(humanChoice){
    const computerChoice = getComputerChoice();

    console.log(humanChoice);
    console.log(computerChoice);

    if(humanChoice == computerChoice){
        alert("Draw");
    }
    else if((humanChoice == 1 && computerChoice == 3) || 
            (humanChoice == 2 && computerChoice == 1) ||
            (humanChoice == 3 && computerChoice == 2)){
                alert("Humanity victory!!!!");
    }else{
                alert("Machines victory!!!!")
    }
}

getHumanChoice();