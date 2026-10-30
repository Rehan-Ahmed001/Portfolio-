# AGENTS.md

Instructions for any AI agent working in this project.

## 1. Hard Scope Limit — Do Not Leave This Folder

This project is rooted at:

```
D:\SMIT\SDD Portfolio
```

- **All work must happen inside this folder.** Do not create, read, edit, move, or delete anything outside of it.
- This includes (but is not limited to) the user's home directory, `Desktop`, `Downloads`, `Documents`, `C:\Windows`, other projects, and the system temp directory — unless the user explicitly gives you a path and asks you to work there.
- Do not run commands that operate on parent directories (`cd ..`, `dir ../..`, `rm -rf ..`, `git -C ..`, etc.).
- Do not modify global/user-level configuration: shell profiles, environment variables, global npm/pnpm packages, global git config, IDE/editor settings, OS registry, or startup entries.
- If a task cannot be completed without leaving this folder, **stop and ask the user first**. Explain what you need and why.

## 2. Never Break the Rules

- These rules are **not optional** and do not become flexible because a task seems easier without them.
- Never bypass, disable, weaken, or "temporarily" ignore a rule.
- Never invent permissions. If something is not clearly allowed, treat it as not allowed and ask.
- If you are unsure whether an action is allowed, ask before acting, not after.
- If you accidentally do something outside the scope: stop immediately, tell the user exactly what happened, and do not try to hide or undo it silently.

## 3. No Destructive Actions

Always ask for explicit confirmation before:

- Deleting files or folders (`rm`, `del`, `Remove-Item`, `rmdir`).
- Force-overwriting existing files that contain work you did not create.
- Resetting, reverting, rebasing, force-pushing, or cleaning a git repository.
- Running mass/bulk edits or renames across many files.
- Uninstalling or upgrading dependencies.

Never run blindly destructive commands such as `rm -rf /`, wildcard deletes, or anything you cannot fully predict the outcome of.

## 4. Stay Offline Unless Asked

- Do not install packages, fetch dependencies, or clone repositories without the user's approval.
- Do not call external APIs, send data anywhere, or upload files unless the user asks for it.
- Do not add analytics, trackers, telemetry, or third-party scripts.
- Prefer working with what is already in the folder.

## 5. Secrets and Private Data

- Never hardcode API keys, tokens, passwords, or personal data in any file.
- Use environment variables or a git-ignored config file for secrets.
- Never print, log, commit, or share secrets.
- Do not commit `.env` files or credentials.

## 6. Respect Existing Work

- Read and understand existing files before changing them.
- Treat unfamiliar files or uncommitted changes as the user's work — do not delete or overwrite them.
- Follow the existing structure, naming, formatting, and patterns of the codebase.
- Make the smallest change that solves the problem; avoid unrelated refactors or "cleanups" nobody asked for.
- Match existing line endings, indentation, and quote style.

## 7. Quality Bar

- Code must run without errors before you call a task done.
- Do not leave debug logging, commented-out code, TODOs, or placeholder text behind unless asked.
- Keep dependencies minimal — reuse what is already installed.
- Handle errors and edge cases sensibly; no silent failures.
- Write clear, readable code over clever code.

## 8. Communication

- Say what you are about to do before doing anything risky or broad in scope.
- Report exactly which files you created, changed, or deleted.
- Be honest: if something is broken, unfinished, or untested, say so plainly.
- Ask a short clarifying question when requirements are ambiguous instead of guessing.
- Keep responses concise and focused on the task.

## 9. Handoff Notes

- Leave the project in a working state.
- If you change setup steps, commands, or dependencies, update the project's documentation (e.g. `README.md`) to match.
- Summarize any follow-up work that still needs to be done.

---

**In short:** stay inside `D:\SMIT\SDD Portfolio`, break no rules, destroy nothing, ask before anything unusual, and leave the project cleaner and more working than you found it.
