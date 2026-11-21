// Every word a visitor reads, in both languages. Add a key to both or neither.
const es = {
  title: 'Ghostaff — tu equipo ya está trabajando',
  description:
    'Un equipo de agentes de IA para tu empresa: llevan el registro, hacen el trabajo de rutina y solo te traen las decisiones que son tuyas.',
  otherLang: 'English',
  nav: { product: 'Producto', security: 'Seguridad', founders: 'Equipo' },
  cta: 'Pedir acceso',
  film: {
    hero: 'Tu equipo ya está trabajando',
    heroLine: 'Mientras duermes, alguien cuadra las cuentas.',
    finanzas: 'Finanzas cuadra el mes, con un documento detrás de cada euro.',
    redes: 'Redes escribe lo de mañana, aprendiendo qué funciona.',
    secretaria: 'Secretaría lee el correo para que no se escape nada.',
    decision: 'Y todo acaba en una sola pregunta. Para ti.',
  },
  posterNote: 'Aquí va la película',
  decision: {
    kicker: 'Solo lo que es tuyo',
    title: 'Ellos trabajan. Tú decides.',
    body: 'Cada decisión llega con la fuente, lo que pasa con el sí y con el no, y lo que el agente haría. Un toque y sigues con tu día.',
    agent: 'Finanzas',
    question: '¿Pago la factura de luz de octubre?',
    amount: '214,30 €',
    reason: 'Coincide con el contrato y con el consumo de septiembre. Vence el viernes.',
    yes: 'Pagar',
    no: 'No',
    ask: 'Preguntar',
  },
  team: {
    kicker: 'Tu equipo',
    title: 'Seis fantasmas, tres departamentos',
    body: 'Dirección, Finanzas y Marketing desde el primer día. Cada uno aprende tus reglas y se gana su autonomía decisión a decisión.',
    jobs: {
      secretaria: ['Secretaría', 'Lee el correo y te trae solo lo que necesita de ti.'],
      incorporacion: ['Incorporación', 'Monta el registro de tu empresa con lo que ya tenéis.'],
      finanzas: ['Finanzas', 'El libro al día, con un documento detrás de cada euro.'],
      redes: ['Redes', 'Hace crecer vuestras redes, aprendiendo qué funciona.'],
      productor: ['Productor', 'Convierte material en bruto en piezas listas para publicar.'],
      base: ['Y el que necesites', 'Un agente nuevo para el trabajo que falte.'],
    },
  },
  security: {
    kicker: 'Tus datos',
    title: 'En Europa, separados y tuyos',
    points: [
      ['En la UE', 'Todo se guarda en Europa, en almacenamiento nuestro, nunca mezclado con el de otra empresa.'],
      ['Nada sale sin ti', 'Un correo, un pago, una publicación: nada sale de Ghostaff sin que alguien lo apruebe.'],
      ['Siempre exportable', 'Una copia viva en tu Drive o GitHub, y la exportación completa cuando quieras.'],
    ],
  },
  faq: {
    title: 'Preguntas',
    items: [
      ['¿Actúan sin mi permiso?', 'No. Proponen; tú decides. Solo cuando una clase de decisión ha salido bien muchas veces seguidas, puedes dejar que la tomen solos.'],
      ['¿Qué necesito para empezar?', 'Los enlaces a lo que ya usas: correo, documentos, banco, redes. Incorporación monta el registro a partir de ahí.'],
      ['¿Para quién es?', 'Para empresas y organizaciones pequeñas que hacen de todo con poca gente.'],
    ],
  },
  founders: {
    kicker: 'Quién está detrás',
    title: 'Los fundadores',
    people: [
      ['Álvaro Francisco Gil', 'Cofundador', 'Una línea sobre Álvaro.', 'secretaria'],
      ['Jaime', 'Cofundador', 'Una línea sobre Jaime.', 'finanzas'],
    ],
  },
  final: { title: 'Pon a tu equipo a trabajar', body: 'Estamos abriendo Ghostaff poco a poco.' },
  footer: { ai: 'Las escenas de esta página están hechas con IA.', rights: 'Ghostaff' },
};

type Strings = typeof es;

const en: Strings = {
  title: 'Ghostaff — your team is already at work',
  description:
    'A team of AI agents for your company: they keep the record, run the routine work and bring you only the decisions that are yours.',
  otherLang: 'Español',
  nav: { product: 'Product', security: 'Security', founders: 'Team' },
  cta: 'Request access',
  film: {
    hero: 'Your team is already at work',
    heroLine: 'While you sleep, someone is balancing the books.',
    finanzas: 'Finance closes the month, with a document behind every euro.',
    redes: 'Social writes tomorrow’s post, learning what works.',
    secretaria: 'The Secretary reads the mail so nothing slips through.',
    decision: 'And it all ends in one question. For you.',
  },
  posterNote: 'The film goes here',
  decision: {
    kicker: 'Only what is yours',
    title: 'They work. You decide.',
    body: 'Every decision comes with its source, what happens on yes and on no, and what the agent would do. One tap and you get on with your day.',
    agent: 'Finance',
    question: 'Shall I pay October’s electricity bill?',
    amount: '€214.30',
    reason: 'It matches the contract and September’s usage. Due Friday.',
    yes: 'Pay',
    no: 'No',
    ask: 'Ask',
  },
  team: {
    kicker: 'Your team',
    title: 'Six ghosts, three departments',
    body: 'Management, Finance and Marketing from day one. Each learns your rules and earns its autonomy one decision at a time.',
    jobs: {
      secretaria: ['Secretary', 'Reads the mail and brings you only what needs you.'],
      incorporacion: ['Onboarding', 'Builds your company’s record from what you already have.'],
      finanzas: ['Finance', 'The books up to date, with a document behind every euro.'],
      redes: ['Social', 'Grows your social accounts, learning what works.'],
      productor: ['Producer', 'Turns raw material into pieces ready to publish.'],
      base: ['And whoever you need', 'A new agent for whatever work is missing.'],
    },
  },
  security: {
    kicker: 'Your data',
    title: 'In Europe, separate and yours',
    points: [
      ['In the EU', 'Everything is stored in Europe, on storage we own, never mixed with another company’s.'],
      ['Nothing leaves without you', 'An email, a payment, a post: nothing leaves Ghostaff until someone approves it.'],
      ['Always exportable', 'A live copy in your Drive or GitHub, and a full export whenever you want.'],
    ],
  },
  faq: {
    title: 'Questions',
    items: [
      ['Do they act without my permission?', 'No. They propose; you decide. Only once a kind of decision has gone right many times in a row can you let them take it alone.'],
      ['What do I need to start?', 'Links to what you already use: mail, documents, bank, social. Onboarding builds the record from there.'],
      ['Who is it for?', 'Small companies and organisations that do everything with few people.'],
    ],
  },
  founders: {
    kicker: 'Who is behind it',
    title: 'The founders',
    people: [
      ['Álvaro Francisco Gil', 'Co-founder', 'A line about Álvaro.', 'secretaria'],
      ['Jaime', 'Co-founder', 'A line about Jaime.', 'finanzas'],
    ],
  },
  final: { title: 'Put your team to work', body: 'We are opening Ghostaff little by little.' },
  footer: { ai: 'The scenes on this page are made with AI.', rights: 'Ghostaff' },
};

export const strings = { es, en };
export type Lang = keyof typeof strings;
export const t = (lang: Lang) => strings[lang];
