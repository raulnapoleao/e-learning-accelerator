// Script para ACELERAR NARRADOR e DESBLOQUEAR SLIDES
// Acelera áudio e permite avançar mesmo com narrador falando

(function() {
    'use strict';
    
    console.log('🎤 Acelerando NARRADOR e desbloqueando slides...');
    
    // ===== ACELERA ÁUDIO DO NARRADOR =====
    function acelerarAudio() {
        // Procura por elementos de áudio (não só vídeos)
        const audios = document.querySelectorAll('audio');
        const videos = document.querySelectorAll('video');
        const todosMedia = [...audios, ...videos];
        
        todosMedia.forEach((media, i) => {
            try {
                // Acelera para velocidade máxima
                media.playbackRate = 16;
                
                // Força play
                media.play().catch(() => {});
                
                // Pula para o final após 0.3s
                setTimeout(() => {
                    if (media.duration > 0) {
                        media.currentTime = media.duration - 0.01;
                    }
                }, 300);
                
                // Listener que força o final
                const forcarFinal = function() {
                    if (media.duration && media.duration > 0) {
                        if (media.currentTime < media.duration - 0.3) {
                            media.currentTime = media.duration - 0.01;
                        }
                    }
                };
                
                media.addEventListener('timeupdate', forcarFinal, { passive: true });
                media.addEventListener('progress', forcarFinal, { passive: true });
                
                // Força término imediato
                media.addEventListener('loadedmetadata', function() {
                    if (media.duration > 0) {
                        media.currentTime = media.duration - 0.01;
                    }
                }, { once: true });
                
            } catch(e) {
                console.log('Erro ao acelerar mídia:', e);
            }
        });
        
        return todosMedia.length;
    }
    
    // ===== INTERCEPTA EVENTOS DE ÁUDIO =====
    function interceptarEventosAudio() {
        // Intercepta eventos que podem bloquear o avanço
        const eventosBloqueadores = ['play', 'playing', 'timeupdate', 'ended'];
        
        eventosBloqueadores.forEach(evento => {
            document.addEventListener(evento, function(e) {
                const media = e.target;
                if (media && (media.tagName === 'AUDIO' || media.tagName === 'VIDEO')) {
                    // Acelera imediatamente
                    media.playbackRate = 16;
                    
                    // Se o evento for 'playing', força para o final
                    if (evento === 'playing' && media.duration > 0) {
                        setTimeout(() => {
                            media.currentTime = media.duration - 0.01;
                        }, 100);
                    }
                }
            }, true); // Use capture phase
        });
    }
    
    // ===== DESBLOQUEIA SLIDES FORÇADAMENTE =====
    function desbloquearSlides() {
        // Remove classes de bloqueio
        document.querySelectorAll('[class*="lock"], [class*="block"], [class*="disable"], [class*="disabled"]').forEach(el => {
            el.classList.remove('locked', 'blocked', 'disabled', 'disable');
            el.removeAttribute('disabled');
            el.style.pointerEvents = 'auto';
            el.style.opacity = '1';
        });
        
        // Remove atributos disabled
        document.querySelectorAll('[disabled]').forEach(el => {
            el.removeAttribute('disabled');
        });
        
        // Remove event listeners que podem bloquear
        document.querySelectorAll('button, a, [role="button"]').forEach(btn => {
            // Remove listeners de bloqueio
            const novoBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(novoBtn, btn);
        });
    }
    
    // ===== FORÇA AVANÇO AUTOMÁTICO =====
    function forcarAvancar() {
        const palavras = ['próximo', 'next', 'avançar', 'continuar', 'skip', 'pular'];
        
        // Procura botões de avançar
        document.querySelectorAll('button, a, [role="button"], [onclick], [class*="button"], [class*="btn"]').forEach(btn => {
            const txt = (btn.textContent || '').toLowerCase();
            const aria = (btn.getAttribute('aria-label') || '').toLowerCase();
            const className = (btn.className || '').toLowerCase();
            const id = (btn.id || '').toLowerCase();
            
            const temPalavra = palavras.some(p => 
                txt.includes(p) || aria.includes(p) || className.includes(p) || id.includes(p)
            );
            
            // Também procura botões na direita (geralmente são de avançar)
            const rect = btn.getBoundingClientRect();
            const estaNaDireita = rect.right > window.innerWidth * 0.7;
            
            if ((temPalavra || estaNaDireita) &&
                btn.offsetParent !== null) {
                
                // Remove disabled mesmo se estiver
                btn.removeAttribute('disabled');
                btn.disabled = false;
                btn.style.pointerEvents = 'auto';
                btn.style.opacity = '1';
                
                // Clica forçadamente
                try {
                    btn.click();
                } catch(e) {
                    // Tenta outros métodos
                    btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
                }
            }
        });
        
        // Tenta APIs do Storyline para avançar
        if (window.Storyline && window.Storyline.player) {
            try {
                if (window.Storyline.player.NextSlide) {
                    window.Storyline.player.NextSlide();
                }
                if (window.Storyline.player.AdvanceSlide) {
                    window.Storyline.player.AdvanceSlide();
                }
            } catch(e) {}
        }
        
        // Tenta variáveis globais do Storyline
        if (window.globals) {
            try {
                if (window.globals.advanceSlide) {
                    window.globals.advanceSlide();
                }
            } catch(e) {}
        }
    }
    
    // ===== INTERCEPTA TIMERS =====
    if (!window.__timersInterceptados) {
        const origSetTimeout = window.setTimeout.bind(window);
        const origSetInterval = window.setInterval.bind(window);
        
        window.setTimeout = function(callback, delay, ...args) {
            if (typeof delay === 'number' && delay > 50) {
                delay = 50; // Reduzido para 50ms
            }
            return origSetTimeout(callback, delay, ...args);
        };
        
        window.setInterval = function(callback, delay, ...args) {
            if (typeof delay === 'number' && delay > 50) {
                delay = 50;
            }
            return origSetInterval(callback, delay, ...args);
        };
        
        window.__timersInterceptados = true;
    }
    
    // ===== EXECUÇÃO =====
    // Acelera áudio imediatamente
    const mediaCount = acelerarAudio();
    console.log(`✅ ${mediaCount} elemento(s) de mídia acelerado(s)`);
    
    // Intercepta eventos
    interceptarEventosAudio();
    
    // Desbloqueia slides
    desbloquearSlides();
    
    // Força avanço a cada 300ms (muito agressivo)
    setInterval(() => {
        acelerarAudio();
        desbloquearSlides();
        forcarAvancar();
    }, 300);
    
    // Monitora novos elementos de áudio
    let debounceTimer = null;
    const observer = new MutationObserver(() => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            acelerarAudio();
            desbloquearSlides();
        }, 100);
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'disabled', 'src']
    });
    
    console.log('✅ Narrador acelerado e slides desbloqueados!');
    console.log('💡 Os slides devem avançar automaticamente agora');
    
    // Objeto de controle
    window.aceleradorNarrador = {
        status: () => {
            const audios = document.querySelectorAll('audio');
            const videos = document.querySelectorAll('video');
            console.log(`Áudios: ${audios.length}, Vídeos: ${videos.length}`);
            [...audios, ...videos].forEach((m, i) => {
                console.log(`Mídia ${i+1}:`, {
                    tipo: m.tagName,
                    velocidade: m.playbackRate,
                    tempo: `${m.currentTime.toFixed(1)}/${m.duration.toFixed(1)}`,
                    pausado: m.paused
                });
            });
        },
        forcar: () => {
            acelerarAudio();
            desbloquearSlides();
            forcarAvancar();
            console.log('✅ Forçado novamente');
        }
    };
    
    console.log('💡 Use aceleradorNarrador.status() para ver status');
    console.log('💡 Use aceleradorNarrador.forcar() para forçar novamente');
})();
