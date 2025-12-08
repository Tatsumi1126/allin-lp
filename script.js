// ALL-IN LP スクリプト

document.addEventListener('DOMContentLoaded', () => {
  // スクロールアニメーション
  initScrollAnimations();

  // マーチン回戦アニメーション
  initMartingaleAnimation();

  // スムーススクロール
  initSmoothScroll();
});

// スクロールアニメーション初期化
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // アニメーション対象の要素を取得
  const animateElements = document.querySelectorAll(
    '.problem-card, .feature-item, .requirement-card, .notice-item, .support-item, .solution-main, .martingale-content, .price-card, .indicator-category, .indicators-intro'
  );

  animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// マーチン回戦アニメーション
function initMartingaleAnimation() {
  const rounds = document.querySelectorAll('.round');
  let currentRound = 0;

  setInterval(() => {
    rounds.forEach(r => r.classList.remove('active'));
    rounds[currentRound].classList.add('active');
    currentRound = (currentRound + 1) % rounds.length;
  }, 1000);
}

// スムーススクロール
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// パララックス効果（オプション）
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero-bg');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});
