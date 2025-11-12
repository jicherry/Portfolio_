const menuItems = document.querySelectorAll('.menu .item');
const sections = document.querySelectorAll('section');
let currentIndex = 0;
let isScrolling = false;

function setActive(index) {
  currentIndex = index;

  // 메뉴 항목의 활성화 상태 설정
  menuItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
    item.classList.toggle('inactive', i !== index);
  });

  // 각 섹션을 보이거나 숨기기
  sections.forEach((section, i) => {
    if (i === index) {
      section.style.display = 'flex'; // 선택된 섹션만 보이기
    } else {
      section.style.display = 'none'; // 나머지 섹션은 숨기기
    }
  });

  // 스크롤 이동 (페이지의 스크롤 위치 변경)
  scrollToSection(index);
}

function scrollToSection(index) {
  const top = window.innerHeight * index;
  isScrolling = true;
  window.scrollTo({ top, behavior: 'smooth' });

  // 스크롤 애니메이션이 끝난 후 isScrolling을 false로 설정
  setTimeout(() => {
    isScrolling = false;
  }, 800);
}

// 메뉴 클릭 이벤트 처리
menuItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    setActive(i); // 클릭한 메뉴 항목의 섹션을 활성화
  });
});

// 휠 이벤트로 섹션 이동
window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0 && currentIndex < sections.length - 1) {
    setActive(currentIndex + 1); // 아래로 스크롤
  } else if (e.deltaY < 0 && currentIndex > 0) {
    setActive(currentIndex - 1); // 위로 스크롤
  }
});

// 처음 페이지 로드 시 첫 번째 섹션을 보이도록 설정
setActive(0);
