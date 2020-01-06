// Write your code here!
let main = document.querySelector('main#main');
main.remove();
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = "YOUR-NAME is the champion"