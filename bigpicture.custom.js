(() => {
  const recentUpdatesClass = '_3fDIRGKWUAQUCORORZWL_f';
  const friendsCarouselClass = '_3zVCVKrpcKJT5fd_dbyuwQ';
  const hiddenClass = 'codex-hide-big-picture-home-row';
  const friendsHeadings = new Set([
    'رائجة بين الأصدقاء',
    'Populares entre amigos',
    'Тенденциозни сред приятели',
    'Populární mezi přáteli',
    'Populært blandt venner',
    'Populair onder vrienden',
    'Trending among friends',
    'Suosittuja kavereiden keskuudessa',
    'Tendance chez vos contacts',
    'Beliebt bei Freunden',
    'Αρέσουν σε φίλους',
    'Barátok közt felkapott',
    'Sedang tren di kalangan teman',
    'Popolari tra gli amici',
    '친구들 사이에서 인기',
    'Popular entre tus amigos',
    'Trending dalam kalangan rakan',
    'Wschodzące wśród znajomych',
    'Populare în rândul prietenilor',
    'Популярно у друзей',
    'Populärt bland vänner',
    'กระแสนิยมในหมู่เพื่อน',
    'Arkadaşlar arasında popüler',
    'Популярне серед друзів',
    'Bạn bè dạo này đang chơi'
  ]);

  function hideRows() {
    document.querySelectorAll(`.${recentUpdatesClass}`).forEach((row) => {
      row.classList.add(hiddenClass);
    });

    document.querySelectorAll(`.${friendsCarouselClass}`).forEach((row) => {
      const heading = row.querySelector('h2');
      if (heading && friendsHeadings.has(heading.textContent.trim())) {
        row.classList.add(hiddenClass);
      }
    });
  }

  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      hideRows();
    });
  });

  hideRows();
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
