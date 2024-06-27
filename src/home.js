export function loadHome() {
    let contentBody = document.querySelector('#content');
    contentBody.innerHTML = '';
    let heading = document.createElement('h1');
    heading.innerHTML = "Home";
    contentBody.appendChild(heading)
}
