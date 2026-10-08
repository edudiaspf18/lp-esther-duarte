export interface Service {
  id: string;
  title: string;
  description: string;
  /** Mensagem base do WhatsApp (UTM é acrescentado em runtime) */
  message: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  context: string;
  text: string;
}

export const BRAND = {
  name: "Esther Duarte",
  firstName: "Esther",
  role: "Nutricionista",
  /** Slogan (H1 e rodapé) */
  slogan: "Transformando hábitos, conquistando resultados!",
} as const;

export const WHATSAPP_GENERIC_MESSAGE =
  "Olá Esther, vim pelo seu site e gostaria de agendar uma consulta online.";

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Acompanhamento" },
  { href: "#avaliacao-fisica", label: "Avaliação física" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export const HERO = {
  eyebrow: "Nutricionista em Anápolis-GO · Atendimento online",
  titleBefore: "Transformando hábitos,",
  titleEmphasis: "conquistando resultados!",
  subtitle:
    "Consultas online, plano alimentar feito para a sua rotina e acompanhamento de perto. Quando fizer sentido, avaliação física presencial para conhecer o seu ponto de partida.",
  primaryCta: "Agendar Consulta Online",
  secondaryCta: "Conhecer os serviços",
  /** Duas formas de atendimento, lado a lado, logo abaixo do CTA */
  modes: [
    {
      id: "online",
      title: "Online",
      description: "Consultas por videochamada, para todo o Brasil.",
    },
    {
      id: "presencial",
      title: "Presencial",
      description: "Avaliação física em Anápolis-GO, com hora marcada.",
    },
  ],
  /** Texto do selo giratório sobre a foto */
  badge: "Online · Todo o Brasil · Presencial · Anápolis · ",
} as const;

export const SERVICES: readonly Service[] = [
  {
    id: "consulta-online",
    title: "Consulta Online",
    description:
      "Atendimento por videochamada, no seu horário e sem deslocamento. Anamnese completa, orientação e plano alimentar entregue no seu celular.",
    message:
      "Olá Esther, vim pelo seu site e gostaria de agendar uma Consulta Online.",
  },
  {
    id: "emagrecimento",
    title: "Emagrecimento",
    description:
      "Perda de peso com estratégia e constância, sem cortar o que você gosta de comer e sem fórmulas prontas.",
    message:
      "Olá Esther, vim pelo seu site e gostaria de agendar uma consulta online com foco em Emagrecimento.",
  },
  {
    id: "reeducacao-alimentar",
    title: "Reeducação Alimentar",
    description:
      "Escolhas mais conscientes no dia a dia para construir uma relação leve e duradoura com a comida.",
    message:
      "Olá Esther, vim pelo seu site e gostaria de agendar uma consulta online com foco em Reeducação Alimentar.",
  },
  {
    id: "hipertrofia",
    title: "Hipertrofia",
    description:
      "Alimentação alinhada ao seu treino para ganho de massa muscular, com ajustes conforme a sua evolução.",
    message:
      "Olá Esther, vim pelo seu site e gostaria de agendar uma consulta online com foco em Hipertrofia.",
  },
  {
    id: "avaliacao-fisica",
    title: "Avaliação Física Presencial",
    description:
      "Medidas e composição corporal feitas pessoalmente, em Anápolis-GO, com horário agendado, para acompanhar a sua evolução com precisão.",
    message:
      "Olá Esther, vim pelo seu site e gostaria de agendar uma Avaliação Física presencial.",
  },
  {
    id: "saude-bem-estar",
    title: "Saúde e Bem-estar",
    description:
      "Mais energia, melhor digestão e correção de deficiências nutricionais por meio de uma alimentação equilibrada.",
    message:
      "Olá Esther, vim pelo seu site e gostaria de agendar uma consulta online com foco em Saúde e Bem-estar.",
  },
];

export type FactIcon = "registro" | "local" | "online" | "presencial" | "agenda" | "whatsapp";

export interface Fact {
  icon: FactIcon;
  text: string;
}

/** Faixa de fatos reais abaixo do hero (nada aqui é estimativa). */
export const FACTS: readonly Fact[] = [
  { icon: "registro", text: "CRN-1 | 27592" },
  { icon: "local", text: "Anápolis-GO" },
  { icon: "online", text: "Consultas online para todo o Brasil" },
  { icon: "presencial", text: "Avaliação física presencial" },
  { icon: "agenda", text: "Segunda a sexta, com horário agendado" },
  { icon: "whatsapp", text: "Agendamento pelo WhatsApp" },
];

export const STATEMENT = {
  eyebrow: "Meu jeito de cuidar",
  before: "Cuidar da alimentação não precisa ser mais uma obrigação na sua agenda.",
  emphasis: "É leveza",
  after: "para ter energia, saúde e uma relação em paz com a comida.",
} as const;

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  details: readonly string[];
  /** Mensagem base do WhatsApp (UTM é acrescentado em runtime) */
  message: string;
}

