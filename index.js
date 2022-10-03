let userDate = new Date();
let [countH, countM, countS, hoursAPM] = [0, 0, 0, 0];
let [hours, mins, secs] = [userDate.getHours(), userDate.getMinutes(), userDate.getSeconds()];

function addTime(userTime, maxTime){
  let count = userTime;
  if(count === maxTime){
    userTime = 0
  }else {
    userTime++
   count++;
}
  if(count === maxTime){userTime = 0};
  if(count > maxTime){
    count = 0;
  }
  
  return [userTime, count];
}

function toAmPm(hourOfDay){
  if(hourOfDay <= 23){
    let hourCount = hourOfDay - 12
    let period = "";
    if(hourCount >= 1){
      hourOfDay = hourCount;
      period = 'pm'
    } else if(hourCount <= -1 && hourCount > -12){
      hourOfDay = hourOfDay;
      period = "am";
    } else if(hourCount == 0){
      hourOfDay = 12
      period ="pm"
    } else if(hourCount == -12){
      hourOfDay = 12;
      period = "am"
    }
    return [hourOfDay, period]
  } else {
    console.log('invalid 24hrs time');
  }
}

  setInterval(()=> {
    [secs, countS] = addTime(secs, 60);
    if(countS == 60){
      [mins, countM] = addTime(mins, 60);
    }
    if(countM == 60 && countS == 60){
      [hours, countH] = addTime(hours, 24)
    }
    [hoursAPM, period] = toAmPm(hours);

   document.querySelector(".clock").innerHTML =`${hoursAPM}:${mins}:${secs} ${period}`
  
  }, 1000)