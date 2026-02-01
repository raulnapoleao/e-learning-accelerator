(function() {
    function desbloquear() {
        document.querySelectorAll('button, a, [role="button"]').forEach(btn => {
            btn.removeAttribute('disabled');
            btn.disabled = false;
            btn.style.pointerEvents = 'auto';
            btn.style.opacity = '1';
        });
    }
    
    desbloquear();
    
    let debounceTimer = null;
    new MutationObserver(() => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(desbloquear, 100);
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'disabled'] });
    
    setInterval(desbloquear, 1000);
})();
