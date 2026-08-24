---
description: Create UI component using TDD (test-driven-development)
allowed-tools: Read, Write, Edit, Glob, Bash(npm test:*), Bash(npx vitest:*)
---

## User Input:

The user has provider information about the component to make: $ARGUMENTS

## Do This First:

From the component information above, determine a PascalCase component name (e.g. "a card showing user stats" -> `UserStatsCard`).

## 1. Write Tests First:

Create `tests/components/[ComponentName].test.tsx` with 2-3 simple tests:

- Test that the component renders
- Test key elements are present (roles, text)

Pattern:

```tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ComponentName from '@/components/ComponentName';

describe('ComponentName', () => {
  it('render successfully', () => {
    render(<ComponentName />);
    // assertions
  });
});
```

### 2. Run Tests (expect failure)

```bash
npm test tests/components/[ComponentName].test.tsx
```

### 3. Create Component

- `src/Components/[ComponentName]/[ComponentName].tsx`
- `src/Components/[ComponentName]/[ComponentName].css`

### 4. Run Tests (expect pass)

```bash
npm test tests/components/[ComponentName].test.tsx
```

Iterate on component development until all tests pass.

## Rules

- Keep tests minimal
- Only proceed when current step passes
