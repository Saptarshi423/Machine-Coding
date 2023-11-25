const slider = document.querySelector('.slider');
const progressBar = document.querySelector('.progressBar');

const updateProgress = (value)=>{
    progressBar.style.width = value+"%";
}

const handleChange = (e)=>{
    updateProgress(e.target.value);
}
slider.addEventListener("change", handleChange);