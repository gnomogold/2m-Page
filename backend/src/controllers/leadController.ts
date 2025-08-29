import { Request, Response } from 'express';
import { Lead } from '../types/lead';
import { EmailService } from '../services/emailService';
import { ApiResponse } from '../types/lead';

export class LeadController {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  async createLead(req: Request, res: Response): Promise<void> {
    try {
      console.log('🔍 createLead chamado, emailService:', !!this.emailService);
      
      const lead: Lead = req.body;
      
      console.log('Novo lead recebido:', {
        ...lead,
        timestamp: new Date().toISOString(),
        ip: req.ip || req.connection.remoteAddress
      });

      // Enviar email
      console.log('📧 Tentando enviar email...');
      const emailSent = await this.emailService.sendLeadEmail(lead);
      
      if (!emailSent) {
        console.error('Falha ao enviar email para lead:', lead.email);
        // Mesmo com falha no email, retornamos sucesso para não perder o lead
      } else {
        console.log('✅ Email enviado com sucesso para:', lead.email);
      }

      const response: ApiResponse = {
        success: true,
        message: 'Lead criado com sucesso! Redirecionando...',
        redirectUrl: process.env.REDIRECT_URL || 'https://assessoria2media.com/obrigado-1/'
      };

      res.status(200).json(response);
      
    } catch (error) {
      console.error('Erro ao processar lead:', error);
      
      const response: ApiResponse = {
        success: false,
        message: 'Erro interno do servidor',
        error: process.env.NODE_ENV === 'development' ? 
          (error instanceof Error ? error.message : 'Erro desconhecido') : 
          'Erro interno'
      };

      res.status(500).json(response);
    }
  }
}
