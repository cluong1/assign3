

document.addEventListener('DOMContentLoaded', () => {
    const changeTitleButton = document.getElementById('changeTextButton');
    const newTitleInput = document.getElementById('newTitle');
    const title = document.querySelector("h1");
    const changeImageButton = document.getElementById('changeImageButton');
    const image = document.getElementById('maymay');

    let imageNum = 1;

    changeTitleButton.addEventListener('click',() =>{
        console.log('change title button clicked');

        if(newTitleInput.value.trim()!==""){
            title.textContent = newTitleInput.value;
        }
    });

    changeImageButton.addEventListener('click',()=>{
        console.log('change image button clicked');

        if(imageNum ==1) {
            image.src='images/may2.jpg';
            imageNum = 2;
        }
        else if(imageNum ==2){
            image.src='images/may3.jpg';
            imageNum = 3;
        }
        else if(imageNum ==3){
            image.src='images/may4.jpg';
            imageNum = 4;
        }
        else if(imageNum ==4){
            image.src='images/may5.jpg';
            imageNum = 5;
        }
        else if(imageNum ==5){
            image.src='images/may6.jpg';
            imageNum = 6;
        }
        else if(imageNum ==6){
            
            image.src='images/may7.jpg';
            imageNum = 7;
        }
        else if(imageNum ==7){
            image.src='images/may8.jpg';
            imageNum = 8;
        }
        else{
            image.src='images/may1.jpg';
            imageNum = 1;
        }
    })
})