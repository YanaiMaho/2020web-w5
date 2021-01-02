
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温 94 fahrenheit 度で外は寒かった。:insertx:は出かけた。:inserty:に着いた。:insertz:.。体重300 poundsの:insertx:には驚いたが、Bob は驚かなかった。:inserty:ではよくあることだった。';
let insertX = ['佐藤健','中村倫也','吉沢亮'];
let insertY = ['お台場','ディズニーランド','箱根'];
let insertZ = ['混雑していた','空いていた','賑わっていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',気温);
    newStory = newStory.replace('300 pounds',kg);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
