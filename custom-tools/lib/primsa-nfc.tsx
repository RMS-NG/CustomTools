// ts-ignore 7017 is used to ignore the error that the global object is not
// defined in the global scope. This is because the global object is only
// defined in the global scope in Node.js and not in the browser.

// import { PrismaClient } from '@prisma-nfc/prisma/client'

// // PrismaClient is attached to the `global` object in development to prevent
// // exhausting your database connection limit.
// //
// // Learn more:
// // https://pris.ly/d/help/next-js-best-practices

// const globalForPrismaNFC = global as unknown as { prisma_nfc: PrismaClient }

// export const prisma_nfc = globalForPrismaNFC.prisma_nfc || new PrismaClient()

// if (process.env.NODE_ENV !== 'production') globalForPrismaNFC.prisma_nfc = prisma_nfc

// export default prisma_nfc