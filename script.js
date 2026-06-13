/**
 * นิทานธรรมบท — script.js
 * Content-First Digital Library
 */

// ============================================================
// DATA
// ============================================================

const stories = [
  {
    image: "รูป/story-001.png",
    banner: "banner-lotus",
    num: "เรื่องที่ ๑",
    title: "พระจักขุบาลเถระ",
    lesson: "ผลของกรรม — การทำดีและชั่วย่อมได้รับผลตอบสนอง",
    tag: "ยมกวรรค",
    category: "karma",
    link: "stories/story-001.html",
    excerpt: "พระเถระผู้บำเพ็ญตบะจนตาบอด แต่จิตใจสว่างไสว เพราะในชาติก่อนเคยทำให้สัตว์ตาบอด...",
    full: [
      "ครั้งหนึ่ง พระจักขุบาลเถระบวชในพระศาสนา ตั้งใจบำเพ็ญสมณธรรมอย่างเคร่งครัด แม้แพทย์จะเตือนว่าหากไม่รักษาตาจะบอด ท่านก็ยังคงนั่งวิปัสสนาจนตาบอดทั้งสองข้าง",
      "เมื่อพระภิกษุอื่นสงสัยและกราบทูลพระพุทธเจ้า พระองค์ตรัสว่า ท่านเคยเกิดเป็นแพทย์ชาวชนบทในอดีตชาติ ได้ทำลายดวงตาของหญิงคนหนึ่งจงใจ เพราะหญิงนั้นหลอกลวงไม่ยอมจ่ายค่ารักษาพยาบาล",
      "กรรมนั้นจึงส่งผลให้ตาบอดในชาตีนี้ อย่างไรก็ตาม เพราะจิตใจบริสุทธิ์และบำเพ็ญธรรมอย่างแท้จริง ท่านก็ยังสามารถบรรลุพระอรหันต์ได้ในที่สุด"
    ],
    moral: "กรรมใดที่ทำไว้ ย่อมไม่สูญหาย แม้กาลเวลาจะล่วงเลยไปนานเพียงใด จิตที่ดีย่อมพาพ้นทุกข์ได้",
    storyUrl: "stories/story-001.html"
  },
  {
    image: "รูป/story-002.png",
    banner: "banner-jade",
    num: "เรื่องที่ ๒",
    title: "นางมัตตกุณฑลีกุมาร",
    lesson: "ความเลื่อมใสในพระพุทธเจ้าแม้เพียงใจ ก็ยังให้ผลดี",
    tag: "ยมกวรรค",
    category: "wisdom",
    link: "stories/story-002.html",
    excerpt: "กุมารที่กำลังจะตายได้เพียงเห็นพระพุทธเจ้าด้วยจิตเลื่อมใส โดยไม่ทันได้ทำทานหรือรักษาศีล...",
    full: [
      "มีชายคนหนึ่งชื่อ อทินนปุพพกพราหมณ์ เป็นคนตระหนี่มาก ไม่เคยทำบุญใดเลย บุตรชายของเขาป่วยหนักจวนจะตาย บิดาไม่ยอมให้แพทย์มารักษาเพราะเสียดายเงิน",
      "วันหนึ่งพระพุทธเจ้าเสด็จผ่านมา กุมารนั้นแม้ร่างกายอ่อนแอแต่ยังพอหันหน้ามามองพระพุทธเจ้า ด้วยจิตที่เลื่อมใสอย่างแท้จริง",
      "กุมารเสียชีวิตในไม่ช้า แต่ด้วยจิตที่เลื่อมใสในพระพุทธเจ้าเพียงครั้งเดียวนั้น เขาได้ไปเกิดในสวรรค์ชั้นดาวดึงส์ พระพุทธเจ้าตรัสว่า ความเลื่อมใสในพระพุทธเจ้าแม้เพียงชั่วขณะ ย่อมนำบุญมาให้อย่างมหาศาล"
    ],
    moral: "จิตที่เลื่อมใสในพระรัตนตรัย แม้เพียงครั้งเดียว ก็นำพาชีวิตไปสู่ที่ดีได้",
    storyUrl: "stories/story-002.html"
  },
  {
    image: "รูป/story-008.png",
    banner: "banner-crimson",
    num: "เรื่องที่ ๓",
    title: "พระเทวทัต",
    lesson: "โทษของความริษยาและความโลภในลาภสักการะ",
    tag: "อัปปมาทวรรค",
    category: "karma",
    link: "stories/story-008.html",
    excerpt: "เทวทัตผู้มีฤทธิ์แต่ไม่มีปัญญา ริษยาพระพุทธเจ้าจนต้องแตกจากสงฆ์และตกนรก...",
    full: [
      "พระเทวทัตเป็นพระญาติของพระพุทธเจ้า บวชมานานและได้ฤทธิ์มาก แต่เมื่อเห็นว่าผู้คนนับถือพระพุทธเจ้ามากกว่า จิตใจก็เกิดความริษยา",
      "เทวทัตคิดวางแผนให้ตนเองเป็นใหญ่ในหมู่สงฆ์ ถึงขนาดวางแผนลอบปลงพระชนม์พระพุทธเจ้าหลายครั้ง ทั้งส่งคนไปลอบสังหาร กลิ้งก้อนหินจากเขา และปล่อยช้างนาฬาคีรีให้ไล่ทำร้าย แต่ทุกครั้งก็ล้มเหลว",
      "เทวทัตยังแตกสงฆ์โดยขอแยกตัวออกจากคณะ พาพระไปด้วยจำนวนมาก แต่พระสารีบุตรและพระโมคคัลลานะก็ไปนำพระเหล่านั้นกลับมา ในที่สุดเทวทัตตายอย่างทุกขทรมานและตกนรกอวีจิ"
    ],
    moral: "ความริษยาและความโลภในลาภสักการะ เป็นเหมือนเปลวไฟที่เผาตัวเองก่อนผู้อื่น",
    storyUrl: "stories/story-003.html"
  },
  {
    image: "รูป/story-003.png",
    banner: "banner-gold",
    num: "เรื่องที่ ๔",
    title: "พระติสสเถระ",
    lesson: "เวรย่อมไม่ระงับด้วยการจองเวร",
    tag: "ชราวรรค",
    category: "mindfulness",
    link: "stories/story-003.html",
    excerpt: "บุคคลใดที่มัวแต่คิดผูกใจเจ็บว่า 'คนนั้นด่าเรา คนนั้นทำร้ายเรา คนนั้นเอาชนะเรา' เวรของเขาย่อมไม่มีวันระงับสิ้น",
    full: [
      "เมื่อ 'อัตตา' และ 'ความถือตัว' ว่าเป็นญาติสนิทของศาสดา ทำให้หลวงตาแก่วางโตอวดเบ่งกลางโรงฉัน",
      "ทว่าพอโดนตักเตือนกลับร้องไห้โฮไม่ยอมอโหสิกรรม สู่บทเรียนเหนือกาลเวลาจากอดีตชาติของ 'ดาบสหัวหมอ'",
      "ที่แกล้งนอนขวางประตูจนเกือบหัวแตกเป็น 7 เสี่ยง เพียงเพราะความผูกใจเจ็บ",
    ],
    moral: "ผู้ใดที่ไม่ผูกใจเจ็บ ไม่ถือมั่นในอัตตาตัวตน ละความโกรธได้ เวรทั้งหลายย่อมระงับดับลงทันที",
    storyUrl: "stories/story-004.html"
  },
  {
    image: "รูป/story-004.png",
    banner: "banner-blue",
    num: "เรื่องที่ ๕",
    title: "นางกาลียักษิณี",
    lesson: "เวรย่อมไม่ระงับด้วยการจองเวร แต่ระงับได้ด้วยการไม่จองเวร",
    tag: "ปาปวรรค",
    category: "effort",
    link: "stories/story-004.html",
    excerpt: "การล้างแค้นและการผูกใจเจ็บไม่เคยนำมาซึ่งจุดจบอันสงบสุข มีแต่จะทำให้วงจรอุบาทว์นั้นขยายใหญ่ขึ้นเรื่อย ๆ",
    full: [
      "จากสงครามน้ำลายในบ้านสู่วิบาทกรรมเลือดข้ามภพชาติ! เมื่อความอิจฉาริษยาทำให้เมียหลวงแอบวางยาขับเลือด",
      "ทำลายครรภ์เมียน้อยถึง 3 ครั้ง จนกลายเป็นความพยาบาทฝังลึก เวียนว่ายตายเกิดมาเพื่อสลับกันฆ่า สลับกันกิน ไม่สิ้นสุด",
      "มีเพียงมหาเมตตาและพระธรรมคำสอนของพระพุทธองค์เท่านั้น ที่จะหยุดยั้งวงจรอุบาทว์นี้ได้",
    ],
    moral: "หนีตายเข้าเขตวัด และมหาเมตตาหย่าศึกคลายปมเวร",
    storyUrl: "stories/story-005.html"
  },
  {
    image: "รูป/story-005.png",
    banner: "banner-earth",
    num: "เรื่องที่ ๖",
    title: "พระนันทเถระ",
    lesson: "จิตที่ฝึกมาไม่ดี ย่อมถูกราคะและความทุกข์ครอบงำได้ง่าย",
    tag: "ทัณฑวรรค",
    category: "compassion",
    link: "stories/story-005.html",
    excerpt: "แรงกดดันจากเพื่อนพระ และดวงตาเห็นธรรมที่แท้จริง",
    full: [
      "เมื่อวิวาห์ล่มเพราะพระเชษฐาผู้เป็นศาสดามาบิณฑบาต! เรื่องราวของเจ้าชายนันทะผู้ถูกคลุมจีวรพาเข้าวัดในวันแต่งงาน",
      "จิตใจพะว้าพะวังร่ำร้องหาแต่ใบหน้าของเจ้าสาวแสนสวย สู่กุศโลบายระดับจักรวาลที่พระพุทธองค์ทรงพาขึ้นสวรรค์ไปดูนางอัปสร",
      "เพื่อพิสูจน์ว่า 'จิตที่ฝึกมาไม่ดี ย่อมถูกราคะราวีเหมือนหลังคารั่ว'"
    ],
    moral: "ความสูญเสียเป็นประตูสู่ปัญญา หากเราไม่จมกับมัน แต่เลือกเปิดใจรับความจริง",
    storyUrl: "stories/story-006.html"
  }
];

