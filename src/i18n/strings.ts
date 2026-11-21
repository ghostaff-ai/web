// Every word a visitor reads, in both languages. Add a key to both or neither.
export const strings = {
  es: {
    title: 'Ghostaff — tu equipo ya está trabajando',
    description: 'Un equipo de agentes de IA para tu empresa: llevan el registro, hacen el trabajo de rutina y solo te traen las decisiones que son tuyas.',
    heroTitle: 'Tu equipo ya está trabajando',
    heroLine: 'Dirección, Finanzas y Marketing, hechos por agentes que solo te traen lo que es tuyo.',
    cta: 'Pedir acceso',
    founders: 'Quién está detrás',
    otherLang: 'English',
  },
  en: {
    title: 'Ghostaff — your team is already at work',
    description: 'A team of AI agents for your company: they keep the record, run the routine work and bring you only the decisions that are yours.',
    heroTitle: 'Your team is already at work',
    heroLine: 'Management, Finance and Marketing, run by agents that bring you only what is yours.',
    cta: 'Request access',
    founders: 'Who is behind it',
    otherLang: 'Español',
  },
} as const;

export type Lang = keyof typeof strings;
export const t = (lang: Lang) => strings[lang];
