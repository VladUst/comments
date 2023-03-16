import { addComment } from './commentsService';

const commentForm = document.querySelector('#comment-form');
const commentName = commentForm.querySelector('#name');
const commentText = commentForm.querySelector('#text');
const commentDate = commentForm.querySelector('#date');

commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = validateData(new FormData(commentForm));
    if (!isValid) return;
    const newComment = {
        name: commentName.value,
        date: commentDate.value,
        text: commentText.value,
    };
    addComment(newComment);
    resetForm();
});

function validateData(formData) {
    let isValid = true;
    const name = formData.get('name');
    const text = formData.get('text');
    const year = +formData.get('date').split('-')[0];
    if (!name) {
        const errorMessage = document.querySelector('#name-error');
        errorMessage.style.display = 'inline';
        errorMessage.textContent = 'Укажите имя';
        isValid = false;
    }
    if (text.length < 5) {
        const errorMessage = document.querySelector('#text-error');
        errorMessage.style.display = 'inline';
        errorMessage.textContent = 'Комментарий слишком короткий';
        isValid = false;
    }
    if (year && year < 1900) {
        const errorMessage = document.querySelector('#date-error');
        errorMessage.style.display = 'inline';
        errorMessage.textContent = 'Вампирам вход воспрещен';
        isValid = false;
    }
    return isValid;
}

function resetForm() {
    commentName.value = '';
    commentDate.value = '';
    commentText.value = '';
}

commentName.addEventListener('input', function (e) {
    const errorMessage = document.querySelector('#name-error');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
});

commentText.addEventListener('input', function (e) {
    const errorMessage = document.querySelector('#text-error');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
});

commentDate.addEventListener('input', function (e) {
    const errorMessage = document.querySelector('#date-error');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
});