// ข้อมูลวิดีโอ — เพิ่ม/แก้ไขให้ตรงกับวิดีโอจริง
const videos = [
  { title: "พระจักขุบาลเถระ", lesson: "ผลของกรรม", duration: "5:30", views: "1.2K", url: "video.html#v001" },
  { title: "นางมัตตกุณฑลีกุมาร", lesson: "ความเลื่อมใสในพระพุทธเจ้า", duration: "4:45", views: "856", url: "video.html#v002" },
  { title: "พระเทวทัต", lesson: "โทษของความริษยา", duration: "6:12", views: "2.1K", url: "video.html#v003" },
  { title: "พระติสสเถระ", lesson: "เวรย่อมไม่ระงับด้วยการจองเวร", duration: "5:00", views: "980", url: "video.html#v004" },
  { title: "นางกาลียักษิณี", lesson: "เวรระงับด้วยการไม่จองเวร", duration: "7:20", views: "3.4K", url: "video.html#v005" },
  { title: "พระนันทเถระ", lesson: "จิตที่ฝึกมาไม่ดี", duration: "8:15", views: "4.2K", url: "video.html#v006" }
];

const dailyQuotes = [
  { text: "จิตที่ฝึกดีแล้ว ย่อมนำสุขมาให้", source: "พระธรรมบท" },
  { text: "ความโกรธทำให้ใจมัวหมอง ความสงบทำให้ใจสว่าง", source: "พระธรรมบท" },
  { text: "การให้ทานคือการสละความตระหนี่ออกจากใจ", source: "พระพุทธศาสนา" },
  { text: "สติคือเครื่องระลึกรู้ ผู้มีสติย่อมไม่ตกในความทุกข์", source: "พระพุทธศาสนา" },
  { text: "ความเพียรที่ถูกต้อง ย่อมนำไปสู่ความสำเร็จในธรรม", source: "พระธรรมบท" },
  { text: "อริยสัจ ๔ เป็นทางสู่ความดับทุกข์", source: "พระพุทธเจ้า" },
  { text: "ใจเป็นนาย ใจเป็นผู้นำ กรรมใดทำด้วยใจ ตัวเองย่อมรับผล", source: "พระธรรมบท" }
];

