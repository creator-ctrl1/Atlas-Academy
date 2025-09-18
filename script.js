/* بيانات المواد + أيقونات (fontawesome classes) */
const subjectsData = {
  "1as": [
    {name: "رياضيات", icon: "fa-calculator"},
    {name: "فيزياء", icon: "fa-atom"},
    {name: "علوم طبيعية", icon: "fa-flask"},
    {name: "اللغة العربية", icon: "fa-book-open"}
  ],
  "2as": [
    {name: "رياضيات", icon: "fa-calculator"},
    {name: "فيزياء", icon: "fa-atom"},
    {name: "علوم طبيعية", icon: "fa-microscope"},
    {name: "فلسفة", icon: "fa-brain"}
  ],
  "bac": [
    {name: "رياضيات", icon: "fa-calculator"},
    {name: "فيزياء", icon: "fa-atom"},
    {name: "علوم طبيعية", icon: "fa-flask"},
    {name: "فلسفة", icon: "fa-brain"},
    {name: "إنجليزية", icon: "fa-language"}
  ],
  "bem": [
    {name: "رياضيات", icon: "fa-calculator"},
    {name: "فيزياء", icon: "fa-atom"},
    {name: "علوم طبيعية", icon: "fa-seedling"},
    {name: "لغة فرنسية", icon: "fa-globe"}
  ]
};

/* عناصر DOM */
const levelsView = document.getElementById('levelsView');
const subjectsView = document.getElementById('subjectsView');
const subjectsGrid = document.getElementById('subjectsGrid');
const subjectsHeading = document.getElementById('subjectsHeading');
const backBtn = document.getElementById('backBtn');

/* ربط الكليك على كل بطاقة مستوى */
document.querySelectorAll('.level-card').forEach(card=>{
  card.addEventListener('click', ()=> {
    const level = card.getAttribute('data-level');
    showSubjects(level);
  });
});

function showSubjects(level){
  // عنوان القسم
  const levelName = {
    "1as":"مستوى 1 ثانوي",
    "2as":"مستوى 2 ثانوي",
    "bac":"مستوى البكالوريا",
    "bem":"مستوى BEM"
  }[level] || "المواد";

  subjectsHeading.textContent = levelName;
  // تفريغ grid
  subjectsGrid.innerHTML = "";

  const list = subjectsData[level] || [];
  list.forEach(s=>{
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.setAttribute('role','button');
    card.innerHTML = `
      <div class="subject-icon"><i class="fas ${s.icon}"></i></div>
      <div class="subject-title">${s.name}</div>
    `;
    // عند الضغط على مادة: نفتح صفحة افتراضية أو تعرض رسالة
    card.addEventListener('click', ()=> {
      // مؤقتاً: نعرض تنبيه (يمكنك توجيهه لصفحة مواد / دروس لاحقاً)
      alert('ستفتح صفحة الدورات في: ' + s.name + ' (قريباً)');
    });
    subjectsGrid.appendChild(card);
  });

  // إظهار الـ subjects و إخفاء المستويات
  levelsView.classList.add('hidden');
  subjectsView.classList.remove('hidden');
}

/* زر الرجوع */
backBtn.addEventListener('click', ()=>{
  subjectsView.classList.add('hidden');
  levelsView.classList.remove('hidden');
});

/* قائمة الثلاث نقاط */
const menuBtn = document.getElementById('menuBtn');
const menuDropdown = document.getElementById('menuDropdown');

menuBtn.addEventListener('click', (e)=>{
  e.stopPropagation();
  menuDropdown.classList.toggle('hidden');
  menuDropdown.setAttribute('aria-hidden', menuDropdown.classList.contains('hidden'));
});

/* إغلاق القائمة عند النقر خارجها */
document.addEventListener('click', (e)=>{
  if(!menuDropdown.classList.contains('hidden')){
    menuDropdown.classList.add('hidden');
    menuDropdown.setAttribute('aria-hidden','true');
  }
});
