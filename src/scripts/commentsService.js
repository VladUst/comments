import { generateDate } from './dateService';
import { likeSvg, trashSvg } from '../icons/icons';

const commentsList = document.querySelector('#comments-list');

export function addComment(newComment) {
    const commentItem = document.createElement('li');
    const commentName = document.createElement('h4');
    const commentDate = document.createElement('span');
    const commentText = document.createElement('p');
    const buttonsWrapper = generateBtns();
    commentName.textContent = newComment.name;
    commentDate.textContent = generateDate(newComment.date);
    commentText.textContent = newComment.text;
    commentItem.append(commentName, commentDate, commentText, buttonsWrapper);
    commentsList.appendChild(commentItem);
}

function generateBtns() {
    const buttonsWrapper = document.createElement('div');
    const likeBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    likeBtn.innerHTML = likeSvg;
    deleteBtn.innerHTML = trashSvg;
    deleteBtn.addEventListener('click', function (e) {
        const comment = e.target.closest('li');
        comment.remove();
    });
    likeBtn.addEventListener('click', function (e) {
        const svg = e.target.closest('svg');
        svg.style.fill = svg.style.fill === 'red' ? 'none' : 'red';
    });
    buttonsWrapper.append(likeBtn, deleteBtn);
    return buttonsWrapper;
}