const categoryNames = {
  karma: "กฎแห่งกรรม",
  wisdom: "ปัญญา",
  gratitude: "กตัญญู",
  compassion: "เมตตา",
  mindfulness: "สติ",
  effort: "ความเพียร"
};

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  loadFooter();
  renderFeaturedStories();
  renderLatestStories();
  setDailyQuote();
  applyTheme();
  initNavbarScroll();
  initSearch();         // ← search dropdown
});

// ============================================================
// FOOTER LOADER
// ============================================================

function loadFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  fetch(window.location.pathname.includes('stories') ? '../footer.html' : 'footer.html')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then(html => { placeholder.innerHTML = html; })
    .catch(err => {
      console.error('Could not load footer:', err);
      placeholder.innerHTML = `
        <footer class="site-footer">
          <div class="footer-inner">
            <p class="footer-copy">© 2025 นิทานธรรมบท — สงวนลิขสิทธิ์</p>
          </div>
        </footer>`;
    });
}

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ============================================================
// MOBILE MENU
// ============================================================

function toggleMobileMenu() {
  const navLinks = document.getElementById('nav-links');
  const menuBtn = document.getElementById('mobileMenuBtn');
  if (navLinks && menuBtn) {
    navLinks.classList.toggle('open');
    menuBtn.classList.toggle('active');
  }
}

