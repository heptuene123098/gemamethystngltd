import { v4 as uuidv4 } from "uuid";
import stats from "../assets/icons/bar-chart.png";
import horn from "../assets/icons/bullhorn.png";
import vector from "../assets/icons/vector.png";
import ux from "../assets/icons/web-design.png";
import branding from "../assets/icons/branding.png"
import web from "../assets/icons/web-programming.png";
import cer from "../assets/icons/certificate.png";
import data from "../assets/icons/Data-Analysis.png";
import Engineer from "../assets/icons/Engineer.png";
import online from "../assets/icons/online-conference.png";

//Combined Team data
import teamMember1 from "../assets/images/team1.png";
import teamMember2 from "../assets/images/Co-founder.jpg";
import teamMember3 from "../assets/images/secretary.png";
import teamMember4 from "../assets/images/Tosin.png";
import teamMember5 from "../assets/images/adeola.jpg";
import teamMember7 from "../assets/images/ugo.png";
import teamMember8 from "../assets/images/jessica.png";
import teamMember9 from "../assets/images/ibrahim.png";
import teamMember10 from "../assets/images/samuel.png";
import teamMember11 from "../assets/images/faith.png";
import teamMember12 from "../assets/images/jamiu.png";
import teamMember13 from "../assets/images/emmanuel.png";
import teamMember14 from "../assets/images/Oluwadara.png";
/*import teamMember6 from "../assets/images/prisilla.png";*/

// pdf importsd
import pdf1 from "../assets/pdf/PRINCIPLES OF DISEASE CONTROL AND USES OF EPIDEMIOLOGY.pdf";

// portfolio imports:
import bg1 from "../assets/images/faceless.png";
import bg2 from "../assets/images/design.jpg";
import bg3 from "../assets/images/xwork-3.jpg.pagespeed.ic.KnEiS52Z3l.jpg";
import bg4 from "../assets/images/xwork-4.jpg.pagespeed.ic.LMea4nnNOz.jpg";
import bg5 from "../assets/images/xwork-7.jpg.pagespeed.ic.SotmrmTuoS.jpg";
import bg6 from "../assets/images/xwork-8.jpg.pagespeed.ic.kEJc9g0qrQ.jpg";

// testimonial imports:
import Avatar1 from "../assets/images/aina.png";
import Avatar2 from "../assets/images/sam.png";
import Avatar3 from "../assets/images/abraham.png";
import Avatar4 from "../assets/images/yusrah.png";

// blog section imports
import img1 from "../assets/images/ximage_1.jpg.pagespeed.ic.2BInOJMs0v.jpg";
import img2 from "../assets/images/ximage_2.jpg.pagespeed.ic.fDt7QyzCfC.jpg";
import img3 from "../assets/images/ximage_3.jpg.pagespeed.ic.CzImA-z_Ch.jpg";
import img4 from "../assets/images/xwork-9.jpg.pagespeed.ic.BYds7aMzrK.jpg";
// import img5 from "../assets/images/xwork-8.jpg.pagespeed.ic.kEJc9g0qrQ.jpg";
// import img6 from "../assets/images/xwork-7.jpg.pagespeed.ic.SotmrmTuoS.jpg";
// import img7 from "../assets/images/ximage_4.jpg.pagespeed.ic.9VUxuBaVRa.jpg";

