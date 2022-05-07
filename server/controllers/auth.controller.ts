import { Request, Response } from 'express';

const { COOKIE_NAME } = process.env;

/**
 * Process the upcoming auth request from the client app or Google auth flow.
 * @param req -  HTTP request object.
 * @param response -  HTTP response object.
 */
export const processAuth = async (req: Request, response: Response): Promise<void> => {
  response.cookie(COOKIE_NAME, 'authorized', { httpOnly: false });
  response.status(200);
};
