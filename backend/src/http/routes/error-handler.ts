import type { FastifyInstance } from 'fastify'

export class BadRequestError extends Error {}
export class UnauthorizedError extends Error {}

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = async (
  error,
  request,
  reply
) => {
  if (error instanceof BadRequestError) {
    return reply.status(400).send({
      message: error.message,
    })
  }

  if (error instanceof UnauthorizedError) {
    return reply.status(401).send({
      message: error.message,
    })
  }

  return reply.status(500).send({ message: 'Erro interno' })
}
