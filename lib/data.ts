
export type LocaleKey = "en" | "id";

export const LOCALES: Record<LocaleKey, any> = {
  en: {
    meta: {
      lang: "en",
      name: "Juan Antonio Nainggolan",
      title: "Software Engineer (Backend)",
      location: "Depok, Indonesia (UTC+7)",
      email: "juanantonionainggolan@yahoo.com",
      socials: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/juan-antonio-7674a3180/" }],
      summary: "Software engineer with 5+ years of experience, mainly in banking. Backend-focused (Java/Spring), with full‑stack exposure (JavaScript/React). I build clean APIs, automate delivery, and care about reliability."
    },
    ui: {
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      email: "Email",
      send: "Send",
      emptyProjects: "No public projects yet—ask me for code samples."
    }
  },
  id: {
    meta: {
      lang: "id",
      name: "Juan Antonio Nainggolan",
      title: "Software Engineer (Backend)",
      location: "Depok, Indonesia (UTC+7)",
      email: "juanantonionainggolan@yahoo.com",
      socials: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/juan-antonio-7674a3180/" }],
      summary: "Software engineer dengan pengalaman 5+ tahun, terutama di perbankan. Fokus backend (Java/Spring) dengan pengalaman full‑stack (JavaScript/React). Suka API yang rapi, otomasi rilis, dan keandalan."
    },
    ui: {
      projects: "Proyek",
      experience: "Pengalaman",
      skills: "Keahlian",
      contact: "Kontak",
      email: "Email",
      send: "Kirim",
      emptyProjects: "Belum ada proyek publik—boleh minta contoh kode."
    }
  }
};

export const DATA = {
  skills: [
    "Java", "Spring Boot", "JavaScript", "TypeScript", "React", "Node.js", "Express.js",
    "PHP", "Laravel", "Go", "Beego", "MySQL", "PostgreSQL", "MongoDB",
    "Git", "GitLab CI/CD", "Redis", "Kafka", "RabbitMQ", "XXL-JOB", "Jira", "Confluence",
    "AWS", "Google Cloud", "Jenkins"
  ],
  experience: [
    {
      company: "PT Bank Neo Commerce Tbk",
      role: "Back-end Developer",
      date: "Jul 2023 – Present",
      bullets: [
        "Yearly tax report feature for mobile app",
        "Tiering functionality for time deposit product",
        "Travel insurance feature",
        "Maintain/refactor Gold, Mutual Funds, Time Deposit modules",
        "Yearly e-statement release",
        "Recurring payment for mutual funds",
        "PPOB payment for employees (Corporate Banking)",
        "Whitelist feature in Corporate Back Office",
        "Payroll improvements in Corporate Banking"
      ],
      tech: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL"]
    },
    {
      company: "PT Bank BTPN Tbk — Jenius",
      role: "Full Stack Engineer",
      date: "Mar 2021 – Jun 2023",
      bullets: [
        "Pay Later feature",
        "Recurring payment for mutual funds subscription",
        "Insurance feature",
        "Mutual funds module (build & release)",
        "Priority upgrade feature"
      ],
      tech: ["React", "Node.js", "Express", "TypeScript", "PostgreSQL"]
    },
    {
      company: "PT BTPN Tbk",
      role: "Full Stack Engineer Trainee",
      date: "Mar 2020 – Mar 2021",
      bullets: [
        "Improve company call-tree in internal app",
        "Graduated from Corporate Hacknology Intensive Program (JS full‑stack bootcamp)"
      ],
      tech: ["JavaScript", "Node.js", "React"]
    },
    {
      company: "PT Global Urban Esensial (GoApotik)",
      role: "Officer Web Developer",
      date: "Aug 2019 – Feb 2020",
      bullets: ["Maintain & enhance back‑office website for GoApotik mobile app"],
      tech: ["PHP", "Laravel", "MySQL"]
    },
    {
      company: "Telkom Indonesia",
      role: "Junior Back-end Developer",
      date: "Jan 2019 – Jul 2019",
      bullets: ["Built the Partnership Division website"],
      tech: ["PHP", "Laravel"]
    }
  ],
  education: {
    school: "Telkom University",
    date: "2015 – 2019",
    degree: "B. Informatics Engineering (GPA 3.68/4.00)"
  },
  projects: []
};
