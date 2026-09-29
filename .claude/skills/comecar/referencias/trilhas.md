# Trilhas de projeto

Carregado na fase 1 (identificar a trilha) e consultado nas fases 3 a 7. Os nomes de skill abaixo são os nomes reais das pastas em `.claude/skills/`.

## As três perguntas

Faça uma de cada vez, com as opções.

**1. Qual é o objetivo do site?** (define a trilha)
- A) Vender / converter (serviço, geração de leads, e-commerce pequeno)
- B) Informar / estabelecer presença (institucional, portfólio, blog)
- C) Melhorar um site que já existe (redesign)
- D) Interface app-like / mobile-first (plataforma, painel)
- E) Pitch especulativo para um negócio local que ainda não é cliente

**2. Quanto tempo disponível?**
- Urgente (menos de 3 dias) · Normal (1 a 2 semanas) · Tranquilo (2 semanas ou mais)

**3. Qual clima o cliente ou o nicho pede?**
- Ousado · Premium · Minimalista · Corporativo · Outro (descrever)

A resposta 3 é ponto de partida para a fase 3, não receita: as três direções visuais podem (e uma delas deve) sair desse clima.

## Tabela de trilhas

| Trilha | Quando usar | Estrutura de referência | Skills por fase |
|---|---|---|---|
| **A — Venda / conversão** | Landing comercial, captação de leads, serviço | Hero com benefício + CTA, problema/solução, até 5 diferenciais, prova social, FAQ se houver dúvida recorrente, CTA final | Fase 3: `frontend-design`, `design-taste-frontend`. Fase 6: `stack-web`, `responsive-design`, `site-moderno-seo`. Fase 7: `web-design-guidelines`, `verification-before-completion`. Login, carrinho ou pagamento: `seguranca-web` desde a fase 5 |
| **B — Institucional / presença** | Site institucional, portfólio, blog, páginas de serviço | Home (sobre + serviços + contato), serviços detalhados, sobre/equipe, blog se aplicável, contato com vários canais | Igual à A. Várias páginas com continuidade: View Transitions (`stack-web`). Agendamento ou formulário com dados: `seguranca-web` |
| **C — Redesign** | O site existe e precisa de upgrade visual ou de UX | Preservar URLs, navegação e o que funciona; auditar antes de mudar | Fase 1: auditoria de SEO (`site-moderno-seo`) e de design (`design-taste-frontend`, seção 11) antes de qualquer proposta. `stack-web`: manter a stack existente se funciona; migrar para o template só com motivo e aprovação. Login ou banco no site antigo: `seguranca-web` |
| **D — App-like / mobile** | Plataforma, painel, cara de app nativo | Navegação inferior ou menu, cards grandes para toque, gestos simples | `frontend-design`, `responsive-design`, `stack-web` (só Motion; sem Lenis nem pin), `seguranca-web` praticamente sempre (plataforma implica login e dados de usuário), `web-design-guidelines` |
| **E — Pitch para negócio local** | Demonstração especulativa antes de ter contrato | Ver `referencias/pitch-local.md` | Mesmas fases, com os ajustes de `pitch-local.md` (dados públicos em vez de entrevista, sem dado inventado, aviso de "demonstração"). Virou cliente: volta para a trilha A ou B a partir da fase 1 |

## Regras práticas

- Nunca ative todas as skills de uma vez: cada fase lista as suas.
- `stack-web` decide a stack na fase 5 e manda em código de animação (ver a tabela de precedência na própria skill).
- `site-moderno-seo` entra na construção (fase 6) e na revisão (fase 7).
- `seguranca-web` entra sempre que existir dado de usuário (formulário, agendamento, login, pagamento). Não é opcional para MVP.
- **Prazo urgente:** base + Motion no máximo, copy enxuta, uma única página.
- **Clima "premium" ou "minimalista":** não existe receita pronta no template (as skills com receita fixa foram arquivadas). A direção sai do negócio; o vocabulário de apoio está em `referencias/vocabulario-visual.md`.
