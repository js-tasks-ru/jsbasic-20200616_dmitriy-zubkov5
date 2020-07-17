function initCarousel() {

  let list = document.querySelector(`.carousel__inner`);
  let leftButton = document.querySelector(`.carousel__arrow_left`);
  let rightButton = document.querySelector(`.carousel__arrow_right`);
  
  let step = 0;
  leftButton.style.display = "none";
  
  leftButton.addEventListener('click', function() {
    step += 100;
  
    if (step == 0) {
      leftButton.style.display = "none";
      rightButton.style.display = "flex";
    }
    if (step >= -200) {
      rightButton.style.display = "flex";
    }
    
    list.style.transform = `translateX(${step}%)`;
  });
  
  rightButton.addEventListener("click", function() {  
    step -= 100;
    list.style.transform = `translateX(${step}%)`;
  
    if (step < -200) {
      rightButton.style.display = "none";
      leftButton.style.display = "flex";
    }
  
    if (step < 100) {
      leftButton.style.display = "flex";
    }
  }); 
  
}