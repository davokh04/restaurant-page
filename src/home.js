export const homeContent = () => {
    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    content.textContent = 'This is the home';
}