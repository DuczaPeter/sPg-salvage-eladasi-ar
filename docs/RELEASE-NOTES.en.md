# V058 release notes — English

V058 completes the separation of CMAT **Sell Only** from ship-dependent Refine + Sell logic.

**V056:** finished CMAT amount is used directly with no recovery.  
**V057:** no ship requirement and no ship-access filtering in Sell Only.  
**V058:** even equal-price tie-break ordering is prohibited from using ship-dependent access weight.

The supplied user-runtime log reports the complete Sell Only feature block PASS; every salvage ship and the no-ship baseline produce the same CMAT list/order. Full diagnostics: 144/144 coverage, 50 feature checks, 0 feature failures, and 0 runtime errors.

Access-audit ATTENTION remains source-completeness only: 40 VERIFIED, 19 UNKNOWN, 0 CONFLICT.

## 2026-09-23 – Release Standard V4.1 package revision

The application version remains V058-SellOnlyDeterministic. The package adds the V4.1 release standard, Release Contract, release audit, expanded static gate, credential/secret cleanliness checks, and refreshed manifest/inventory/checksum metadata. Runtime code is unchanged.

## 2026-09-23 – Release Standard V4.2 package revision

The application is unchanged (V058-SellOnlyDeterministic). The package restores the dot-prefixed files missing from the published repository, adds a `.gitattributes` line-ending policy, makes `README.md` the full Hungarian landing page, replaces the project-local standard with the canonical V4.2 and extends the gate with inventory-existence checks.
