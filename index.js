

// Write your code here

// let ul = document.createElement('ul') 
// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 2).toString()
//   ul.appendChild(li)
// }

// let element = document.createElement('div')
// document.body.appendChild(element)
// element.appendChild(ul)

// Another code along
// let element2 = document.createElement("p")
// element2.id = 'victory'
// element2.className = 'victoryclass'
// let victory = document.createElement('#victory')
// elements2.appendChild(victory)

// document.body.appendChild(element2)
// let element_found = document.querySelector("p#victory");
// element_found.style.backgroundColor = '#27647B';
// element_found.style.textAlign = 'center';
// element_found.innerHTML = 'Hello, DOM!'
// element_found.innerHTML = element_found.innerHTML + "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
//End of code along


let main = document.querySelector('main#main')
main.remove()

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = 'SOMEBODY is the champion'
document.body.appendChild(newHeader)

//
s = document.createElement('span')
s.id = 'cat'
s.textContent = 'new one'


item = document.createElement('li')
item.appendChild(s)

document.getElementsByTagName('li')[0].parentNode.appendChild(item)

console.log(document.querySelector('#mongoose').textContent)

document.querySelector('body').innerHTML = "changeeeed!"





