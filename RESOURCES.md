# AI Engineering Resources

## Knowledge

- [Article: "Building effective AI agents" (Anthropic Engineering)](https://www.anthropic.com/engineering/building-effective-agents)
  Defines workflows vs agents, the augmented LLM, five workflow patterns, and tool design for agents. Use for: choosing a system design, interview-style "how would you build X" questions. Note: the article says some tooling has changed since Dec 2024; the concepts still hold.
- [Article: "Effective context engineering for AI agents" (Anthropic)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
  Anthropic's guidance on managing what goes into the model's context. Use for: long-running agents, context limits, retrieval design. Not yet read in full; verify before citing specifics in a lesson.
- [Article: "Writing effective tools for AI agents" (Anthropic)](https://www.anthropic.com/engineering/writing-tools-for-agents)
  Tool design for agents. Use for: tool-schema and tool-description exercises. Not yet read in full.
- [Article: "Demystifying evals for AI agents" (Anthropic)](https://www.anthropic.com/research/demystifying-evals-for-ai-agents)
  Anthropic's treatment of agent evals. Use for: the evals module. Not yet read in full.
- [Article: "How we built our multi-agent research system" (Anthropic)](https://www.anthropic.com/engineering/multi-agent-research-system)
  A production case study of the orchestrator-workers pattern. Use for: seeing the pattern applied, and its costs. Not yet read in full.
- [Docs: Prompt engineering overview (Claude Platform Docs)](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)
  Vendor documentation for prompting. Use for: prompt techniques and current model-specific guidance.
- [Article: "Your AI Product Needs Evals" by Hamel Husain](https://hamel.dev/blog/posts/evals/index.html)
  Argues that iteration speed depends on evals, and lays out three levels: unit tests, human/model review of traces, and A/B tests. Use for: the evals module and portfolio-project design.
- [Notes: AI evals resources by Hamel Husain](https://hamel.dev/notes/llm/evals/)
  Index of further eval material, including an evals FAQ. Use for: follow-up reading after the evals lessons.
- [Book: _AI Engineering: Building Applications with Foundation Models_ by Chip Huyen (O'Reilly)](https://www.oreilly.com/library/view/ai-engineering/9781098166298/)
  Book-length survey of the field. Use for: breadth, and a map of topics to schedule across later lessons. Not yet read; chapter-level citations needed before relying on it in a lesson.

## Wisdom (Communities)

- [Latent Space community](https://latent.space/community)
  Community built around the AI-engineer role, from the Latent Space podcast and newsletter. Use for: seeing what working AI engineers discuss, and role-market sense-making. Not yet vetted for moderation quality; check before recommending joining.

## Gaps

- A primary, hands-on source for RAG (retrieval, chunking, reranking) has not been found yet. Search before the RAG lessons.
- No source yet for job-market expectations of applied LLM engineer roles (job postings, interview formats). Needed for the mission's interview goal.
- No portfolio-project examples that include evals. Needed for the mission's "ship with an eval harness" goal.
- Community preference not yet asked. Confirm whether the user wants community suggestions at all.
