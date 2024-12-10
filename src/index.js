import './style.css';
import { homeContent } from './home.js';

const content = document.querySelector('#content');
const home = document.querySelector('.one');

const title = document.createElement('div');
title.classList.add('title');

const text = document.createElement('p');
text.textContent = 'This is a fantastic restaurant!';

title.appendChild(text);
content.appendChild(title);

home.addEventListener('click', homeContent);