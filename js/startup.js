(() => {
  if (document.getElementById('blog-boot-screen')) return;
  const screen = document.createElement('div');
  screen.id = 'blog-boot-screen';
  screen.setAttribute('role', 'status');
  screen.setAttribute('aria-label', '网站正在启动');
  screen.innerHTML = `<section class="blog-boot-terminal" aria-hidden="true"><div class="blog-boot-bar"><i class="blog-boot-dot"></i><i class="blog-boot-dot"></i><i class="blog-boot-dot"></i><span class="blog-boot-title">visitor@suye: ~/blog</span></div><div class="blog-boot-body"><div class="blog-boot-line"><span class="blog-boot-muted">[boot]</span> initializing interface...</div><div class="blog-boot-line"><span class="blog-boot-muted">[load]</span> modules <span class="blog-boot-ok">OK</span></div><div class="blog-boot-line"><span class="blog-boot-muted">[ready]</span> welcome back.</div><div class="blog-boot-command"><span class="blog-boot-prompt">$</span><span class="blog-boot-typing">hollow,world</span><span class="blog-boot-cursor">_</span></div></div><div class="blog-boot-progress"></div></section>`;
  document.body.classList.add('blog-boot-lock');
  document.body.appendChild(screen);
  requestAnimationFrame(() => screen.classList.add('is-active'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.setTimeout(() => {
    screen.classList.add('is-exiting');
    document.body.classList.remove('blog-boot-lock');
    window.setTimeout(() => screen.remove(), reducedMotion ? 180 : 460);
  }, reducedMotion ? 450 : 2450);
})();