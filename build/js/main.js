const tipsMain = document.querySelectorAll('.tips');
const tipsToggle = document.querySelectorAll('.tips__toggle');
for (let i = 0; i < tipsToggle.length; i++) {
  tipsToggle[i].addEventListener('click', () => {
    tipsMain[i].classList.toggle('tips--hide');
  });
};
