// Every word a visitor reads, in both languages. Add a key to both or neither.
// The legal pages' body text is the one exception: it lives in src/legal/<lang>/*.md.
const es = {
  title: 'Ghostaff — tu equipo ya está trabajando',
  description:
    'Un equipo de agentes de IA para tu empresa: llevan el registro, hacen el trabajo de rutina y solo te traen las decisiones que son tuyas.',
  otherLang: 'English',
  skip: 'Saltar al contenido',
  nav: { label: 'Principal', product: 'Producto', security: 'Seguridad', faq: 'Preguntas', founders: 'Equipo' },
  cta: 'Pedir acceso',
  ctaSubject: 'Quiero probar Ghostaff',
  film: {
    hero: 'Tu equipo ya está trabajando',
    heroLine: 'Mientras duermes, alguien cuadra las cuentas.',
    finanzas: 'Finanzas cuadra el mes, con un documento detrás de cada euro.',
    redes: 'Redes escribe lo de mañana, aprendiendo qué funciona.',
    secretaria: 'Secretaría lee el correo para que no se escape nada.',
    decision: 'Y todo acaba en una sola pregunta. Para ti.',
  },
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
    canvas: 'Los seis fantasmas del equipo, flotando en fila.',
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
    kicker: 'Seguridad y datos',
    title: 'En Europa, separados y tuyos',
    body: 'Le confías a Ghostaff el día a día de tu empresa. Así lo cuidamos.',
    points: [
      ['En la UE, y solo tuyos', 'Todo se guarda en servidores de la Unión Europea, en un espacio de tu empresa que nunca se mezcla con el de otra.'],
      ['Nada sale sin ti', 'Un correo, un pago, una publicación: nada sale de Ghostaff sin que alguien de tu equipo lo apruebe.'],
      ['Las llaves, aparte', 'Los accesos a tus cuentas van cifrados en una caja fuerte separada de tus datos, también en la UE.'],
      ['Siempre exportable', 'Una copia viva en tu Drive o GitHub, y la exportación completa cuando quieras. Si te vas, te lo llevas todo.'],
    ],
  },
  faq: {
    title: 'Preguntas',
    items: [
      ['¿Actúan sin mi permiso?', 'No. Proponen; tú decides. Solo cuando una clase de decisión ha salido bien muchas veces seguidas, puedes dejar que la tomen solos, y puedes quitárselo cuando quieras.'],
      ['¿Qué hacen exactamente?', 'Llevan el registro de tu empresa, cuadran las cuentas, leen el correo, preparan publicaciones y respuestas. Lo que necesita una decisión te llega como una pregunta, con su contexto y lo que ellos harían.'],
      ['¿Qué necesito para empezar?', 'Los enlaces a lo que ya usas: correo, documentos, banco, redes. Incorporación monta el registro a partir de ahí.'],
      ['¿Dónde están mis datos?', 'En la Unión Europea, en un espacio solo de tu empresa. Los accesos a tus cuentas van cifrados en una caja fuerte aparte. Puedes activar una copia viva en tu Drive o GitHub y exportarlo todo cuando quieras.'],
      ['¿Qué IA usan?', 'Modelos de los grandes proveedores de IA. Por defecto la ponemos nosotros; si lo prefieres, conectas tu propia cuenta y trabajan con ella, con la factura a tu nombre.'],
      ['¿Para quién es?', 'Para empresas y organizaciones pequeñas que hacen de todo con poca gente.'],
      ['¿Cuánto cuesta?', 'Ghostaff está en beta y lo estamos abriendo poco a poco. Escríbenos y te contamos cómo funciona y cuánto cuesta.'],
    ],
  },
  founders: {
    kicker: 'Quién está detrás',
    title: 'Los fundadores',
    // [name, role, one line (empty until they send it), their ghost]
    people: [
      ['Álvaro Francisco Gil', 'Cofundador', '', 'secretaria'],
      ['Jaime Rubio', 'Cofundador', '', 'finanzas'],
    ],
  },
  final: { title: 'Pon a tu equipo a trabajar', body: 'Estamos abriendo Ghostaff poco a poco. Escríbenos y te contamos.' },
  footer: {
    ai: 'Las escenas de esta página están hechas con IA.',
    rights: 'Ghostaff',
    contact: 'Contacto',
    privacy: 'Privacidad',
    terms: 'Términos',
  },
  notFound: { title: 'Aquí no hay nadie', body: 'Ni siquiera un fantasma. Esta página no existe.', back: 'Volver al inicio' },
  legal: {
    draft: 'Borrador sin publicar: solo se ve en local hasta que los fundadores decidan quién es el responsable del tratamiento.',
    updated: 'Última actualización',
  },
};

