import * as line from '@line/bot-sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new line.Client({
    channelAccessToken: process.env.TOKEN || '',
    channelSecret: process.env.SECRET || '',
})

export async function POST(req: NextRequest) {
    if (req.method !== 'POST') return new Response(null, { status: 405, statusText: 'Method Not Allowed' })

    try {
        const reqBody = await req.json()
        const line_message = reqBody.message
        await client.pushMessage(process.env.TOKUNAGA_ID || '', {
            type: 'text',
            text: line_message,
        })
        return new NextResponse(JSON.stringify(line_message), { status: 200 })
    } catch (error) {
        console.log('error:', error)
        return new NextResponse(null, { status: 400, statusText: 'Bad Request' })
    }
}
