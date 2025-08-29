# 🚀 2 Media - Novo Site

Projeto completo para o site da **2 Media**, empresa de consultoria para deliveries e food service.

## 📁 Estrutura do Projeto

```
novo-site-2M/
├── frontend/          # Aplicação React + TypeScript
├── backend/           # API Node.js + Express
├── dist/              # Build de produção (frontend)
└── README.md          # Este arquivo
```

## 🎯 Visão Geral

Site institucional moderno que oferece **diagnósticos estratégicos gratuitos** para negócios do setor de delivery e food service.

### **Funcionalidades:**
- ✅ Landing page responsiva
- ✅ Formulário de captação de leads
- ✅ Envio automático de emails via **Mailtrap** (dev) / **Hostgator** (prod)
- ✅ Redirecionamento para WordPress
- ✅ Design moderno com Tailwind CSS

## 🚀 Como Executar

### **Frontend (React)**
```bash
cd frontend
npm install
npm run dev
```
**Acesse:** http://localhost:5173

### **Backend (Node.js)**
```bash
cd backend
npm install
cp env.example .env
# Configure suas credenciais do Mailtrap no .env
npm run dev
```
**API:** http://localhost:3001

## 📧 Configuração de Email

### **Desenvolvimento (Mailtrap)**
1. Crie uma conta gratuita em [mailtrap.io](https://mailtrap.io)
2. Obtenha suas credenciais SMTP no inbox
3. Configure no arquivo `backend/.env`
4. Teste com: `npm run test-email`

### **Produção (Hostgator)**
1. Configure suas credenciais SMTP do Hostgator
2. Altere as variáveis no `.env` para produção

## 🛠️ Stack Tecnológica

### **Frontend**
- React 18 + TypeScript
- Vite 5 (Build Tool)
- Tailwind CSS (Styling)
- Lucide React (Icons)

### **Backend**
- Node.js + Express
- TypeScript
- Nodemailer (SMTP)
- Helmet (Segurança)
- Rate Limiting

## 🔒 Segurança

- Rate limiting (5 tentativas/15 min)
- Validação de dados
- Headers de segurança
- CORS configurado
- Sanitização de inputs

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 📱 Mobile
- 📱 Tablet
- 💻 Desktop

## 🎨 Design

- Paleta de cores: Preto, Vermelho (#dc2626), Branco
- Tipografia moderna e legível
- Componentes reutilizáveis
- Animações suaves

## 📊 Monitoramento

- Logs de todos os leads
- Logs de envio de emails
- Health check da API
- Métricas de performance

## 🧪 Testes

### **Testar Configuração de Email**
```bash
cd backend
npm run test-email
```

### **Verificar API**
```bash
curl http://localhost:3001/api/health
```

---

**Desenvolvido com ❤️ para 2 Media**
