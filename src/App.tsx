type Feature = {
  title: string;
  body: string;
  color: string;
};

type Step = {
  number: string;
  title: string;
  body: string;
};

type SimpleCard = {
  title: string;
  body: string;
};

type Testimonial = {
  quote: string;
  author: string;
};

type Faq = {
  question: string;
  answer: string;
};

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who It's For", href: "#audience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" }
];

const features: Feature[] = [
  {
    title: "Nutrition That Fits Your Life",
    body: "Personalized nutrition guidance around age, health conditions, dietary preferences, and routine.",
    color: "teal"
  },
  {
    title: "Never Miss a Dose Again",
    body: "Gentle reminders keep medications on schedule and flag missed doses before they slip through.",
    color: "blue"
  },
  {
    title: "Caregiver Support",
    body: "Caregivers can track nutrition logs, adherence, and health updates without hovering.",
    color: "amber"
  },
  {
    title: "Your Care Team, One Tap Away",
    body: "Connect quickly with healthcare providers when you need answers and reassurance.",
    color: "rose"
  },
  {
    title: "Find What You Need, Fast",
    body: "Nearby pharmacies and health-friendly shops appear when prescriptions or groceries run low.",
    color: "deep"
  },
  {
    title: "Know How You're Really Doing",
    body: "Plain-language feedback turns habits, hydration, and nutrition data into practical insight.",
    color: "blue"
  }
];

const steps: Step[] = [
  {
    number: "1",
    title: "Tell Us About Yourself",
    body: "Share goals, dietary needs, medications, and conditions in a guided profile."
  },
  {
    number: "2",
    title: "Get Your Plan",
    body: "Receive a nutrition plan, medication schedule, and adaptive health dashboard."
  },
  {
    number: "3",
    title: "Stay Supported Every Day",
    body: "Check in with reminders, health feedback, caregiver visibility, and doctor connections."
  }
];

const audiences: SimpleCard[] = [
  {
    title: "Seniors & Older Adults",
    body: "Calm, clear tools that respect your time and work the way you think."
  },
  {
    title: "Adults Managing Health Conditions",
    body: "Daily guidance for diabetes, hypertension, heart health, and nutrition routines."
  },
  {
    title: "Caregivers & Family Members",
    body: "Stay informed and involved without burning out or calling all day."
  }
];

const testimonials: Testimonial[] = [
  {
    quote:
      "My mother is 78 and lives alone. Wellora lets me see that she's eating well and taking medications without calling four times a day.",
    author: "Sandra M., Caregiver"
  },
  {
    quote:
      "I was diagnosed with Type 2 diabetes and had no idea where to start. The plan actually makes sense, and reminders keep me on track.",
    author: "James T., Adult User"
  },
  {
    quote:
      "At my age, I don't want complicated. Wellora is simple, friendly, and genuinely helps me eat better.",
    author: "Eleanor R., Senior User"
  }
];

const trustItems: SimpleCard[] = [
  {
    title: "Healthcare-informed",
    body: "Guidance shaped by dietitians, pharmacists, and primary care workflows."
  },
  {
    title: "Private by design",
    body: "Health data is treated with clear consent, security, and respect."
  },
  {
    title: "Accessibility-first",
    body: "Large text, strong contrast, and simple navigation for real users."
  },
  {
    title: "Human support",
    body: "Real people help when the app alone is not enough."
  }
];

const faqs: Faq[] = [
  {
    question: "Is Wellora a fitness app?",
    answer:
      "No. Wellora focuses on nutrition and health management, not workouts or exercise tracking."
  },
  {
    question: "Can I manage someone else's health?",
    answer:
      "Yes. Caregivers can connect to a loved one's profile with appropriate consent and stay updated."
  },
  {
    question: "Do I need to be tech-savvy?",
    answer: "No. The experience is designed to be simple and clear for users of all ages."
  },
  {
    question: "Is my health data secure?",
    answer: "Yes. Privacy and consent are core parts of the product experience."
  }
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Wellora home">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <path className="logo-mark-bg" d="M24 4c10.493 0 19 8.507 19 19v2c0 10.493-8.507 19-19 19S5 35.493 5 25v-2C5 12.507 13.507 4 24 4Z" />
          <path className="logo-leaf" d="M31.971 12.662c-7.364.478-13.08 4.35-14.546 10.81-1.271 5.603 2.778 10.519 8.291 9.196 6.537-1.568 9.523-8.276 9.012-16.494a3.62 3.62 0 0 0-2.757-3.512Z" />
          <path className="logo-flow" d="M13.25 25.7c2.853 5.873 6.302 8.81 10.347 8.81 4.04 0 7.093-3.235 9.153-9.704" />
          <path className="logo-cross" d="M24 17.25v8.5M19.75 21.5h8.5" />
        </svg>
      </span>
      <span className="logo-word">Wellora</span>
    </a>
  );
}

function Button({
  children,
  variant = "primary",
  href = "#demo"
}: {
  children: string;
  variant?: "primary" | "secondary";
  href?: string;
}) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
    </a>
  );
}

function Pill({ children, compact = false }: { children: string; compact?: boolean }) {
  return (
    <span className={`pill${compact ? " pill-compact" : ""}`}>
      <span className="status-dot" aria-hidden="true" />
      <span>{children}</span>
    </span>
  );
}