//content data from the faqs section
export const faqs = [
  {
    question: "What is Gemamethyst Nigeria Limited?",
    answer: [
      "Gemamethyst Nigeria Limited is a multi-industry innovation and consulting company based in Lagos, Nigeria. The company specializes in digital transformation, AI solutions, engineering consulting,  and capacity development through its in-house academy. They work with startups, SMEs, and enterprises to deliver sustainable and tech-driven growth.",
    ],
  },
  {
    question: "Where is GemamethystNgltd located?",
    answer: [
      "We are headquartered in Lekki, Lagos State, Nigeria. While we serve clients locally, many of our services, including training and consulting, are also available remotely across Nigeria and globally.",
    ],
  },
  {
    question: "How can I contact your team for inquiries or support?",
    answer: [
      "You can reach us through the contact form on our website, by email at amethystngltd@gmail.com, or via social media (@_.GemamethystNgLtd._ on all platforms). We typically respond within 24 hours on business days.",
    ],
  },
  {
    question: "Who are the key people behind the company?",
    answer: [
      "GemamethystNgLtd is led by a passionate team of professionals including Hephzibah Otuene (CEO) and Omotola Daniel Ayomide. The team includes experienced digital strategists, engineers, trainers, and startup advisors.",
    ],
  },
  {
    question: "What industries do you primarily work with?",
    answer: [
      "Technology & Startups",
      "Architecture, Engineering & Construction (AEC)",
      "Oil & Gas",
      "Education & Training",
      "Small and Medium Enterprises(SMEs)",
    ],
  },
];

