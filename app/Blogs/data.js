// app/Blogs/data.js
export const rawBlogs = [
    {
      id: 'interviewprep',
      title: 'InterviewPrep: An AI-powered mock interview platform',
      author: 'Huy Tran',
      createdAt: '2025-04-24',
      medium: "https://medium.com/@huytrngqu/interviewprep-an-ai-powered-mock-interview-platform-b50cfdd30fb9",
      content: `
        <p><strong>TL;DR</strong> — In this post I unpack how I combined Next.js 14’s App Router,
        serverless Postgres via Neon, Drizzle ORM, Google Gemini, Pinecone vector search, Clerk
        authentication, AWS S3 and a sprinkle of shadcn/ui to ship InterviewPrep: a full-stack
        mock-interview playground that runs entirely on Vercel.</p>
  
        <h2>1. Why another interview app?</h2>
        <p>I started this project after a long week of back-to-back technical screens. Existing
        tools felt disjointed — one site for coding challenges like LeetCode® and HackerRank®,
        another for behavioural questions, and none that used my own résumé to ask context-aware
        questions (for free?). InterviewPrep grew out of that itch: a single place to generate
        customised, AI-driven interview sessions — behavioural, technical & live coding — in
        under 30 seconds.</p>
  
        <h2>2. High-level architecture</h2>
        <pre><code>
  ┌────────────┐            ┌────────────┐
  │  Next.js   │ API Routes │   Gemini   │
  │  (Vercel)  │───────────▶│    API     │
  └────┬───────┘            └─────┬──────┘
       │                          │
       │Drizzle (SQL Tags)        │
  ┌────▼───────┐          Vector  │
  │   Neon     │◀─────────Store───┘
  │ PostgreSQL │          (Pinecone)
  └────▲───────┘
       │  Presigned URLs
  ┌────┴───────┐
  │   AWS S3   │  ← résumés, recordings
  └────────────┘
        </code></pre>
  
        <h2>3. Bootstrapping the project</h2>
        <ul>
          <li><code>pnpm create next-app interviewprep --ts --tailwind --eslint</code></li>
          <li><code>pnpm i @clerk/nextjs @auth/drizzle-adapter drizzle-orm @neondatabase/serverless pg zod @pinecone-database/pinecone openai @aws-sdk/client-s3 @aws-sdk/s3-request-presigner @monaco-editor/react react-hook-form @tanstack/react-query tailwind-merge</code></li>
        </ul>
  
        <h2>4. Core Features</h2>
        <h3>4.1 Résumé Chat & Feedback (ResumeAI)</h3>
        <p>Flow: Upload your résumé PDF, which is split into chunks and embedded via OpenAI’s embeddings. Chunks are stored in Pinecone as a vector index.</p>
        <p>Use case: Chat in a conversational UI that retrieves context from your résumé. It can answer questions about your experience, suggest improvements, and generate tailored résumé feedback on the fly based on your input.</p>
  
        <h3>4.2 AI-powered Mock Interviews</h3>
        <ol>
          <li>Create Room: Users fill a form with job role, description, experience, and optionally upload/select a résumé. Gemini generates 5 behavioural and 2 coding questions based on these inputs.</li>
          <li>Behavioural Round: Questions are presented one at a time. Users record answers via webcam and STT; upon stopping, answers are sent to Gemini for sentiment, STAR-format, and delivery analysis.</li>
          <li>Technical Round: Two code challenges in an embedded Monaco Editor. Users save each solution, then batch-submit for AI scoring (correctness, efficiency, style).</li>
        </ol>
        <p>Upon completion, participants are redirected to a feedback page showing collapsible ratings and suggestions.</p>
  
        <h3>4.3 Peer-to-Peer Human Interviews</h3>
        <p>Flow: Create a room, join via lobby cards, engage in a video call alongside shared résumé, switch to collaborative code editor (PiP) for live technical practice.</p>
  
        <h2>5. What’s next</h2>
        <ul>
          <li>Voice-only interview mode (Twilio Programmable Voice)</li>
          <li>Browser-based code runner (Docker + Firecracker)</li>
          <li>Public dashboards for cohort progress</li>
          <li>Advanced AI feedback enhancements</li>
          <li>Improved STT accuracy and robustness</li>
        </ul>
  
        <p>Contributions welcome—<a href="https://github.com/itsnothuy/InterviewPrep" target="_blank" rel="noopener noreferrer">GitHub Repo</a>.</p>
      `
    },
    {
      id: 'kontask',
      title: 'KonTask: Revitalizing Downtown Greencastle With an AI-Powered Local-Services Marketplace',
      author: 'Huy Tran',
      createdAt: '2025-04-28',
      medium: "https://medium.com/@huytrngqu/kontask-revitalizing-downtown-greencastle-with-an-ai-powered-local-services-marketplace-84eee097fd04",
      content: `
        <p><em>How one student-led startup plans to bridge the gap between people who need help and the neighbors who can provide it.</em></p>
  
        <h2>The Problem &amp; Why It Matters — Right Now</h2>
        <p>Downtown Greencastle hums with unmet potential. Residents struggle to find reliable providers, while qualified locals can’t reach customers.</p>
        <p>Our survey (102 responses) revealed:</p>
        <ul>
          <li>96% of service seekers couldn’t find help</li>
          <li>100% of providers struggled to find clients</li>
        </ul>
  
        <h2>The Data Driving Our Design</h2>
        <ul>
          <li>50% DePauw students — fast, tech-friendly booking</li>
          <li>25% Residents — trusted, consistent providers</li>
          <li>20% Freelancers — visibility & steady work</li>
          <li>5% Visitors — one-off convenience</li>
        </ul>
  
        <h2>Enter KonTask</h2>
        <p>Mobile-first, AI-powered matching for plumbing, nail art, tutoring, and more.</p>
  
        <h2>Competitor Analysis</h2>
        <ul>
          <li><strong>Local focus:</strong> Only KonTask zeroes in on Greencastle’s core streets.</li>
          <li><strong>Real-time booking:</strong> Slot selection & instant confirm vs. delays.</li>
          <li><strong>AI matching:</strong> ML-based provider recommendations.</li>
          <li><strong>All-in-one:</strong> From repairs to beauty in one app.</li>
        </ul>
  
        <h2>How It Works</h2>
        <ol>
          <li><strong>Search:</strong> “Fix leaky sink.”</li>
          <li><strong>Match:</strong> AI ranks by location, skills, ratings.</li>
          <li><strong>Accept:</strong> Two-way confirm & secure Stripe escrow.</li>
          <li><strong>Do & Rate:</strong> 1–5 stars feed future matches.</li>
          <li><strong>Analytics:</strong> Trends spotlight hot services.</li>
        </ol>
  
        <h2>Business Model &amp; Financial Outlook</h2>
        <h3>Service Seekers</h3>
        <ul>
          <li>Free plan: standard search, basic protection</li>
          <li>Premium $3.49/mo: priority matching & full protection</li>
        </ul>
        <h3>Service Providers</h3>
        <ul>
          <li>Free listing: appear in results</li>
          <li>Premium $15.99/mo: boost ranking & analytics</li>
        </ul>
        <h3>Additional Revenue</h3>
        <ul>
          <li>5% transaction fee</li>
          <li>10% protection fee</li>
          <li>$5k/year in-app advertising</li>
        </ul>
        <h3>Financial Milestones</h3>
        <p>Breakeven at ~700 users (2 yrs); revenue $25.6k → $185k (Yr 3); margin –74% → 51%.</p>
  
        <h2>Roadmap</h2>
        <ul>
          <li><strong>0–6 mo:</strong> MVP launch & beta</li>
          <li><strong>6–24 mo:</strong> user growth & new features</li>
          <li><strong>24+ mo:</strong> AI enhancements & profitability</li>
        </ul>
  
        <h2>How KonTask Revitalizes Downtown Greencastle</h2>
        <ol>
          <li>KonTask → centralized service platform</li>
          <li>Users → find & book services, driving demand</li>
          <li>Small Businesses → increased customers & revenue</li>
          <li>Vacant Properties → repurposed for local businesses</li>
          <li>Downtown Engagement → boosted foot traffic & vibrancy</li>
        </ol>
      `
    },
    {
        id: 'musicfinder',
        title: 'MusicFinder: An AI-powered, mood-based Spotify companion',
        author: 'Huy Tran',
        createdAt: '2025-04-29',
        medium: "https://medium.com/@huytrngqu/musicfinder-an-ai-powered-mood-based-spotify-companion-81db726d1171",
        content: `
          <p><strong>TL;DR</strong> — In this post I break down how MusicFinder fuses a fine-tuned T5 transformer, 
          OpenAI’s conversational magic, and Spotify’s rich catalog into a single pipeline that turns 
          “Feeling like dancing in the rain” into an instant, playable playlist. Everything is containerised, 
          CI-tested, and ready to scale on Google Cloud Run.</p>
      
          <h2>1. Why another music recommender?</h2>
          <p>Every streaming service claims to “get” you, yet Friday-night playlists still ignore the nuance 
          between melancholy-but-hopeful and straight-up sad. Typical recommenders lean on sparse listening 
          history; MusicFinder starts with how you feel right now — captured in natural language — and 
          uses a purpose-built NLP stack to score tracks on emotional fit.</p>
          <p><em>Goal:</em> Cut the delta between mood ↔ music from minutes of browsing to a single chat prompt.</p>
      
          <h2>2. High-level architecture</h2>
          <pre><code>
      ┌────────────────────────────┐
      │     React Frontend         │
      └───────────┬────────────────┘
                  │ text prompt
                  ▼
      ┌───────────┴───────────────┐
      │  Node.js API  (Express)   │
      └───────┬──────┬────────────┘
              │      │
              │      ├─▶  Spotify OAuth2 ✔
              │      │
              │      └─▶  OpenAI GPT-4 🎵
              ▼
      ┌────────────┐    HTTP    ┌───────────────────┐
      │ FastAPI svc│──────────▶│  T5 Emo-Classifier │
      └────────────┘  (JSON)   └───────────────────┘
              ▲
              │    Track search / like / save
              └───────────▶  Spotify Web API
          </code></pre>
      
          <h2>3. Core features</h2>
          <p>(Your list here…)</p>
      
          <h2>4. Tech stack in one glance</h2>
          <p>(Your badges or bullet list…)</p>
      
          <h2>5. “One-click” workflow</h2>
          <p>You type: “Need mellow-study vibes with a sprinkle of hope.”<br/>
          T5 labels it “calm, optimistic”.<br/>
          GPT-4 returns JSON: [ { title, artist, album } × 10 ].<br/>
          Node.js searches each track on Spotify, filters unavailable items.<br/>
          Frontend renders playable cards — hit ▶️ and focus on your essay.<br/>
          Tap ❤️? The track is saved to Liked Songs instantly.</p>
          <p><em>Round-trip latency ~= 900 ms (cold) / 250 ms (warm) in US-central1.</em></p>
      
          <h2>6. Local setup (15 min)</h2>
          <pre><code>
      git clone https://github.com/itsnothuy/playlistalchemy.git
      cd playlistalchemy
      
      # ML microservice
      cd backend_python
      pip install -r requirements.txt
      uvicorn app:app --host 0.0.0.0 --port 8000
      
      # Node API
      cd ../backend
      npm install
      cp .env.example .env   # add your keys
      npm start
      
      # React client
      cd ../frontend
      npm install
      npm start             # http://localhost:3000
          </code></pre>
      
          <h2>7. Continuous delivery in action</h2>
          <p>Every push to <code>main</code> triggers:</p>
          <pre><code>
      - name: Test & Build
        run: |
          cd backend && npm test
          cd ../frontend && npm run lint && npm run build
      
      - name: Docker Publish
        uses: google-github-actions/deploy-cloudrun@v2
          </code></pre>
      
          <h2>8. Roadmap</h2>
          <ul>
            <li>🎤 Voice emotion (whisper-small on-device → T5)</li>
            <li>📈 Adaptive taste modelling via Spotify audio features</li>
            <li>📲 React Native share-sheet integration</li>
            <li>🌐 Polyglot moods (Spanish, Vietnamese, Japanese)</li>
          </ul>
      
          <h2>9. Wrap-up</h2>
          <p>Building MusicFinder proved that with the right abstractions — LLMs for creativity, transformers 
          for classification, and serverless for ops — any solo dev can ship a production-grade, emotionally 
          intelligent recommender in weeks, not months. Curious? ⭐ the GitHub repo, open an issue, or drop a PR.</p>
          
          <p>— Huy Tran, full-stack builder & AI tinkerer</p>
        `,
    }
  ];
  