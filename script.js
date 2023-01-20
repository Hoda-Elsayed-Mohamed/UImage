const maleBtn= document.querySelector('.male')
const femaleBtn= document.querySelector('.female')
const picture= document.querySelector('.image-wrapper')
const colorInput= document.querySelector('input[type="color"]')
// const x = document.getElementById('display-picture')
const coloredCircles = document.querySelectorAll('.color-circle')

maleBtn.addEventListener("click", ()=>{
    maleBtn.classList.toggle('active')
    femaleBtn.classList.toggle('active')
    
    if(maleBtn.classList.contains('active')==true){
        picture.innerHTML =`<img id="display-picture" src="images/male-1.png" alt="">`   
    }
})
femaleBtn.addEventListener('click',()=>{
    femaleBtn.classList.toggle('active')
    maleBtn.classList.toggle('active')
    if(femaleBtn.classList.contains('active')==true){
        console.log('male');
        picture.innerHTML =`<img id="display-picture" src="images/female-1.png" alt="">`   
    }
})

coloredCircles.forEach((circle,idx)=>{
    circle.addEventListener('click', ()=>{
        for(let i =0; i<coloredCircles.length; i++){
            coloredCircles[i].classList.remove('picked')
        }

        coloredCircles[idx].classList.add('picked')

        let pickedColor = circle.style.background 
        if(idx==0){
            picture.style.background ="url('images/pattern-big.png') no-repeat center center"
        }else if(idx>1){
            picture.style.background = "none"
            picture.style.backgroundColor = pickedColor
        }
    })
})

colorInput.addEventListener('input',()=>{
    picture.style.background= colorInput.value
})