document.addEventListener('click', (e) => {
  const navLinks = document.getElementById('nav-links');
  const menuBtn = document.getElementById('mobileMenuBtn');
  if (navLinks && menuBtn && navLinks.classList.contains('open')) {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      navLinks.classList.remove('open');
      menuBtn.classList.remove('active');
    }
  }
});

// ============================================================
// STORY RENDERING
// ============================================================

function createStoryCard(story, index) {
  const isFav = localStorage.getItem(`fav-${index}`) === 'true';
  const totalChars = story.full.join(' ').length;
  const readTime = Math.ceil(totalChars / 400);

  const card = document.createElement('article');
  card.className = 'story-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `อ่านนิทาน: ${story.title}`);

  card.innerHTML = `
    <div class="card-banner ${story.banner}">
      <img src="${story.image}" alt="${story.title}">
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="reading-time">⏱️ ${readTime} นาที</span>
        <button class="fav-btn ${isFav ? 'active' : ''}"
                onclick="toggleFav(event, ${index})"
                aria-label="${isFav ? 'ลบจากรายการโปรด' : 'เพิ่มในรายการโปรด'}">❤️</button>
      </div>
      <p class="card-number">${story.num}</p>
      <h3 class="card-title">${story.title}</h3>
      <p class="card-lesson">${story.lesson}</p>
      <p class="card-excerpt">${story.excerpt}</p>
    </div>
    <div class="card-footer">
      <span class="card-tag">${story.tag}</span>
      <a href="${story.link}" class="read-btn" target="_blank" rel="noopener noreferrer">อ่านเรื่องเต็ม</a>
    </div>
  `;

  card.addEventListener('click', (e) => {
    if (!e.target.closest('.fav-btn')) openModal(index);
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(index);
    }
  });

  return card;
}

