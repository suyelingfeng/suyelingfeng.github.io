(() => {
  if (document.getElementById('blog-boot-screen')) return;
  const screen = document.createElement('div');
  screen.id = 'blog-boot-screen';
  screen.setAttribute('role', 'dialog');
  screen.setAttribute('aria-modal', 'true');
  screen.setAttribute('aria-label', '欢迎进入博客');
  screen.innerHTML = `<section class="blog-boot-terminal"><div class="blog-boot-bar"><i class="blog-boot-dot"></i><i class="blog-boot-dot"></i><i class="blog-boot-dot"></i><span class="blog-boot-title">visitor@suye: ~/blog</span></div><div class="blog-boot-body"><div class="blog-boot-line"><span class="blog-boot-muted">[boot]</span> initializing interface...</div><div class="blog-boot-line"><span class="blog-boot-muted">[load]</span> modules <span class="blog-boot-ok">OK</span></div><div class="blog-boot-line"><span class="blog-boot-muted">[ready]</span> welcome back.</div><div class="blog-boot-command"><span class="blog-boot-prompt">$</span><span class="blog-boot-typing">hollow world</span><span class="blog-boot-cursor">_</span></div><button class="blog-boot-enter" type="button" disabled><span>进入博客</span><kbd>ENTER ↵</kbd></button></div><div class="blog-boot-progress"></div></section>`;
  document.body.classList.add('blog-boot-lock');
  document.body.appendChild(screen);
  const button = screen.querySelector('.blog-boot-enter');
  requestAnimationFrame(() => screen.classList.add('is-active'));
  const enterBlog = () => {
    if (button.disabled) return;
    screen.classList.add('is-exiting');
    document.body.classList.remove('blog-boot-lock');
    window.removeEventListener('keydown', onKeydown);
    window.setTimeout(() => screen.remove(), 460);
  };
  const onKeydown = event => {
    if (event.key === 'Enter') enterBlog();
  };
  button.addEventListener('click', enterBlog);
  window.addEventListener('keydown', onKeydown);
  window.setTimeout(() => {
    button.disabled = false;
    button.classList.add('is-ready');
    button.focus({ preventScroll: true });
  }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 100 : 1650);
})();