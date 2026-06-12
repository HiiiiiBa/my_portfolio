import { readFile } from 'fs/promises'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const pdfPath = join(process.cwd(), 'public', 'cv', 'hiba-el-ouafi-cv.pdf')
    const pdfBuffer = await readFile(pdfPath)

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Hiba EL OUAFI CV.pdf"',
      },
    })
  } catch (error) {
    console.error('Error serving CV PDF:', error)
    return NextResponse.json(
      { error: 'Failed to load CV' },
      { status: 500 }
    )
  }
}
