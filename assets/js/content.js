/* All portfolio content, in English (default) and Persian.
   Edit this file to update the site; main.js renders everything from it.
   Strings may contain <b>, <em> and <i>; they are trusted, author-written HTML. */
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
      pageTitle: 'Shayan Salehi — Machine Learning Researcher',
      description: 'Shayan Salehi, M.Sc. student in Artificial Intelligence at Sharif University of Technology. Research on language and vision–language models, tool use and AI for healthcare.',
      skip: 'Skip to content',
      nav: { about: 'About', publications: 'Publications', research: 'Research', education: 'Education', teaching: 'Teaching', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
      langSwitch: 'فا', langLabel: 'نمایش به فارسی',
      themeDark: 'Switch to dark theme', themeLight: 'Switch to light theme',
      motionPause: 'Pause background animation', motionPlay: 'Play background animation',
      menuOpen: 'Open menu', menuClose: 'Close menu',
      present: 'Present', now: 'Now',
      email: 'Email', scholar: 'Google Scholar', github: 'GitHub', linkedin: 'LinkedIn', cv: 'Download CV',
      portraitAlt: 'Portrait of Shayan Salehi working on a laptop at a hackathon',
      heroBackdrop: 'Courtyard of a historic Persian garden house under a clear blue sky',
      interestsLabel: 'Research interests', collaborationsLabel: 'Research collaborations',
      filterAll: 'All', filterPublished: 'Published', filterReview: 'Under review', filterProgress: 'In progress',
      statusPublished: 'Published', statusReview: 'Under review', statusProgress: 'In progress',
      firstAuthor: 'First author', scholarAll: 'Full list on Google Scholar', inPrep: 'In prep.',
      supervisor: 'Supervision', institution: 'Institution', period: 'Period', mode: 'Format', remote: 'Remote collaboration', onsite: 'On site',
      ganttHint: 'Select a project to read more.',
      overallGpa: 'Overall GPA', majorGpa: 'Major GPA', of20: 'out of 20', coursework: 'Selected coursework', gradesNote: 'Grades out of 20',
      msc: 'M.Sc.', among: 'among', top: 'Top',
      offerings: 'course offerings', courses: 'distinct courses', headOfferings: 'as head TA', span: 'semesters',
      ta: 'Teaching assistant', headTa: 'Head teaching assistant',
      boardHint: 'Hover or focus a course to see the instructor and every semester it was taught.',
      taughtIn: 'Taught in', with: 'with',
      stack: 'Stack', viewCode: 'View on GitHub', moreGithub: 'More on GitHub', moreGithubNote: 'Coursework, tools and experiments',
      service: 'Service & outreach', toolkit: 'Toolkit', languages: 'Languages',
      copy: 'Copy email', copied: 'Email copied', location: 'Tehran, Iran',
      footer: 'Shayan Salehi', updated: 'Last updated', backTop: 'Back to top',
      ordinal: n => n + ({ 1: 'st', 2: 'nd', 3: 'rd' }[(n % 100 > 10 && n % 100 < 14) ? 0 : n % 10] || 'th')
    },
    fa: {
      pageTitle: 'شایان صالحی — پژوهشگر یادگیری ماشین',
      description: 'شایان صالحی، دانشجوی کارشناسی ارشد هوش مصنوعی دانشگاه صنعتی شریف؛ پژوهش در مدل‌های زبانی و بینایی-زبان، به‌کارگیری ابزار و هوش مصنوعی در سلامت.',
      skip: 'رفتن به محتوا',
      nav: { about: 'درباره', publications: 'انتشارات', research: 'پژوهش', education: 'تحصیلات', teaching: 'تدریس', experience: 'تجربه کاری', projects: 'پروژه‌ها', contact: 'تماس' },
      langSwitch: 'EN', langLabel: 'View in English',
      themeDark: 'تغییر به پوسته تیره', themeLight: 'تغییر به پوسته روشن',
      motionPause: 'توقف پویانمایی پس‌زمینه', motionPlay: 'پخش پویانمایی پس‌زمینه',
      menuOpen: 'باز کردن منو', menuClose: 'بستن منو',
      present: 'اکنون', now: 'اکنون',
      email: 'ایمیل', scholar: 'گوگل اسکالر', github: 'گیت‌هاب', linkedin: 'لینکدین', cv: 'دریافت رزومه (انگلیسی)',
      portraitAlt: 'تصویر شایان صالحی در حال کار با لپ‌تاپ در یک هکاتون',
      heroBackdrop: 'حیاط یک خانه‌باغ تاریخی ایرانی زیر آسمان آبی',
      interestsLabel: 'علایق پژوهشی', collaborationsLabel: 'همکاری‌های پژوهشی',
      filterAll: 'همه', filterPublished: 'منتشرشده', filterReview: 'در حال داوری', filterProgress: 'در دست انجام',
      statusPublished: 'منتشرشده', statusReview: 'در حال داوری', statusProgress: 'در دست انجام',
      firstAuthor: 'نویسنده اول', scholarAll: 'فهرست کامل در گوگل اسکالر', inPrep: 'در دست تهیه',
      supervisor: 'استاد راهنما', institution: 'مؤسسه', period: 'بازه زمانی', mode: 'شیوه همکاری', remote: 'همکاری از راه دور', onsite: 'حضوری',
      ganttHint: 'برای مطالعه جزئیات، یک پروژه را انتخاب کنید.',
      overallGpa: 'معدل کل', majorGpa: 'معدل دروس تخصصی', of20: 'از ۲۰', coursework: 'دروس منتخب', gradesNote: 'نمره‌ها از ۲۰',
      msc: 'ارشد', among: 'در میان', top: 'برترین',
      offerings: 'ارائه درس', courses: 'درس متمایز', headOfferings: 'به‌عنوان سرپرست', span: 'نیم‌سال',
      ta: 'دستیار آموزشی', headTa: 'سرپرست دستیاران آموزشی',
      boardHint: 'نشانگر را روی یک درس ببرید تا نام استاد و همه نیم‌سال‌های ارائه آن را ببینید.',
      taughtIn: 'ارائه در', with: 'با',
      stack: 'فناوری‌ها', viewCode: 'مشاهده در گیت‌هاب', moreGithub: 'پروژه‌های بیشتر در گیت‌هاب', moreGithubNote: 'تمرین‌ها، ابزارها و آزمایش‌ها',
      service: 'خدمات و ترویج علم', toolkit: 'جعبه‌ابزار', languages: 'زبان‌ها',
      copy: 'کپی ایمیل', copied: 'ایمیل کپی شد', location: 'تهران، ایران',
      footer: 'شایان صالحی', updated: 'آخرین به‌روزرسانی', backTop: 'بازگشت به بالا',
      ordinal: n => n
    }
  },

  hero: {
    en: {
      eyebrow: 'M.Sc. Artificial Intelligence · Sharif University of Technology',
      name: 'Shayan Salehi',
      lead: 'I work on language and vision–language models: how they learn from one another, how they use tools and evidence, and how they can be trusted where people’s health is at stake.',
      status: 'Seeking PhD positions'
    },
    fa: {
      eyebrow: 'کارشناسی ارشد هوش مصنوعی · دانشگاه صنعتی شریف',
      name: 'شایان صالحی',
      lead: 'روی مدل‌های زبانی و مدل‌های بینایی-زبان پژوهش می‌کنم: این‌که چگونه از یکدیگر یاد می‌گیرند، چگونه از ابزار و شواهد بهره می‌برند و چگونه می‌توان در حوزه سلامت به آن‌ها اعتماد کرد.',
      status: 'در جست‌وجوی موقعیت دکتری'
    },
    stats: [
      { value: 6, en: 'papers published', fa: 'مقاله منتشرشده' },
      { value: 3, en: 'international research collaborations', fa: 'همکاری پژوهشی بین‌المللی' },
      { value: 25, en: 'course offerings as teaching assistant', fa: 'ارائه درس به‌عنوان دستیار آموزشی' },
      { value: 1, ordinal: true, en: 'of 2,100+ teams, NLP Tech Olympics', fa: 'میان بیش از ۲٬۱۰۰ تیم، المپیک فناوری پردازش زبان' }
    ]
  },

  about: {
    en: {
      eyebrow: 'Research profile',
      title: 'Where <em>language, vision</em> and people meet.',
      body: [
        'I am an M.Sc. student in Artificial Intelligence at Sharif University of Technology, where I also completed my B.Sc. in Computer Engineering. My research asks how models learn from one another, how they use tools and evidence, and how they can be trusted in health and wellbeing settings.',
        'Through remote collaborations with the University of Waterloo, Imperial College London and Rensselaer Polytechnic Institute, I have worked on knowledge distillation for large language models, data mixing for pre-training, and therapeutic dialogue systems. In parallel, I build production LLM systems in industry, which keeps my research grounded in how these models behave in practice.'
      ]
    },
    fa: {
      eyebrow: 'مرور پژوهشی',
      title: 'جایی که <em>زبان، بینایی</em> و انسان به هم می‌رسند.',
      body: [
        'دانشجوی کارشناسی ارشد هوش مصنوعی در دانشگاه صنعتی شریف هستم و دوره کارشناسی مهندسی کامپیوتر را نیز در همین دانشگاه گذرانده‌ام. پرسش اصلی پژوهش‌های من این است که مدل‌ها چگونه از یکدیگر یاد می‌گیرند، چگونه از ابزار و شواهد استفاده می‌کنند و چگونه می‌توان در زمینه‌های سلامت و بهزیستی به آن‌ها اعتماد کرد.',
        'در همکاری‌های پژوهشی از راه دور با دانشگاه واترلو، امپریال کالج لندن و مؤسسه پلی‌تکنیک رنسلر، روی تقطیر دانش در مدل‌های زبانی بزرگ، ترکیب داده برای پیش‌آموزش و سامانه‌های گفت‌وگوی درمانی کار کرده‌ام. هم‌زمان، در صنعت سامانه‌های مبتنی بر مدل‌های زبانی بزرگ را در مقیاس عملیاتی می‌سازم؛ تجربه‌ای که پژوهش‌هایم را به رفتار واقعی این مدل‌ها پیوند می‌دهد.'
      ]
    },
    collaborations: [
      { en: 'University of Waterloo', fa: 'دانشگاه واترلو' },
      { en: 'Imperial College London', fa: 'امپریال کالج لندن' },
      { en: 'Rensselaer Polytechnic Institute', fa: 'مؤسسه پلی‌تکنیک رنسلر' },
      { en: 'Sharif University of Technology', fa: 'دانشگاه صنعتی شریف' }
    ],
    interests: [
      { en: ['Vision–Language Models', 'Medical VLM robustness · radiology report generation'], fa: ['مدل‌های بینایی-زبان', 'استواری مدل‌های بینایی-زبان پزشکی · تولید گزارش رادیولوژی'] },
      { en: ['Tool-Augmented Language Models', 'ToolRacer · agentic tool retrieval'], fa: ['مدل‌های زبانی مجهز به ابزار', 'ToolRacer · بازیابی ابزار در سامانه‌های عامل‌محور'] },
      { en: ['Biomedical Informatics', 'Medical citation benchmark · microscopy benchmark'], fa: ['انفورماتیک زیست‌پزشکی', 'محک ارجاع‌دهی پزشکی · محک تصاویر میکروسکوپی'] },
      { en: ['Human–Computer Interaction', 'PrivacyPeek · federated moderation · AI in education'], fa: ['تعامل انسان و کامپیوتر', 'PrivacyPeek · نظارت فدرال · هوش مصنوعی در آموزش'] },
      { en: ['AI in Healthcare', 'Self-attachment therapy chatbots · multi-agent therapy'], fa: ['هوش مصنوعی در سلامت', 'چت‌بات‌های درمان خوددلبستگی · درمان چندعاملی'] }
    ]
  },

  publications: {
    en: { eyebrow: 'Publications', title: 'Papers, posters and <em>work in progress</em>' },
    fa: { eyebrow: 'انتشارات', title: 'مقاله‌ها، پوسترها و <em>پژوهش‌های در جریان</em>' },
    items: [
      {
        title: 'Learning from Disagreement: Maximum Divergence Knowledge Distillation',
        authors: 'A. Jafari, P. Fashi, M. Rezagholizadeh, H. Golmankhaneh, S. Salehi, V. Appia, E. Barsoum, A. Ghodsi',
        short: 'NeurIPS', year: 2026, status: 'published',
        kind: { en: 'Conference', fa: 'کنفرانس' },
        venue: { en: 'Conference on Neural Information Processing Systems (NeurIPS 2026)', fa: 'کنفرانس سامانه‌های پردازش اطلاعات عصبی (NeurIPS 2026)' }
      },
      {
        title: 'The Compute Floor of Data Mixing: When Loss-Based Reweighters Start to Drain Easy Synthetic Text',
        authors: 'S. Salehi, I. Mohammadi',
        short: 'COLM', year: 2026, status: 'published', first: true,
        kind: { en: 'Workshop', fa: 'کارگاه' },
        venue: { en: 'COLM 2026 Workshop on Methods and Opportunities at Small Scale (MOSS)', fa: 'کارگاه «روش‌ها و فرصت‌ها در مقیاس کوچک» (MOSS)، کنفرانس COLM 2026' }
      },
      {
        title: 'Structure Matters: Evaluating Multi-Agents Orchestration in Generative Therapeutic Chatbots',
        authors: 'S. Elahimanesh, M. Mohammadkhani, S. Zahedi Movahed, M. Abootorabi, S. Salehi, A. Edalat',
        short: 'CUI', year: 2026, status: 'published',
        kind: { en: 'Conference', fa: 'کنفرانس' },
        venue: { en: 'ACM Conference on Conversational User Interfaces (CUI 2026)', fa: 'کنفرانس ACM رابط‌های کاربری گفت‌وگومحور (CUI 2026)' }
      },
      {
        title: 'PrivacyPeek: Showing Users What Their AI Chats Send Out, and When It Crosses a Line',
        authors: 'I. Mohammadi, S. Salehi',
        short: 'USIT', year: 2026, status: 'published',
        kind: { en: 'Poster', fa: 'پوستر' },
        venue: { en: 'USIT 2026 Poster Session', fa: 'بخش پوستر USIT 2026' }
      },
      {
        title: 'Folk Theories of Federated Moderation: How Users Make Sense of Cross-Instance Action',
        authors: 'I. Mohammadi, S. Salehi',
        short: 'CSCW', year: 2026, status: 'published',
        kind: { en: 'Poster', fa: 'پوستر' },
        venue: { en: 'CSCW 2026 Poster Session', fa: 'بخش پوستر CSCW 2026' }
      },
      {
        title: 'Understanding Students’ Rationales for Cheating with AI: An Instructor Perspective',
        authors: 'I. Mohammadi, S. Rismanchian, S. Salehi',
        short: 'ICLS', year: 2026, status: 'published',
        kind: { en: 'Poster', fa: 'پوستر' },
        venue: { en: 'International Conference of the Learning Sciences (ICLS 2026), Poster Session', fa: 'بخش پوستر کنفرانس بین‌المللی علوم یادگیری (ICLS 2026)' }
      },
      {
        title: 'From Words and Exercises to Wellness: Farsi Chatbot for Self-Attachment',
        authors: 'S. Elahimanesh, S. Salehi, S. Zahedi Movahed, L. Alazraki, R. Hu, A. Edalat',
        short: 'EAI', status: 'review',
        kind: { en: 'Journal', fa: 'نشریه' },
        venue: { en: 'Submitted to EAI Endorsed Transactions on Pervasive Health and Technology', fa: 'ارسال‌شده به نشریه EAI Endorsed Transactions on Pervasive Health and Technology' }
      },
      {
        title: 'ToolRacer: Retrieval-Aware Co-Training and Error Recovery for Small Language Model Tool Calling',
        authors: 'S. Salehi, M. Bagherifard, E. Mohajeri',
        status: 'progress', first: true
      },
      {
        title: 'Can Medical VLMs Reason from Degraded Evidence? A Paired Microscopy Robustness Benchmark',
        authors: 'S. Salehi, I. Mohammadi',
        status: 'progress', first: true
      },
      {
        title: 'Vision-Language Models in Radiology: Improving Trust with Fact-Based Report Generation',
        authors: 'S. Salehi, A. Salesi, S. Daneshgar, S. Beyrami',
        status: 'progress', first: true
      }
    ]
  },

  research: {
    en: { eyebrow: 'Research experience', title: 'Six projects, <em>four institutions</em>.' },
    fa: { eyebrow: 'سوابق پژوهشی', title: 'شش پروژه، <em>چهار مؤسسه</em>.' },
    axis: ['2023-01', '2027-01'],
    items: [
      {
        start: '2025-07', end: '2026-05', remote: true,
        en: {
          title: 'Maximum Divergence Knowledge Distillation', inst: 'University of Waterloo', sup: 'Prof. A. Ghodsi',
          points: [
            'Proposed <b>MDKD</b>, a rejection-sampling distillation method that targets regions where student LLMs underestimate the teacher.',
            'Achieved state-of-the-art performance on <b>GSM8K</b>, summarization and code generation.'
          ]
        },
        fa: {
          title: 'تقطیر دانش با بیشینه واگرایی', inst: 'دانشگاه واترلو', sup: 'پروفسور قدسی',
          points: [
            'ارائه روش <b>MDKD</b>؛ روشی برای تقطیر مبتنی بر نمونه‌برداری رد که نواحی‌ای را هدف می‌گیرد که در آن‌ها مدل زبانی دانش‌آموز احتمال مدل معلم را کم‌برآورد می‌کند.',
            'دستیابی به عملکرد پیشرو در <b>GSM8K</b>، خلاصه‌سازی و تولید کد.'
          ]
        }
      },
      {
        start: '2023-04', end: '2026-02', remote: true,
        en: {
          title: 'Mental Wellness Chatbot', inst: 'Imperial College London', sup: 'Prof. A. Edalat',
          points: [
            'Developed a <b>chatbot</b> that recommends exercise regimens based on <b>self-attachment theory (SAT)</b> protocols.',
            'Trained a transformer-based <b>emotion classifier</b> over 12 classes, reaching a 92% F1 score.',
            'Applied <b>PPO reinforcement learning</b> to fine-tune GPT-2 for better dialogue generation.',
            'Built <b>RAG-based LLM systems</b> and fine-tuned <b>Llama-3</b> on mental-health datasets.'
          ]
        },
        fa: {
          title: 'چت‌بات سلامت روان', inst: 'امپریال کالج لندن', sup: 'پروفسور عدالت',
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
          title: 'Synthetic Data in Data Selection Methods', inst: 'Rensselaer Polytechnic Institute', sup: 'Prof. Amiri',
          points: [
            'Implemented an <b>adversarial approach</b> to data selection for pre-training foundation models.',
            'Analyzed how data-mixing methods such as <b>DoReMi</b> weight synthetic data.'
          ]
        },
        fa: {
          title: 'داده‌های مصنوعی در روش‌های انتخاب داده', inst: 'مؤسسه پلی‌تکنیک رنسلر', sup: 'پروفسور امیری',
          points: [
            'پیاده‌سازی یک <b>رویکرد تخاصمی</b> برای انتخاب داده در پیش‌آموزش مدل‌های پایه.',
            'تحلیل توزیع وزن‌دهی داده‌های مصنوعی در روش‌های ترکیب داده مانند <b>DoReMi</b>.'
          ]
        }
      },
      {
        start: '2024-05', end: '2024-12',
        en: {
          title: 'News Importance Classification with LLMs', inst: 'Sharif University of Technology', sup: 'Prof. Jafari',
          points: [
            'Used <b>symbol tuning</b> to evaluate how sensitive LLMs are to prompt variations.',
            'Compared the <b>reasoning abilities</b> of open-source LLMs on a new human-labeled Persian news dataset.',
            'Designed a <b>query-dependent prompting system</b> that keeps LLMs effective across diverse scenarios.'
          ]
        },
        fa: {
          title: 'دسته‌بندی اهمیت اخبار با مدل‌های زبانی بزرگ', inst: 'دانشگاه صنعتی شریف', sup: 'دکتر جعفری',
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
          title: 'LLM Citation Benchmark', inst: 'Sharif University of Technology', sup: 'Prof. Asgari',
          points: [
            'Built a comprehensive framework to evaluate the <b>medical citation quality</b> of LLMs.',
            'Used <b>fact validation</b> with a weighted scoring system for accuracy and relevance.',
            'Collected medical-context datasets of texts paired with their <b>quantized facts</b>.'
          ]
        },
        fa: {
          title: 'محک ارجاع‌دهی مدل‌های زبانی بزرگ', inst: 'دانشگاه صنعتی شریف', sup: 'دکتر عسگری',
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
          title: 'Survey on Diffusion Models', inst: 'Sharif University of Technology', sup: 'Prof. Rohban and Prof. Soleymani',
          points: ['Examined the <b>compositional challenges</b> that arise during generation in <b>diffusion models</b>.']
        },
        fa: {
          title: 'مرور مدل‌های انتشار', inst: 'دانشگاه صنعتی شریف', sup: 'دکتر رهبان و دکتر سلیمانی',
          points: ['بررسی <b>چالش‌های ترکیب‌پذیری</b> در فرایند تولید <b>مدل‌های انتشار</b>.']
        }
      }
    ]
  },

  education: {
    en: { eyebrow: 'Education', title: 'Academic <em>record</em>' },
    fa: { eyebrow: 'تحصیلات', title: '<em>کارنامه</em> تحصیلی' },
    degrees: [
      {
        level: { en: 'M.Sc.', fa: 'کارشناسی ارشد' },
        field: { en: 'Artificial Intelligence', fa: 'هوش مصنوعی' },
        school: { en: 'Sharif University of Technology, Tehran', fa: 'دانشگاه صنعتی شریف، تهران' },
        start: '2025-09', end: null, gpa: 18.56
      },
      {
        level: { en: 'B.Sc.', fa: 'کارشناسی' },
        field: { en: 'Computer Engineering', fa: 'مهندسی کامپیوتر' },
        school: { en: 'Sharif University of Technology, Tehran', fa: 'دانشگاه صنعتی شریف، تهران' },
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
    en: { eyebrow: 'Honors & awards', title: 'Distinctions in <em>national competitions</em>' },
    fa: { eyebrow: 'افتخارات', title: 'رتبه‌ها در <em>رقابت‌های ملی</em>' },
    items: [
      { rank: 1, pool: 2100, unit: { en: 'teams', fa: 'تیم' }, top: 0.05, date: '2025-10', en: 'NLP Tech Olympics 2025', fa: 'المپیک فناوری پردازش زبان طبیعی ۲۰۲۵' },
      { rank: 16, pool: 22000, unit: { en: 'candidates', fa: 'داوطلب' }, top: 0.07, date: '2025-02', en: 'National M.Sc. Entrance Exam', fa: 'آزمون سراسری کارشناسی ارشد' },
      { rank: 25, pool: 155000, unit: { en: 'candidates', fa: 'داوطلب' }, top: 0.02, date: '2020-10', en: 'National University Entrance Exam', fa: 'آزمون سراسری ورود به دانشگاه (کنکور)' },
      { rank: 10, pool: 1200, unit: { en: 'candidates', fa: 'داوطلب' }, top: 0.8, date: '2024-08', en: 'National Student Olympiad', fa: 'المپیاد دانشجویی کشور' },
      { rank: 120, topN: true, pool: 11000, unit: { en: 'candidates', fa: 'داوطلب' }, top: 1.1, date: '2014-09', en: 'NODET Entrance Exam', fa: 'آزمون ورودی سمپاد' }
    ]
  },

  teaching: {
    en: { eyebrow: 'Teaching', title: 'Twenty-five offerings, <em>nine semesters</em>.', lede: 'Teaching assistant at Sharif University of Technology, from first-year programming to graduate deep learning.' },
    fa: { eyebrow: 'تدریس', title: 'بیست‌وپنج ارائه، <em>نُه نیم‌سال</em>.', lede: 'دستیار آموزشی در دانشگاه صنعتی شریف؛ از برنامه‌سازی سال اول تا یادگیری عمیق در مقطع تحصیلات تکمیلی.' },
    terms: [
      ['F21', 'fall', 2021], ['S22', 'spring', 2022], ['F22', 'fall', 2022], ['S23', 'spring', 2023], ['U23', 'summer', 2023],
      ['F23', 'fall', 2023], ['S24', 'spring', 2024], ['gap'], ['S26', 'spring', 2026], ['F26', 'fall', 2026]
    ],
    seasons: { en: { fall: 'Fall', spring: 'Spring', summer: 'Summer' }, fa: { fall: 'پاییز', spring: 'بهار', summer: 'تابستان' } },
    courses: [
      { id: 'ap', terms: ['F21'], en: ['Advanced Programming', 'Adv. Programming'], fa: ['برنامه‌سازی پیشرفته', 'برنامه‌سازی پیشرفته'], by: { en: 'Dr. V. Salmani', fa: 'دکتر سلمانی' } },
      { id: 'la', terms: ['S22', 'F22', 'S23'], en: ['Linear Algebra', 'Linear Algebra'], fa: ['جبر خطی', 'جبر خطی'], by: { en: 'Dr. S. Hosseinghorban', fa: 'دکتر حسین‌قربان' } },
      { id: 'nm', terms: ['F22', 'S23', 'F23'], en: ['Numerical Methods', 'Numerical Methods'], fa: ['محاسبات عددی', 'محاسبات عددی'], by: { en: 'Dr. S. Hosseinghorban', fa: 'دکتر حسین‌قربان' } },
      { id: 'ps1', terms: ['F22'], en: ['Probability and Statistics', 'Probability & Stats'], fa: ['آمار و احتمال', 'آمار و احتمال'], by: { en: 'Dr. M. Motahari', fa: 'دکتر مطهری' } },
      { id: 'dsa', terms: ['S23'], en: ['Data Structures and Algorithms', 'Data Structures'], fa: ['ساختمان داده و الگوریتم', 'ساختمان داده'], by: { en: 'Dr. M. Ghorbani', fa: 'دکتر قربانی' } },
      { id: 'mob', terms: ['S23'], head: true, en: ['Mobile Programming', 'Mobile Programming'], fa: ['برنامه‌نویسی موبایل', 'برنامه‌نویسی موبایل'], by: { en: 'Dr. S. Nari', fa: 'دکتر ناری' } },
      { id: 'ds', terms: ['U23'], en: ['Discrete Structures', 'Discrete Structures'], fa: ['ساختمان‌های گسسته', 'ساختمان گسسته'], by: { en: 'Dr. M. Abam', fa: 'دکتر آبام' } },
      { id: 'ml1', terms: ['F23', 'S24'], en: ['Machine Learning', 'Machine Learning'], fa: ['یادگیری ماشین', 'یادگیری ماشین'], by: { en: 'Dr. A. Motahari', fa: 'دکتر مطهری' } },
      { id: 'db', terms: ['F23'], en: ['Database Design', 'Database Design'], fa: ['طراحی پایگاه داده', 'پایگاه داده'], by: { en: 'Dr. M. Akhi', fa: 'دکتر آخی' } },
      { id: 'cmp', terms: ['F23', 'S24'], head: true, en: ['Compiler Design', 'Compiler Design'], fa: ['طراحی کامپایلر', 'طراحی کامپایلر'], by: { en: 'Dr. S. Hosseinmardi', fa: 'دکتر حسین‌مردی' } },
      { id: 'ml2', terms: ['S24'], en: ['Machine Learning', 'Machine Learning'], fa: ['یادگیری ماشین', 'یادگیری ماشین'], by: { en: 'Dr. F. Salehi', fa: 'دکتر صالحی' } },
      { id: 'mai', terms: ['S24'], en: ['Mathematics for Artificial Intelligence', 'Math for AI'], fa: ['ریاضیات هوش مصنوعی', 'ریاضیات هوش مصنوعی'], by: { en: 'Dr. A. Najafi', fa: 'دکتر نجفی' } },
      { id: 'gt', terms: ['S24'], en: ['Game Theory', 'Game Theory'], fa: ['نظریه بازی‌ها', 'نظریه بازی‌ها'], by: { en: 'Dr. M. Seddighin', fa: 'دکتر صدیقین' } },
      { id: 'alg', terms: ['S24'], en: ['Design of Algorithms', 'Algorithms'], fa: ['طراحی الگوریتم', 'طراحی الگوریتم'], by: { en: 'Dr. M. Abam', fa: 'دکتر آبام' } },
      { id: 'ps2', terms: ['S24'], en: ['Probability and Statistics', 'Probability & Stats'], fa: ['آمار و احتمال', 'آمار و احتمال'], by: { en: 'Dr. M. Jafari', fa: 'دکتر جعفری' } },
      { id: 'mir', terms: ['S26'], en: ['Modern Information Retrieval', 'Info. Retrieval'], fa: ['بازیابی پیشرفته اطلاعات', 'بازیابی اطلاعات'], by: { en: 'Dr. M. Soleymani', fa: 'دکتر سلیمانی' } },
      { id: 'dl', terms: ['F26'], grad: true, en: ['Deep Learning (M.Sc.)', 'Deep Learning'], fa: ['یادگیری عمیق (ارشد)', 'یادگیری عمیق'], by: { en: 'Dr. M. Soleymani', fa: 'دکتر سلیمانی' } },
      { id: 'acv', terms: ['F26'], grad: true, en: ['Advanced Computer Vision (M.Sc.)', 'Adv. Computer Vision'], fa: ['بینایی کامپیوتر پیشرفته (ارشد)', 'بینایی پیشرفته'], by: { en: 'Dr. S. Kasaei', fa: 'دکتر کسائی' } },
      { id: 'nlp', terms: ['F26'], grad: true, en: ['Natural Language Processing (M.Sc.)', 'NLP'], fa: ['پردازش زبان طبیعی (ارشد)', 'پردازش زبان طبیعی'], by: { en: 'Dr. M. Samiei', fa: 'دکتر سمیعی' } }
    ]
  },

  experience: {
    en: { eyebrow: 'Industry experience', title: 'From research to <em>production</em>' },
    fa: { eyebrow: 'تجربه صنعتی', title: 'از پژوهش تا <em>محصول</em>' },
    items: [
      {
        start: '2025-06', end: null, org: { en: 'AVIA', fa: 'AVIA' }, role: { en: 'Senior ML Engineer', fa: 'مهندس ارشد یادگیری ماشین' },
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
        stack: ['LiveKit', 'VoIP', 'Django', 'TypeScript', 'React', 'LLM serving']
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
        stack: ['GRPO', 'Gemma 3', 'Qwen 3', 'Tool retrieval', 'Helm', 'ArgoCD', 'Django']
      },
      {
        start: '2025-02', end: '2025-09', org: { en: 'Mohaymen ICT Group', fa: 'گروه فاوای مهیمن' }, role: { en: 'AI Engineer', fa: 'مهندس هوش مصنوعی' },
        en: [
          'Maintained production AI services with <b>Docker Compose</b> and implemented three-phase chat-response caching with <b>Redis</b>.',
          'Boosted RAG-system performance through <b>asynchronous programming</b> and <b>multi-process logic</b>.',
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
        stack: ['RAG', 'Redis', 'FastAPI', 'vLLM', 'NeMo', 'ParsBERT', 'Phoenix', 'Locust']
      },
      {
        start: '2024-07', end: '2024-11', org: { en: 'Mohaymen ICT Group', fa: 'گروه فاوای مهیمن' }, role: { en: 'Machine Learning Engineer', fa: 'مهندس یادگیری ماشین' },
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
        stack: ['BERT', 'LangChain', 'LangGraph', 'NeMo', 'Speech']
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
        stack: ['C#', 'SQL', 'ETL']
      }
    ]
  },

  projects: {
    en: { eyebrow: 'Projects', title: 'Selected <em>projects</em>' },
    fa: { eyebrow: 'پروژه‌ها', title: '<em>پروژه‌های</em> منتخب' },
    items: [
      {
        repo: 'BachelorProject', start: '2024-05', end: null, wide: true, tags: ['Aya-23', 'LoRA', 'K-shot'],
        en: ['AYA Prompt-Based Classification', 'Bachelor project', 'An automated classification system built on K-shot learning and TF-IDF similarity, with a fine-tuned Aya-23 model using quantization and LoRA.'],
        fa: ['دسته‌بندی مبتنی بر پرامپت با AYA', 'پروژه کارشناسی', 'سامانه خودکار دسته‌بندی بر پایه یادگیری K-shot و شباهت TF-IDF، همراه با تنظیم دقیق مدل Aya-23 با کوانتیزه‌سازی و LoRA.']
      },
      {
        repo: 'RAGBasedChatbot', start: '2024-07', end: '2024-09', wide: true, tags: ['RAG', 'LangChain', 'FAISS'],
        en: ['RAG-Based Chatbot', 'Star Division', 'A chatbot framework with context-based question answering, spelling correction and profanity filtering, built on LangChain, the OpenAI API and a FAISS vector store.'],
        fa: ['چت‌بات مبتنی بر RAG', 'Star Division', 'چارچوب چت‌بات با پاسخ‌گویی مبتنی بر بافت، غلط‌یابی و فیلتر الفاظ نامناسب، ساخته‌شده با LangChain، رابط OpenAI و پایگاه برداری FAISS.']
      },
      {
        repo: 'MedicalQuestionAnsweringSystem', start: '2024-05', end: '2024-06', tags: ['T5', 'PubMed'],
        en: ['Medical Question Answering', 'Natural Language Processing', 'T5-based models fine-tuned on PubMed to generate precise medical answers.'],
        fa: ['پرسش و پاسخ پزشکی', 'پردازش زبان طبیعی', 'تنظیم دقیق مدل‌های مبتنی بر T5 روی داده PubMed برای تولید پاسخ‌های دقیق پزشکی.']
      },
      {
        repo: 'FilmGenreDetection', start: '2024-04', end: '2024-05', tags: ['NER', 'Transformers'],
        en: ['Film Genre Detection', 'Natural Language Processing', 'Genre classification with classical ML and transformers, plus named-entity recognition on Persian and English synopses.'],
        fa: ['تشخیص ژانر فیلم', 'پردازش زبان طبیعی', 'دسته‌بندی ژانر با یادگیری ماشین کلاسیک و ترنسفورمرها و تشخیص موجودیت‌های نام‌دار در خلاصه‌های فارسی و انگلیسی.']
      },
      {
        repo: 'CVFeatureMatching', start: '2024-01', end: '2024-02', tags: ['3D vision'],
        en: ['Feature Matching', '3D Computer Vision', 'Feature detection and matching across images with classical and deep-learning approaches.'],
        fa: ['تطبیق ویژگی', 'بینایی سه‌بعدی کامپیوتر', 'تشخیص و تطبیق ویژگی میان تصاویر با رویکردهای کلاسیک و یادگیری عمیق.']
      },
      {
        repo: 'SATTeacher', start: '2023-06', end: '2023-09', tags: ['BERT', 'QA'],
        en: ['SAT Teacher', 'Imperial College London', 'A question-answering tool using BERT embeddings to help users understand self-attachment techniques.'],
        fa: ['SAT Teacher', 'امپریال کالج لندن', 'ابزار پرسش و پاسخ با بازنمایی‌های BERT برای درک بهتر تکنیک‌های خوددلبستگی.']
      },
      {
        repo: 'ImageCaptioning', start: '2023-02', end: '2023-02', tags: ['LSTM', 'CNN'],
        en: ['Image Captioning', 'Machine Learning', 'An LSTM encoder–decoder that generates descriptive captions for images.'],
        fa: ['توصیف تصویر', 'یادگیری ماشین', 'معماری رمزگذار-رمزگشای LSTM برای تولید خودکار توصیف تصاویر.']
      },
      {
        repo: 'CMinusCompiler', start: '2022-09', end: '2023-01', wide: true, tags: ['Compilers', 'Python'],
        en: ['C-Minus Compiler', 'Compiler Design', 'A complete compiler for C-Minus, a simplified C: lexical analyzer, parser, semantic analyzer and code generator, written in Python.'],
        fa: ['کامپایلر C-Minus', 'طراحی کامپایلر', 'کامپایلر کامل برای زبان C-Minus (نسخه ساده‌شده C) شامل تحلیلگر لغوی، تجزیه‌گر، تحلیلگر معنایی و مولد کد به زبان پایتون.']
      }
    ]
  },

  beyond: {
    en: { eyebrow: 'Beyond research', title: 'Beyond the <em>lab</em>' },
    fa: { eyebrow: 'فراتر از پژوهش', title: 'فراتر از <em>آزمایشگاه</em>' },
    service: [
      {
        en: { title: 'Karsoogh Mehregan 23 · 24 · 25 · 26', org: 'NODET Alumni Community', role: 'Head of Education & Tournament',
          points: ['Led the scientific and tournament teams of the event.', 'Hosted cryptography and AI workshops for middle-school students.', 'Designed online games that teach machine learning, reinforcement learning and cryptography.'] },
        fa: { title: 'کارسوق مهرگان ۲۳ · ۲۴ · ۲۵ · ۲۶', org: 'جامعه دانش‌آموختگان سمپاد', role: 'مسئول آموزش و تورنمنت',
          points: ['رهبری تیم‌های علمی و تورنمنت رویداد.', 'برگزاری کارگاه رمزنگاری و هوش مصنوعی برای دانش‌آموزان متوسطه اول.', 'طراحی بازی‌های برخط برای آموزش یادگیری ماشین، یادگیری تقویتی و رمزنگاری.'] }
      },
      {
        date: '2022-04',
        en: { title: 'WebMasters', org: 'Sharif University of Technology', role: 'Mentor',
          points: ['Taught a free community course on front-end development: HTML, CSS and JavaScript.'] },
        fa: { title: 'وب‌مسترز', org: 'دانشگاه صنعتی شریف', role: 'منتور',
          points: ['برگزاری دوره رایگان آموزش برنامه‌نویسی فرانت‌اند شامل HTML، CSS و JavaScript.'] }
      }
    ],
    toolkit: [
      ['ml', ['PyTorch', 'TensorFlow', 'scikit-learn', 'Transformers', 'vLLM', 'FAISS', 'Rasa']],
      ['data', ['NumPy', 'Pandas', 'Matplotlib', 'Streamlit']],
      ['languages', ['Python', 'Java', 'C#', 'Swift', 'TypeScript', 'JavaScript']],
      ['backend', ['FastAPI', 'Django', 'REST', 'PostgreSQL', 'MongoDB', 'Redis']],
      ['web', ['React', 'HTML', 'CSS']],
      ['devops', ['Docker', 'Docker Compose', 'Kubernetes', 'ArgoCD', 'Kibana']],
      ['observability', ['Locust', 'Phoenix']],
      ['research', ['LaTeX', 'Markdown', 'Zotero', 'Citavi']]
    ],
    languages: [
      { level: 4, en: ['English', 'Professional proficiency'], fa: ['انگلیسی', 'مهارت حرفه‌ای'],
        ielts: { overall: 7.5, parts: [['reading', 8.5], ['listening', 8.0], ['speaking', 7.0], ['writing', 7.0]] } },
      { level: 5, en: ['Persian', 'Native'], fa: ['فارسی', 'زبان مادری'] },
      { level: 3, en: ['Arabic', 'Intermediate'], fa: ['عربی', 'متوسط'] },
      { level: 2, en: ['French', 'Elementary'], fa: ['فرانسوی', 'مقدماتی'] }
    ],
    ieltsParts: { en: { reading: 'Reading', listening: 'Listening', speaking: 'Speaking', writing: 'Writing' }, fa: { reading: 'خواندن', listening: 'شنیدن', speaking: 'صحبت', writing: 'نوشتن' } }
  },

  contact: {
    en: { eyebrow: 'Contact', title: 'Let’s talk <em>research</em>.', body: 'I am currently seeking PhD positions in machine learning and welcome conversations about research collaborations.' },
    fa: { eyebrow: 'تماس', title: 'بیایید درباره <em>پژوهش</em> گفت‌وگو کنیم.', body: 'در حال حاضر در جست‌وجوی موقعیت دکتری در حوزه یادگیری ماشین هستم و از گفت‌وگو درباره همکاری‌های پژوهشی استقبال می‌کنم.' }
  }
};