export const AllTheFaqs = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What is Gemamethyst Nigeria Limited?",
        answer: [
          "Gemamethyst Nigeria Limited is a multi-industry innovation and consulting company based in Lagos, Nigeria. The company specializes in digital transformation, AI solutions, engineering consulting, and capacity development through its in-house academy. They work with startups, SMEs, and enterprises to deliver sustainable and tech-driven growth.",
        ],
      },
      {
        question: "Where is GemamethystNgltd located?",
        answer: [
          "We are headquartered in Lekki, Lagos State, Nigeria. While we serve clients locally, many of our services, including training and consulting, are also available remotely across Nigeria and globally.",
        ],
      },
      {
        question: "How can I contact your team for inquiries or support?",
        answer: [
          "You can reach us through the contact form on our website, by email at amethystngltd@gmail.com, or via social media (@_.GemamethystNgLtd._ on all platforms). We typically respond within 24 hours on business days.",
        ],
      },
      {
        question: "Who are the key people behind the company?",
        answer: [
          "GemamethystNgLtd is led by a passionate team of professionals including Hephzibah Otuene (CEO) and Omotola Daniel Ayomide. The team includes experienced digital strategists, engineers, trainers, and startup advisors.",
        ],
      },
      {
        question: "What industries do you primarily work with?",
        answer: [
          "Technology & Startups",
          "Architecture, Engineering & Construction (AEC)",
          "Oil & Gas",
          "Education & Training",
          "Small and Medium Enterprises (SMEs)",
        ],
      },
    ],
  },
  {
    title: "AI & Digital Innovation",
    faqs: [
      {
        question: "What AI-based solutions do you offer for business?",
        answer: [
          "We aim to develop and integrate AI tools tailored to improve productivity, automate tasks, support decision-making, and enhance customer engagement for small businesses and startups.",
        ],
      },
      {
        question: "Do you build custom software or digital tools for clients?",
        answer: [
          "Yes, we offer custom software and smart tools designed to meet specific business needs, including workflow automation, analytics dashboards, and chatbot systems.",
        ],
      },
      {
        question: "Can you help small businesses with digital transformation?",
        answer: [
          "Absolutely. We guide SMEs through digitization—helping them implement the right technologies, digital strategies, and online tools for growth.",
        ],
      },
    ],
  },
  {
    title: "Social Media & Marketing",
    faqs: [
      {
        question: "What kind of social media management services do you offer?",
        answer: [
          "We provide full-cycle services including strategy development, content creation, community management, analytics reporting, and ad management across major platforms.",
        ],
      },
      {
        question: "Do you offer content creation or only strategy consulting?",
        answer: [
          "We do both. Our team creates branded content (graphics, videos, captions) and offers consulting to improve your brand voice, engagement, and conversions.",
        ],
      },
      {
        question:
          "Can I enroll in your social media training or internship programs?",
        answer: [
          "Yes. Our Social Media Internship Program and masterclasses are open to students, young professionals, and business owners looking to build digital skills. Check our Academy page for open registrations.",
        ],
      },
    ],
  },
  {
    title: "Engineering, AEC & Oil & Gas",
    faqs: [
      {
        question: "Do you provide engineering consulting services?",
        answer: [
          "Yes. We provide design, project management, and technology integration services for construction, infrastructure, and energy-related projects.",
        ],
      },
      {
        question:
          "Can you support tech implementation in the construction sector?",
        answer: [
          "Yes, we help AEC firms adopt tools such as BIM, project management software, and data visualization systems to improve efficiency and accountability.",
        ],
      },
    ],
  },
  {
    title: "Data Analytics & Business Intelligence",
    faqs: [
      {
        question:
          "Can you help my company interpret performance metrics or reports?",
        answer: [
          "Yes, our analysts can walk your team through key metrics, help identify trends, and make practical recommendations based on your performance data.",
        ],
      },
      {
        question: "What business intelligence services do you provide?",
        answer: [
          "We help companies collect, analyze, and visualize data to drive smarter business decisions. This includes dashboard development, KPI tracking, and data-driven strategy consulting.",
        ],
      },
      {
        question: "Do you offer data analysis tools or just consulting?",
        answer: [
          " We provide both: hands-on consulting and the development of dashboards or automated reporting systems tailored to your business operations.",
        ],
      },
    ],
  },
  {
    title: "Training & Academy",
    faqs: [
      {
        question: "What is GemAcademy?",
        answer: [
          "Gemamethyst Academy is our learning platform where we offer short courses, workshops, and internships in areas such as Engineering skill set, career sets.",
        ],
      },
      {
        question: "What courses or training programs are available?",
        answer: ["Prota structure, Python, SQL, AutoCAD"],
      },
      {
        question: "How do I apply for training or internship opportunities?",
        answer: [
          "Visit our website or follow our Instagram for current enrollment links. Applications typically require a form submission and a brief introduction or task.",
        ],
      },
      {
        question: "What courses or training programs are available?",
        answer: ["Prota structure, Python, SQL, AutoCAD"],
      },
      {
        question: "Are your training programs remote, on-site or hybrid?",
        answer: [
          "Most of our programs are remote, but we occasionally offer on-site workshops and hybrid learning experiences depending on the course.",
        ],
      },
    ],
  },
  {
    title: "Startups & Mentorship",
    faqs: [
      {
        question: "Do you support early-stage startups?",
        answer: [
          "Yes, we provide strategic guidance, branding, digital tools, and mentorship to help new startups grow sustainably and attract funding.",
        ],
      },
      {
        question:
          "Can I get mentorship or business coaching through your platform?",
        answer: [
          "Yes. Our mentorship programs pair you with professionals in your industry to guide your business development and leadership growth.",
        ],
      },
      {
        question: "Are your startup services free or paid?",
        answer: [
          "We offer both. Some mentorship programs are free (especially through partnerships), while others, including in-depth consulting and branding services, are paid.",
        ],
      },
    ],
  },
  {
    title: "Pricing, Payments & Partnerships",
    faqs: [
      {
        question: "How do you charge for your services?",
        answer: [
          " Pricing depends on the service scope and project type. We offer fixed packages, custom quotes, and subscription-based options for ongoing services.",
        ],
      },
      {
        question: "Can I get a custom quote for a specific project?",
        answer: [
          "Yes. Please fill out our project inquiry form or contact us with your needs. We’ll follow up with a tailored proposal.",
        ],
      },
      {
        question: "Are you open for partnerships or joint ventures?",
        answer: [
          "Definitely. We welcome strategic partnerships, collaborations, and affiliate opportunities. Reach out to our team for a discovery call.",
        ],
      },
    ],
  },
];

