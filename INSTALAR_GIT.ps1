# Script para instalar Git no Windows
# Execute como Administrador: botão direito > "Executar como Administrador"

Write-Host "🚀 Instalando Git..." -ForegroundColor Green

# Tentar via winget primeiro
try {
    Write-Host "`n📦 Tentando instalar via winget..." -ForegroundColor Yellow
    winget install Git.Git --accept-source-agreements --accept-package-agreements --silent
    Write-Host "✅ Git instalado com sucesso via winget!" -ForegroundColor Green
} catch {
    Write-Host "❌ Falha no winget. Tentando download direto..." -ForegroundColor Red
    
    # Download direto
    $url = "https://github.com/git-for-windows/git/releases/download/v2.52.0.windows.1/Git-2.52.0-64-bit.exe"
    $output = "$env:TEMP\Git-Installer.exe"
    
    Write-Host "📥 Baixando Git..." -ForegroundColor Yellow
    Invoke-WebRequest -Uri $url -OutFile $output
    
    Write-Host "🔧 Executando instalador..." -ForegroundColor Yellow
    Start-Process -FilePath $output -ArgumentList "/VERYSILENT /NORESTART" -Wait
    
    Write-Host "✅ Git instalado com sucesso!" -ForegroundColor Green
    Remove-Item $output
}

# Verificar instalação
Write-Host "`n🔍 Verificando instalação..." -ForegroundColor Yellow
Start-Sleep -Seconds 2

# Atualizar PATH na sessão atual
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Verificar se git está disponível
try {
    $gitVersion = git --version
    Write-Host "✅ Git instalado: $gitVersion" -ForegroundColor Green
    Write-Host "`n🎉 Pronto! Você pode usar 'git' agora." -ForegroundColor Green
} catch {
    Write-Host "⚠️ Git instalado, mas pode precisar reiniciar o terminal." -ForegroundColor Yellow
    Write-Host "   Feche e abra novamente o terminal do Cursor." -ForegroundColor Yellow
}

Write-Host "`n📋 Próximos passos:" -ForegroundColor Cyan
Write-Host "   1. Feche e abra o terminal do Cursor" -ForegroundColor White
Write-Host "   2. Execute: git --version (para verificar)" -ForegroundColor White
Write-Host "   3. Execute: git config --global user.name 'Seu Nome'" -ForegroundColor White
Write-Host "   4. Execute: git config --global user.email 'seu.email@exemplo.com'" -ForegroundColor White
