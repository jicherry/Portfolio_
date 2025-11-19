// main.js

const menuItems = document.querySelectorAll('.menu .item');
const sections = document.querySelectorAll('section');
let currentIndex = 0;
let isScrolling = false;

// 섹션 활성화 & 메뉴 상태 업데이트
function setActive(index) {
  currentIndex = index;

  // 메뉴 항목 활성화/비활성화
  menuItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
    item.classList.toggle('inactive', i !== index);
  });

  // 각 섹션 보이기/숨기기
  sections.forEach((section, i) => {
    section.style.display = (i === index) ? 'flex' : 'none';
  });

  // 해당 섹션 애니메이션 실행
  animateSection(index);

  // Hello! 섹션 활성화 시 h2 애니메이션
  if (index === 0) {
    gsap.fromTo(
      "#main-section h2",
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "bounce.out", delay: 0.2 }
    );
  }

  // 스크롤 이동
  scrollToSection(index);
}

// 섹션 내부 요소 애니메이션
function animateSection(index) {
  const section = sections[index];

  // About Me - .text-box p만 애니메이션 (h1 제외)
  const textBoxParagraphs = section.querySelectorAll('.text-box p');
  if (textBoxParagraphs.length > 0) {
    gsap.fromTo(
      textBoxParagraphs,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 }
    );
  }

  // About Me - .skills p (하나씩 등장)
  const skills = section.querySelectorAll('.skills p');
  if (skills.length > 0) {
    gsap.fromTo(
      skills,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.15 }
    );
  }

  // Projects - .project-wrap div (하나씩 등장)
  const projectItems = section.querySelectorAll('.project-wrap div');
  if (projectItems.length > 0) {
    gsap.fromTo(
      projectItems,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.2 }
    );
  }
}

// 페이지 스크롤 이동
function scrollToSection(index) {
  const top = window.innerHeight * index;
  isScrolling = true;
  window.scrollTo({ top, behavior: 'smooth' });

  setTimeout(() => {
    isScrolling = false;
  }, 800);
}

// 메뉴 클릭 이벤트
menuItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    setActive(i); 
  });
});

// 마우스 휠로 섹션 이동
window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0 && currentIndex < sections.length - 1) {
    setActive(currentIndex + 1); // 아래로
  } else if (e.deltaY < 0 && currentIndex > 0) {
    setActive(currentIndex - 1); // 위로
  }
});

// 처음 로드 시 첫 섹션 활성화
setActive(0);

// SVG 아이콘 애니메이션
gsap.to("svg", {
  y: -10,
  duration: 0.7,
  yoyo: true,
  repeat: -1,
  ease: "easeInOut",
});