export const services = [
  {
    text: " Gemamethyst Academy",
    serviceicon: cer,
    path: "/pricing",
    pricingAnchor: "pricing",
  },
  {
    text: " FacelessCon",
    serviceicon: online,
    path: "https://faceless-client.vercel.app/",
    pricingAnchor: "facelesscon",
  },
  {
    text: " Engineering Designs",
    serviceicon: Engineer,
    path: "/pricing",
    pricingAnchor: "pricing",
  },
  {
    text: " Digital Products",
    serviceicon: horn,
    path: "/pricing",
    pricingAnchor: "pricing",
  },

  {
    text: "Digital Marketing",
    serviceicon: stats,
    path: "/pricing",
    pricingAnchor: "pricing",
  },
  {
    text: "Data Analysis",
    serviceicon: data,
    path: "/pricing",
    pricingAnchor: "pricing",
  },
  {
    text: " Graphic Designs",
    serviceicon: vector,
    path: "/pricing",
    pricingAnchor: "pricing",
  },
  {
    text: " Application Development",
    serviceicon: branding,
    path: "/pricing",
    pricingAnchor: "pricing",
  },
  {
    text: " Web Development",
    serviceicon: web,
    path: "/pricing",
    pricingAnchor: "pricing",
  },
  {
    text: " UX/UI Design",
    serviceicon: ux,
    path: "/pricing",
    pricingAnchor: "pricing",
  },
];

export const portfolio = [
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg1,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg2,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg3,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg4,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg5,
  },
  {
    title: "Web Application",
    description: "Interior Design",
    bgImage: bg6,
  },
];

export const testimonials = [
  {
    quote:
      "In all this was incredibly beneficial to my ability to communicate a technical idea, work across disciplines, and contribute in an environment driven by people and time. Nevertheless, I have also learned how to tackle tasks with limited time without panicking.",
    name: "Samuel Ezealor",
    title: "Back-End Developer",
    img: Avatar2,
  },
  {
    quote:
      "This project has also helped me to develop a key skill in the industry and that's teamwork. It also helped me stay focused and work effectively, even within a short timeframe. This will improve my productivity which is something I really need to work on.",
    name: "Abraham Ojabugbe",
    title: "AI/ML",
    img: Avatar3,
  },
  {
    quote:
      "This experience helped me think critically about how to simplify a complex solution into core, functional parts. I particularly appreciated the collaborative and time-sensitive nature of the task. It also gave me insight into how technical and non-technical elements come together in a real-world product development scenario.",
    name: "Yusrah Eruaga Mohammed",
    title: "Front-End Developer",
    img: Avatar4,
  },
  {
    quote:
      "Interning at Gemamethyst Nigeria Limited has given me hands-on experience with managing social media campaigns and analyzing audience engagement. It's been a great opportunity to apply my skills in a real-world setting and learn how digital strategy impacts brand growth.",
    name: "Aina Abdulsalam",
    title: "Social Media Intern",
    img: Avatar1,
  },
];

export const blogspost = [
  {
    img: img1,
    title: "Marketing Strategies for Digital Ecosystem",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
  },
  {
    img: img2,
    title: "Marketing Strategies for Digital Ecosystem",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
  },
  {
    img: img3,
    title: "Marketing Strategies for Digital Ecosystem",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
  },
];

// blog post data export

