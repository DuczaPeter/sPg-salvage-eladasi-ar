# Release process

1. Review `STATUS.md` and `AGENTS.md`.
2. Use the runtime-validated `index.html` as baseline; never regenerate it from scratch.
3. Make only targeted source changes.
4. Run `node tools/check-release.mjs`.
5. UI/event changes require real browser acceptance.
6. Store runtime log as `test-artifacts/<VERSION>/runtime-log.json`.
7. Update `runtime-summary.json`, `CHANGELOG.md`, `STATUS.md`, and `VERSION.json`.
8. Verify byte parity between `index.html` and the single-file HTML under `release/`.
9. Record SHA-256 and generate file inventory.
10. Push/tag/publish only with explicit user approval.

The user release always remains one standalone HTML file.

## V4.1 release standard

Full GitHub release/package work follows `docs/RELEASE_STANDARD.md` V4.1 and starts by recording `docs/RELEASE-CONTRACT.md`. This V058 packaging revision is documentation/release-metadata scope only: application bytes remain unchanged. Final gates and limitations are recorded in `docs/RELEASE-AUDIT-V4.1.md`.