function renderStories(storyList, targetGridId) {
  const grid = document.getElementById(targetGridId);
  if (!grid) return;

  grid.innerHTML = '';

  if (storyList.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem;">ไม่พบนิทานที่ค้นหา</p>
        <p style="font-size: 0.9rem; margin-top: 0.5rem;">ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่</p>
      </div>`;
    return;
  }

  storyList.forEach((story) => {
    const originalIndex = stories.indexOf(story);
    grid.appendChild(createStoryCard(story, originalIndex));
  });
}

function renderFeaturedStories() {
  renderStories(stories.slice(0, 6), 'featuredGrid');
}

function renderLatestStories() {
  renderStories([...stories].reverse(), 'latestGrid');
}

// ============================================================
// SEARCH — Page-level (Enter / ปุ่ม)
// ============================================================

function searchStories() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  const term = input.value.trim().toLowerCase();
  if (!term) {
    renderLatestStories();
    updateLatestHeader('นิทานล่าสุด', 'นิทานธรรมบททั้งหมดในคลัง');
    return;
  }

  const filtered = stories.filter(s =>
    s.title.toLowerCase().includes(term) ||
    s.excerpt.toLowerCase().includes(term) ||
    s.lesson.toLowerCase().includes(term) ||
    s.tag.toLowerCase().includes(term) ||
    s.moral.toLowerCase().includes(term)
  );

  renderStories(filtered, 'latestGrid');
  updateLatestHeader(`ผลการค้นหา: "${input.value.trim()}"`, `พบ ${filtered.length} เรื่องที่ตรงกับคำค้นหา`);

  const latestSection = document.getElementById('latest');
  if (latestSection) latestSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.id === 'searchInput') searchStories();
});

// ============================================================
// SEARCH — Dropdown real-time (นิทาน + วิดีโอ)
// ============================================================

function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  const wrapper = input.closest('.nav-search');
  if (!wrapper) return;

  // อัปเดต icon ปุ่ม
  const btn = wrapper.querySelector('button');
  if (btn) {
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>`;
    btn.onclick = searchStories;
  }

  // inject CSS
  injectSearchStyles();

  // สร้าง dropdown
  const dropdown = document.createElement('div');
  dropdown.className = 'search-dropdown';
  wrapper.style.position = 'relative';
  wrapper.appendChild(dropdown);

  let timer;
  let focusedIndex = -1;

  input.addEventListener('input', () => {
    clearTimeout(timer);
    const q = input.value.trim();
    focusedIndex = -1;
    if (!q) { dropdown.classList.remove('open'); return; }
    timer = setTimeout(() => {
      renderDropdown(dropdown, q);
      dropdown.classList.add('open');
    }, 180);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim() && dropdown.innerHTML) dropdown.classList.add('open');
  });

  // keyboard nav
  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('.sd-item');
    if (!items.length || !dropdown.classList.contains('open')) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusedIndex = Math.min(focusedIndex + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('focused', i === focusedIndex));
      items[focusedIndex]?.scrollIntoView({ block: 'nearest' });

    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusedIndex = Math.max(focusedIndex - 1, 0);
      items.forEach((el, i) => el.classList.toggle('focused', i === focusedIndex));
      items[focusedIndex]?.scrollIntoView({ block: 'nearest' });

    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      window.location.href = items[focusedIndex].href;

    } else if (e.key === 'Escape') {
      dropdown.classList.remove('open');
      focusedIndex = -1;
    }
  });

  // ปิดเมื่อคลิกนอก
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) dropdown.classList.remove('open');
  });
}

