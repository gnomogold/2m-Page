const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmail() {
  console.log('🧪 Testando configuração do Mailtrap...\n');

  // Verificar variáveis de ambiente
  const requiredVars = ['MAILTRAP_HOST', 'MAILTRAP_PORT', 'MAILTRAP_USER', 'MAILTRAP_PASS'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.log('❌ Variáveis de ambiente faltando:');
    missingVars.forEach(varName => console.log(`   - ${varName}`));
    console.log('\n💡 Configure o arquivo .env com suas credenciais do Mailtrap');
    return;
  }

  console.log('✅ Variáveis de ambiente configuradas');
  console.log(`📧 Host: ${process.env.MAILTRAP_HOST}`);
  console.log(`🔌 Porta: ${process.env.MAILTRAP_PORT}`);
  console.log(`👤 Usuário: ${process.env.MAILTRAP_USER}`);
  console.log(`🔑 Senha: ${process.env.MAILTRAP_PASS ? '***' : 'NÃO CONFIGURADA'}\n`);

  // Criar transporter
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST || 'sandbox.smtp.mailtrap.io',
    port: parseInt(process.env.MAILTRAP_PORT || '2525'),
    secure: false,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    // Verificar conexão
    console.log('🔌 Testando conexão SMTP...');
    await transporter.verify();
    console.log('✅ Conexão SMTP estabelecida com sucesso!\n');

    // Enviar email de teste
    console.log('📧 Enviando email de teste...');
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@2media.com',
      to: process.env.EMAIL_TO || 'sac2media@gmail.com',
      subject: '🧪 Teste de Configuração - 2 Media API',
      html: `
        <h2>🎉 Configuração do Mailtrap Funcionando!</h2>
        <p>Este é um email de teste para verificar se a configuração SMTP está correta.</p>
        <p><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        <p><strong>Servidor:</strong> ${process.env.MAILTRAP_HOST}:${process.env.MAILTRAP_PORT}</p>
        <hr>
        <p><em>2 Media Lead API - Sistema de Captação</em></p>
      `,
      text: `
🎉 CONFIGURAÇÃO DO MAILTRAP FUNCIONANDO!

Este é um email de teste para verificar se a configuração SMTP está correta.

Data/Hora: ${new Date().toLocaleString('pt-BR')}
Servidor: ${process.env.MAILTRAP_HOST}:${process.env.MAILTRAP_PORT}

---
2 Media Lead API - Sistema de Captação
      `
    });

    console.log('✅ Email de teste enviado com sucesso!');
    console.log(`📨 Message ID: ${info.messageId}`);
    console.log('\n💡 Verifique seu inbox do Mailtrap para ver o email de teste');
    console.log('🌐 Acesse: https://mailtrap.io para visualizar');

  } catch (error) {
    console.log('❌ Erro ao testar email:');
    console.log(`   ${error.message}`);
    
    if (error.code === 'EAUTH') {
      console.log('\n💡 Verifique suas credenciais do Mailtrap');
    } else if (error.code === 'ECONNECTION') {
      console.log('\n💡 Verifique se o host e porta estão corretos');
    }
  }
}

// Executar teste
testEmail();
