import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
	const users = await prisma.user.findMany()

	return NextResponse.json(users)
}

export async function POST(request: Request) {
	const body = await request.json()
	const user = await prisma.user.create({ data: body })

	return NextResponse.json(user)
}
