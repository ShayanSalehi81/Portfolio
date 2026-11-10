/* All portfolio content, in English (default) and Persian.
   Edit this file to update the site; main.js renders everything from it.
   Strings may contain <b>; they are trusted, author-written HTML. */
window.SITE = {
  links: {
    email: 's.salehi1381@gmail.com',
    scholar: 'https://scholar.google.com/citations?user=venAFsMAAAAJ&hl=en',
    github: 'https://github.com/ShayanSalehi81',
    linkedin: 'https://www.linkedin.com/in/shayan-salehi-84b0ba2b9/',
    cv: 'assets/cv/Shayan-Salehi-CV.pdf'
  },
  updated: '2026-10',

  ui: {
    en: {
      pageTitle: 'Shayan Salehi — Sharif University of Technology',
      description: 'Shayan Salehi, M.Sc. student in Artificial Intelligence at Sharif University of Technology. Research on language and vision–language models, tool use and AI for healthcare.',
      skip: 'Skip to content',
      nav: { about: 'About', publications: 'Publications', experience: 'Experience', research: 'Research', education: 'Education', teaching: 'Teaching', projects: 'Projects', contact: 'Contact' },
      langSwitch: 'فارسی', langLabel: 'نمایش به فارسی',
      themeDark: 'Switch to dark theme', themeLight: 'Switch to light theme',
      motionPause: 'Pause background animation', motionPlay: 'Play background animation',
      menuOpen: 'Open menu', menuClose: 'Close menu',
      present: 'Present', now: 'Now',
      email: 'Email', scholar: 'Google Scholar', github: 'GitHub', linkedin: 'LinkedIn', cv: 'CV (PDF)',
      portraitAlt: 'Portrait of Shayan Salehi',
      bannerAlt: 'Courtyard of a historic Persian garden house',
      interests: 'Research Interests',
      published: 'Published', review: 'Under Review', progress: 'In Preparation',
      scholarAll: 'Google Scholar profile',
      supervisor: 'Supervisor', institution: 'Institution', period: 'Period', remote: 'Remote collaboration',
      details: 'Details',
      gpa: 'GPA', majorGpa: 'Major GPA', of20: '/ 20',
      coursework: 'Selected Coursework', course: 'Course', level: 'Level', grade: 'Grade (out of 20)', graduate: 'Graduate', undergraduate: 'Undergraduate',
      rank: 'Rank', competition: 'Competition', pool: 'Participants', date: 'Date',
      headTa: 'Head Teaching Assistant', ta: 'Teaching Assistant', instructor: 'Instructor', terms: 'Term(s)',
      technologies: 'Technologies', code: 'Source code',
      skills: 'Technical Skills', languages: 'Languages',
      copy: 'Copy', copied: 'Email address copied', location: 'Location', locationValue: 'Tehran, Iran', profiles: 'Profiles',
      updated: 'Last updated', backTop: 'Back to top',
      ordinal: n => n + ({ 1: 'st', 2: 'nd', 3: 'rd' }[(n % 100 > 10 && n % 100 < 14) ? 0 : n % 10] || 'th')
    },
    fa: {
      pageTitle: 'شایان صالحی — دانشگاه صنعتی شریف',
      description: 'شایان صالحی، دانشجوی کارشناسی ارشد هوش مصنوعی دانشگاه صنعتی شریف؛ پژوهش در مدل‌های زبانی و بینایی-زبان، به‌کارگیری ابزار و هوش مصنوعی در سلامت.',
      skip: 'رفتن به محتوا',
      nav: { about: 'درباره', publications: 'انتشارات', experience: 'سوابق کاری', research: 'پژوهش', education: 'تحصیلات', teaching: 'تدریس', projects: 'پروژه‌ها', contact: 'تماس' },
      langSwitch: 'English', langLabel: 'View in English',
      themeDark: 'تغییر به پوسته تیره', themeLight: 'تغییر به پوسته روشن',
      motionPause: 'توقف پویانمایی پس‌زمینه', motionPlay: 'پخش پویانمایی پس‌زمینه',
      menuOpen: 'باز کردن منو', menuClose: 'بستن منو',
      present: 'اکنون', now: 'اکنون',
      email: 'ایمیل', scholar: 'گوگل اسکالر', github: 'گیت‌هاب', linkedin: 'لینکدین', cv: 'رزومه (PDF، انگلیسی)',
      portraitAlt: 'تصویر شایان صالحی',
      bannerAlt: 'حیاط یک خانه‌باغ تاریخی ایرانی',
      interests: 'علایق پژوهشی',
      published: 'منتشرشده', review: 'در حال داوری', progress: 'در دست تهیه',
      scholarAll: 'صفحه گوگل اسکالر',
      supervisor: 'استاد راهنما', institution: 'مؤسسه', period: 'بازه زمانی', remote: 'همکاری از راه دور',
      details: 'جزئیات',
      gpa: 'معدل', majorGpa: 'معدل دروس تخصصی', of20: 'از ۲۰',
      coursework: 'دروس منتخب', course: 'درس', level: 'مقطع', grade: 'نمره (از ۲۰)', graduate: 'کارشناسی ارشد', undergraduate: 'کارشناسی',
      rank: 'رتبه', competition: 'رقابت', pool: 'شرکت‌کنندگان', date: 'تاریخ',
      headTa: 'سرپرست دستیاران آموزشی', ta: 'دستیار آموزشی', instructor: 'استاد', terms: 'نیم‌سال',
      technologies: 'فناوری‌ها', code: 'کد منبع',
      skills: 'مهارت‌های فنی', languages: 'زبان‌ها',
      copy: 'کپی', copied: 'نشانی ایمیل کپی شد', location: 'محل', locationValue: 'تهران، ایران', profiles: 'صفحه‌ها',
      updated: 'آخرین به‌روزرسانی', backTop: 'بازگشت به بالا',
      ordinal: n => n
    }
  },

  profile: {
    en: { name: 'Shayan Salehi', role: 'M.Sc. Student in Artificial Intelligence', affiliation: 'Sharif University of Technology, Tehran, Iran' },
    fa: { name: 'شایان صالحی', role: 'دانشجوی کارشناسی ارشد هوش مصنوعی', affiliation: 'دانشگاه صنعتی شریف، تهران' }
  },

  about: {
    en: {
      title: 'About',
      body: [
        'I am an M.Sc. student in Artificial Intelligence at Sharif University of Technology, where I also completed my B.Sc. in Computer Engineering. My research studies how models learn from one another, how they use tools and evidence, and how they can be trusted in health and wellbeing settings.',
        'Through remote collaborations with the University of Waterloo, Imperial College London and Rensselaer Polytechnic Institute, I have worked on knowledge distillation for large language models, data mixing for pre-training, and therapeutic dialogue systems. In parallel, I build production LLM systems in industry, which keeps my research grounded in how these models behave in practice.'
      ]
    },
    fa: {
      title: 'درباره',
      body: [
        'دانشجوی کارشناسی ارشد هوش مصنوعی در دانشگاه صنعتی شریف هستم و دوره کارشناسی مهندسی کامپیوتر را نیز در همین دانشگاه گذرانده‌ام. پژوهش‌های من به این پرسش‌ها می‌پردازد که مدل‌ها چگونه از یکدیگر یاد می‌گیرند، چگونه از ابزار و شواهد استفاده می‌کنند و چگونه می‌توان در زمینه‌های سلامت و بهزیستی به آن‌ها اعتماد کرد.',
        'در همکاری‌های پژوهشی از راه دور با دانشگاه واترلو، امپریال کالج لندن و مؤسسه پلی‌تکنیک رنسلر، روی تقطیر دانش در مدل‌های زبانی بزرگ، ترکیب داده برای پیش‌آموزش و سامانه‌های گفت‌وگوی درمانی کار کرده‌ام. هم‌زمان، در صنعت سامانه‌های مبتنی بر مدل‌های زبانی بزرگ را در مقیاس عملیاتی می‌سازم؛ تجربه‌ای که پژوهش‌هایم را به رفتار واقعی این مدل‌ها پیوند می‌دهد.'
      ]
    },
    interests: [
      { en: 'Vision–Language Models', fa: 'مدل‌های بینایی-زبان' },
      { en: 'Tool-Augmented Language Models', fa: 'مدل‌های زبانی مجهز به ابزار' },
      { en: 'Biomedical Informatics', fa: 'انفورماتیک زیست‌پزشکی' },
      { en: 'Human–Computer Interaction', fa: 'تعامل انسان و کامپیوتر' },
      { en: 'AI in Healthcare', fa: 'هوش مصنوعی در سلامت' }
    ]
  },

  publications: {
    en: { title: 'Publications' },
    fa: { title: 'انتشارات' },
    items: [
      {
        title: 'Learning from Disagreement: Maximum Divergence Knowledge Distillation',
        authors: 'A. Jafari, P. Fashi, M. Rezagholizadeh, H. Golmankhaneh, S. Salehi, V. Appia, E. Barsoum, A. Ghodsi',
        short: 'NeurIPS 2026', status: 'published',
        venue: { en: 'Conference on Neural Information Processing Systems (NeurIPS), 2026.', fa: 'کنفرانس سامانه‌های پردازش اطلاعات عصبی (NeurIPS)، ۲۰۲۶.' }
      },
      {
        title: 'The Compute Floor of Data Mixing: When Loss-Based Reweighters Start to Drain Easy Synthetic Text',
        authors: 'S. Salehi, I. Mohammadi',
        short: 'COLM 2026 Workshop', status: 'published',
        venue: { en: 'COLM 2026 Workshop on Methods and Opportunities at Small Scale (MOSS).', fa: 'کارگاه «روش‌ها و فرصت‌ها در مقیاس کوچک» (MOSS)، کنفرانس COLM ۲۰۲۶.' }
      },
      {
        title: 'Structure Matters: Evaluating Multi-Agents Orchestration in Generative Therapeutic Chatbots',
        authors: 'S. Elahimanesh, M. Mohammadkhani, S. Zahedi Movahed, M. Abootorabi, S. Salehi, A. Edalat',
        short: 'ACM CUI 2026', status: 'published',
        venue: { en: 'ACM Conference on Conversational User Interfaces (CUI), 2026.', fa: 'کنفرانس ACM رابط‌های کاربری گفت‌وگومحور (CUI)، ۲۰۲۶.' }
      },
      {
        title: 'PrivacyPeek: Showing Users What Their AI Chats Send Out, and When It Crosses a Line',
        authors: 'I. Mohammadi, S. Salehi',
        short: 'USIT 2026 Poster', status: 'published',
        venue: { en: 'USIT 2026, Poster Session.', fa: 'بخش پوستر USIT ۲۰۲۶.' }
      },
      {
        title: 'Folk Theories of Federated Moderation: How Users Make Sense of Cross-Instance Action',
        authors: 'I. Mohammadi, S. Salehi',
        short: 'CSCW 2026 Poster', status: 'published',
        venue: { en: 'ACM Conference on Computer-Supported Cooperative Work (CSCW), 2026, Poster Session.', fa: 'بخش پوستر کنفرانس ACM CSCW ۲۰۲۶.' }
      },
      {
        title: 'Understanding Students’ Rationales for Cheating with AI: An Instructor Perspective',
        authors: 'I. Mohammadi, S. Rismanchian, S. Salehi',
        short: 'ICLS 2026 Poster', status: 'published',
        venue: { en: 'International Conference of the Learning Sciences (ICLS), 2026, Poster Session.', fa: 'بخش پوستر کنفرانس بین‌المللی علوم یادگیری (ICLS) ۲۰۲۶.' }
      },
      {
        title: 'From Words and Exercises to Wellness: Farsi Chatbot for Self-Attachment',
        authors: 'S. Elahimanesh, S. Salehi, S. Zahedi Movahed, L. Alazraki, R. Hu, A. Edalat',
        short: 'Journal', status: 'review',
        venue: { en: 'Submitted to EAI Endorsed Transactions on Pervasive Health and Technology.', fa: 'ارسال‌شده به نشریه EAI Endorsed Transactions on Pervasive Health and Technology.' }
      },
      {
        title: 'ToolRacer: Retrieval-Aware Co-Training and Error Recovery for Small Language Model Tool Calling',
        authors: 'S. Salehi, M. Bagherifard, E. Mohajeri',
        status: 'progress'
      },
      {
        title: 'Can Medical VLMs Reason from Degraded Evidence? A Paired Microscopy Robustness Benchmark',
        authors: 'S. Salehi, I. Mohammadi',
        status: 'progress'
      },
      {
        title: 'Vision-Language Models in Radiology: Improving Trust with Fact-Based Report Generation',
        authors: 'S. Salehi, A. Salesi, S. Daneshgar, S. Beyrami',
        status: 'progress'
      }
    ]
  },

  experience: {
    en: { title: 'Industry Experience' },
    fa: { title: 'سوابق کاری' },
    items: [
      {
        start: '2025-06', end: null, org: { en: 'AVIA', fa: 'AVIA' }, role: { en: 'Senior Machine Learning Engineer', fa: 'مهندس ارشد یادگیری ماشین' },
        en: [
          'Served and benchmarked <b>System-1</b> models such as JEV on decision-making tasks.',
          'Implemented a <b>LiveKit</b>-based backend for <b>VoIP</b> and AI voice-assistant services.',
          'Developed an end-to-end chat-session evaluator dashboard with <b>Django</b>, <b>TypeScript</b> and <b>React</b>.',
          'Improved the <b>prompt and prefix caching</b> system for served LLMs.'
        ],
        fa: [
          'استقرار و محک‌زنی مدل‌های <b>System-1</b> مانند JEV در وظایف تصمیم‌گیری.',
          'پیاده‌سازی بک‌اند مبتنی بر <b>LiveKit</b> برای خدمات <b>VoIP</b> و دستیار صوتی هوشمند.',
          'توسعه داشبورد سرتاسری ارزیابی جلسات گفت‌وگو با <b>Django</b>، <b>TypeScript</b> و <b>React</b>.',
          'بهبود سامانه <b>کش پرامپت و پیشوند</b> برای مدل‌های زبانی مستقرشده.'
        ],
        stack: ['LiveKit', 'VoIP', 'Django', 'TypeScript', 'React']
      },
      {
        start: '2025-10', end: '2026-06', org: { en: 'MCINEXT', fa: 'MCINEXT' }, role: { en: 'LLM Engineer', fa: 'مهندس مدل‌های زبانی بزرگ' },
        en: [
          'Implemented a <b>router model</b> for intent and tool selection that drives <b>dynamic prompt</b> generation.',
          'Designed and implemented an <b>AR-GRPO</b> training pipeline for fine-tuning agentic LLMs such as <b>Gemma3-4B</b> and <b>Qwen3-4B</b>.',
          'Developed a <b>search-engine evaluation</b> system, with CI/CD and Helm charts to serve services on <b>ArgoCD</b>.',
          'Created an <b>adaptive agentic</b> architecture for LLM and tool-retriever flows.',
          'Implemented an end-to-end chatbot evaluation system using <b>LLM-based evaluation</b>, win-rate metrics and <b>Django</b>.'
        ],
        fa: [
          'پیاده‌سازی <b>مدل مسیریاب</b> برای تشخیص نیت و انتخاب ابزار به‌منظور تولید <b>پرامپت پویا</b>.',
          'طراحی و پیاده‌سازی خط آموزش <b>AR-GRPO</b> برای تنظیم دقیق مدل‌های زبانی عامل‌محور مانند <b>Gemma3-4B</b> و <b>Qwen3-4B</b>.',
          'توسعه سامانه <b>ارزیابی موتور جست‌وجو</b> همراه با CI/CD و Helm Chart برای استقرار سرویس‌ها روی <b>ArgoCD</b>.',
          'طراحی معماری <b>عامل‌محور تطبیقی</b> برای جریان مدل زبانی و بازیاب ابزار.',
          'پیاده‌سازی سامانه سرتاسری ارزیابی چت‌بات با <b>ارزیابی مبتنی بر LLM</b>، معیار نرخ برد و چارچوب <b>Django</b>.'
        ],
        stack: ['GRPO', 'Gemma 3', 'Qwen 3', 'Helm', 'ArgoCD', 'Django']
      },
      {
        start: '2025-02', end: '2025-09', org: { en: 'Mohaymen ICT Group', fa: 'گروه فناوری مهیمن' }, role: { en: 'AI Engineer', fa: 'مهندس هوش مصنوعی' },
        en: [
          'Maintained production AI services with <b>Docker Compose</b> and implemented three-phase chat-response caching with <b>Redis</b>.',
          'Improved RAG-system performance through <b>asynchronous programming</b> and <b>multi-process logic</b>.',
          'Implemented end-to-end <b>NER</b> with ParsBERT and <b>translation</b> with SeamlessM4T, deployed via <b>FastAPI</b>.',
          'Designed an <b>ASR hybrid-search</b> service with NeMo, and <b>OCR pipelines</b> with Tesseract, RolmOCR and FastAPI.',
          'Integrated log and chat tracing with <b>Phoenix</b> and used <b>vLLM</b> for offline LLM inference.',
          'Load-tested upstream and production systems with <b>Locust</b>.'
        ],
        fa: [
          'نگهداری سرویس‌های عملیاتی هوش مصنوعی با <b>Docker Compose</b> و پیاده‌سازی کش سه‌مرحله‌ای پاسخ‌های گفت‌وگو با <b>Redis</b>.',
          'افزایش کارایی سامانه RAG با <b>برنامه‌نویسی ناهمگام</b> و <b>منطق چندپردازه‌ای</b>.',
          'پیاده‌سازی سرتاسری <b>تشخیص موجودیت‌های نام‌دار</b> با ParsBERT و <b>ترجمه</b> با SeamlessM4T و استقرار با <b>FastAPI</b>.',
          'طراحی سرویس <b>جست‌وجوی ترکیبی گفتار</b> با NeMo و <b>خطوط پردازش OCR</b> با Tesseract، RolmOCR و FastAPI.',
          'یکپارچه‌سازی ردیابی لاگ و گفت‌وگو با <b>Phoenix</b> و استفاده از <b>vLLM</b> برای استنتاج آفلاین.',
          'آزمون بار سامانه‌های بالادستی و عملیاتی با <b>Locust</b>.'
        ],
        stack: ['RAG', 'Redis', 'FastAPI', 'vLLM', 'NeMo', 'Phoenix', 'Locust']
      },
      {
        start: '2024-07', end: '2024-11', org: { en: 'Mohaymen ICT Group', fa: 'گروه فناوری مهیمن' }, role: { en: 'Machine Learning Engineer', fa: 'مهندس یادگیری ماشین' },
        en: [
          'Fine-tuned a <b>BERT</b> model to better detect questions similar to a user’s query.',
          'Developed an <b>intelligent spelling corrector</b> based on context, frequency analysis and similarity scores.',
          'Implemented a <b>RAG-based LLM system</b> with <b>LangChain</b> and <b>LangGraph</b>.',
          'Improved <b>speech-to-text</b> and <b>text-to-speech</b> accuracy with the <b>NeMo</b> framework.'
        ],
        fa: [
          'تنظیم دقیق مدل <b>BERT</b> برای تشخیص بهتر پرسش‌های مشابه با پرسش کاربر.',
          'توسعه <b>غلط‌یاب هوشمند</b> بر پایه بافت، تحلیل فراوانی و امتیاز شباهت.',
          'پیاده‌سازی <b>سامانه RAG</b> با کتابخانه‌های <b>LangChain</b> و <b>LangGraph</b>.',
          'بهبود دقت مدل‌های <b>گفتار به متن</b> و <b>متن به گفتار</b> با چارچوب <b>NeMo</b>.'
        ],
        stack: ['BERT', 'LangChain', 'LangGraph', 'NeMo']
      },
      {
        start: '2021-06', end: '2021-09', org: { en: 'Code Star', fa: 'کداستار' }, role: { en: 'Software Engineering Intern', fa: 'کارآموز مهندسی نرم‌افزار' },
        en: [
          'Designed and developed efficient <b>data pipelines</b> in C#.',
          'Built a working knowledge of <b>database fundamentals</b>, using SQL for extraction, transformation and loading.'
        ],
        fa: [
          'طراحی و توسعه <b>خطوط پردازش داده</b> کارآمد با C#.',
          'کسب دانش عملی در <b>مبانی پایگاه داده</b> و استفاده از SQL برای استخراج، تبدیل و بارگذاری داده.'
        ],
        stack: ['C#', 'SQL']
      }
    ]
  },

  research: {
    en: { title: 'Research Experience' },
    fa: { title: 'سوابق پژوهشی' },
    axis: ['2023-01', '2027-01'],
    items: [
      {
        start: '2025-07', end: '2026-05', remote: true,
        en: {
          title: 'Maximum Divergence Knowledge Distillation', inst: 'University of Waterloo, Canada', sup: 'Prof. A. Ghodsi',
          points: [
            'Proposed <b>MDKD</b>, a rejection-sampling distillation method that targets regions where student LLMs underestimate the teacher.',
            'Achieved state-of-the-art performance on <b>GSM8K</b>, summarization and code generation.'
          ]
        },
        fa: {
          title: 'تقطیر دانش با بیشینه واگرایی', inst: 'دانشگاه واترلو، کانادا', sup: 'پروفسور قدسی',
          points: [
            'ارائه روش <b>MDKD</b>؛ روشی برای تقطیر مبتنی بر نمونه‌برداری رد که نواحی‌ای را هدف می‌گیرد که در آن‌ها مدل زبانی دانش‌آموز احتمال مدل معلم را کم‌برآورد می‌کند.',
            'دستیابی به عملکرد پیشرو در <b>GSM8K</b>، خلاصه‌سازی و تولید کد.'
          ]
        }
      },
      {
        start: '2023-04', end: '2026-02', remote: true,
        en: {
          title: 'Mental Wellness Chatbot', inst: 'Imperial College London, UK', sup: 'Prof. A. Edalat',
          points: [
            'Developed a <b>chatbot</b> that recommends exercise regimens based on <b>self-attachment theory (SAT)</b> protocols.',
            'Trained a transformer-based <b>emotion classifier</b> over 12 classes, reaching a 92% F1 score.',
            'Applied <b>PPO reinforcement learning</b> to fine-tune GPT-2 for better dialogue generation.',
            'Built <b>RAG-based LLM systems</b> and fine-tuned <b>Llama-3</b> on mental-health datasets.'
          ]
        },
        fa: {
          title: 'چت‌بات سلامت روان', inst: 'امپریال کالج لندن، بریتانیا', sup: 'پروفسور عدالت',
          points: [
            'توسعه یک <b>چت‌بات</b> برای پیشنهاد برنامه تمرینی بر پایه پروتکل‌های <b>نظریه خوددلبستگی (SAT)</b>.',
            'آموزش یک <b>دسته‌بند احساسات</b> مبتنی بر ترنسفورمر در ۱۲ کلاس با امتیاز F1 برابر ۹۲٪.',
            'به‌کارگیری <b>یادگیری تقویتی PPO</b> برای تنظیم دقیق GPT-2 و بهبود تولید گفت‌وگو.',
            'ساخت <b>سامانه‌های RAG</b> و تنظیم دقیق <b>Llama-3</b> روی داده‌های سلامت روان.'
          ]
        }
      },
      {
        start: '2025-04', end: '2026-02', remote: true,
        en: {
          title: 'Synthetic Data in Data Selection Methods', inst: 'Rensselaer Polytechnic Institute, USA', sup: 'Prof. Amiri',
          points: [
            'Implemented an <b>adversarial approach</b> to data selection for pre-training foundation models.',
            'Analyzed how data-mixing methods such as <b>DoReMi</b> weight synthetic data.'
          ]
        },
        fa: {
          title: 'داده‌های مصنوعی در روش‌های انتخاب داده', inst: 'مؤسسه پلی‌تکنیک رنسلر، آمریکا', sup: 'پروفسور امیری',
          points: [
            'پیاده‌سازی یک <b>رویکرد تخاصمی</b> برای انتخاب داده در پیش‌آموزش مدل‌های پایه.',
            'تحلیل توزیع وزن‌دهی داده‌های مصنوعی در روش‌های ترکیب داده مانند <b>DoReMi</b>.'
          ]
        }
      },
      {
        start: '2024-05', end: '2024-12',
        en: {
          title: 'News Importance Classification with LLMs', inst: 'Sharif University of Technology, Iran', sup: 'Prof. Jafari',
          points: [
            'Used <b>symbol tuning</b> to evaluate how sensitive LLMs are to prompt variations.',
            'Compared the <b>reasoning abilities</b> of open-source LLMs on a new human-labeled Persian news dataset.',
            'Designed a <b>query-dependent prompting system</b> that keeps LLMs effective across diverse scenarios.'
          ]
        },
        fa: {
          title: 'دسته‌بندی اهمیت اخبار با مدل‌های زبانی بزرگ', inst: 'دانشگاه صنعتی شریف، ایران', sup: 'دکتر جعفری',
          points: [
            'استفاده از روش <b>Symbol Tuning</b> برای سنجش حساسیت مدل‌های زبانی بزرگ به تغییرات پرامپت.',
            'مقایسه <b>توانایی استدلال</b> مدل‌های زبانی متن‌باز روی یک مجموعه‌داده جدید از اخبار فارسی با برچسب انسانی.',
            'طراحی یک <b>سامانه پرامپت وابسته به پرسش</b> برای حفظ اثربخشی مدل‌ها در سناریوهای گوناگون.'
          ]
        }
      },
      {
        start: '2024-06', end: '2024-10',
        en: {
          title: 'LLM Citation Benchmark', inst: 'Sharif University of Technology, Iran', sup: 'Prof. Asgari',
          points: [
            'Built a comprehensive framework to evaluate the <b>medical citation quality</b> of LLMs.',
            'Used <b>fact validation</b> with a weighted scoring system for accuracy and relevance.',
            'Collected medical-context datasets of texts paired with their <b>quantized facts</b>.'
          ]
        },
        fa: {
          title: 'محک ارجاع‌دهی مدل‌های زبانی بزرگ', inst: 'دانشگاه صنعتی شریف، ایران', sup: 'دکتر عسگری',
          points: [
            'توسعه چارچوبی جامع برای ارزیابی <b>کیفیت ارجاع‌دهی پزشکی</b> مدل‌های زبانی بزرگ.',
            'به‌کارگیری <b>اعتبارسنجی واقعیت</b> همراه با امتیازدهی وزن‌دار برای دقت و ارتباط.',
            'گردآوری مجموعه‌داده‌های پزشکی شامل متون و <b>واقعیت‌های کمّی‌شده</b> آن‌ها.'
          ]
        }
      },
      {
        start: '2023-11', end: '2024-09',
        en: {
          title: 'Survey on Diffusion Models', inst: 'Sharif University of Technology, Iran', sup: 'Prof. Rohban and Prof. Soleymani',
          points: ['Examined the <b>compositional challenges</b> that arise during generation in <b>diffusion models</b>.']
        },
        fa: {
          title: 'مرور مدل‌های انتشار', inst: 'دانشگاه صنعتی شریف، ایران', sup: 'دکتر رهبان و دکتر سلیمانی',
          points: ['بررسی <b>چالش‌های ترکیب‌پذیری</b> در فرایند تولید <b>مدل‌های انتشار</b>.']
        }
      }
    ]
  },

  education: {
    en: { title: 'Education' },
    fa: { title: 'تحصیلات' },
    degrees: [
      {
        degree: { en: 'M.Sc. in Artificial Intelligence', fa: 'کارشناسی ارشد هوش مصنوعی' },
        school: { en: 'Sharif University of Technology, Tehran, Iran', fa: 'دانشگاه صنعتی شریف، تهران' },
        start: '2025-09', end: null, gpa: 18.56
      },
      {
        degree: { en: 'B.Sc. in Computer Engineering', fa: 'کارشناسی مهندسی کامپیوتر' },
        school: { en: 'Sharif University of Technology, Tehran, Iran', fa: 'دانشگاه صنعتی شریف، تهران' },
        start: '2020-09', end: '2025-02', gpa: 18.90, major: 18.96
      }
    ],
    courses: [
      { en: 'Deep Learning', fa: 'یادگیری عمیق', grade: 19.7, grad: true },
      { en: 'Natural Language Processing', fa: 'پردازش زبان طبیعی', grade: 19.6, grad: true },
      { en: 'Generative Models', fa: 'مدل‌های مولد', grade: 19.2, grad: true },
      { en: 'Intelligent Analysis of Bio-Images', fa: 'تحلیل هوشمند تصاویر زیستی', grade: 19.1, grad: true },
      { en: 'Fundamentals of 3D Computer Vision', fa: 'مبانی بینایی سه‌بعدی کامپیوتر', grade: 20 },
      { en: 'Machine Learning', fa: 'یادگیری ماشین', grade: 20 },
      { en: 'Linear Algebra', fa: 'جبر خطی', grade: 20 },
      { en: 'French (General)', fa: 'زبان فرانسه عمومی', grade: 20 }
    ]
  },

  honors: {
    en: { title: 'Honors and Awards' },
    fa: { title: 'افتخارات' },
    items: [
      { rank: 1, pool: 2100, unit: { en: 'teams', fa: 'تیم' }, top: 0.05, date: '2025-10', en: 'NLP Tech Olympics 2025', fa: 'المپیک فناوری پردازش زبان طبیعی ۲۰۲۵' },
      { rank: 16, pool: 22000, unit: { en: 'candidates', fa: 'داوطلب' }, top: 0.07, date: '2025-02', en: 'National M.Sc. Entrance Exam', fa: 'آزمون سراسری کارشناسی ارشد' },
      { rank: 10, pool: 1200, unit: { en: 'candidates', fa: 'داوطلب' }, top: 0.8, date: '2024-08', en: 'National Student Olympiad', fa: 'المپیاد دانشجویی کشور' },
      { rank: 25, pool: 155000, unit: { en: 'candidates', fa: 'داوطلب' }, top: 0.02, date: '2020-10', en: 'National University Entrance Exam (B.Sc.)', fa: 'آزمون سراسری ورود به دانشگاه (کنکور کارشناسی)' },
      { rank: 120, topN: true, pool: 11000, unit: { en: 'candidates', fa: 'داوطلب' }, top: 1.1, date: '2014-09', en: 'NODET Entrance Exam', fa: 'آزمون ورودی سمپاد' }
    ]
  },

  teaching: {
    en: { title: 'Teaching', lede: 'Teaching assistant for 24 course offerings over nine semesters at Sharif University of Technology, including three as head teaching assistant.' },
    fa: { title: 'تدریس', lede: 'دستیار آموزشی در ۲۴ ارائه درس طی نُه نیم‌سال در دانشگاه صنعتی شریف، از جمله سه ارائه به‌عنوان سرپرست دستیاران آموزشی.' },
    seasons: { en: { fall: 'Fall', spring: 'Spring', summer: 'Summer' }, fa: { fall: 'پاییز', spring: 'بهار', summer: 'تابستان' } },
    // Terms are listed most recent first.
    courses: [
      { head: true, terms: [['spring', 2024], ['fall', 2023]], en: 'Compiler Design', fa: 'طراحی کامپایلر', by: { en: 'Dr. S. Hosseinmardi', fa: 'دکتر حسین‌مردی' } },
      { head: true, terms: [['spring', 2023]], en: 'Mobile Programming', fa: 'برنامه‌نویسی موبایل', by: { en: 'Dr. S. Nari', fa: 'دکتر ناری' } },
      { terms: [['fall', 2026]], en: 'Deep Learning (M.Sc.)', fa: 'یادگیری عمیق (کارشناسی ارشد)', by: { en: 'Dr. M. Soleymani', fa: 'دکتر سلیمانی' } },
      { terms: [['fall', 2026]], en: 'Natural Language Processing (M.Sc.)', fa: 'پردازش زبان طبیعی (کارشناسی ارشد)', by: { en: 'Dr. M. Samiei', fa: 'دکتر سمیعی' } },
      { terms: [['spring', 2026]], en: 'Modern Information Retrieval', fa: 'بازیابی پیشرفته اطلاعات', by: { en: 'Dr. M. Soleymani', fa: 'دکتر سلیمانی' } },
      { terms: [['spring', 2024]], en: 'Machine Learning', fa: 'یادگیری ماشین', by: { en: 'Dr. F. Salehi', fa: 'دکتر صالحی' } },
      { terms: [['spring', 2024]], en: 'Mathematics for Artificial Intelligence', fa: 'ریاضیات هوش مصنوعی', by: { en: 'Dr. A. Najafi', fa: 'دکتر نجفی' } },
      { terms: [['spring', 2024]], en: 'Game Theory', fa: 'نظریه بازی‌ها', by: { en: 'Dr. M. Seddighin', fa: 'دکتر صدیقین' } },
      { terms: [['spring', 2024]], en: 'Design of Algorithms', fa: 'طراحی الگوریتم', by: { en: 'Dr. M. Abam', fa: 'دکتر آبام' } },
      { terms: [['spring', 2024]], en: 'Probability and Statistics', fa: 'آمار و احتمال', by: { en: 'Dr. M. Jafari', fa: 'دکتر جعفری' } },
      { terms: [['spring', 2024], ['fall', 2023]], en: 'Machine Learning', fa: 'یادگیری ماشین', by: { en: 'Dr. A. Motahari', fa: 'دکتر مطهری' } },
      { terms: [['fall', 2023]], en: 'Database Design', fa: 'طراحی پایگاه داده', by: { en: 'Dr. M. Akhi', fa: 'دکتر آخی' } },
      { terms: [['fall', 2023], ['spring', 2023], ['fall', 2022]], en: 'Numerical Methods', fa: 'محاسبات عددی', by: { en: 'Dr. S. Hosseinghorban', fa: 'دکتر حسین‌قربان' } },
      { terms: [['summer', 2023]], en: 'Discrete Structures', fa: 'ساختمان‌های گسسته', by: { en: 'Dr. M. Abam', fa: 'دکتر آبام' } },
      { terms: [['spring', 2023], ['fall', 2022], ['spring', 2022]], en: 'Linear Algebra', fa: 'جبر خطی', by: { en: 'Dr. S. Hosseinghorban', fa: 'دکتر حسین‌قربان' } },
      { terms: [['spring', 2023]], en: 'Data Structures and Algorithms', fa: 'ساختمان داده و الگوریتم', by: { en: 'Dr. M. Ghorbani', fa: 'دکتر قربانی' } },
      { terms: [['fall', 2022]], en: 'Probability and Statistics', fa: 'آمار و احتمال', by: { en: 'Dr. M. Motahari', fa: 'دکتر مطهری' } },
      { terms: [['fall', 2021]], en: 'Advanced Programming', fa: 'برنامه‌سازی پیشرفته', by: { en: 'Dr. V. Salmani', fa: 'دکتر سلمانی' } }
    ]
  },

  projects: {
    en: { title: 'Selected Projects' },
    fa: { title: 'پروژه‌های منتخب' },
    items: [
      {
        repo: 'BachelorProject', start: '2024-05', end: null,
        en: ['AYA Prompt-Based Classification', 'Bachelor project', 'An automated classification system built on K-shot learning and TF-IDF similarity, with a fine-tuned Aya-23 model using quantization and LoRA.'],
        fa: ['دسته‌بندی مبتنی بر پرامپت با AYA', 'پروژه کارشناسی', 'سامانه خودکار دسته‌بندی بر پایه یادگیری K-shot و شباهت TF-IDF، همراه با تنظیم دقیق مدل Aya-23 با کوانتیزه‌سازی و LoRA.']
      },
      {
        repo: 'RAGBasedChatbot', start: '2024-07', end: '2024-09',
        en: ['RAG-Based Chatbot', 'Star Division', 'A chatbot framework with context-based question answering, spelling correction and profanity filtering, built on LangChain, the OpenAI API and a FAISS vector store.'],
        fa: ['چت‌بات مبتنی بر RAG', 'Star Division', 'چارچوب چت‌بات با پاسخ‌گویی مبتنی بر بافت، غلط‌یابی و فیلتر الفاظ نامناسب، ساخته‌شده با LangChain، رابط OpenAI و پایگاه برداری FAISS.']
      },
      {
        repo: 'MedicalQuestionAnsweringSystem', start: '2024-05', end: '2024-06',
        en: ['Medical Question Answering', 'Natural Language Processing', 'T5-based models fine-tuned on PubMed to generate precise medical answers.'],
        fa: ['پرسش و پاسخ پزشکی', 'پردازش زبان طبیعی', 'تنظیم دقیق مدل‌های مبتنی بر T5 روی داده PubMed برای تولید پاسخ‌های دقیق پزشکی.']
      },
      {
        repo: 'FilmGenreDetection', start: '2024-04', end: '2024-05',
        en: ['Film Genre Detection', 'Natural Language Processing', 'Genre classification with classical machine learning and transformers, together with named-entity recognition on Persian and English synopses.'],
        fa: ['تشخیص ژانر فیلم', 'پردازش زبان طبیعی', 'دسته‌بندی ژانر با یادگیری ماشین کلاسیک و ترنسفورمرها و تشخیص موجودیت‌های نام‌دار در خلاصه‌های فارسی و انگلیسی.']
      },
      {
        repo: 'CVFeatureMatching', start: '2024-01', end: '2024-02',
        en: ['Feature Matching', '3D Computer Vision', 'Feature detection and matching across images with classical and deep-learning approaches.'],
        fa: ['تطبیق ویژگی', 'بینایی سه‌بعدی کامپیوتر', 'تشخیص و تطبیق ویژگی میان تصاویر با رویکردهای کلاسیک و یادگیری عمیق.']
      },
      {
        repo: 'SATTeacher', start: '2023-06', end: '2023-09',
        en: ['SAT Teacher', 'Imperial College London collaboration', 'A question-answering tool using BERT embeddings to help users understand self-attachment techniques.'],
        fa: ['SAT Teacher', 'همکاری با امپریال کالج لندن', 'ابزار پرسش و پاسخ با بازنمایی‌های BERT برای درک بهتر تکنیک‌های خوددلبستگی.']
      },
      {
        repo: 'ImageCaptioning', start: '2023-02', end: '2023-02',
        en: ['Image Captioning', 'Machine Learning', 'An LSTM encoder–decoder architecture that generates descriptive captions for images.'],
        fa: ['توصیف تصویر', 'یادگیری ماشین', 'معماری رمزگذار-رمزگشای LSTM برای تولید خودکار توصیف تصاویر.']
      },
      {
        repo: 'CMinusCompiler', start: '2022-09', end: '2023-01',
        en: ['C-Minus Compiler', 'Compiler Design', 'A complete compiler for C-Minus, a simplified C: lexical analyzer, parser, semantic analyzer and code generator, written in Python.'],
        fa: ['کامپایلر C-Minus', 'طراحی کامپایلر', 'کامپایلر کامل برای زبان C-Minus (نسخه ساده‌شده C) شامل تحلیلگر لغوی، تجزیه‌گر، تحلیلگر معنایی و مولد کد به زبان پایتون.']
      }
    ]
  },

  skills: {
    en: { title: 'Skills and Languages' },
    fa: { title: 'مهارت‌ها و زبان‌ها' },
    groups: [
      { en: 'Machine learning', fa: 'یادگیری ماشین', items: 'PyTorch, TensorFlow, scikit-learn, Transformers, vLLM, FAISS, Rasa' },
      { en: 'Data and visualization', fa: 'داده و مصورسازی', items: 'NumPy, Pandas, Matplotlib, Streamlit' },
      { en: 'Programming', fa: 'برنامه‌نویسی', items: 'Python, Java, C#, Swift, MQL4, MQL5, TypeScript, JavaScript' },
      { en: 'Backend and databases', fa: 'بک‌اند و پایگاه داده', items: 'FastAPI, Django, REST APIs, PostgreSQL, MongoDB, Redis' },
      { en: 'Web', fa: 'وب', items: 'React, HTML, CSS' },
      { en: 'DevOps', fa: 'DevOps', items: 'Docker, Docker Compose, Kubernetes, ArgoCD, Kibana' },
      { en: 'Testing and monitoring', fa: 'آزمون و پایش', items: 'Locust, Phoenix' },
      { en: 'Research tools', fa: 'ابزارهای پژوهشی', items: 'LaTeX, Markdown, Zotero, Citavi' }
    ],
    languages: [
      { en: ['English', 'Professional proficiency', 'IELTS 7.5 (Reading 8.5, Listening 8.0, Speaking 7.0, Writing 7.0)'],
        fa: ['انگلیسی', 'مهارت حرفه‌ای', 'آیلتس ۷٫۵ (خواندن ۸٫۵، شنیدن ۸٫۰، صحبت ۷٫۰، نوشتن ۷٫۰)'] },
      { en: ['Persian', 'Native'], fa: ['فارسی', 'زبان مادری'] },
      { en: ['Arabic', 'Intermediate proficiency'], fa: ['عربی', 'سطح متوسط'] },
      { en: ['French', 'Elementary proficiency'], fa: ['فرانسوی', 'سطح مقدماتی'] }
    ]
  },

  service: {
    en: { title: 'Service and Outreach' },
    fa: { title: 'خدمات علمی و ترویجی' },
    items: [
      {
        en: { title: 'Karsoogh Mehregan 23, 24, 25 and 26', org: 'NODET Alumni Community', role: 'Head of Education and Tournament',
          points: ['Led the scientific and tournament teams of the event.', 'Hosted cryptography and artificial intelligence workshops for middle-school students.', 'Designed online games that teach machine learning, reinforcement learning and cryptography.'] },
        fa: { title: 'کارسوق مهرگان ۲۳، ۲۴، ۲۵ و ۲۶', org: 'جامعه دانش‌آموختگان سمپاد', role: 'مسئول آموزش و تورنمنت',
          points: ['رهبری تیم‌های علمی و تورنمنت رویداد.', 'برگزاری کارگاه رمزنگاری و هوش مصنوعی برای دانش‌آموزان متوسطه اول.', 'طراحی بازی‌های برخط برای آموزش یادگیری ماشین، یادگیری تقویتی و رمزنگاری.'] }
      },
      {
        date: '2022-04',
        en: { title: 'WebMasters', org: 'Sharif University of Technology', role: 'Mentor',
          points: ['Taught a free community course on front-end development covering HTML, CSS and JavaScript.'] },
        fa: { title: 'وب‌مسترز', org: 'دانشگاه صنعتی شریف', role: 'منتور',
          points: ['برگزاری دوره رایگان آموزش برنامه‌نویسی فرانت‌اند شامل HTML، CSS و JavaScript.'] }
      }
    ]
  },

  contact: {
    en: { title: 'Contact', body: 'I welcome correspondence about research and academic collaboration. Email is the most reliable way to reach me.' },
    fa: { title: 'تماس', body: 'از مکاتبه درباره پژوهش و همکاری‌های علمی استقبال می‌کنم. ایمیل مطمئن‌ترین راه ارتباط با من است.' }
  }
};
