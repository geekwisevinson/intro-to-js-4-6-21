
export function makeElement(type, text) {
    const element = document.createElement(type);
    document.body.appendChild(element);
    element.innerHTML = text;
    return element;
}

export function makeProfilePage() {
    console.log('profile page');
    
    document.body.innerHTML = '';
    makeHeader();
    makeElement('h1', 'Profile');
    makeElement('h2', 'Favorite Movies');
    makeElement('li', 'Back to the future');
    makeElement('li', 'Back to the future 2');
    makeElement('h2', 'Favorite Tv Shows');
    makeElement('li', 'Simpsons');
}

export function makeContactPage() {
    console.log('Contact page')
    document.body.innerHTML = '';
    makeHeader();
    makeElement('h1', 'Contact');
    makeElement('h2', 'Phone Number');
    makeElement('li', '(555) 555-5555');
    makeElement('li', '(555) 555-5557');
    makeElement('h2', 'Address');
    makeElement('li', '123 abc street');
}


export function makeAboutPage() {
    console.log('About page')
    document.body.innerHTML = '';
    makeHeader();
    makeElement('h1', 'About Me');
    makeElement('p', ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita itaque perferendis, sit aut optio facere provident aspernatur hic voluptate porro nam voluptas, numquam autem quibusdam aliquam voluptates repellendus. Magnam eveniet qui quidem eum atque, dolorem ad! Eos officia veritatis neque eum ipsam, quaerat, maiores temporibus minima mol');
}

function makeHeader() {

    const profileButton = makeElement('button', 'Profile');
    const contactButton = makeElement('button', 'Contact');
    const aboutButton = makeElement('button', 'About');

    profileButton.addEventListener('click',  () => {
        makeProfilePage();
    });
    contactButton.addEventListener('click', () => {
        console.log('contact this', this)
        makeContactPage();
    });
    aboutButton.addEventListener('click', function() {
    
        makeAboutPage();
    });
}