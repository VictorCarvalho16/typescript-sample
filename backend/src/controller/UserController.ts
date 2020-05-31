import { Request, Response } from "express";
import EmailService from '../services/EmailService';

const users = [
    { name: 'Victor', email: "vhugo554@gmail.com"}
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Victor Carvalho',
                email: 'vhugo554@gmail.com'
            },
            message: {
                subject: 'Bem Vindo ao sistema',
                body: 'Seja bem Vindo'
            }
        })

        return res.send();
    }
};