function renderDropdown(dropdown, query) {
  const q = query.toLowerCase();

  const matchedStories = stories.filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.lesson.toLowerCase().includes(q) ||
    s.tag.toLowerCase().includes(q) ||
    s.excerpt.toLowerCase().includes(q)
  ).slice(0, 5);

  const matchedVideos = videos.filter(v =>
    v.title.toLowerCase().includes(q) ||
    v.lesson.toLowerCase().includes(q)
  ).slice(0, 4);

  const total = matchedStories.length + matchedVideos.length;
  dropdown.innerHTML = '';

  if (total === 0) {
    dropdown.innerHTML = `
      <div class="sd-empty">
        <span>🔍</span>
        ไม่พบผลลัพธ์สำหรับ "<strong>${query}</strong>"
      </div>`;
    return;
  }

  // --- นิทาน ---
  if (matchedStories.length > 0) {
    dropdown.innerHTML += `
      <div class="sd-label">📖 นิทาน <span>(${matchedStories.length})</span></div>`;

    matchedStories.forEach((s, i) => {
      const url = s.storyUrl || `stories/story-00${stories.indexOf(s) + 1}.html`;
      dropdown.innerHTML += `
        <a class="sd-item" href="${url}">
          <div class="sd-icon">☸</div>
          <div class="sd-body">
            <div class="sd-title">${hlText(s.title, query)}</div>
            <div class="sd-sub">${hlText(s.lesson, query)}</div>
          </div>
          <span class="sd-badge story">นิทาน</span>
        </a>`;
    });
  }

  // --- วิดีโอ ---
  if (matchedVideos.length > 0) {
    dropdown.innerHTML += `
      <div class="sd-label">🎬 วิดีโอ <span>(${matchedVideos.length})</span></div>`;

    matchedVideos.forEach(v => {
      dropdown.innerHTML += `
        <a class="sd-item" href="${v.url}">
          <div class="sd-icon">▶</div>
          <div class="sd-body">
            <div class="sd-title">${hlText(v.title, query)}</div>
            <div class="sd-sub">${hlText(v.lesson, query)}</div>
          </div>
          <span class="sd-badge video">${v.duration}</span>
        </a>`;
    });
  }

  dropdown.innerHTML += `
    <div class="sd-footer">
      <span>พบ ${total} ผลลัพธ์</span>
      <span class="sd-keys">
        <kbd>↑↓</kbd> เลือก &nbsp;<kbd>Enter</kbd> เปิด &nbsp;<kbd>Esc</kbd> ปิด
      </span>
    </div>`;
}

