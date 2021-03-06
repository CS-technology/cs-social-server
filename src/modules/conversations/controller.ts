import { NextFunction, Request, Response } from 'express';

import ConversationService from './service';

export default class ConversationsController {
  private conversationService = new ConversationService();

  public sendMessage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const model: any = req.body;
      const result = await this.conversationService.sendMessage(
        req.user.id,
        model
      );
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
  public getMyConversation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this.conversationService.getMyConversation(
        req.user.id
      );
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  public getOneConversation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const useIdTo: string = req.params.id;
      const result = await this.conversationService.getOneConversation(
        req.user.id,
        useIdTo
      );
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}