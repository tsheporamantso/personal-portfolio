---
description: Create a commit message by analyzing git diff
allowed-tools: Bash(git status:*), Bash(git diff --staged), Bash(git commit:*)
---

## Context:

Current git status: !`git status`
Current git diff: !`git diff --staged`

## Your task:

Analyze above staged git changes and create a commit message, Use present tense and explain "why" something has changed, not just "what" has changed

## Commit types:

Only use the following emojis:

- `feat`: Add a new feature
- `fix`: Fix a bug or error
- `docs`: Update or add documentation
- `style`: Improve code structure or formatting without logic changes
- `refactor`: Refactor code without adding features or fixing bugs
- `perf`: Improve performance
- `test`: Add or update tests

## Format:

Use the following format for making the commit message:

```
<type>: <concise description>
<optional_body_explaining_why>
```

## Output:

1. Show summary of changes currently staged
2. Propose commit message with appropriate emoji
3. Ask for confirmation before committing

DO NOT auto-commit - wait for user approval, and only commit if the user says so.
