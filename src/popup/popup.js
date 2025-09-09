document.addEventListener('DOMContentLoaded', () => {
    const focusButton = document.getElementById('focusButton');
    focusButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: "focusMode" }, (response) => {
            console.log(response.status); 
        });
    });
});