// highlight คำค้น
function hlText(text, query) {
  if (!query) return text;
  const esc = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${esc})`, 'gi'), '<mark>$1</mark>');
}

// inject CSS สำหรับ dropdown
function injectSearchStyles() {
  if (document.getElementById('search-dropdown-style')) return;
  const s = document.createElement('style');
  s.id = 'search-dropdown-style';
  s.textContent = `
    .search-dropdown {
      display: none;
      position: absolute;
      top: calc(100% + 10px);
      left: 0; right: 0;
      min-width: 340px;
      max-height: 480px;
      overflow-y: auto;
      background: rgba(12, 12, 16, 0.95);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      border: 1px solid rgba(212, 175, 55, 0.25);
      border-radius: 14px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);
      z-index: 9999;
      scrollbar-width: thin;
      scrollbar-color: rgba(212,175,55,0.3) transparent;
      animation: sdDropIn 0.2s cubic-bezier(0.16,1,0.3,1);
    }
    .search-dropdown.open { display: block; }
    @keyframes sdDropIn {
      from { opacity: 0; transform: translateY(-8px) scale(0.98); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    .search-dropdown::-webkit-scrollbar { width: 4px; }
    .search-dropdown::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.25); border-radius: 4px; }

    .sd-label {
      padding: 0.7rem 1rem 0.35rem;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(212,175,55,0.7);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .sd-label span { opacity: 0.5; font-weight: 400; }

    .sd-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      text-decoration: none;
      border-bottom: 1px solid rgba(255,255,255,0.03);
      transition: background 0.12s;
      cursor: pointer;
    }
    .sd-item:last-of-type { border-bottom: none; }
    .sd-item:hover, .sd-item.focused {
      background: rgba(212,175,55,0.08);
    }

    .sd-icon {
      flex-shrink: 0;
      width: 34px; height: 34px;
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.95rem;
      background: rgba(212,175,55,0.1);
      border: 1px solid rgba(212,175,55,0.15);
      color: #d4af37;
    }

    .sd-body { flex: 1; min-width: 0; }

    .sd-title {
      font-size: 0.88rem;
      font-weight: 600;
      color: #f1f5f9;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.15rem;
    }
    .sd-title mark {
      background: transparent;
      color: #d4af37;
      font-weight: 700;
    }

    .sd-sub {
      font-size: 0.74rem;
      color: rgba(148,163,184,0.75);
      font-style: italic;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sd-sub mark {
      background: transparent;
      color: #d4af37;
      font-style: normal;
    }

    .sd-badge {
      flex-shrink: 0;
      font-size: 0.65rem;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 20px;
      letter-spacing: 0.04em;
    }
    .sd-badge.story { background: rgba(212,175,55,0.15); color: #d4af37; }
    .sd-badge.video { background: rgba(100,200,100,0.12); color: #86efac; }

    .sd-empty {
      padding: 2rem 1rem;
      text-align: center;
      color: rgba(148,163,184,0.6);
      font-size: 0.875rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
    .sd-empty span { font-size: 1.75rem; opacity: 0.35; }

    .sd-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.55rem 1rem;
      border-top: 1px solid rgba(255,255,255,0.05);
      font-size: 0.68rem;
      color: rgba(100,116,139,0.8);
    }
    .sd-keys kbd {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 3px;
      padding: 1px 4px;
      font-size: 0.62rem;
      font-family: monospace;
    }

    /* light theme */
    .light-theme .search-dropdown {
      background: rgba(255,255,255,0.97);
      border-color: rgba(184,134,11,0.25);
      box-shadow: 0 20px 60px rgba(0,0,0,0.12);
    }
    .light-theme .sd-item:hover,
    .light-theme .sd-item.focused { background: rgba(184,134,11,0.07); }
    .light-theme .sd-title { color: #0f172a; }
    .light-theme .sd-sub  { color: #64748b; }
    .light-theme .sd-label { color: rgba(184,134,11,0.85); }
    .light-theme .sd-keys kbd {
      background: rgba(0,0,0,0.05);
      border-color: rgba(0,0,0,0.1);
    }
  `;
  document.head.appendChild(s);
}

// ============================================================
// CATEGORY FILTER
// ============================================================

function filterByCategory(category) {
  const filtered = stories.filter(s => s.category === category);

  renderStories(filtered, 'latestGrid');
  updateLatestHeader(
    `หมวดหมู่: ${categoryNames[category] || category}`,
    `พบ ${filtered.length} เรื่องในหมวดหมู่นี้`
  );

  const latestSection = document.getElementById('latest');
  if (latestSection) latestSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateLatestHeader(title, desc) {
  const titleEl = document.getElementById('latestTitle');
  const descEl  = document.getElementById('latestDesc');
  if (titleEl) titleEl.textContent = title;
  if (descEl)  descEl.textContent  = desc;
}

// ============================================================
// DAILY QUOTE
// ============================================================

function setDailyQuote() {
  const today = new Date().toDateString();
  const savedDate = localStorage.getItem('quoteDate');
  const savedText = localStorage.getItem('quoteText');
  const savedSource = localStorage.getItem('quoteSource');

  let quote;
  if (savedDate === today && savedText && savedSource) {
    quote = { text: savedText, source: savedSource };
  } else {
    quote = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];
    localStorage.setItem('quoteDate', today);
    localStorage.setItem('quoteText', quote.text);
    localStorage.setItem('quoteSource', quote.source);
  }

  const quoteEl  = document.getElementById('dailyQuote');
  const sourceEl = document.getElementById('quoteSource');
  if (quoteEl)  quoteEl.textContent  = `"${quote.text}"`;
  if (sourceEl) sourceEl.textContent = `— ${quote.source}`;
}

// ============================================================
// MODAL
// ============================================================

function openModal(index) {
  const story = stories[index];
  if (!story) return;

  const el = (id) => document.getElementById(id);

  if (el('modalIcon'))   el('modalIcon').textContent   = story.icon || '☸';
  if (el('modalNum'))    el('modalNum').textContent    = story.num;
  if (el('modalTitle'))  el('modalTitle').textContent  = story.title;
  if (el('modalLesson')) el('modalLesson').textContent = `✦ ${story.lesson}`;

  if (el('modalBody')) {
    el('modalBody').innerHTML =
      story.full.map(p => `<p>${p}</p>`).join('') +
      `<div class="moral-box">
        <p class="moral-label">คติธรรม</p>
        <p class="moral-text">${story.moral}</p>
      </div>`;
  }

  const modal = el('storyModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close')?.focus();
  }
}

function closeModalDirect() {
  const modal = document.getElementById('storyModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeModal(event) {
  if (event.target.id === 'storyModal') closeModalDirect();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModalDirect();
    closeVideoModal();
  }
});

// ============================================================
// FAVORITES
// ============================================================

function toggleFav(event, index) {
  if (event) event.stopPropagation();
  const key = `fav-${index}`;
  const newState = !(localStorage.getItem(key) === 'true');
  localStorage.setItem(key, newState.toString());

  const btn = event?.target.closest('.fav-btn');
  if (btn) {
    btn.classList.toggle('active', newState);
    btn.setAttribute('aria-label', newState ? 'ลบจากรายการโปรด' : 'เพิ่มในรายการโปรด');
  }
}

// ============================================================
// THEME
// ============================================================

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  localStorage.setItem('dharmaTheme', isLight ? 'light' : 'dark');
  updateThemeIcon(isLight);
}

function updateThemeIcon(isLight) {
  const icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = isLight ? '🌙' : '☀️';
}

function applyTheme() {
  const isLight = localStorage.getItem('dharmaTheme') === 'light';
  document.body.classList.toggle('light-theme', isLight);
  updateThemeIcon(isLight);
}

// ============================================================
// LOGIN HANDLER
// ============================================================

function handleLogin(event) {
  event.preventDefault();
  const email    = document.getElementById('email');
  const password = document.getElementById('password');

  if (!email.value || !password.value) {
    alert('กรุณากรอกอีเมลและรหัสผ่าน');
    return;
  }

  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'กำลังเข้าสู่ระบบ...';
  submitBtn.disabled = true;

  setTimeout(() => {
    alert('ระบบล็อกอินจำลอง: การเข้าสู่ระบบสำเร็จ!');
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    email.value = '';
    password.value = '';
  }, 1500);
}

// ============================================================
// VIDEO MODAL
// ============================================================

function openVideoModal(videoSrc, title, desc) {
  const modal   = document.getElementById('videoModal');
  const video   = document.getElementById('modalVideo');
  const titleEl = document.getElementById('modalVideoTitle');
  const descEl  = document.getElementById('modalVideoDesc');
  if (!modal) return;

  if (video)   video.src          = videoSrc;
  if (titleEl) titleEl.textContent = title;
  if (descEl)  descEl.textContent  = desc;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  video?.play();
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  if (!modal) return;

  modal.classList.remove('open');
  document.body.style.overflow = '';
  if (video) { video.pause(); video.src = ''; }
}

// ============================================================
// SMOOTH SCROLL
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ============================================================
// SCROLL ANIMATIONS
// ============================================================

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section-header, .quote-card, .about-block, .about-mission').forEach(el => {
  el.style.opacity    = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)';
  observer.observe(el);
});
