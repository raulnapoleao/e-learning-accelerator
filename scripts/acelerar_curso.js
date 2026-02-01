(function() {
    const videosProcessados = new WeakSet();
    const botoesClicados = new WeakSet();
    
    function acelerar() {
        document.querySelectorAll('audio, video').forEach(media => {
            if (videosProcessados.has(media)) return;
            videosProcessados.add(media);
            media.playbackRate = 16;
            media.play().catch(() => {});
            if (media.duration > 0) media.currentTime = media.duration - 0.01;
            media.addEventListener('timeupdate', function() {
                if (media.duration - media.currentTime < 0.5) {
                    media.currentTime = media.duration - 0.01;
                }
            }, { passive: true });
            media.addEventListener('loadedmetadata', function() {
                if (media.duration > 0) media.currentTime = media.duration - 0.01;
            }, { once: true });
        });
    }
    
    function desbloquear() {
        document.querySelectorAll('button, a, [role="button"]').forEach(btn => {
            btn.removeAttribute('disabled');
            btn.disabled = false;
            btn.style.pointerEvents = 'auto';
            btn.style.opacity = '1';
        });
    }
    
    function avancar() {
        const palavras = ['próximo', 'next', 'avançar', 'avancar', 'continuar', 'continue', 'skip', 'pular'];
        document.querySelectorAll('button, a, [role="button"], [onclick]').forEach(btn => {
            if (botoesClicados.has(btn)) return;
            const txt = (btn.textContent || '').toLowerCase();
            const aria = (btn.getAttribute('aria-label') || '').toLowerCase();
            const title = (btn.getAttribute('title') || '').toLowerCase();
            const className = (btn.className || '').toLowerCase();
            const temPalavra = palavras.some(p => txt.includes(p) || aria.includes(p) || title.includes(p) || className.includes(p));
            const rect = btn.getBoundingClientRect();
            const estaNaDireita = rect.right > window.innerWidth * 0.7;
            if ((temPalavra || estaNaDireita) && btn.offsetParent !== null && !btn.disabled) {
                botoesClicados.add(btn);
                btn.removeAttribute('disabled');
                btn.disabled = false;
                btn.click();
                setTimeout(() => botoesClicados.delete(btn), 1000);
            }
        });
    }
    
    acelerar();
    desbloquear();
    avancar();
    
    setInterval(() => {
        acelerar();
        desbloquear();
        avancar();
    }, 200);
    
    let debounceTimer = null;
    new MutationObserver(() => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            acelerar();
            desbloquear();
        }, 100);
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'disabled', 'src'] });
    
    setInterval(acelerar, 1000);
})();
