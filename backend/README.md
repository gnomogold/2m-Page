# 🚀 2 Media Lead API

API backend para captação de leads do site da 2 Media, com envio automático de emails via **Mailtrap** (para desenvolvimento) ou **Hostgator** (para produção).

## 🏗️ Arquitetura

- **Framework**: Express.js + TypeScript
- **Email**: Nodemailer + SMTP Mailtrap (dev) / Hostgator (prod)
- **Segurança**: Helmet, CORS, Rate Limiting
- **Validação**: Middleware customizado
- **Logs**: Console + Timestamps

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta Mailtrap (gratuita para desenvolvimento)

## 🚀 Instalação

1. **Instalar dependências:**
```bash
npm install
```

2. **Configurar variáveis de ambiente:**
```bash
cp env.example .env
```

3. **O arquivo .env já está configurado com suas credenciais do Mailtrap:**
```env
# Configurações do Mailtrap (Desenvolvimento)
MAILTRAP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=91aff6c045eb2e
MAILTRAP_PASS=1667eed3e82e8c

# Email de destino
EMAIL_TO=sac2media@gmail.com
EMAIL_FROM=noreply@2media.com

# URL de redirecionamento
REDIRECT_URL=https://assessoria2media.com/obrigado-1/
```

## 🏃‍♂️ Execução

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm start
```

## 📡 Endpoints

### POST /api/lead
Cria um novo lead e envia email.

**Body:**
```json
{
  "fullName": "João Silva",
  "email": "joao@email.com",
  "phone": "(11) 99999-9999",
  "instagram": "@joaodelivery",
  "sector": "Food Service",
  "revenue": "ate-30k"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead criado com sucesso! Redirecionando...",
  "redirectUrl": "https://assessoria2media.com/obrigado-1/"
}
```

### GET /api/health
Health check da API.

### GET /
Informações da API.

## 🛡️ Segurança

- **Rate Limiting**: 5 tentativas por 15 minutos
- **CORS**: Configurado para domínio específico
- **Helmet**: Headers de segurança
- **Validação**: Sanitização de dados
- **Logs**: Rastreamento de todas as tentativas

## 📧 Configuração Mailtrap

### **1. Criar conta gratuita:**
- Acesse [mailtrap.io](https://mailtrap.io)
- Crie uma conta gratuita
- Acesse seu inbox

### **2. Obter credenciais SMTP:**
- No inbox, clique em "Show Credentials"
- Copie as credenciais SMTP:
  - Host: `sandbox.smtp.mailtrap.io`
  - Porta: `2525`
  - Usuário: `seu_username`
  - Senha: `sua_password`

### **3. Configurar no projeto:**
```bash
# Copie o arquivo de exemplo
cp env.example .env

# O arquivo .env já está configurado com suas credenciais:
MAILTRAP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=91aff6c045eb2e
MAILTRAP_PASS=1667eed3e82e8c
```

### **4. Testar configuração:**
```bash
npm run test-email
```

## 🔧 Configuração Frontend

Atualize a URL da API no componente `ImmediateForm.tsx`:

```typescript
const response = await fetch('http://localhost:3001/api/lead', {
  // ... configurações
});
```

Para produção, altere para sua URL de domínio.

## 📊 Monitoramento

- Logs de todos os leads recebidos
- Logs de envio de emails
- Rate limiting para prevenir spam
- Health check endpoint

## 🚨 Troubleshooting

### Email não enviando
- Verifique credenciais Mailtrap
- Confirme porta e host
- Teste conexão SMTP
- Verifique inbox do Mailtrap

### CORS errors
- Verifique CORS_ORIGIN no .env
- Confirme domínio do frontend

### Rate limiting
- Aguarde 15 minutos
- Verifique logs de tentativas

## 🔄 Migração para Produção

Para usar Hostgator em produção, altere as variáveis:

```env
# Produção - Hostgator
HOSTGATOR_HOST=smtp.hostgator.com
HOSTGATOR_PORT=587
HOSTGATOR_USER=seu-email@seudominio.com
HOSTGATOR_PASS=sua-senha-email
```

## 📝 Licença

ISC License

