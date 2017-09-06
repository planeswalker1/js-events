const rightArrow = 'img/forward-arrow.png';
const rightArrowAlt = 'Picture of a forward arrow';
const downArrow = 'img/down-arrow.png';
const downArrowAlt = 'Picture of a down arrow';

function toggleVisibility(event) {
  console.log('event.target is: ' + event.target.tagName);
  console.log('event.currentTarget is: ' + event.currentTarget.tagName);

  const details = document.querySelector('.details');
  const image = event.currentTarget.querySelector('img');
  const text = event.currentTarget.querySelector('span');

  isVisible = !isVisible;
  if (isVisible) {
    details.classList.remove('hidden');
    image.src = downArrow;
    image.alt = downArrowAlt;
    text.textContent = 'Hide details';
  } else {
    details.classList.add('hidden');
    image.src = rightArrow;
    image.alt = rightArrowAlt;
    text.textContent = 'Show details';
  }
}
let isVisible = false;

const detailToggle = document.querySelector('.show-details');
detailToggle.addEventListener('click', toggleVisibility);
