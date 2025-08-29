#!/bin/bash

echo "🚀 Iniciando 2 Media - Ambiente de Desenvolvimento"
echo "=================================================="

# Função para verificar se uma porta está em uso
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        echo "❌ Porta $1 já está em uso"
        return 1
    else
        echo "✅ Porta $1 disponível"
        return 0
    fi
}

# Verificar portas
echo "🔍 Verificando portas..."
check_port 3001 || exit 1
check_port 5173 || exit 1

echo ""
echo "📦 Instalando dependências..."

# Instalar dependências do backend
echo "🔧 Backend..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências do backend"
    exit 1
fi

# Instalar dependências do frontend
echo "🎨 Frontend..."
cd ../frontend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências do frontend"
    exit 1
fi

echo ""
echo "🚀 Iniciando serviços..."

# Iniciar backend em background
cd ../backend
echo "🔧 Iniciando Backend (porta 3001)..."
npm run dev &
BACKEND_PID=$!

# Aguardar backend inicializar
sleep 5

# Verificar se backend está rodando
if ! curl -s http://localhost:3001/api/health > /dev/null; then
    echo "❌ Backend não iniciou corretamente"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

echo "✅ Backend rodando em http://localhost:3001"

# Iniciar frontend em background
cd ../frontend
echo "🎨 Iniciando Frontend (porta 5173)..."
npm run dev &
FRONTEND_PID=$!

# Aguardar frontend inicializar
sleep 5

# Verificar se frontend está rodando
if ! curl -s http://localhost:5173 > /dev/null; then
    echo "❌ Frontend não iniciou corretamente"
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 1
fi

echo "✅ Frontend rodando em http://localhost:5173"

echo ""
echo "🎉 Ambiente de desenvolvimento iniciado com sucesso!"
echo "=================================================="
echo "🌐 Frontend: http://localhost:5173"
echo "🔧 Backend:  http://localhost:3001"
echo "📊 Health:   http://localhost:3001/api/health"
echo ""
echo "💡 Para parar os serviços, pressione Ctrl+C"
echo ""

# Função para limpar processos ao sair
cleanup() {
    echo ""
    echo "🛑 Parando serviços..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    echo "✅ Serviços parados"
    exit 0
}

# Capturar Ctrl+C
trap cleanup SIGINT

# Manter script rodando
wait