type Strings = typeof es;

const en: Strings = {
  title: 'Ghostaff — your team is already at work',
  description:
    'A team of AI agents for your company: they keep the record, run the routine work and bring you only the decisions that are yours.',
  otherLang: 'Español',
  skip: 'Skip to content',
  nav: { label: 'Main', product: 'Product', security: 'Security', faq: 'Questions', founders: 'Team' },
  cta: 'Request access',
  ctaSubject: 'I would like to try Ghostaff',
  film: {
    hero: 'Your team is already at work',
    heroLine: 'While you sleep, someone is balancing the books.',
    finanzas: 'Finance closes the month, with a document behind every euro.',
    redes: 'Social writes tomorrow’s post, learning what works.',
    secretaria: 'The Secretary reads the mail so nothing slips through.',
    decision: 'And it all ends in one question. For you.',
  },
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
    canvas: 'The team’s six ghosts, floating in a row.',
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
    kicker: 'Security and data',
    title: 'In Europe, separate and yours',
    body: 'You trust Ghostaff with your company’s day-to-day. This is how we look after it.',
    points: [
      ['In the EU, and only yours', 'Everything is stored on servers in the European Union, in your company’s own space, never mixed with another’s.'],
      ['Nothing leaves without you', 'An email, a payment, a post: nothing leaves Ghostaff until someone on your team approves it.'],
      ['The keys, kept apart', 'Access to your accounts is encrypted in a vault apart from your data, also in the EU.'],
      ['Always exportable', 'A live copy in your Drive or GitHub, and a full export whenever you want. If you leave, you take everything with you.'],
    ],
  },
  faq: {
    title: 'Questions',
    items: [
      ['Do they act without my permission?', 'No. They propose; you decide. Only once a kind of decision has gone right many times in a row can you let them take it alone, and you can take that back at any time.'],
      ['What exactly do they do?', 'They keep your company’s record, balance the books, read the mail, draft posts and replies. Whatever needs a decision reaches you as one question, with its context and what they would do.'],
      ['What do I need to start?', 'Links to what you already use: mail, documents, bank, social. Onboarding builds the record from there.'],
      ['Where is my data?', 'In the European Union, in a space that is only your company’s. Access to your accounts is encrypted in a separate vault. You can switch on a live copy in your Drive or GitHub and export everything whenever you want.'],
      ['Which AI do they use?', 'Models from the major AI providers. By default we provide it; if you prefer, you connect your own account and they work on it, billed to you.'],
      ['Who is it for?', 'Small companies and organisations that do everything with few people.'],
      ['How much does it cost?', 'Ghostaff is in beta and we are opening it little by little. Write to us and we will tell you how it works and what it costs.'],
    ],
  },
  founders: {
    kicker: 'Who is behind it',
    title: 'The founders',
    people: [
      ['Álvaro Francisco Gil', 'Co-founder', '', 'secretaria'],
      ['Jaime Rubio', 'Co-founder', '', 'finanzas'],
    ],
  },
  final: { title: 'Put your team to work', body: 'We are opening Ghostaff little by little. Write to us and we will tell you more.' },
  footer: {
    ai: 'The scenes on this page are made with AI.',
    rights: 'Ghostaff',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
  },
  notFound: { title: 'Nobody here', body: 'Not even a ghost. This page does not exist.', back: 'Back to the home page' },
  legal: {
    draft: 'Unpublished draft: only visible locally until the founders decide who the data controller is.',
    updated: 'Last updated',
  },
};

export const strings = { es, en };
export type Lang = keyof typeof strings;
export const t = (lang: Lang) => strings[lang];

/** The address «Pedir acceso» and the footer write to. */
export const CONTACT = 'hola@ghostaff.ai';
