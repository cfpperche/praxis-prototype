export const supportedLocales = ['en', 'pt', 'es'];
export const defaultLocale = 'en';

export const localeLabels = {
  en: 'EN',
  pt: 'PT',
  es: 'ES'
};

export const localeFullLabels = {
  en: 'English',
  pt: 'Português',
  es: 'Español'
};

export const translations = {
  en: {
    nav: {
      capabilities: 'Capabilities',
      approach: 'Approach',
      industries: 'Industries',
      engagement: 'Engagement',
      cases: 'Cases',
      contact: 'Contact',
      cta: 'Start a conversation'
    },
    hero: {
      eyebrow: 'Digital Solutions for Enterprise',
      heading: 'Transform how your business operates.',
      subhead:
        'We design, build, and run the digital solutions that move enterprises forward. From process automation to AI-powered platforms, every engagement is scoped against a measurable business outcome.',
      ctaPrimary: 'Start a conversation',
      ctaSecondary: 'Explore capabilities'
    },
    challenge: {
      eyebrow: 'The challenge',
      title: 'Three tensions every transformation runs into.',
      subtitle:
        'Different industries, the same conflicts, and the same strategic cost of leaving them unresolved.',
      items: [
        {
          from: 'Manual processes',
          to: 'Velocity demands',
          headline: 'Operations cannot match the cycle times the business requires.',
          body:
            'Paperwork, spreadsheets, and email threads carry workloads they were never designed for. Cycle times stretch, errors compound, and the cost of inaction grows quarter over quarter.'
        },
        {
          from: 'Legacy systems',
          to: 'Modern integration',
          headline: 'Core platforms ship value but resist the next wave.',
          body:
            'Every new channel, partner, data source, or AI capability has to plug into systems that were never designed for them. Integration cost overshadows feature cost.'
        },
        {
          from: 'AI ambition',
          to: 'Governance reality',
          headline: 'AI generates lift and risk in the same breath.',
          body:
            'Advanced AI delivers measurable productivity gains. It also opens risk surfaces, security, compliance, auditability, that regulated enterprises cannot ignore.'
        }
      ],
      bumper: 'The tensions are universal. The way they resolve is not.'
    },
    capabilities: {
      eyebrow: 'What we deliver',
      title: 'Solutions that move enterprises from intent to outcome.',
      subtitle:
        'Six capability lines covering the full digital transformation lifecycle. Each delivered to a defined business outcome, not just a technical artifact.',
      outcomeLabel: 'Business outcome',
      items: [
        {
          title: 'Process Automation and Intelligent Operations',
          description:
            'Replace manual workflows, paper-bound processes, and disconnected systems with intelligent automation. Document processing, agent-driven operations, RPA at scale, integration with legacy backbones.',
          outcome: 'Cycle times measured in hours instead of days, with audit-grade traceability.'
        },
        {
          title: 'Custom Software Engineering',
          description:
            'Bespoke applications, internal platforms, and legacy modernization. Built for the constraints of the business: scale, security, regulation, and the team that will own the codebase next.',
          outcome: 'Software that fits the business and that the business owns end to end.'
        },
        {
          title: 'Data, Analytics, and Decision Platforms',
          description:
            'Data engineering, real-time analytics, and decision-support models. Turn fragmented operational data into a single, trustworthy basis for strategic and tactical choices.',
          outcome: 'Decisions grounded in current truth, not last-quarter reports.'
        },
        {
          title: 'AI-Powered Solutions',
          description:
            'Generative AI, agentic systems, conversational interfaces, and copilots embedded where they generate measurable value. Designed for production reliability, security, and audit.',
          outcome: 'AI capabilities deployed where the business sees direct lift, not pilots that never ship.'
        },
        {
          title: 'Cloud Modernization and Reliability',
          description:
            'Migration, cloud-native refactoring, observability, and reliability engineering. Infrastructure built to scale with the business and to be operated by a small, focused team.',
          outcome: 'Infrastructure that scales without scaling the operations headcount.'
        },
        {
          title: 'Engineering Excellence and AI-Augmented Delivery',
          description:
            'Modernized delivery practices, AI-augmented development, quality engineering, and team enablement. The operating model that makes everything above repeatable.',
          outcome: 'Predictable delivery at a velocity unreachable without modern tooling and AI.'
        }
      ],
      bumper: 'Every capability ties to a measurable business outcome. None ships without one.'
    },
    approach: {
      eyebrow: 'How we work',
      title: 'The Praxis Method.',
      subtitle:
        'A four-phase delivery model that moves from business diagnosis to sustained operations, with named outcomes at each stage.',
      outputLabel: 'Stage outcome',
      phases: [
        {
          phase: '01',
          title: 'Diagnose',
          description:
            'Map the business objective, the current operating state, and the gap between the two.',
          output: 'Solution roadmap with prioritized initiatives, business case, and risk register.'
        },
        {
          phase: '02',
          title: 'Design',
          description:
            'Architect the solution end to end. Technical, operational, and organizational components, scoped to the constraints of the business.',
          output: 'Reference architecture and implementation plan ready to execute.'
        },
        {
          phase: '03',
          title: 'Deliver',
          description:
            'Build, integrate, and pilot the solution alongside the client teams. Outcomes measured from day one, not at the end.',
          output: 'Working solution in production with metrics confirming the business case.'
        },
        {
          phase: '04',
          title: 'Sustain',
          description:
            'Operate, evolve, and improve the solution after go-live. Quarterly reviews tied to business KPIs.',
          output: 'Continuous improvement with measurable impact on operations.'
        }
      ],
      transformationLabel: 'Client state through the engagement',
      transformationStates: [
        'Problem named',
        'Roadmap defined',
        'Solution architected',
        'Working in production',
        'Continuously improved'
      ],
      bumper: 'Every phase produces an artifact. Every engagement produces an outcome.'
    },
    cases: {
      eyebrow: 'Outcomes in practice',
      title: 'Representative engagement shapes.',
      subtitle:
        'Three sample cases that illustrate the shape of work we deliver and the kind of outcomes we tie engagements to. Industry tags only; client-specific details available under NDA.',
      outcomeLabel: 'Outcome',
      challengeLabel: 'Challenge',
      workLabel: 'Work',
      items: [
        {
          industry: 'Financial Services',
          challenge:
            'Mid-sized bank with manual invoice and reconciliation flows spread across twelve operations teams. Average cycle measured in business days; audit preparation consumed two weeks per quarter.',
          work:
            'Agentic document-processing pipeline with audit-grade logging, integrated with the legacy ledger. Phased rollout per operations team and knowledge transfer to internal staff.',
          outcome:
            'Average cycle reduced from eight business days to four hours. Audit trails generated automatically, with no net change to the compliance footprint.'
        },
        {
          industry: 'Healthcare',
          challenge:
            'Hospital network with patient data fragmented across seven systems. Clinical staff spent significant time hunting for current data; care coordination relied on memory and email.',
          work:
            'Unified data platform with real-time aggregation and a decision-support layer surfaced inside the clinical UI. Built to LGPD and HIPAA controls.',
          outcome:
            'Care coordination decisions backed by current data. Staff time spent on data hunting reduced by roughly 60%. Clinical leadership reports faster escalation paths.'
        },
        {
          industry: 'Technology and SaaS',
          challenge:
            'B2B SaaS scaling engineering from twenty to eighty contributors. Regression rate climbing; release cadence slipping from weekly to once every three weeks.',
          work:
            'AI-augmented delivery practice with automated quality gates, architecture-aware code review, and embedded engineering coaching for senior staff.',
          outcome:
            'Release cadence restored to weekly. Regression rate down roughly 40%. New-hire onboarding time halved.'
        }
      ],
      bumper: 'Representative shapes. Engagement specifics available under NDA.'
    },
    industries: {
      eyebrow: 'Who we serve',
      title: 'Industries we work with.',
      subtitle:
        'Our practice is industry-portable. We adapt solution design, security posture, and compliance scaffolding to the rules each vertical lives under.',
      items: [
        'Financial Services and Insurance',
        'Healthcare and Life Sciences',
        'Retail and E-commerce',
        'Industrial and Manufacturing',
        'Technology and SaaS',
        'Public Sector and Government'
      ],
      bumper: 'The methodology travels. The regulation does not, and we plan for that.'
    },
    engagement: {
      eyebrow: 'How we engage',
      title: 'Engagement models.',
      subtitle: 'Scoped to the outcome. From short diagnostic to fully embedded delivery teams.',
      items: [
        {
          name: 'Diagnostic Engagement',
          format: 'Fixed fee, 4 to 8 weeks',
          description:
            'Current-state audit and prioritized solution roadmap. The right entry point when the case for change still needs to be built.'
        },
        {
          name: 'Implementation Program',
          format: 'Fixed scope, 3 to 9 months',
          description:
            'End-to-end solution delivery. Includes architecture, build, integration, pilot, and operational handover with measured outcomes.'
        },
        {
          name: 'Embedded Delivery',
          format: 'Time and materials, ongoing',
          description:
            'Senior engineers and architects embedded inside client delivery teams. Accelerates capability transfer while shipping production work.'
        },
        {
          name: 'Advisory Retainer',
          format: 'Monthly, 12-month terms',
          description:
            'Strategic advisory plus quarterly reviews against business KPIs. For organizations with an internal team that owns delivery but wants senior counsel.'
        }
      ],
      bumper: 'Engagements scoped to the outcome, not to a standard SOW.'
    },
    contact: {
      eyebrow: 'Start the conversation',
      title: 'Ready to move from digital intent to digital outcome?',
      subtitle:
        'Tell us about the business outcome you are working toward and the current state of the operation that has to get there. We respond within two business days.',
      form: {
        name: 'Full name',
        company: 'Company',
        role: 'Role',
        email: 'Work email',
        message: 'How can we help?',
        submit: 'Request introduction',
        note: 'Submissions are private. Replies come from a partner of the firm.'
      }
    },
    footer: {
      tagline: 'Digital solutions for enterprise.',
      sections: {
        capabilities: 'Capabilities',
        approach: 'Approach',
        cases: 'Cases',
        industries: 'Industries',
        contact: 'Contact'
      },
      legal: {
        privacy: 'Privacy notice',
        terms: 'Terms',
        cookies: 'Cookies'
      },
      copyright: 'Praxis. All rights reserved.'
    }
  },

  pt: {
    nav: {
      capabilities: 'Capacidades',
      approach: 'Abordagem',
      industries: 'Setores',
      engagement: 'Contratação',
      cases: 'Casos',
      contact: 'Contato',
      cta: 'Iniciar conversa'
    },
    hero: {
      eyebrow: 'Soluções Digitais para o Mercado Corporativo',
      heading: 'Transforme como sua empresa opera.',
      subhead:
        'Projetamos, construímos e operamos as soluções digitais que movem empresas para frente. Da automação de processos a plataformas de IA, cada engajamento é amarrado a um resultado de negócio mensurável.',
      ctaPrimary: 'Iniciar conversa',
      ctaSecondary: 'Conhecer capacidades'
    },
    challenge: {
      eyebrow: 'O desafio',
      title: 'Três tensões que toda transformação encontra.',
      subtitle:
        'Indústrias diferentes, os mesmos conflitos, e o mesmo custo estratégico de deixá-los irresolvidos.',
      items: [
        {
          from: 'Processos manuais',
          to: 'Demanda por velocidade',
          headline: 'Operações não acompanham o tempo de ciclo que o negócio exige.',
          body:
            'Papel, planilhas e threads de e-mail carregam trabalho para o qual não foram projetados. Ciclos esticam, erros se acumulam, e o custo da inação cresce trimestre a trimestre.'
        },
        {
          from: 'Sistemas legados',
          to: 'Integração moderna',
          headline: 'Plataformas core entregam valor mas resistem à próxima onda.',
          body:
            'Cada novo canal, parceiro, fonte de dados ou capacidade de IA precisa se encaixar em sistemas que nunca foram pensados para eles. O custo de integração ofusca o custo da feature.'
        },
        {
          from: 'Ambição com IA',
          to: 'Realidade de governança',
          headline: 'IA gera lift e risco no mesmo movimento.',
          body:
            'IA avançada entrega ganhos de produtividade mensuráveis. E também abre superfícies de risco, segurança, compliance, auditabilidade, que empresas reguladas não podem ignorar.'
        }
      ],
      bumper: 'As tensões são universais. O modo como se resolvem, não.'
    },
    capabilities: {
      eyebrow: 'O que entregamos',
      title: 'Soluções que levam empresas da intenção ao resultado.',
      subtitle:
        'Seis linhas de capacidade cobrindo o ciclo completo de transformação digital. Cada uma entregue contra um resultado de negócio definido, não apenas contra um artefato técnico.',
      outcomeLabel: 'Resultado de negócio',
      items: [
        {
          title: 'Automação de Processos e Operações Inteligentes',
          description:
            'Substituímos fluxos manuais, processos baseados em papel e sistemas desconectados por automação inteligente. Processamento de documentos, operações orientadas a agentes, RPA em escala e integração com sistemas legados.',
          outcome: 'Ciclos medidos em horas, não em dias, com rastreabilidade de auditoria.'
        },
        {
          title: 'Engenharia de Software Sob Medida',
          description:
            'Aplicações sob demanda, plataformas internas e modernização de legado. Construídas para as restrições do negócio: escala, segurança, regulação e o time que vai operar o código a seguir.',
          outcome: 'Software que cabe no negócio e que o negócio dona de ponta a ponta.'
        },
        {
          title: 'Dados, Analytics e Plataformas de Decisão',
          description:
            'Engenharia de dados, analytics em tempo real e modelos de suporte à decisão. Transformamos dados operacionais fragmentados em uma base única e confiável para escolhas estratégicas e táticas.',
          outcome: 'Decisões ancoradas na realidade atual, não em relatórios do trimestre passado.'
        },
        {
          title: 'Soluções com IA',
          description:
            'IA generativa, sistemas agentivos, interfaces conversacionais e copilots embarcados onde geram valor mensurável. Desenhados para confiabilidade em produção, segurança e auditoria.',
          outcome: 'Capacidades de IA onde o negócio vê lift direto, não pilotos que nunca chegam a produção.'
        },
        {
          title: 'Modernização de Cloud e Confiabilidade',
          description:
            'Migração, refatoração cloud-native, observabilidade e engenharia de confiabilidade. Infraestrutura que escala com o negócio e que pode ser operada por um time pequeno e focado.',
          outcome: 'Infraestrutura que escala sem escalar o headcount de operação.'
        },
        {
          title: 'Excelência de Engenharia e Entrega Aumentada por IA',
          description:
            'Práticas modernas de entrega, desenvolvimento aumentado por IA, engenharia de qualidade e capacitação de time. O modelo operacional que torna tudo acima repetível.',
          outcome: 'Entrega previsível em velocidade inalcançável sem ferramental moderno e IA.'
        }
      ],
      bumper: 'Cada capacidade está ligada a um resultado de negócio mensurável. Nenhuma sobe sem isso.'
    },
    approach: {
      eyebrow: 'Como trabalhamos',
      title: 'O Método Praxis.',
      subtitle:
        'Um modelo de entrega em quatro fases, do diagnóstico de negócio à operação sustentada, com resultados nomeados em cada estágio.',
      outputLabel: 'Resultado da fase',
      phases: [
        {
          phase: '01',
          title: 'Diagnosticar',
          description:
            'Mapeamos o objetivo de negócio, o estado operacional atual e a distância entre os dois.',
          output: 'Roadmap de solução com iniciativas priorizadas, business case e registro de riscos.'
        },
        {
          phase: '02',
          title: 'Projetar',
          description:
            'Arquitetamos a solução ponta a ponta. Componentes técnicos, operacionais e organizacionais, ajustados às restrições do negócio.',
          output: 'Arquitetura de referência e plano de implementação prontos para execução.'
        },
        {
          phase: '03',
          title: 'Entregar',
          description:
            'Construímos, integramos e pilotamos a solução junto aos times do cliente. Resultados medidos desde o primeiro dia, não só no final.',
          output: 'Solução em produção com métricas que confirmam o business case.'
        },
        {
          phase: '04',
          title: 'Sustentar',
          description:
            'Operamos, evoluímos e melhoramos a solução após o go-live. Revisões trimestrais amarradas aos KPIs do negócio.',
          output: 'Melhoria contínua com impacto mensurável na operação.'
        }
      ],
      transformationLabel: 'Estado do cliente ao longo do engajamento',
      transformationStates: [
        'Problema nomeado',
        'Roadmap definido',
        'Solução arquitetada',
        'Em produção',
        'Em melhoria contínua'
      ],
      bumper: 'Cada fase produz um artefato. Cada engajamento produz um resultado.'
    },
    cases: {
      eyebrow: 'Resultados na prática',
      title: 'Formatos representativos de engajamento.',
      subtitle:
        'Três casos de exemplo que ilustram o formato do trabalho que entregamos e o tipo de resultado a que ligamos cada engajamento. Apenas tags de indústria; detalhes específicos do cliente sob NDA.',
      outcomeLabel: 'Resultado',
      challengeLabel: 'Desafio',
      workLabel: 'Trabalho',
      items: [
        {
          industry: 'Serviços Financeiros',
          challenge:
            'Banco de médio porte com fluxos manuais de invoice e conciliação distribuídos entre doze times de operação. Ciclo médio medido em dias úteis; preparação de auditoria consumindo duas semanas por trimestre.',
          work:
            'Pipeline agentivo de processamento de documentos com logging em nível de auditoria, integrado ao ledger legado. Rollout faseado por time de operação e transferência de conhecimento para staff interno.',
          outcome:
            'Ciclo médio reduzido de oito dias úteis para quatro horas. Trilhas de auditoria geradas automaticamente, sem mudança líquida na pegada de compliance.'
        },
        {
          industry: 'Saúde',
          challenge:
            'Rede hospitalar com dados de paciente fragmentados em sete sistemas. Equipe clínica perdia tempo significativo caçando dados atuais; coordenação de cuidado dependia de memória e e-mail.',
          work:
            'Plataforma de dados unificada com agregação em tempo real e camada de suporte à decisão exposta dentro do UI clínico. Construída sob controles LGPD e HIPAA.',
          outcome:
            'Decisões de coordenação de cuidado ancoradas em dado atual. Tempo de staff caçando dado reduzido em aproximadamente 60%. Liderança clínica relata caminhos de escalação mais rápidos.'
        },
        {
          industry: 'Tecnologia e SaaS',
          challenge:
            'SaaS B2B escalando engenharia de vinte para oitenta contribuidores. Taxa de regressão subindo; cadência de release escorregando de semanal para uma vez a cada três semanas.',
          work:
            'Prática de entrega aumentada por IA com quality gates automatizados, code review consciente de arquitetura e coaching de engenharia embarcado para staff sênior.',
          outcome:
            'Cadência de release restaurada para semanal. Taxa de regressão caiu aproximadamente 40%. Tempo de onboarding de novo contratado reduzido pela metade.'
        }
      ],
      bumper: 'Formatos representativos. Detalhes específicos do engajamento disponíveis sob NDA.'
    },
    industries: {
      eyebrow: 'Quem atendemos',
      title: 'Setores com quem trabalhamos.',
      subtitle:
        'Nossa prática é portável entre setores. Adaptamos design de solução, postura de segurança e estrutura de compliance às regras de cada vertical.',
      items: [
        'Serviços Financeiros e Seguros',
        'Saúde e Ciências da Vida',
        'Varejo e E-commerce',
        'Indústria e Manufatura',
        'Tecnologia e SaaS',
        'Setor Público e Governo'
      ],
      bumper: 'A metodologia viaja. A regulação, não, e planejamos para isso.'
    },
    engagement: {
      eyebrow: 'Como engajamos',
      title: 'Modelos de contratação.',
      subtitle: 'Ajustados ao resultado. Do diagnóstico curto a times de entrega embarcados.',
      items: [
        {
          name: 'Engajamento de Diagnóstico',
          format: 'Preço fixo, 4 a 8 semanas',
          description:
            'Auditoria do estado atual e roadmap de solução priorizado. Porta de entrada quando o caso de mudança ainda precisa ser construído.'
        },
        {
          name: 'Programa de Implementação',
          format: 'Escopo fixo, 3 a 9 meses',
          description:
            'Entrega de solução ponta a ponta. Inclui arquitetura, construção, integração, piloto e handover operacional com resultados medidos.'
        },
        {
          name: 'Entrega Embarcada',
          format: 'Time and materials, contínuo',
          description:
            'Engenheiros e arquitetos sêniores embarcados nos times de entrega do cliente. Acelera transferência de capacidade enquanto entrega trabalho em produção.'
        },
        {
          name: 'Retainer de Advisory',
          format: 'Mensal, contratos de 12 meses',
          description:
            'Advisory estratégico mais revisões trimestrais contra KPIs do negócio. Para organizações com time interno que já entrega mas quer aconselhamento sênior.'
        }
      ],
      bumper: 'Engajamentos dimensionados pelo resultado, não por SOW padrão.'
    },
    contact: {
      eyebrow: 'Iniciar a conversa',
      title: 'Pronto para sair da intenção digital e chegar ao resultado digital?',
      subtitle:
        'Conte sobre o resultado de negócio que você quer atingir e o estado atual da operação que precisa chegar até lá. Respondemos em até dois dias úteis.',
      form: {
        name: 'Nome completo',
        company: 'Empresa',
        role: 'Cargo',
        email: 'E-mail corporativo',
        message: 'Como podemos ajudar?',
        submit: 'Solicitar contato',
        note: 'Submissões são confidenciais. As respostas vêm de um sócio da firma.'
      }
    },
    footer: {
      tagline: 'Soluções digitais para o mercado corporativo.',
      sections: {
        capabilities: 'Capacidades',
        approach: 'Abordagem',
        cases: 'Casos',
        industries: 'Setores',
        contact: 'Contato'
      },
      legal: {
        privacy: 'Aviso de privacidade',
        terms: 'Termos',
        cookies: 'Cookies'
      },
      copyright: 'Praxis. Todos os direitos reservados.'
    }
  },

  es: {
    nav: {
      capabilities: 'Capacidades',
      approach: 'Enfoque',
      industries: 'Industrias',
      engagement: 'Contratación',
      cases: 'Casos',
      contact: 'Contacto',
      cta: 'Iniciar conversación'
    },
    hero: {
      eyebrow: 'Soluciones Digitales para el Mercado Corporativo',
      heading: 'Transforma cómo opera tu empresa.',
      subhead:
        'Diseñamos, construimos y operamos las soluciones digitales que mueven a las empresas hacia adelante. De la automatización de procesos a plataformas de IA, cada contratación se ata a un resultado de negocio medible.',
      ctaPrimary: 'Iniciar conversación',
      ctaSecondary: 'Conocer capacidades'
    },
    challenge: {
      eyebrow: 'El desafío',
      title: 'Tres tensiones que toda transformación encuentra.',
      subtitle:
        'Diferentes industrias, los mismos conflictos, y el mismo costo estratégico de dejarlos sin resolver.',
      items: [
        {
          from: 'Procesos manuales',
          to: 'Demanda por velocidad',
          headline: 'Las operaciones no alcanzan el tiempo de ciclo que el negocio exige.',
          body:
            'Papeleo, hojas de cálculo y hilos de correo cargan trabajo para el que nunca fueron diseñados. Los ciclos se estiran, los errores se acumulan, y el costo de la inacción crece trimestre a trimestre.'
        },
        {
          from: 'Sistemas legados',
          to: 'Integración moderna',
          headline: 'Las plataformas core entregan valor pero resisten la próxima ola.',
          body:
            'Cada nuevo canal, socio, fuente de datos o capacidad de IA tiene que encajar en sistemas que nunca fueron pensados para ellos. El costo de integración eclipsa al costo de la feature.'
        },
        {
          from: 'Ambición con IA',
          to: 'Realidad de gobernanza',
          headline: 'La IA genera lift y riesgo en el mismo movimiento.',
          body:
            'La IA avanzada entrega ganancias de productividad medibles. También abre superficies de riesgo, seguridad, cumplimiento, auditabilidad, que las empresas reguladas no pueden ignorar.'
        }
      ],
      bumper: 'Las tensiones son universales. El modo en que se resuelven, no.'
    },
    capabilities: {
      eyebrow: 'Lo que entregamos',
      title: 'Soluciones que llevan a las empresas de la intención al resultado.',
      subtitle:
        'Seis líneas de capacidad que cubren el ciclo completo de transformación digital. Cada una entregada contra un resultado de negocio definido, no solo contra un artefacto técnico.',
      outcomeLabel: 'Resultado de negocio',
      items: [
        {
          title: 'Automatización de Procesos y Operaciones Inteligentes',
          description:
            'Reemplazamos flujos manuales, procesos en papel y sistemas desconectados por automatización inteligente. Procesamiento de documentos, operaciones orientadas a agentes, RPA a escala e integración con sistemas legados.',
          outcome: 'Ciclos medidos en horas en lugar de días, con trazabilidad auditable.'
        },
        {
          title: 'Ingeniería de Software a Medida',
          description:
            'Aplicaciones a la medida, plataformas internas y modernización de legado. Construidas para las restricciones del negocio: escala, seguridad, regulación y el equipo que operará el código a continuación.',
          outcome: 'Software que se ajusta al negocio y que el negocio domina de extremo a extremo.'
        },
        {
          title: 'Datos, Analítica y Plataformas de Decisión',
          description:
            'Ingeniería de datos, analítica en tiempo real y modelos de soporte a la decisión. Convertimos datos operativos fragmentados en una base única y confiable para decisiones estratégicas y tácticas.',
          outcome: 'Decisiones ancladas en la realidad actual, no en reportes del trimestre pasado.'
        },
        {
          title: 'Soluciones con IA',
          description:
            'IA generativa, sistemas agénticos, interfaces conversacionales y copilots integrados donde generan valor medible. Diseñados para confiabilidad en producción, seguridad y auditoría.',
          outcome: 'Capacidades de IA donde el negocio ve un lift directo, no pilotos que nunca llegan a producción.'
        },
        {
          title: 'Modernización de Cloud y Confiabilidad',
          description:
            'Migración, refactorización cloud-native, observabilidad e ingeniería de confiabilidad. Infraestructura construida para escalar con el negocio y para ser operada por un equipo pequeño y enfocado.',
          outcome: 'Infraestructura que escala sin escalar el headcount de operación.'
        },
        {
          title: 'Excelencia de Ingeniería y Entrega Aumentada por IA',
          description:
            'Prácticas modernas de entrega, desarrollo aumentado por IA, ingeniería de calidad y habilitación de equipos. El modelo operativo que hace que todo lo anterior sea repetible.',
          outcome: 'Entrega predecible a una velocidad inalcanzable sin herramientas modernas e IA.'
        }
      ],
      bumper: 'Cada capacidad está atada a un resultado de negocio medible. Ninguna sube sin eso.'
    },
    approach: {
      eyebrow: 'Cómo trabajamos',
      title: 'El Método Praxis.',
      subtitle:
        'Un modelo de entrega en cuatro fases, del diagnóstico de negocio a la operación sostenida, con resultados nombrados en cada etapa.',
      outputLabel: 'Resultado de la fase',
      phases: [
        {
          phase: '01',
          title: 'Diagnosticar',
          description:
            'Mapeamos el objetivo de negocio, el estado operativo actual y la brecha entre ambos.',
          output: 'Hoja de ruta de solución con iniciativas priorizadas, business case y registro de riesgos.'
        },
        {
          phase: '02',
          title: 'Diseñar',
          description:
            'Arquitectamos la solución de extremo a extremo. Componentes técnicos, operativos y organizacionales, ajustados a las restricciones del negocio.',
          output: 'Arquitectura de referencia y plan de implementación listos para ejecución.'
        },
        {
          phase: '03',
          title: 'Entregar',
          description:
            'Construimos, integramos y pilotamos la solución junto a los equipos del cliente. Resultados medidos desde el primer día, no solo al final.',
          output: 'Solución en producción con métricas que confirman el business case.'
        },
        {
          phase: '04',
          title: 'Sostener',
          description:
            'Operamos, evolucionamos y mejoramos la solución después del go-live. Revisiones trimestrales atadas a los KPIs del negocio.',
          output: 'Mejora continua con impacto medible en la operación.'
        }
      ],
      transformationLabel: 'Estado del cliente a lo largo del engagement',
      transformationStates: [
        'Problema nombrado',
        'Hoja de ruta definida',
        'Solución arquitectada',
        'En producción',
        'En mejora continua'
      ],
      bumper: 'Cada fase produce un artefacto. Cada engagement produce un resultado.'
    },
    cases: {
      eyebrow: 'Resultados en la práctica',
      title: 'Formatos representativos de engagement.',
      subtitle:
        'Tres casos de muestra que ilustran el formato del trabajo que entregamos y el tipo de resultado al que atamos cada engagement. Solo etiquetas de industria; detalles específicos del cliente bajo NDA.',
      outcomeLabel: 'Resultado',
      challengeLabel: 'Desafío',
      workLabel: 'Trabajo',
      items: [
        {
          industry: 'Servicios Financieros',
          challenge:
            'Banco mediano con flujos manuales de invoice y conciliación distribuidos en doce equipos de operación. Ciclo promedio medido en días hábiles; preparación de auditoría consumiendo dos semanas por trimestre.',
          work:
            'Pipeline agéntico de procesamiento de documentos con logging de nivel auditoría, integrado al ledger legado. Rollout por fases por equipo de operación y transferencia de conocimiento al staff interno.',
          outcome:
            'Ciclo promedio reducido de ocho días hábiles a cuatro horas. Registros de auditoría generados automáticamente, sin cambio neto en la huella de cumplimiento.'
        },
        {
          industry: 'Salud',
          challenge:
            'Red hospitalaria con datos de paciente fragmentados en siete sistemas. El staff clínico perdía tiempo significativo buscando datos actuales; la coordinación de cuidado dependía de memoria y correo.',
          work:
            'Plataforma de datos unificada con agregación en tiempo real y una capa de soporte a la decisión expuesta dentro del UI clínico. Construida bajo controles LGPD y HIPAA.',
          outcome:
            'Decisiones de coordinación de cuidado ancladas en datos actuales. Tiempo del staff buscando datos reducido aproximadamente 60%. El liderazgo clínico reporta rutas de escalamiento más rápidas.'
        },
        {
          industry: 'Tecnología y SaaS',
          challenge:
            'SaaS B2B escalando ingeniería de veinte a ochenta contribuyentes. Tasa de regresión subiendo; cadencia de release deslizándose de semanal a una vez cada tres semanas.',
          work:
            'Práctica de entrega aumentada por IA con quality gates automatizados, code review consciente de arquitectura y coaching de ingeniería embebido para staff sénior.',
          outcome:
            'Cadencia de release restaurada a semanal. Tasa de regresión bajó aproximadamente 40%. Tiempo de onboarding de nuevo contratado reducido a la mitad.'
        }
      ],
      bumper: 'Formatos representativos. Detalles específicos del engagement disponibles bajo NDA.'
    },
    industries: {
      eyebrow: 'A quién atendemos',
      title: 'Industrias con las que trabajamos.',
      subtitle:
        'Nuestra práctica es portable entre industrias. Adaptamos el diseño de solución, la postura de seguridad y la estructura de cumplimiento a las reglas de cada vertical.',
      items: [
        'Servicios Financieros y Seguros',
        'Salud y Ciencias de la Vida',
        'Retail y E-commerce',
        'Industrial y Manufactura',
        'Tecnología y SaaS',
        'Sector Público y Gobierno'
      ],
      bumper: 'La metodología viaja. La regulación no, y planeamos para eso.'
    },
    engagement: {
      eyebrow: 'Cómo nos contratan',
      title: 'Modelos de contratación.',
      subtitle: 'Ajustados al resultado. Del diagnóstico corto a equipos de entrega embebidos.',
      items: [
        {
          name: 'Contratación de Diagnóstico',
          format: 'Precio fijo, 4 a 8 semanas',
          description:
            'Auditoría del estado actual y hoja de ruta de solución priorizada. Puerta de entrada cuando el caso de cambio aún necesita ser construido.'
        },
        {
          name: 'Programa de Implementación',
          format: 'Alcance fijo, 3 a 9 meses',
          description:
            'Entrega de solución de extremo a extremo. Incluye arquitectura, construcción, integración, piloto y traspaso operativo con resultados medidos.'
        },
        {
          name: 'Entrega Embebida',
          format: 'Time and materials, continuo',
          description:
            'Ingenieros y arquitectos sénior embebidos en los equipos de entrega del cliente. Acelera la transferencia de capacidades mientras se entrega trabajo en producción.'
        },
        {
          name: 'Retainer de Asesoría',
          format: 'Mensual, contratos de 12 meses',
          description:
            'Asesoría estratégica más revisiones trimestrales contra KPIs del negocio. Para organizaciones con un equipo interno que ya entrega pero quiere consejo sénior.'
        }
      ],
      bumper: 'Engagements dimensionados al resultado, no a un SOW estándar.'
    },
    contact: {
      eyebrow: 'Iniciar la conversación',
      title: '¿Listo para pasar de la intención digital al resultado digital?',
      subtitle:
        'Cuéntanos sobre el resultado de negocio que quieres alcanzar y el estado actual de la operación que tiene que llegar allá. Respondemos en hasta dos días hábiles.',
      form: {
        name: 'Nombre completo',
        company: 'Empresa',
        role: 'Cargo',
        email: 'Correo corporativo',
        message: '¿Cómo podemos ayudar?',
        submit: 'Solicitar contacto',
        note: 'Los envíos son confidenciales. Las respuestas vienen de un socio de la firma.'
      }
    },
    footer: {
      tagline: 'Soluciones digitales para el mercado corporativo.',
      sections: {
        capabilities: 'Capacidades',
        approach: 'Enfoque',
        cases: 'Casos',
        industries: 'Industrias',
        contact: 'Contacto'
      },
      legal: {
        privacy: 'Aviso de privacidad',
        terms: 'Términos',
        cookies: 'Cookies'
      },
      copyright: 'Praxis. Todos los derechos reservados.'
    }
  }
};
