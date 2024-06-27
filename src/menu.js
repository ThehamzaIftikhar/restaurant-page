export function loadMenu() {
    let contentBody = document.querySelector('#content');
    contentBody.innerHTML = '';
    let heading = document.createElement('h1');
    heading.innerHTML = "Menu";
    contentBody.appendChild(heading)
}