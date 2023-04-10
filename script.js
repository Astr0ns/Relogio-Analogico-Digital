function setTime() {

    const now = new Date();
    const hours = now.getHours();//utiliza as horas que está no dispositivo
    const minutes = now.getMinutes();//utiliza os minutos que está no dispositivo
    const seconds = now.getSeconds();//utiliza os segundos que está no dispositivo
  
    const hourDegrees = ((hours / 12) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    const secondDegrees = ((seconds / 60) * 360) + 90;
  
    const timeText = `${hours.toString().padStart(2, '0')}:
    ${minutes.toString().padStart(2, '0')}:
    ${seconds.toString().padStart(2, '0')}`;
    const timeDisplay = document.querySelector('.time');
    timeDisplay.textContent = timeText;

    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');
  //animação dos ponteiros para ter o tempo certo para rotacionar de acordo como um relógio analógo original
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  }
  
  setInterval(setTime, 1000);