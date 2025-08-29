import { Router } from 'express';
import { LeadController } from '../controllers/leadController';
import { validateLead } from '../middleware/validation';

const router = Router();
const leadController = new LeadController();

// POST /api/lead - Criar novo lead
router.post('/lead', validateLead, leadController.createLead.bind(leadController));

// GET /api/health - Health check
router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: '2 Media Lead API'
  });
});

export default router;

