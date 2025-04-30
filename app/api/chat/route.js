import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Load OpenAI API Key securely
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System Prompt
const systemPrompt = `
Key aspects to highlight:
Name & Contact:
  • Huy Tran  
  • Phone: 765-712-2630  
  • Email: huytrngqu@gmail.com  
  • LinkedIn, GitHub, Threads profiles

Education:
  • DePauw University, Greencastle, IN  
    – Bachelor of Arts in Computer Science and Mathematics (Aug. 2021 – May 2025)  
    – Consistently recognized on the Dean’s List

Professional Experience:
  • Software Engineer Intern, SAGO AGRO Co., Ltd (Summer 2024, Vietnam)  
    – Engineered, deployed, and maintained a full-stack web application on AWS, boosting scalability and streamlining online service delivery  
    – Migrated 30 GB of product data from Excel to AWS RDS PostgreSQL via custom ETL scripts and AWS DMS, improving query performance by 40%
  • IT Intern – Network Team, University Social Science and Humanities (Summer 2023, Vietnam)  
    – Implemented two-factor authentication (2FA) for the E-Service Portal, reducing exploitability from 80% to 20% in pen tests  
    – Deployed WAFs to protect 3,000 student accounts from SQL injection, cutting vulnerabilities by 90%
  • Software Development Intern, IpserLab Co., Ltd (Summer 2022, USA)  
    – Built a product-category filter feature, driving 7,000+ real-time visits  
    – Integrated Stripe API, boosting transaction speed by 50%

Projects:
  • Interview Prep (Next.js, Node.js, Gemini API, LangChain, PineconeDB)  
    – Full-stack AI mock-interview platform used by 58 students, with real-time coding environment and resume analysis  
    – Optimized LLM calls with React Query, reducing redundant requests by 60% and powering 100+ practice sessions
  • KonTask (Flutter, Node.js, Next.js, MongoDB, OpenAI)  
    – Mobile-first service-matching app; implemented RAG with multi-query decomposition and routing to cut query time from 3.8s to 1.9s and raise match rate by 27%  
    – Iteratively tuned embeddings with beta feedback to improve relevance by 24%
  • Open Source Contributor (GitHub)  
    – Optimized F5-TTS for Apple Silicon, eliminating RAM-related crashes by 99% on M1/M2 devices
  • DeBuddy (Flutter, Django, PostgreSQL, SocketIO)  
    – Campus-map app for DePauw students, with secure real-time chat (encoded IDs) and Google Maps integration for live routing

Technical Skills:
  • Languages: Java, Python, C/C++, SQL (Postgres & MySQL), TypeScript, JavaScript, HTML/CSS, R, Go, Ruby  
  • Frameworks/Libraries: React, Node.js, Express, Django, Flask, JUnit, NumPy, Pandas, OpenAI, LangChain, HuggingFace  
  • Cloud & DevOps: AWS (EC2, RDS, S3, Lambda), Microsoft Azure, Google Cloud CLI, Docker, Git/GitHub, VS Code

Feel free to ask about his academic achievements, internships, technical skills, or any of his personal and open-source projects.
`;


export async function POST(req) {
  try {
    const data = await req.json();

    // ✅ Validate Input
    if (!data || !Array.isArray(data) || data.length === 0) {
      return NextResponse.json(
        { error: 'Invalid input. Expected an array of message objects.' },
        { status: 400 }
      );
    }

    // ✅ Create Chat Completion Stream
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: systemPrompt }, ...data],
      stream: true,
    });

    // ✅ Stream the Response
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
        } catch (err) {
          console.error('Stream Error:', err);
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}
