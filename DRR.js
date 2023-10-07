// スクロールイベントリスナーを追加
window.addEventListener('scroll', () => {
  const huwa = document.querySelector('.huwa');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // 要素がウィンドウ内に入ったら.activeクラスを追加
  if (scrollPosition > windowHeight / 2) {
      huwa.classList.add('active');
  } else {
      huwa.classList.remove('active');
  }
});
