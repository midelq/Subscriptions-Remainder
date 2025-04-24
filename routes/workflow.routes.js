import { Router} from 'express';
import { sendReminders } from '../controlers/workflow.controller.js'

const workflowRouter = Router();

workflowRouter.post('/subscription/reminder', sendReminders);

export default workflowRouter;