const clickAlert = () => {
    alert('button clicked!')
}



// const bgChange = () => {
//     debugger
//     let blueBg = document.querySelector('.blue-background');
//     console.log(blueBg);
//     // blueBg.classList.remove("blue-background")
//     blueBg.classList.add('.red-background');
// }


const bgChange = () => {
    let blueBg = document.querySelector('.blue-background')
    blueBg.classList.toggle('red-background');
    console.log(blueBg)
}

