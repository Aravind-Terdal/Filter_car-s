


const selectCars = document.getElementById('selectCars');

const allDivs = [...document.querySelectorAll('.all')]

const onCarChange = (eve) =>{
    let selectedCarsName = eve.target.value
    if (!selectedCarsName.includes('all')){
        allDivs.forEach(div =>{
            div.classList.add('d-none')
        })
    }
    
    
    let selectedDivs = [...document.querySelectorAll("."+selectedCarsName)];

    selectedDivs.forEach(div => div.classList.remove('d-none'))
}



selectCars.addEventListener("change" , onCarChange)











