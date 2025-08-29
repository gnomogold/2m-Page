import { Request, Response, NextFunction } from 'express';
import { Lead } from '../types/lead';

export const validateLead = (req: Request, res: Response, next: NextFunction) => {
  const lead: Lead = req.body;

  // Validações básicas
  if (!lead.fullName || lead.fullName.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Nome deve ter pelo menos 2 caracteres'
    });
  }

  if (!lead.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return res.status(400).json({
      success: false,
      message: 'E-mail inválido'
    });
  }

  if (!lead.phone || lead.phone.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Telefone deve ter pelo menos 10 dígitos'
    });
  }

  if (!lead.sector || lead.sector.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Setor é obrigatório'
    });
  }

  if (!lead.revenue || lead.revenue.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Faturamento mensal é obrigatório'
    });
  }

  // Sanitização básica
  lead.fullName = lead.fullName.trim();
  lead.email = lead.email.trim().toLowerCase();
  lead.phone = lead.phone.trim();
  lead.instagram = lead.instagram ? lead.instagram.trim() : '';
  lead.sector = lead.sector.trim();
  lead.revenue = lead.revenue.trim();

  next();
};

