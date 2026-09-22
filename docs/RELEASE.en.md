# Release process

1. Review `STATUS.md` and `AGENTS.md`.
2. Make only targeted source changes.
3. Run `node tools/check-release.mjs`.
4. UI/event changes require real browser acceptance.
5. Store runtime evidence under `test-artifacts/<VERSION>/`.
6. Update `CHANGELOG.md`, `STATUS.md`, and `VERSION.json`.
7. Keep the release HTML under `release/` as well.
8. Record SHA-256.
9. Push/tag/release only with user approval.

The release artifact remains one standalone HTML file.
