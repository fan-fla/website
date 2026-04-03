## Why

LLMs and AI assistants increasingly reference websites to answer user queries. The `llms.txt` convention (llmstxt.org) provides a structured, machine-readable file at the site root that helps LLMs understand a company's identity, products, and key information — improving discoverability and accuracy when users ask about Fan Fla.

## What Changes

- Add a static `llms.txt` file served at `/llms.txt` containing Fan Fla's company profile, product catalog (cookies, barrinhas, snacks, mel), ordering info, and contact details
- The file will be placed in `public/llms.txt` so Next.js serves it as a static asset
- Content sourced from existing data in `app/data/products.ts`, `app/data/site.ts`, and section copy

## Capabilities

### New Capabilities
- `llms-txt`: Static `llms.txt` file at the site root following the llms.txt convention, containing company overview, full product catalog with descriptions and prices, ordering/delivery info, and social/contact links

### Modified Capabilities
_(none)_

## Impact

- New file: `public/llms.txt`
- No code changes, no dependencies, no API changes
- Zero impact on existing functionality — purely additive static file
