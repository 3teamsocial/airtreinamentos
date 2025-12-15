
import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const pdfPath = join(process.cwd(), 'public', 'event-details.pdf');
    const file = readFileSync(pdfPath);
    const base64String = file.toString('base64');
    
    const response = await fetch('https://apps.abacus.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: [{
          role: 'user',
          content: [{
            type: 'file',
            file: {
              filename: 'event-details.pdf',
              file_data: `data:application/pdf;base64,${base64String}`
            }
          }, {
            type: 'text',
            text: `Extract all event information from this PDF including:
- Event title and description
- Date, time, and location
- Pricing details and payment plans
- Materials provided 
- Topics and themes covered
- Contact information
- Any other relevant details

Present this information in a clear, structured JSON format with the following structure:
{
  "title": "Event title",
  "description": "Event description",
  "date": "Event date",
  "time": "Event time",
  "location": "Event location",
  "pricing": {
    "regular": "Regular price",
    "earlyBird": "Early bird price if any",
    "paymentPlans": "Payment plan options"
  },
  "materials": ["List of materials provided"],
  "topics": ["List of topics covered"],
  "contact": {
    "phone": "Contact phone",
    "email": "Contact email",
    "address": "Contact address"
  },
  "additionalInfo": "Any other relevant information"
}

Respond with raw JSON only.`
          }]
        }],
        response_format: { type: "json_object" },
        max_tokens: 3000
      })
    });
    
    const data = await response.json();
    
    if (data.choices && data.choices[0]) {
      const eventData = JSON.parse(data.choices[0].message.content);
      return NextResponse.json({ success: true, data: eventData });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to extract content' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error extracting PDF:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
