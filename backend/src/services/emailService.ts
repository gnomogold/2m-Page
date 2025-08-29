import nodemailer from 'nodemailer';
import { Lead, EmailData } from '../types/lead';

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      secure: false,
      auth: {
        user: '91aff6c045eb2e',
        pass: '1667eed3e82e8c'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  async sendLeadEmail(lead: Lead): Promise<boolean> {
    try {
      const emailData: EmailData = {
        to: process.env.EMAIL_TO || 'sac2media@gmail.com',
        from: process.env.EMAIL_FROM || 'noreply@seudominio.com',
        subject: '🎯 Novo Lead - Diagnóstico Gratuito 2 Media',
        html: this.generateHTMLEmail(lead),
        text: this.generateTextEmail(lead)
      };

      const info = await this.transporter.sendMail(emailData);
      console.log('Email enviado com sucesso:', info.messageId);
      return true;
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      return false;
    }
  }

  private generateHTMLEmail(lead: Lead): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Novo Lead - 2 Media</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #dc2626; }
          .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #dc2626; }
          .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 Novo Lead Capturado!</h1>
            <p>Diagnóstico Gratuito - 2 Media</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nome Completo:</div>
              <div class="value">${lead.fullName}</div>
            </div>
            <div class="field">
              <div class="label">E-mail:</div>
              <div class="value">${lead.email}</div>
            </div>
            <div class="field">
              <div class="label">WhatsApp:</div>
              <div class="value">${lead.phone}</div>
            </div>
            <div class="field">
              <div class="label">Instagram:</div>
              <div class="value">${lead.instagram || 'Não informado'}</div>
            </div>
            <div class="field">
              <div class="label">Setor:</div>
              <div class="value">${lead.sector}</div>
            </div>
            <div class="field">
              <div class="label">Faturamento Mensal:</div>
              <div class="value">${lead.revenue}</div>
            </div>
            <div class="footer">
              <p>Lead capturado em: ${new Date().toLocaleString('pt-BR')}</p>
              <p>IP: ${process.env.NODE_ENV === 'production' ? 'Oculto por segurança' : 'Desenvolvimento'}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateTextEmail(lead: Lead): string {
    return `
🎯 NOVO LEAD - DIAGNÓSTICO GRATUITO 2 MEDIA

Nome Completo: ${lead.fullName}
E-mail: ${lead.email}
WhatsApp: ${lead.phone}
Instagram: ${lead.instagram || 'Não informado'}
Setor: ${lead.sector}
Faturamento Mensal: ${lead.revenue}

Data/Hora: ${new Date().toLocaleString('pt-BR')}

---
Este é um email automático do sistema de captação da 2 Media.
    `;
  }
}
