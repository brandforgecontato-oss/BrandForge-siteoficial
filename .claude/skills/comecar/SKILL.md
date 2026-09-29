---
name: comecar
description: Conduz o projeto de site deste template do briefing ao site no ar, em 11 fases com pontos de aprovação (ambiente, briefing, nicho regulado, direção criativa, copy, stack, construção, revisão, preview, lançamento, portfólio). Lê projeto/ESTADO.md e retoma exatamente de onde parou. Use quando o usuário disser "vamos começar", "começar", "continuar", "onde paramos", "próxima fase", "retomar o projeto", ou digitar /comecar.
when_to_use: Início de qualquer sessão de trabalho num site criado a partir do template, inclusive depois de /clear ou quando outra pessoa assume o projeto.
argument-hint: "[fase N]"
---

# Guia do projeto

Você conduz; a pessoa decide. Seu trabalho é levar o site do briefing ao ar fase por fase, fazendo as perguntas certas, propondo e esperando aprovação. Você nunca pula uma aprovação para ganhar tempo.

## Ao ser invocado

1. **Leia `projeto/ESTADO.md`.** Se não existir, o projeto está na fase 0.
2. **Se veio argumento** (`/comecar fase 4`): avise o que ainda não foi aprovado nas fases anteriores e só avance se a pessoa confirmar.
3. **Diga em até 3 linhas:** fase atual, o que já está aprovado e o próximo passo. Se o modelo em uso não for o recomendado para a fase (tabela abaixo), diga uma vez.
4. **Leia só o arquivo da fase atual** em `fases/` e siga-o. Não carregue as outras fases nem referências que a fase não pede.

## Fases

| # | Arquivo | Resultado | Modelo |
|---|---|---|---|
| 0 | `fases/00-ambiente.md` | ambiente pronto, `projeto/ESTADO.md` criado | Sonnet |
| 1 | `fases/01-briefing.md` | `projeto/BRIEF.md` + trilha | Opus |
| 2 | `fases/02-nicho.md` | regras de nicho no BRIEF | Opus |
| 3 | `fases/03-direcao.md` | `projeto/DIRECAO.md` aprovado | Opus |
| 4 | `fases/04-copy.md` | `projeto/COPY.md` aprovado | Opus |
| 5 | `fases/05-stack.md` | camadas decididas, pacotes ajustados | Sonnet |
| 6 | `fases/06-construcao.md` | site construído seção a seção | Sonnet |
| 7 | `fases/07-revisao.md` | `projeto/REVISAO.md` | Sonnet |
| 8 | `fases/08-preview.md` | preview no ar, `projeto/FEEDBACK.md` aplicado | Sonnet |
| 9 | `fases/09-lancamento.md` | site em produção, acessos entregues | Sonnet |
| 10 | `fases/10-portfolio.md` | entrada no portfólio, push na `main` do template | Sonnet |

Opus nas decisões criativas; Sonnet na execução. O modelo é trocado pela pessoa com `/model`: o campo `model` de uma skill vale só para um turno e não serve para uma fase inteira.

## Regras de condução (valem em todas as fases)

- **Uma pergunta por vez.** Com opções sempre que possível (use a ferramenta de perguntas com opções, se disponível; a primeira opção é a recomendada e diz "(recomendado)"). Nunca despeje uma lista de perguntas.
- **Aceite material bruto.** Texto colado, áudio transcrito, mensagens do cliente e prints valem como resposta: extraia o que der, mostre o que entendeu e pergunte só o que faltou.
- **Propor → aprovar → registrar.** Toda decisão importante é proposta, aprovada com um "ok" explícito e registrada em `projeto/ESTADO.md` (seção "Decisões aprovadas", com data e nome) antes de seguir.
- **Nenhum código do site antes da direção (fase 3) e da copy (fase 4) aprovadas.** A única exceção são as pranchas descartáveis da fase 3, em `projeto/pranchas/` (fora do git).
- **Nunca invente dados do negócio.** Nome, telefone, endereço, depoimento, número, prêmio, foto de equipe: vêm do cliente ou viram pendência.
- **Verifique antes de afirmar.** "Pronto", "passou" e "funciona" só com o comando rodado e a saída conferida nesta sessão (skill `verification-before-completion`).
- **Conflito entre skills:** a tabela de precedência da skill `stack-web` decide.
- **Nada irreversível sem ok:** push, deploy em produção, apagar arquivo que não é seu, mover skills globais, instalar programa na máquina.

## Fim de cada fase

1. Atualize `projeto/ESTADO.md`: status da fase, decisões, pendências, próximo passo (a primeira ação da fase seguinte) e modelo recomendado.
2. Faça um commit local só dos arquivos do projeto: `git add -A && git commit -m "fase N: <resumo>"`. **Nunca faça push sem a pessoa pedir.**
3. Termine com exatamente:
   > Fase N concluída. Recomendo `/clear` antes da próxima (e `/model <opus|sonnet>`). Para retomar, diga "vamos continuar".

## Onde fica cada coisa

- Estado e decisões do site: `projeto/` (`ESTADO.md`, `BRIEF.md`, `DIRECAO.md`, `COPY.md`, `REVISAO.md`, `FEEDBACK.md`, `referencias/`)
- Modelos desses arquivos: `modelos/`
- Referências de processo: `referencias/` (trilhas, nicho regulado, vocabulário visual, regras de ouro, checklist de entrega, pitch local, revisão com Playwright)
- Scripts (Node, funcionam no Windows e no macOS): `scripts/checar-ambiente.mjs`, `scripts/mover-skills-globais.mjs`, `scripts/servir-pranchas.mjs`
- Portfólio anti-repetição: `portfolio/sites/` no repositório do template (remote `template`)
- Conta única da empresa no GitHub e na Vercel: identidade e remotes conferidos na fase 0
