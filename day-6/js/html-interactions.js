

export function setupHtml() {
    const p = document.createElement('p'); // create
    document.body.appendChild(document.createElement('li'))// nest
    const li = document.querySelector('li'); // look for
    p.innerHTML = 'text'; // what it says
    p.classList.add('my-class') // interact with classes
    p.classList.remove('my-class') // interact with classes
    
    
    li.appendChild(p);
}

