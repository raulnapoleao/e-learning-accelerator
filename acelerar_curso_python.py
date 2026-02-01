"""
Script Python para acelerar vídeos e slides do Storyline 360
Usa Selenium para automatizar o navegador Chrome
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import time
import json

class AceleradorCurso:
    def __init__(self, headless=False):
        """
        Inicializa o acelerador de curso
        
        Args:
            headless: Se True, executa o navegador em modo headless
        """
        self.driver = None
        self.headless = headless
        self.script_aceleracao = """
        (function() {
            console.log('🚀 Iniciando aceleração de vídeos e slides...');
            
            // Acelera vídeos
            function acelerarVideos() {
                const videos = document.querySelectorAll('video');
                videos.forEach(video => {
                    video.playbackRate = 16;
                    video.addEventListener('timeupdate', function() {
                        if (video.duration - video.currentTime < 0.1) {
                            video.currentTime = video.duration;
                        }
                    });
                    setTimeout(() => {
                        if (!video.paused && video.duration > 0) {
                            video.currentTime = video.duration - 0.1;
                        }
                    }, 1000);
                });
                return videos.length;
            }
            
            // Intercepta timers
            const originalSetTimeout = window.setTimeout;
            window.setTimeout = function(callback, delay) {
                if (delay > 1000) delay = 1000;
                return originalSetTimeout(callback, delay);
            };
            
            const originalSetInterval = window.setInterval;
            window.setInterval = function(callback, delay) {
                if (delay > 1000) delay = 1000;
                return originalSetInterval(callback, delay);
            };
            
            // Acelera animações
            const style = document.createElement('style');
            style.textContent = `
                *, *::before, *::after {
                    animation-duration: 0.1s !important;
                    transition-duration: 0.1s !important;
                }
            `;
            document.head.appendChild(style);
            
            // Auto-avança slides
            setInterval(() => {
                const selectors = [
                    'button[aria-label*="próximo" i]',
                    'button[aria-label*="next" i]',
                    '.next-button',
                    '.continue-button',
                    '#nextBtn',
                    '#continueBtn'
                ];
                
                selectors.forEach(selector => {
                    try {
                        document.querySelectorAll(selector).forEach(el => {
                            if (el.offsetParent !== null && !el.disabled) {
                                el.click();
                            }
                        });
                    } catch(e) {}
                });
            }, 1000);
            
            // Monitora novos vídeos
            const observer = new MutationObserver(() => {
                acelerarVideos();
            });
            observer.observe(document.body, { childList: true, subtree: true });
            
            setTimeout(() => {
                const videos = acelerarVideos();
                console.log(`✅ Aceleração ativada! Vídeos: ${videos}`);
            }, 2000);
            
            return { status: 'success', videos: acelerarVideos() };
        })();
        """
    
    def iniciar_navegador(self):
        """Inicia o navegador Chrome com configurações otimizadas"""
        chrome_options = Options()
        
        if self.headless:
            chrome_options.add_argument('--headless')
        
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)
        
        # Permite execução de scripts
        chrome_options.add_argument('--disable-web-security')
        chrome_options.add_argument('--allow-running-insecure-content')
        
        try:
            self.driver = webdriver.Chrome(options=chrome_options)
            self.driver.maximize_window()
            print("✅ Navegador iniciado com sucesso")
            return True
        except Exception as e:
            print(f"❌ Erro ao iniciar navegador: {e}")
            print("💡 Certifique-se de que o ChromeDriver está instalado e no PATH")
            return False
    
    def navegar_para_curso(self, url):
        """
        Navega para a URL do curso
        
        Args:
            url: URL do curso no SAP SuccessFactors
        """
        try:
            print(f"🌐 Navegando para: {url}")
            self.driver.get(url)
            
            # Aguarda a página carregar
            WebDriverWait(self.driver, 30).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )
            
            print("✅ Página carregada")
            return True
        except TimeoutException:
            print("❌ Timeout ao carregar a página")
            return False
        except Exception as e:
            print(f"❌ Erro ao navegar: {e}")
            return False
    
    def aguardar_iframe(self, timeout=30):
        """
        Aguarda o iframe do conteúdo Storyline carregar
        
        Args:
            timeout: Tempo máximo de espera em segundos
        """
        try:
            print("⏳ Aguardando iframe do conteúdo...")
            
            # Aguarda o iframe aparecer
            WebDriverWait(self.driver, timeout).until(
                EC.presence_of_element_located((By.TAG_NAME, "iframe"))
            )
            
            # Aguarda um pouco mais para o conteúdo carregar
            time.sleep(3)
            
            print("✅ Iframe detectado")
            return True
        except TimeoutException:
            print("⚠️ Iframe não encontrado, continuando mesmo assim...")
            return False
    
    def aplicar_aceleracao(self):
        """
        Aplica o script de aceleração no contexto principal e nos iframes
        """
        try:
            print("🚀 Aplicando aceleração...")
            
            # Aplica no contexto principal
            resultado = self.driver.execute_script(self.script_aceleracao)
            print(f"✅ Script aplicado no contexto principal: {resultado}")
            
            # Tenta aplicar nos iframes também
            iframes = self.driver.find_elements(By.TAG_NAME, "iframe")
            print(f"📦 Encontrados {len(iframes)} iframe(s)")
            
            for i, iframe in enumerate(iframes):
                try:
                    self.driver.switch_to.frame(iframe)
                    resultado_iframe = self.driver.execute_script(self.script_aceleracao)
                    print(f"✅ Script aplicado no iframe {i+1}: {resultado_iframe}")
                    self.driver.switch_to.default_content()
                except Exception as e:
                    print(f"⚠️ Erro ao aplicar no iframe {i+1}: {e}")
                    self.driver.switch_to.default_content()
            
            return True
        except Exception as e:
            print(f"❌ Erro ao aplicar aceleração: {e}")
            return False
    
    def monitorar_progresso(self, duracao_minutos=60):
        """
        Monitora o progresso e reaplica aceleração se necessário
        
        Args:
            duracao_minutos: Duração máxima de monitoramento
        """
        print(f"👀 Monitorando progresso por até {duracao_minutos} minutos...")
        inicio = time.time()
        tempo_limite = duracao_minutos * 60
        
        while time.time() - inicio < tempo_limite:
            try:
                # Reaplica aceleração a cada 10 segundos
                time.sleep(10)
                self.aplicar_aceleracao()
                
                # Verifica se ainda há vídeos
                videos = self.driver.execute_script(
                    "return document.querySelectorAll('video').length;"
                )
                
                if videos > 0:
                    print(f"📹 Vídeos ativos: {videos}")
                
            except KeyboardInterrupt:
                print("\n⏹️ Monitoramento interrompido pelo usuário")
                break
            except Exception as e:
                print(f"⚠️ Erro no monitoramento: {e}")
    
    def fechar(self):
        """Fecha o navegador"""
        if self.driver:
            self.driver.quit()
            print("👋 Navegador fechado")

def main():
    """Função principal"""
    print("=" * 60)
    print("🚀 ACELERADOR DE CURSO STORYLINE 360")
    print("=" * 60)
    
    # URL do curso (substitua pela URL real)
    url_curso = input("Digite a URL do curso (ou pressione Enter para usar padrão): ").strip()
    
    if not url_curso:
        # URL padrão baseada nas informações coletadas
        url_curso = "https://eldoradobr.plateau.com/learning/ui/coursehome/index.jsp"
        print(f"Usando URL padrão: {url_curso}")
    
    # Pergunta se deve executar em modo headless
    headless_input = input("Executar em modo headless? (s/N): ").strip().lower()
    headless = headless_input == 's'
    
    # Cria o acelerador
    acelerador = AceleradorCurso(headless=headless)
    
    try:
        # Inicia navegador
        if not acelerador.iniciar_navegador():
            return
        
        # Navega para o curso
        if not acelerador.navegar_para_curso(url_curso):
            return
        
        # Aguarda iframe
        acelerador.aguardar_iframe()
        
        # Aplica aceleração
        acelerador.aplicar_aceleracao()
        
        # Pergunta se deve monitorar
        monitorar_input = input("Monitorar progresso automaticamente? (S/n): ").strip().lower()
        if monitorar_input != 'n':
            duracao = input("Duração do monitoramento em minutos (padrão: 60): ").strip()
            duracao = int(duracao) if duracao.isdigit() else 60
            acelerador.monitorar_progresso(duracao)
        else:
            print("✅ Aceleração aplicada! Pressione Ctrl+C para sair.")
            input("Pressione Enter para fechar...")
    
    except KeyboardInterrupt:
        print("\n⏹️ Interrompido pelo usuário")
    except Exception as e:
        print(f"❌ Erro: {e}")
    finally:
        acelerador.fechar()

if __name__ == "__main__":
    main()
