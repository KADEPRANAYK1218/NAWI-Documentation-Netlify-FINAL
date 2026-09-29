
const searchInput = document.getElementById('siteSearch');
const results = document.getElementById('searchResults');
const pages = [
  {title:'Home', url:'index.html'},
  {title:'System Overview', url:'system-overview.html'},
  {title:'Project Summary', url:'project-summary.html'},
  {title:'Project Architecture', url:'project-architecture.html'},
  {title:'References', url:'references.html'}
];
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  results.innerHTML = '';
  if (!q) { results.style.display='none'; return; }
  const matches = pages.filter(p => p.title.toLowerCase().includes(q));
  matches.forEach(p => {
    const a=document.createElement('a');
    a.href=p.url;
    a.textContent=p.title;
    results.appendChild(a);
  });
  results.style.display = matches.length ? 'block' : 'none';
});
document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) results.style.display='none';
});
