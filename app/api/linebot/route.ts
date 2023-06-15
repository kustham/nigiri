import * as line from '@line/bot-sdk'
import { NextResponse } from 'next/server'

const TOKUNAGA_ID = 'U8abd63cc700f8f61736b54a5f35e56de'
const TOKEN =
    'z109xUGecb5AFVWMZlkh0IreLB4/DR1VblTyVqlp+21DKaETlHgwYj8v+lxQo2ShuEB0uRZ6kqTWVcL6AcKytEfAM4r2U+flMAIm9rbsDtd4KlGR9XoxKBKR07Eip/PJfN3Ql2+KIQYyMi6zFQ/qFgdB04t89/1O/w1cDnyilFU='
const SECRET = '6785849c69588d762b01989e9c118875'

const client = new line.Client({
    channelAccessToken: TOKEN,
    channelSecret: SECRET,
})

export async function POST(request: Request) {
  

    try {
        const requestBody = await request.json()
        await client.pushMessage(TOKUNAGA_ID, {
            type: 'text',
            text: 'test send',
        })

        return NextResponse.json(requestBody)
    } catch (error) {
        console.error('An error occurred:', error)
        return NextResponse.error()
    }
}
