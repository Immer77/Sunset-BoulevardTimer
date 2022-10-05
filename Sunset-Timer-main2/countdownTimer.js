function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    
};

function changeColor(button){
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
};

function toHoursAndMinutes(minutes){
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  h = h < 10 ? '0' + h : h; 
  m = m < 10 ? '0' + m : m; 
  return h + ':' + m;
};

const startTimer = (countContainer) => {
  let isRunning = false;
  var remainingTime = 180;
  var timer;
  if(isRunning == true){
    remainingTime = 180;
    isRunning = false;
    clearInterval(timer);
  }else{
    isRunning = true;
    countContainer.querySelector('span').innerHTML = toHoursAndMinutes(remainingTime);
    timer = setInterval(function() {
      remainingTime -= 1;
      countContainer.querySelector('span').innerHTML = toHoursAndMinutes(remainingTime);
      if (remainingTime == 0) {
        clearInterval(timer);
      }
    }, 100);
  }
};

function checkInterval(countContainer){
    return countContainer.querySelector('span').innerHTML != '00:00';
    
    
};
