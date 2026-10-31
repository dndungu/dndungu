# David Ndungu

I learn by building the underlying mechanics myself. I grew up on a small farm in Nakuru, Kenya, taught myself web development from MIT OpenCourseWare in the early 2000s, and have built software in Kenya, Denmark and the United States since. Founder of Sire Run, Inc., in Clovis, California.

## What I'm building

**[Zerfoo](https://zer.foo)**: a pure-Go ML framework for inference, training and serving. No CGo: you embed a GGUF model in a Go program with `go build`. ([repo](https://github.com/zerfoo/zerfoo))

- A 229B model with 128.8 GB of weights loads in 6.3 seconds through memory mapping and decodes on a 128 GB machine with no GPU. It runs at 0.06 tokens a second, so it's a capability result, not a speed one. Ollama returns HTTP 500 on the same model and hardware.
- Gemma 3 1B runs at 235 tokens a second on a DGX Spark, 1.25x Ollama. At 3B and 7B it's at parity, and I don't claim a win there. These are my own runs and haven't been independently reproduced.
- The README has a section called [Where our kernels lost](https://github.com/zerfoo/zerfoo#benchmarks): a GPU kernel I fused by hand was slower than the simpler path, so it's off by default.
- [zer.foo](https://zer.foo) also hosts a free model designer: describe a prediction task in plain language and download a Zerfoo project that trains on your own machine.

**[AgentGavel](https://agentgavel.dev)**: an adversarial benchmark for AI agent frameworks. It asks whether the control plane still holds when the model is fully compromised. It separates hard governance, deterministic checks that refuse unsafe actions, from soft governance, prompts a model can be talked out of. I also build one of the frameworks it tests, so that adapter is labeled unofficial. ([repo](https://github.com/agentgavel/agentgavel))

**[Ajent](https://ajent.social)**: live. Coding agents search findings other agents have already checked, instead of rediscovering the same fix, and people control what gets shared. ([open-source CLI and MCP server](https://github.com/ajent-social/ajent))

**[Serenity](https://serenity.sire.run)**: personal memory for agents. It turns notes, repository docs and email into searchable memory that lives in a Git repository you own, and keeps the source behind every answer. The local CLI works today; the hosted version is still being qualified and isn't public yet. ([repo](https://github.com/sirerun/serenity))

## Open source, by organization

I give each project its own GitHub organization, so most of my work isn't under this account.

| Organization | What's there |
|---|---|
| [zerfoo](https://github.com/zerfoo) | [zerfoo](https://github.com/zerfoo/zerfoo) plus the libraries it's built from: [ztensor](https://github.com/zerfoo/ztensor) (tensors and compute graphs with GPU backends), [ztoken](https://github.com/zerfoo/ztoken) (BPE tokenizer), [zonnx](https://github.com/zerfoo/zonnx) (ONNX-to-GGUF converter), float16 and float8 arithmetic |
| [sirerun](https://github.com/sirerun) | [serenity](https://github.com/sirerun/serenity), [gist](https://github.com/sirerun/gist) (context library for LLM applications), [mint](https://github.com/sirerun/mint) (turns an OpenAPI spec into a working Go MCP server) |
| [kazi-org](https://github.com/kazi-org) | [kazi](https://github.com/kazi-org/kazi) (runs bounded agent work against acceptance checks and records the evidence), [dira](https://github.com/kazi-org/dira) (decisions and the alternatives they rejected, kept in Git), [fanisi](https://github.com/kazi-org/fanisi) (coding harness that cuts tokens, cost and time), [sprintd](https://github.com/kazi-org/sprintd) (dispatches agent work across machines and verifies it finished) |
| [ajent-social](https://github.com/ajent-social) | [ajent](https://github.com/ajent-social/ajent) CLI and MCP server, [capabilities](https://github.com/ajent-social/capabilities) (reusable capability contracts, RFC open for feedback) |
| [agentgavel](https://github.com/agentgavel) | [agentgavel](https://github.com/agentgavel/agentgavel) |
| [feza-ai](https://github.com/feza-ai) | [spark](https://github.com/feza-ai/spark) (single-binary orchestrator that runs Kubernetes manifests on one GPU host) |
| [narrate-it](https://github.com/narrate-it) | [narrate](https://github.com/narrate-it/narrate) (turns documents into narrated audio and gives coding agents spoken progress updates) |
| [therfoo](https://github.com/therfoo) | [therfoo](https://github.com/therfoo/therfoo), the 2019 library that became Zerfoo |

<details>
<summary>25 more projects, by commit count</summary>

| Repository | Started | Commits | What it is |
|---|---|---:|---|
| [zerfoo/zerfoo](https://github.com/zerfoo/zerfoo) | 2025 | 4,037 | Pure-Go ML framework for inference, training and serving, with zero CGo |
| [kazi-org/kazi](https://github.com/kazi-org/kazi) | 2025 | 3,157 | Keeps a coding agent working until its goal is objectively true, or says why not |
| [sirerun/serenity](https://github.com/sirerun/serenity) | 2026 | 1,008 | Personal memory for agents, kept in a Git repository you own |
| [sirerun/gist](https://github.com/sirerun/gist) | 2026 | 637 | Context library for LLM applications in Go |
| [zerfoo/ztensor](https://github.com/zerfoo/ztensor) | 2026 | 457 | Tensors, compute engine and graphs for Go, with GPU backends and no CGo |
| [feza-ai/spark](https://github.com/feza-ai/spark) | 2026 | 433 | Single-binary orchestrator that runs Kubernetes manifests on one GPU host |
| [ajent-social/ajent-social](https://github.com/ajent-social/ajent-social) | 2026 | 387 | The ajent.social platform: Go, Postgres and HTMX |
| [agentgavel/agentgavel](https://github.com/agentgavel/agentgavel) | 2026 | 253 | Adversarial benchmark for AI agent governance |
| [kazi-org/dira](https://github.com/kazi-org/dira) | 2026 | 230 | Decisions and the alternatives they rejected, kept in Git for agents |
| [sirerun/mint](https://github.com/sirerun/mint) | 2026 | 216 | Turns an OpenAPI 3.x spec into a working Go MCP server |
| [kazi-org/wazi](https://github.com/kazi-org/wazi) | 2026 | 172 | Read-only 3D view of Markdown project plans |
| [zerfoo/zonnx](https://github.com/zerfoo/zonnx) | 2025 | 100 | ONNX-to-GGUF converter, single static binary |
| [therfoo/therfoo](https://github.com/therfoo/therfoo) | 2019 | 83 | Deep learning library written by hand in 2019; became Zerfoo |
| [dndungu/router](https://github.com/dndungu/router) | 2016 | 71 | Trie-based HTTP router for Go |
| [dndungu/rest](https://github.com/dndungu/rest) | 2016 | 71 | RESTful HTTP handlers for any database backend |
| [ajent-social/go](https://github.com/ajent-social/go) | 2026 | 59 | Go foundation for the Ajent agent-maintained standard library |
| [kazi-org/fanisi](https://github.com/kazi-org/fanisi) | 2026 | 57 | Coding harness that cuts tokens, cost and time |
| [zerfoo/zmf](https://github.com/zerfoo/zmf) | 2025 | 54 | Zerfoo model format |
| [zerfoo/float16](https://github.com/zerfoo/float16) | 2025 | 51 | Float16 and BFloat16 arithmetic for Go |
| [ajent-social/ajent](https://github.com/ajent-social/ajent) | 2026 | 48 | CLI and MCP server for ajent.social |
| [ajent-social/capabilities](https://github.com/ajent-social/capabilities) | 2026 | 40 | Evidence-backed capability contracts, RFC open for feedback |
| [dndungu/sitiri](https://github.com/dndungu/sitiri) | 2014 | 37 | Web application framework for RESTful APIs |
| [dndungu/director](https://github.com/dndungu/director) | 2017 | 35 | HTTPS proxy that provisions Let's Encrypt certificates automatically |
| [zerfoo/metee](https://github.com/zerfoo/metee) | 2026 | 30 | Tree-based machine learning for Go |
| [zerfoo/ztoken](https://github.com/zerfoo/ztoken) | 2026 | 27 | BPE tokenizer for Go, reads HuggingFace and GGUF tokenizers |

Counts are from October 2026. Package taps, websites, organization profile repos and a few small or undocumented repos are left out.

</details>

## What I believe

Generating code is close to solved. The bottleneck in AI-assisted engineering is verification and memory: proving what an agent did, and remembering why. Most of what I build is that unglamorous layer.

## How I got here

- **Early 2000s:** taught myself web development from MIT OpenCourseWare and worked as a freelance web developer in Kenya.
- **2007:** rebuilt WildlifeDirect's failing web platform and its bare-metal infrastructure.
- **2012:** founded Gereji, a Shopify-like store platform built from scratch. It reached 50 paying retailers and joined the Savannah Fund accelerator, then ran out of money because the free hands-on support I gave every customer didn't scale.
- **2016 to 2025:** Zendesk, from senior engineer in test to staff engineer. I built Go diagnostics that ended up in 95% of production services, a zero-downtime etcd v2-to-v3 migration across production Kubernetes, and inbound email authentication with ARC.
- **2019:** wrote [Therfoo](https://github.com/therfoo/therfoo) by hand to learn ML: backprop, optimizers, regularization and numerical gradient checks, in Go.
- **June 2025:** left Zendesk. Seven weeks later I started Zerfoo. Since then I've created 82 public repositories with 9,505 commits, across this account and 18 organizations.

## How I work

The first versions are written by hand. Since 2025, most of my code is written by AI coding agents that I direct, review and verify. I publish what I measured, how I measured it, and where my work lost.

## Contact

[LinkedIn](https://linkedin.com/in/dndungu) · [ndungu.dev](https://ndungu.dev) · [zer.foo](https://zer.foo) · [agentgavel.dev](https://agentgavel.dev) · [ajent.social](https://ajent.social) · [zati.run](https://zati.run)
