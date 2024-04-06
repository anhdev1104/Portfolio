function tabLine() {
  const line = document.querySelector('.line');
  const tabs = document.querySelectorAll('.menu-item');
  const tabsActive = document.querySelector('.menu-item.active');

  requestIdleCallback(function () {
    line.style.left = tabsActive.offsetLeft + 'px';
    line.style.width = tabsActive.offsetWidth + 'px';
  });

  tabs.forEach(tab =>
    tab.addEventListener('click', function () {
      line.style.left = this.offsetLeft + 'px';
      line.style.width = this.offsetWidth + 'px';
    })
  );
}

export default tabLine;