export const blogspostlong = [
  {
    id: uuidv4(),
    img: img1,
    title: "Marketing Strategies for Digital Ecosystem",
    description:
      "Explore effective marketing techniques in today’s digital-first economy.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "In the fast-evolving world of digital marketing, businesses must adapt to stay ahead. This article explores effective strategies to grow your brand in the Nigerian digital ecosystem.",
        subHeader: "Key Strategies to Adopt:",
        sublists: [
          "Leverage social media platforms like TikTok and Instagram to reach younger demographics.",
          "Use influencer partnerships to increase brand credibility and visibility.",
          "Optimize content for mobile users, who make up a majority of Nigeria's internet traffic.",
        ],
        conclusion:
          "By embracing these strategies, businesses can increase their online visibility, connect better with their audience, and thrive in the digital age.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img2,
    title: "The Rise of E-commerce in West Africa",
    description:
      "Discover how online shopping is reshaping the retail landscape in Nigeria.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "E-commerce is transforming how West Africans shop, with Nigeria leading the charge. This article looks at trends, challenges, and opportunities in the growing online retail market.",
        subHeader: "What’s Driving Growth:",
        sublists: [
          "Increased smartphone penetration and internet access.",
          "The emergence of local e-commerce platforms like Jumia and Konga.",
          "Adoption of fintech solutions for seamless online payments.",
        ],
        conclusion:
          "With supportive policies and continued innovation, Nigeria's e-commerce sector is poised to become a major driver of economic growth.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img3,
    title: "Harnessing Data Analytics for Business Success",
    description:
      "Data is the new oil—see how Nigerian firms are using it to win big.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "Data analytics is no longer optional for Nigerian companies looking to scale. This article uncovers how insights from data are helping businesses make informed decisions.",
        subHeader: "Why It Matters:",
        sublists: [
          "Enables businesses to understand customer behavior more clearly.",
          "Drives targeted marketing efforts and cost savings.",
          "Improves product development and delivery efficiency.",
        ],
        conclusion:
          "With the right tools and talent, businesses in Nigeria can turn data into powerful decision-making assets.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img4,
    title: "Digital Transformation in Nigerian Healthcare",
    description:
      "From electronic records to AI diagnostics, tech is changing health outcomes.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "The integration of digital solutions in healthcare is revolutionizing patient care in Nigeria. This article explores how technology is improving diagnostics, access, and service delivery.",
        subHeader: "Breakthroughs in HealthTech:",
        sublists: [
          "AI-powered diagnostics for faster disease detection.",
          "Telemedicine services bridging the urban-rural health gap.",
          "Digital record keeping for better patient history management.",
        ],
        conclusion:
          "As the Nigerian health sector continues to digitize, patients and professionals alike are experiencing better, faster, and more reliable care.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img3,
    title: "How Fintech Is Driving Financial Inclusion in Nigeria",
    description:
      "Mobile money and digital banks are reshaping Nigeria’s financial system.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "Over the past decade, fintech has emerged as a major force in Nigeria's economy, offering access to banking services for millions previously excluded.",
        subHeader: "Fintech Impact Areas:",
        sublists: [
          "Mobile wallets like OPay and PalmPay providing easy payments.",
          "Lending platforms offering microloans without traditional banks.",
          "Increased financial literacy through digital education initiatives.",
        ],
        conclusion:
          "Fintech is helping to bridge the economic divide, allowing more Nigerians to participate in the formal economy.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img1,
    title: "EdTech Revolution: Learning in the Digital Age",
    description:
      "Explore how online education platforms are empowering Nigerian youth.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "The rise of EdTech is transforming education access and quality in Nigeria. With internet-enabled tools, students from any region can now learn from top educators.",
        subHeader: "Digital Learning Tools:",
        sublists: [
          "E-learning platforms like uLesson and AltSchool Africa.",
          "Interactive tools for STEM learning and coding.",
          "Virtual classrooms enabling remote learning during school closures.",
        ],
        conclusion:
          "Digital education empowers young Nigerians with skills needed to thrive in the global knowledge economy.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img2,
    title: "Greentech: Nigeria’s Path to a Sustainable Future",
    description:
      "Can Nigeria lead Africa’s green energy shift? Let’s explore the trends.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "Climate change and energy shortages are forcing Nigeria to rethink its energy approach. Green technology may be the answer.",
        subHeader: "Sustainable Solutions Emerging:",
        sublists: [
          "Solar panel initiatives in rural communities.",
          "Eco-friendly startups producing biodegradable products.",
          "Government incentives for renewable energy adoption.",
        ],
        conclusion:
          "Greentech not only addresses climate change but also creates jobs and innovation opportunities.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img2,
    title: "The Remote Work Culture in Nigeria",
    description:
      "Remote jobs are becoming the norm—how can Nigerians prepare and thrive?",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "The global shift toward remote work has impacted Nigeria’s job market. More companies are now hiring remotely, even across borders.",
        subHeader: "Keys to Remote Success:",
        sublists: [
          "Build strong digital skills and an online portfolio.",
          "Invest in a stable internet connection and workspace.",
          "Join global freelancing platforms like Upwork and Fiverr.",
        ],
        conclusion:
          "Remote work opens global opportunities for Nigerians, especially in tech, writing, and design.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img4,
    title: "Cybersecurity Awareness in Nigeria",
    description:
      "Staying safe online is more important than ever. Here's what you should know.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "Cybercrime in Nigeria is growing fast. From scams to ransomware attacks, awareness is key for businesses and individuals alike.",
        subHeader: "Steps to Stay Protected:",
        sublists: [
          "Enable two-factor authentication on all accounts.",
          "Use antivirus software and keep systems updated.",
          "Be cautious of phishing emails and suspicious links.",
        ],
        conclusion:
          "With basic security habits, Nigerians can protect their digital identities and financial assets.",
      },
    ],
  },
  {
    id: uuidv4(),
    img: img1,
    title: "The Creator Economy in Africa: A Rising Force",
    description:
      "Meet the new generation of Nigerian creators monetizing content online.",
    pdfUrl: pdf1,
    body: [
      {
        introduction:
          "Thanks to platforms like YouTube, TikTok, and Substack, Nigerian creatives are turning talent into thriving businesses.",
        subHeader: "Opportunities for Creators:",
        sublists: [
          "Monetize content via ads, brand deals, and fan subscriptions.",
          "Use platforms like Paystack and Flutterwave for donations and sales.",
          "Collaborate with international creators to grow your audience.",
        ],
        conclusion:
          "The digital creator economy is offering Nigerians new, scalable paths to income and influence.",
      },
    ],
  },
];