/** Conteúdo informativo, sem preço, desconto, promoção ou chamada de venda (CFN). */
export const PLANS_SECTION = {
  eyebrow: "Formas de acompanhamento",
  title: "Como o acompanhamento online pode ser feito",
  intro:
    "Todas as consultas são online, por videochamada, e o número de encontros depende do seu objetivo e da sua rotina. Estas são as formas de acompanhamento que a Esther oferece.",
  note: "O formato indicado para cada pessoa é definido pela nutricionista na primeira conversa. Informações sobre as condições de atendimento são passadas pelo WhatsApp.",
  cta: "Tirar dúvidas pelo WhatsApp",
  includedTitle: "Plano alimentar em todas as formas de acompanhamento",
  included:
    "Plano alimentar personalizado, entregue de forma digital: alimentação planejada para a sua fase de vida, com as suas preferências, substituições e ideias de receitas.",
} as const;

export const PLANS: readonly Plan[] = [
  {
    id: "consulta-unica",
    name: "Consulta única",
    tagline: "Avaliação inicial",
    description:
      "Uma consulta online para conhecer o seu histórico, a sua rotina e os seus objetivos, com plano alimentar personalizado.",
    details: ["1 consulta online", "Anamnese e avaliação", "Plano alimentar personalizado"],
    message:
      "Olá Esther, vim pelo seu site e gostaria de tirar dúvidas sobre a Consulta Única.",
  },
  {
    id: "consulta-retorno",
    name: "Consulta e retorno",
    tagline: "Avaliação e reavaliação",
    description:
      "A consulta inicial com plano alimentar personalizado, seguida de um retorno online para ajustar o plano e avaliar a sua evolução.",
    details: [
      "1 consulta e 1 retorno, online",
      "Plano alimentar personalizado",
      "No retorno: ajustes do plano e avaliação da evolução",
    ],
    message:
      "Olá Esther, vim pelo seu site e gostaria de tirar dúvidas sobre Consulta e Retorno.",
  },
  {
    id: "acompanhamento-trimestral",
    name: "Acompanhamento trimestral",
    tagline: "Acompanhamento contínuo",
    description:
      "Encontros online ao longo de três meses, com plano alimentar personalizado e acompanhamento próximo e frequente.",
    details: [
      "Consultas online ao longo de 3 meses",
      "Plano alimentar personalizado",
      "Nos retornos: ajustes do plano e avaliação da evolução",
    ],
    message:
      "Olá Esther, vim pelo seu site e gostaria de tirar dúvidas sobre o Acompanhamento Trimestral.",
  },
];

export const PHYSICAL_ASSESSMENT = {
  eyebrow: "Avaliação física presencial",
  title: "Conheça o seu corpo de perto",
  intro:
    "O acompanhamento é online, mas a avaliação física é feita pessoalmente: medidas e composição corporal para você entender o seu ponto de partida e acompanhar a evolução com precisão.",
  note: "A avaliação física é presencial, em Anápolis-GO, com horário agendado e feita à parte da consulta. Local, valores e condições são informados pelo WhatsApp.",
  steps: [
    {
      title: "Presencial, com hora marcada",
      description:
        "Um encontro pessoal, rápido e sem preparo especial. Você combina o horário pelo WhatsApp e só precisa comparecer.",
    },
    {
      title: "Medidas e composição corporal",
      description:
        "Circunferências e percentual de gordura, registrados para comparar a cada reavaliação.",
    },
    {
      title: "Integrada ao acompanhamento online",
      description:
        "Os resultados entram no seu plano alimentar e orientam os ajustes das próximas consultas online.",
    },
  ],
  message: "Olá Esther, vim pelo seu site e gostaria de agendar uma Avaliação Física presencial.",
} as const;

export interface ProcessStep {
  title: string;
  description: string;
}

export const PROCESS_SECTION = {
  eyebrow: "Como é a consulta online",
  title: "Da primeira conversa ao acompanhamento",
  caption: "Atendimento online · Todo o Brasil",
} as const;

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: "Agendamento pelo WhatsApp",
    description: "Você escolhe o melhor dia e horário e recebe o link da videochamada.",
  },
  {
    title: "Conversa e histórico",
    description:
      "Na consulta online, entendo a sua rotina, os seus hábitos, o seu histórico e o que você quer conquistar. Quando fizer sentido, a Esther pede exames para complementar a avaliação.",
  },
  {
    title: "Plano personalizado",
    description:
      "Em poucos dias, o plano alimentar chega no seu celular: pensado para a sua fase de vida, sem fórmulas prontas.",
  },
  {
    title: "Avaliação física presencial",
    description:
      "Quando faz sentido, um encontro presencial para medidas e composição corporal, integrado ao seu acompanhamento.",
  },
  {
    title: "Acompanhamento",
    description:
      "Retornos online em datas definidas para acompanhar a sua evolução e ajustar o que for preciso.",
  },
];

