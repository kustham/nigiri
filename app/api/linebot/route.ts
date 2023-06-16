import * as line from '@line/bot-sdk'
import type { NextApiRequest, NextApiResponse } from 'next'

const client = new line.Client({
    channelAccessToken: process.env.TOKEN || '',
    channelSecret: process.env.SECRET || '',
})

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const message = await req.body
        console.log('server:', message)
        await client.pushMessage(process.env.TOKUNAGA_ID || '', {
            type: 'text',
            text: '?',
        })
    } catch (error) {
        console.log('error:', error)
    }
    console.log('server:finished')
}
