// let element = document.createElement('div')


// let ul = document.createElement('ul')
 
// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li)
// }
 
// element.appendChild(ul)

// let h1 = document.createElement('h1')
// h1.innerHTML = "YOUR-NAME is the champion";

let main = document.querySelector('main#main')
main.remove()

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML= "YOUR-NAME is the champion"

document.body.appendChild(newHeader)