export const ABOUT = {
  eyebrow: "Um pouco mais de mim",
  title: "Oi, eu sou a Esther.",
  quote: "Na nutrição, uni a paixão pelo esporte ao propósito de cuidar de pessoas.",
  paragraphs: [
    "Nasci e cresci em Anápolis-GO, e desde cedo o futebol fez parte da minha vida: sempre quis trabalhar com algo ligado ao esporte. Foi na Nutrição, pela UniEvangélica, que encontrei o caminho para unir essa paixão a um propósito maior.",
    "Hoje, aos 23 anos, cuido da alimentação de atletas e de pessoas comuns que querem mais saúde e educação alimentar. Também atuo como nutricionista na Porto & Pereira, empresa de refeições corporativas de Anápolis, planejando cardápios e o controle de qualidade da alimentação de trabalhadores de toda a região.",
    "Atendo online, para quem está em qualquer lugar do Brasil, e presencialmente em Anápolis. Em cada consulta, o objetivo é o mesmo: transformar hábitos para conquistar resultados que duram.",
  ],
  facts: [
    { label: "De onde sou", value: "Anápolis-GO" },
    { label: "Formação", value: "Nutrição, UniEvangélica" },
    { label: "O que me move", value: "Esporte, saúde e ver você evoluir" },
  ],
} as const;

/**
 * Seção oculta enquanto vazio. Preencher com depoimentos reais (com autorização) para reativar.
 */
export const TESTIMONIALS_ARE_DEMO = false;

export const TESTIMONIALS: readonly Testimonial[] = [];

/** Registro profissional (consta na logo) */
export const CRN = "CRN-1 | 27592";

export const FAQ: readonly FaqItem[] = [
  {
    question: "Como funciona a consulta online?",
    answer:
      "Por videochamada, no horário combinado pelo WhatsApp. Conversamos sobre a sua rotina, histórico e objetivos, e em poucos dias o plano alimentar personalizado chega no seu celular.",
  },
  {
    question: "Posso ser atendido de outra cidade ou estado?",
    answer:
      "Sim. O acompanhamento é online e atende pessoas de todo o Brasil. Só a avaliação física, que é opcional, precisa ser feita presencialmente.",
  },
  {
    question: "A avaliação física é obrigatória? Onde é feita?",
    answer:
      "Não é obrigatória. Ela é um complemento para quem quer acompanhar a composição corporal de perto. É presencial, em Anápolis-GO, com horário agendado e feita à parte da consulta.",
  },
  {
    question: "Você atende atletas?",
    answer:
      "Sim. Atendo atletas e praticantes de atividade física com plano alimentar alinhado ao treino e à competição, e também pessoas que buscam saúde e educação alimentar no dia a dia.",
  },
  {
    question: "Preciso querer emagrecer para marcar uma consulta?",
    answer:
      "Não. A consulta também serve para ganho de massa, melhora da alimentação, mais energia, saúde e bem-estar, ou para entender melhor o seu corpo.",
  },
  {
    question: "O plano alimentar é igual para todo mundo?",
    answer:
      "Nunca. O planejamento é personalizado, seguindo a fase de vida, a rotina, as preferências e os objetivos de cada paciente.",
  },
  {
    question: "Tem acompanhamento depois da consulta?",
    answer:
      "Sim. Os retornos online em datas definidas servem para avaliar a evolução e ajustar o plano sempre que preciso.",
  },
  {
    question: "Como agendo a minha consulta?",
    answer:
      "Clique em qualquer botão de WhatsApp desta página: a mensagem já vai pronta e a Esther responde para combinar o melhor dia e horário.",
  },
];

/**
 * Aviso legal do rodapé. Código de Ética do Nutricionista (Resolução CFN 599/2018):
 * sem promessa de resultado, sem antes/depois, sem depoimentos; CRN sempre visível.
 * Código de Defesa do Consumidor: informação clara e prévia sobre o serviço e as condições.
 */
export const LEGAL_NOTE =
  "Responsável técnica: Esther Duarte, nutricionista, CRN-1 | 27592. O conteúdo deste site é informativo e não substitui consulta, diagnóstico ou tratamento. Os resultados do acompanhamento nutricional variam de pessoa para pessoa. Valores, formas de pagamento e condições de atendimento são informados de forma clara e individual, antes da contratação.";

/** Formas de atendimento (rodapé, credenciais e dados estruturados). */
export const ATTENDANCE = {
  online: "Consultas online por videochamada, para todo o Brasil",
  inPerson: "Avaliação física presencial em Anápolis-GO, com horário agendado",
  hours: "Segunda a sexta, com horário agendado",
} as const;
