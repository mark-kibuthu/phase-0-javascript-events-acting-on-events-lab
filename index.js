document.addEventListener("DOMContentLoaded", () => {
    // Remove the main element
    const main = document.getElementById('main');
    if (main) {
        main.remove();
    }

    // Create a new h1 element
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    newHeader.innerHTML = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name
    document.body.appendChild(newHeader);
});
