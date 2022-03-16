const modal = document.getElementById('myModal');
const subscribeButton = document.getElementById('subscribeButton');
const closeModal = document.getElementById('close-icon');

const modalOpener = () => {
    modal.style.display = 'block';
};

const modalClose = () => {
    modal.style.display = 'none';
};

subscribeButton.addEventListener('click', modalOpener);
closeModal.addEventListener('click', modalClose);

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
