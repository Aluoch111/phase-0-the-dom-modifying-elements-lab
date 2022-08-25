// Write your code here!
const mains = document.getElementById('main');
mains.remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Grace is the champion'

document.body.append(newHeader)