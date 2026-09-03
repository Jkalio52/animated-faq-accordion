document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      // Auto-collapse other open entries
      headers.forEach(otherHeader => {
        if (otherHeader !== header && otherHeader.getAttribute('aria-expanded') === 'true') {
          otherHeader.setAttribute('aria-expanded', 'false');
          otherHeader.nextElementSibling.style.maxHeight = '0';
          otherHeader.nextElementSibling.style.opacity = '0';
        }
      });

      // Toggle targeted entry state
      if (isExpanded) {
        header.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = '0';
        content.style.opacity = '0';
      } else {
        header.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
      }
    });
  });
});
