// Write your code here!
const main = document.getElementById('main');
main.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.textContent = 'Matthew is the champion!'