export const portfoliolong = [
  {
    title: "Design fundamentals",
    description: "Last year March.",
    bgImage: bg1,
  },
  {
    title: "Faceless",
    description: "Last year September",
    bgImage: bg2,
  },
];

// contact page data
export const contacData = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Address",
    description: "Lagos, Nigeria",
  },
  {
    icon: "fa-solid fa-phone",
    title: "Phone",
    description: "+234 802 8920 379",
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Email",
    description: "amethystngltd@gmail.com",
  },
  {
    icon: "fa-solid fa-earth-americas",
    title: "Website",
    description: "https://gemamethystngltd.vercel.app/",
  },
];

//Team data
export const teamData = [
    {
      image: teamMember1,
      name: "Hephzibah Reginald Otuene",
      role: "CEO, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "https://linkedin.com/in/hephzibah-otuene",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "https://facebook.com/Itz_hebzlove" },
        { icon: "fa-x-twitter", url: "https://twitter.com/Itz_hebzlove" },
        { icon: "fa-instagram", url: "https://instagram.com/Itz_hebzlove" },
      ],
    },
    {
      image: teamMember2,
      name: "Theophilus Adegoke Olaniran",
      role: "Co-Founder, GemAcademy",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "https://www.linkedin.com/in/theophilus-olaniran-gmnse-8007211ab/",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "https://instagram.com/Itistheoo" },
      ],
    },
    {
      image: teamMember3,
      name: "Daniel Omotola",
      role: "Secretary, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "#",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "https://instagram.com/auserwithnohandle" },
      ],
    },
    {
      image: teamMember4,
      name: "Olamide Ishola Oluwatosin",
      role: "UI/UX Intern, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "#",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
      ],
    },
    {
      image: teamMember5,
      name: "Oladeinde Adeola Williams",
      role: "Fullstack Developer Intern, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "www.linkedin.com/in/oladeinde-adeola",
        },
        { icon: "fa-google", url: "mailto:Adeolaoladeinde6@gmail.com" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
      ],
    },
    /*{
      image: teamMember6,
      name: "Priscilla Ikeri Oluchukwu",
      role: "Front-end Developer Intern, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "#",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
      ],
    },*/
    {
      image: teamMember7,
      name: "Ugochukwu Nebolisa Benedict",
      role: "Front-end Developer Intern, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "#",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
      ],
    },
    {
      image: teamMember8,
      name: "Unagha Jessica Ugochi",
      role: "Cybersecurity Intern, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "#",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
      ],
    },
    {
      image: teamMember9,
      name: "Ibrahim Mahadi Imam",
      role: "Back-end Developer Intern,GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "#",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
      ],
    },
    {
      image: teamMember10,
      name: "Samuel Ezealor Nzube",
      role: "Back-end Developer Intern, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "#",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
      ],
    },
    {
      image: teamMember11,
      name: "Oluwaseyi Lajorin Faith",
      role: "Data Analyst Intern, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "#",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
      ],
    },
    {
      image: teamMember12,
      name: "Jamiu Nasirullahi Ayobami",
      role: "Data Analyst Intern, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "#",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
      ],
    },
    {
      image: teamMember13,
      name: "Emmanuel Ayobami",
      role: "UI/UX Designer, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "#",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
      ],
    },
    {
      image: teamMember14,
      name: "Ayansiji Emmanuel Oluwadara",
      role: "Graphic Design Intern, GemamethystNgLtd",
      socialMedia: [
        {
          icon: "fa-linkedin-in",
          url: "#",
        },
        { icon: "fa-google", url: "#" },
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-x-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
      ],
    },
  ];
