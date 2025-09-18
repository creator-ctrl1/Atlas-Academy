/* بيانات المواد + أيقونات */
const subjectsData = {
  "1as": [
    {name:"رياضيات",icon:"fa-calculator"},
    {name:"فيزياء",icon:"fa-atom"},
    {name:"علوم طبيعية",icon:"fa-flask"},
    {name:"اللغة العربية",icon:"fa-book-open"},
    {name:"لغة فرنسية",icon:"fa-globe"},
    {name:"لغة إنجليزية",icon:"fa-language"},
    {name:"فلسفة إسلامية",icon:"fa-brain"},
    {name:"تاريخ وجغرافيا",icon:"fa-landmark"}
  ],
  "2as":[
    {name:"رياضيات",icon:"fa-calculator"},
    {name:"فيزياء",icon:"fa-atom"},
    {name:"علوم طبيعية",icon:"fa-microscope"},
    {name:"فلسفة",icon:"fa-brain"},
    {name:"لغة عربية",icon:"fa-book-open"},
    {name:"لغة فرنسية",icon:"fa-globe"},
    {name:"لغة إنجليزية",icon:"fa-language"},
    {name:"تاريخ وجغرافيا",icon:"fa-landmark"}
  ],
  "bac":[
    {name:"رياضيات",icon:"fa-calculator"},
    {name:"فيزياء",icon:"fa-atom"},
    {name:"علوم طبيعية",icon:"fa-flask"},
    {name:"فلسفة",icon:"fa-brain"},
    {name:"لغة عربية",icon:"fa-book-open"},
    {name:"لغة فرنسية",icon:"fa-globe"},
    {name:"لغة إنجليزية",icon:"fa-language"},
    {name:"تاريخ وجغرافيا",icon:"fa-landmark"}
  ],
  "bem":[
    {name:"رياضيات",icon:"fa-calculator"},
    {name:"فيزياء",icon:"fa-atom"},
    {name:"علوم طبيعية",icon:"fa-seedling"},
    {name:"لغة عربية",icon:"fa-book-open"},
    {name:"لغة فرنسية",icon:"fa-globe"},
    {name:"لغة إنجليزية",icon:"fa-language"},
    {name:"فلسفة إسلامية",icon:"fa-brain"},
    {name:"تاريخ وجغرافيا",icon:"fa-landmark"}
  ]
};

const levelsView=document.getElementById('levelsView');
const subjectsView=document.getElementById('subjectsView');
const subjectsGrid=document.getElementById('subjectsGrid');
const subjectsHeading=document.getElementById('subjectsHeading');
const backBtn=document.getElementById('backBtn');

/* ربط الكليك على كل بطاقة مستوى */
document.querySelectorAll('.level-card').forEach(card=>{
  card.addEventListener('click',()=>{
    const level=card.getAttribute('data-level');
    showSubjects(level,card);
  });
});

function showSubjects(level,card){
  const levelName={
    "1as":"مستوى 1 ثانوي",
    "2as":"مستوى 2 ثانوي",
    "bac":"مستوى البكالوريا",
    "bem":"مستوى BEM"
  }[level]||"المواد";

  subjectsHeading.textContent=levelName;
  subjectsGrid.innerHTML="";

  const list=subjectsData[level]||[];
  list.forEach(s=>{
    const c=document.createElement('div');
    c.className='subject-card';
    c.setAttribute('role','button');
    c.innerHTML=`<div class="subject-icon"><i class="fas ${s.icon}"></i></div>
                 <div class="subject-title">${s.name}</div>`;
    c.addEventListener('click',()=>alert('ستفتح صفحة الدورات في: '+s.name+' (قريباً)'));
    subjectsGrid.appendChild(c);
  });

  // إظهار المواد مباشرة أسفل المستوى
  if(subjectsView.parentNode!==levelsView.parentNode){
    levelsView.parentNode.insertBefore(subjectsView,levelsView.nextSibling);
  }
  subjectsView.classList.remove('hidden');
  card.scrollIntoView({behavior:'smooth',block:'start'});
}

/* زر الرجوع */
backBtn.addEventListener('click',()=>{
  subjectsView.classList.add('hidden');
});

/* قائمة الثلاث نقاط */
const menuBtn=document.getElementById('menuBtn');
const menuDropdown=document.getElementById('menuDropdown');
menuBtn.addEventListener('click',(e)=>{
  e.stopPropagation();
  menuDropdown.classList.toggle('hidden');
  menuDropdown.setAttribute('aria-hidden',menuDropdown.classList.contains('hidden'));
});
document.addEventListener('click',()=>{
  if(!menuDropdown.classList.contains('hidden')){
    menuDropdown.classList.add('hidden');
    menuDropdown.setAttribute('aria-hidden','true');
  }
});
