function toggleMenu(){const m=document.querySelector('.menu');if(m)m.classList.toggle('open')}
document.querySelectorAll('.carousel-wrap').forEach(w=>{const c=w.querySelector('.carousel'),p=w.querySelector('[data-prev]'),n=w.querySelector('[data-next]');if(p)p.onclick=()=>c.scrollBy({left:-c.clientWidth*.85,behavior:'smooth'});if(n)n.onclick=()=>c.scrollBy({left:c.clientWidth*.85,behavior:'smooth'})});

document.addEventListener('click', function (event) {
  const link = event.target.closest('a[href]');
  if (!link) return;

  const href = link.href;
  if (href.includes('wa.me/') ||
      href.includes('whatsapp.com/')) {
    if (typeof gtag === 'function') {
      gtag('event', 'whatsapp_click', {
        link_url: href,
        link_text: link.innerText.trim()
      });
    }
  }
});