export const COURSES = [
  {
    id: 1,
    title: "Digital Transformation Fundamentals",
    duration: "8 Weeks",
    level: "Beginner",
    description: "Learn the core principles of digital transformation and how to implement them in various industries.",
    features: ["Industry case studies", "Hands-on projects", "Expert mentorship"]
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    duration: "12 Weeks",
    level: "Intermediate",
    description: "Comprehensive course covering AI fundamentals, machine learning algorithms, and real-world applications.",
    features: ["Python programming", "TensorFlow/PyTorch", "Project deployment"]
  },
  {
    id: 3,
    title: "Engineering Consulting Mastery",
    duration: "10 Weeks",
    level: "Advanced",
    description: "Advanced techniques in engineering consulting, project management, and client relations.",
    features: ["Case studies", "Client simulation", "Industry tools"]
  }
];

export const BENEFITS = [
  {
    icon: "🎓",
    title: "Industry-Recognized Certification",
    description: "Get certified with credentials recognized by leading tech companies."
  },
  {
    icon: "👨‍🏫",
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of practical experience."
  },
  {
    icon: "💼",
    title: "Career Support",
    description: "Get job placement assistance and career guidance upon completion."
  },
  {
    icon: "🔄",
    title: "Flexible Learning",
    description: "Study at your own pace with both online and in-person options available."
  }
];

//Careerpositions
export const CareerPositions = [
        {
      title: "Backend Developer",
      type: "Full-time",
      location: "Lagos, Nigeria",
      description: "Build scalable backend systems and APIs to power our applications.",
      requirements: ["Node.js", "Python", "MongoDB", "API Design"]
    },
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Lagos, Nigeria",
      description: "We're looking for a skilled Frontend Developer to join our team and help build amazing user experiences.",
      requirements: ["React", "JavaScript", "CSS", "TypeScript"]
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Remote",
      description: "Create beautiful and intuitive designs for our digital products and platforms.",
      requirements: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
  ];

export const partnershipTypes = [
    {
      title: "Technology Partnership",
      icon: "fa-code",
      description: "Collaborate with us on technology projects and innovative solutions."
    },
    {
      title: "Business Partnership",
      icon: "fa-handshake",
      description: "Join forces to create new business opportunities and expand market reach."
    },
    {
      title: "Community Partnership",
      icon: "fa-users",
      description: "Work together on community initiatives and social impact projects."
    }
  ];

export  const GAbenefits = [
    {
      icon: "fa-gem",
      title: "Growth Opportunities",
      description: "Continuous learning and professional development programs"
    },
    {
      icon: "fa-heart",
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: "fa-bolt",
      title: "Flexible Work",
      description: "Remote work options and flexible working hours"
    },
    {
      icon: "fa-trophy",
      title: "Competitive Pay",
      description: "Attractive compensation packages and bonuses"
    }
  ];

