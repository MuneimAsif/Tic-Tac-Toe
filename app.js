let btns = document.querySelectorAll('.btn')
let playAgain = document.querySelector('#playAgain')
let main = document.querySelector('.main')
let para = document.querySelector('.para')

let turn = true
let count = 0
let arrOfBtn = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const winner = () => {
    for (let i of arrOfBtn) {

        let pos1 = btns[i[0]].innerText
        let pos2 = btns[i[1]].innerText
        let pos3 = btns[i[2]].innerText
        
        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 === pos2 && pos2 === pos3) {

                para.innerHTML = `Congrats ! The winner is ${pos1}`
                para.classList.add('paraAfterWin')

                btns.forEach((btn) => {
                    btn.disabled = true
                })
            }
        }
    }
}

const checkDraw = ()=>{
    para.innerHTML = 'Draw'
    para.classList.add('paraAfterWin')
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (turn) {
            btn.innerHTML = 'X'
            turn = false
        } else {
            btn.innerHTML = 'O'
            turn = true;
        }   
        btn.disabled = true
        winner()
        if(count == 8){
            checkDraw()
            winner()
        }
        count++
    })
})

playAgain.addEventListener('click', () => {
    btns.forEach((btn) => {
        btn.innerHTML = ''
        btn.disabled = false
    })
    para.classList.remove()
    para.innerText = ''
    count = 0
})