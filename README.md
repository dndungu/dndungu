# David Ndungu

I learn by building the underlying mechanics myself. I grew up on a small farm in Nakuru, Kenya, taught myself web development from MIT OpenCourseWare in the early 2000s, and have built software in Kenya, Denmark and the United States since. Founder of Sire Run, Inc., in Clovis, California.

## What I'm building

**[Zerfoo](https://zer.foo)**: a pure-Go ML framework for inference, training and serving. No CGo: you embed a GGUF model in a Go program with `go build`. ([repo](https://github.com/zerfoo/zerfoo))

- A 229B model with 128.8 GB of weights loads in 6.3 seconds through memory mapping and decodes on a 128 GB machine with no GPU. It runs at 0.06 tokens a second, so it's a capability result, not a speed one. Ollama returns HTTP 500 on the same model and hardware.
- Gemma 3 1B runs at 235 tokens a second on a DGX Spark, 1.25x Ollama. At 3B and 7B it's at parity, and I don't claim a win there. These are my own runs and haven't been independently reproduced.
- The README has a section called [Where our kernels lost](https://github.com/zerfoo/zerfoo#benchmarks): a GPU kernel I fused by hand was slower than the simpler path, so it's off by default.

**[AgentGavel](https://agentgavel.dev)**: an adversarial benchmark for AI agent frameworks. It asks whether the control plane still holds when the model is fully compromised. It separates hard governance, deterministic checks that refuse unsafe actions, from soft governance, prompts a model can be talked out of. I also build one of the frameworks it tests, so that adapter is labeled unofficial. ([repo](https://github.com/agentgavel/agentgavel))

**[Ajent](https://ajent.social)**: live. Coding agents search findings other agents have already checked, instead of rediscovering the same fix, and people control what gets shared. ([open-source CLI and MCP server](https://github.com/ajent-social/ajent))

**Tools I build with:** [Kazi](https://github.com/kazi-org/kazi) runs bounded agent work against acceptance checks and records the evidence. [Dira](https://github.com/kazi-org/dira) keeps decisions in git with the alternatives they rejected. [Spark](https://github.com/feza-ai/spark) runs Kubernetes manifests on a single GPU host.

## What I believe

Generating code is close to solved. The bottleneck in AI-assisted engineering is verification and memory: proving what an agent did, and remembering why. Most of what I build is that unglamorous layer.

## How I got here

- **Early 2000s:** taught myself web development from MIT OpenCourseWare and worked as a freelance web developer in Kenya.
- **2007:** rebuilt WildlifeDirect's failing web platform and its bare-metal infrastructure.
- **2012:** founded Gereji, a Shopify-like store platform built from scratch. It reached 50 paying retailers and joined the Savannah Fund accelerator, then ran out of money because the free hands-on support I gave every customer didn't scale.
- **2016 to 2025:** Zendesk, from senior engineer in test to staff engineer. I built Go diagnostics that ended up in 95% of production services, a zero-downtime etcd v2-to-v3 migration across production Kubernetes, and inbound email authentication with ARC.
- **2019:** wrote [Therfoo](https://github.com/therfoo/therfoo) by hand to learn ML: backprop, optimizers, regularization and numerical gradient checks, in Go.
- **June 2025:** Zendesk let me go. Seven weeks later I started Zerfoo. Since then I've created 81 public repositories with 9,503 commits.

## How I work

The first versions are written by hand. Since 2025, most of my code is written by AI coding agents that I direct, review and verify. I publish what I measured, how I measured it, and where my work lost.

## Contact

[david@sire.run](mailto:david@sire.run) · [LinkedIn](https://linkedin.com/in/dndungu) · [ndungu.dev](https://ndungu.dev)
