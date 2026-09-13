# Project Guidelines

## Smart Commit Workflow

When creating commits, follow this structured approach:

1. **Analyze changes** — Check `git status` and `git diff` to understand all modifications
2. **Group logically** — Organize files by feature/component/type:
   - Types/interfaces together
   - Data files together
   - UI components together
   - Configuration together
3. **Create semantic commits** — One logical change per commit
   - Separate unrelated changes into different commits
   - Use clear, descriptive commit messages (action-based)
   - Keep commits focused and cohesive
4. **Follow commit rules**:
   - Never mix types/interfaces with implementation
   - Never mix configuration changes with feature changes
   - Use present tense ("Add feature" not "Added feature")
5. **Execute commits** — Use `git add` for specific files and `git commit` with the message
6. **Push changes** — Run `git push origin main` when ready

This ensures clean, logical, and reviewable git history.
