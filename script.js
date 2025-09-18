
document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');
  btn.addEventListener('click', ()=>{ sidebar.classList.toggle('active'); content.classList.toggle('active'); });
});
