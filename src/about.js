export function loadAbout() {
    let contentBody = document.querySelector('#content');
    contentBody.innerHTML = '';
    let heading = document.createElement('h1');
    heading.innerHTML = "About";
    contentBody.appendChild(heading)
}