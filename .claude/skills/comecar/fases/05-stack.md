# Fase 5 — Stack

**Objetivo:** decidir quais camadas técnicas entram, com motivo, e deixar o projeto só com os pacotes usados. **Modelo:** Sonnet.

Leia antes: a skill `stack-web` (só o `SKILL.md`; as referências ficam para a fase 6), `projeto/DIRECAO.md` (principalmente a interação-assinatura) e o prazo em `projeto/BRIEF.md`.

## Passos

1. **Proponha as camadas** pela tabela "Decisão rápida por tipo de projeto" da `stack-web`, uma linha por camada, com o motivo ligado à direção aprovada. Inclua explicitamente o que **não** entra. Exemplo:
   - Movimento: Motion (microinterações dos cards e do menu)
   - GSAP + ScrollTrigger: sim, só na seção "Processo" (pin com 4 passos, a assinatura aprovada)
   - SplitText: não (o H1 é o LCP)
   - Lenis: não (página curta)
   - 3D, View Transitions, Rive, Lottie: não
2. **Dados e segurança**: se o BRIEF marcou formulário, agendamento, login ou pagamento, defina aqui como (ex.: formulário → rota de servidor + validação + anti-spam; agendamento → link para ferramenta externa) e leia as regras de ouro da `seguranca-web`.
3. **Peça aprovação.** Registre em `projeto/ESTADO.md`, seção "Stack", e em "Decisões aprovadas".
4. **Ajuste os pacotes** (com ok):
   - Remova o que não entra: `npm uninstall lenis`, `npm uninstall gsap @gsap/react`, `npm uninstall motion`, conforme o caso.
   - Instale camadas extras aprovadas, conferindo a versão antes (`npm view <pacote> version`).
   - `npm run verificar` precisa passar.

## Fechar

Fim de fase: ESTADO (fase 6 como próxima, modelo Sonnet), commit `fase 5: stack definida`, frase padrão.