function SectionHeader({
  label,
  title,
  align = "left"
}: {
  label: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-header section-header-${align}`}>
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
    </div>
  );
}

function FeatureCard({ title, body, color }: Feature) {
  return (
    <article className="feature-card">
      <span className={`icon-surface icon-${color}`} aria-hidden="true">
        <span />
      </span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function StepCard({ number, title, body }: Step) {
  return (
    <article className="step-card">
      <strong>{number}</strong>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function DashboardPreview() {
  const metrics = [
    { value: "92%", label: "Medication adherence", color: "teal" },
    { value: "8/10", label: "Hydration goal", color: "blue" },
    { value: "3", label: "Care updates", color: "amber" }
  ];

  const rows = [
    { title: "Breakfast", body: "Low-sodium oats, berries, walnuts", color: "teal" },
    { title: "Metformin", body: "Taken at 8:00 AM", color: "blue" },
    { title: "Caregiver note", body: "Sandra checked in 12 minutes ago", color: "amber" }
  ];

  return (
    <div className="dashboard-card" aria-label="Today care plan preview">
      <h2>Today's Care Plan</h2>
      <p>Nutrition, medication, and family updates in one calm view.</p>
      <div className="metric-grid">
        {metrics.map((metric) => (
          <div className={`metric metric-${metric.color}`} key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
      <div className="dashboard-list">
        {rows.map((row) => (
          <div className="dashboard-row" key={row.title}>
            <span className={`row-dot row-${row.color}`} aria-hidden="true" />
            <div>
              <strong>{row.title}</strong>
              <span>{row.body}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header" id="top">
      <nav className="nav-shell" aria-label="Main navigation">
        <Logo />
        <div className="nav-links">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <Button>Request a Demo</Button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-band mint-band">
      <div className="hero-copy">
        <Pill>Designed for seniors, adults, and caregivers</Pill>
        <h1>Eat Well. Stay Well. Feel Supported, Every Day.</h1>
        <p className="hero-lede">
          Wellora is the all-in-one health companion for personalized nutrition plans,
          medicine reminders, caregiver visibility, and calm everyday health support.
        </p>
        <div className="hero-actions">
          <Button>Request a Free Demo</Button>
          <Button variant="secondary" href="#how-it-works">
            See How It Works
          </Button>
        </div>
        <p className="microcopy">
          No pressure. No commitment. Just a guided look at what Wellora can do for you.
        </p>
        <div className="trust-pills" aria-label="Trust badges">
          <Pill compact>Trusted by caregivers</Pill>
          <Pill compact>Designed for seniors</Pill>
          <Pill compact>Built with health professionals</Pill>
        </div>
      </div>
      <DashboardPreview />
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="problem section-band white-band">
      <div className="narrow-block">
        <SectionHeader
          label="Why Wellora Exists"
          title="Managing Your Health Shouldn't Feel Like a Full-Time Job"
        />
        <p>
          Between juggling medications, trying to eat right, finding the nearest pharmacy,
          and wondering if what you're doing is actually working, everyday health management
          can feel overwhelming. Wellora was built to lift that weight with clear routines,
          plain-language feedback, and support that respects real life.
        </p>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="features section-band mint-band" id="features">
      <SectionHeader
        label="What Wellora Does"
        title="Everything You Need to Stay Healthy, In One Place"
        align="center"
      />
      <div className="card-grid features-grid">
        {features.map((feature) => (
          <FeatureCard {...feature} key={feature.title} />
        ))}
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="steps section-band white-band" id="how-it-works">
      <SectionHeader label="Simple From Day One" title="Up and Running in Three Steps" align="center" />
      <div className="card-grid three-grid">
        {steps.map((step) => (
          <StepCard {...step} key={step.number} />
        ))}
      </div>
      <Button>See It in Action, Request a Demo</Button>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="audience section-band mint-band" id="audience">
      <SectionHeader
        label="Built for Real People"
        title="Whether You're Managing Your Own Health or Someone Else's"
        align="center"
      />
      <div className="card-grid three-grid">
        {audiences.map((item) => (
          <FeatureCard {...item} color="teal" key={item.title} />
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials section-band white-band" id="testimonials">
      <SectionHeader label="What People Are Saying" title="Real People. Real Results." align="center" />
      <div className="card-grid three-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.author}>
            <p>{testimonial.quote}</p>
            <strong>{testimonial.author}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="trust section-band mint-band">
      <SectionHeader label="Why You Can Trust Wellora" title="Built With Care. Backed by Expertise." />
      <div className="trust-grid">
        {trustItems.map((item) => (
          <article className="trust-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className="demo-section" id="demo">
      <h2>Ready to See Wellora in Action?</h2>
      <p>
        Book a free, no-obligation demo. We'll walk you through the platform, answer
        every question, and show how Wellora can work for you, your family, or the
        people in your care.
      </p>
      <Button variant="secondary">Request Your Free Demo</Button>
      <span>Takes less than 2 minutes to book - No credit card required - No commitment</span>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="faq section-band mint-band" id="faqs">
      <SectionHeader label="Common Questions" title="Got Questions? We've Got Answers." align="center" />
      <div className="faq-list">
        {faqs.map((faq) => (
          <article className="faq-item" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Logo />
          <p>Nutrition. Wellness. Support. All in One Place.</p>
        </div>
        <Button variant="secondary">Request a Demo</Button>
      </div>
      <p className="footer-links">
        Features - How It Works - Who It's For - Request a Demo - Privacy Policy - Terms of Use - Contact Us
      </p>
      <p className="copyright">&copy; 2026 Wellora. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <StepsSection />
      <AudienceSection />
      <TestimonialsSection />
      <TrustSection />
      <DemoSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
