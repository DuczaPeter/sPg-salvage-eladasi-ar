# Security / Biztonság

## HU

- A projekt nem igényel API-kulcsot vagy titkos kulcsot.
- Ne commitolj jelszót, tokent, cookie-t vagy személyes adatot.
- A külső adatok megbízhatatlan inputnak számítanak; új mezőt vagy mechanikát validálni kell.
- A `target="_blank"` linkek `rel="noopener"` attribútummal nyíljanak.
- A projekt nem futtat külső, letöltött kódot; adatot JSON-ként kezel.
- Ismeretlen új Star Citizen mechanikát nem szabad forrás nélkül automatikusan elfogadni.

Biztonsági hiba jelentésénél ne tegyél közzé érzékeny adatot publikus issue-ban.

## EN

- The project requires no API key or secret.
- Do not commit passwords, tokens, cookies, or personal data.
- External data are untrusted input and new fields/mechanics must be validated.
- `target="_blank"` links must use `rel="noopener"`.
- The project does not execute downloaded third-party code; data are handled as JSON.
- Unknown new Star Citizen mechanics must not be accepted automatically without evidence.

Do not disclose sensitive information in a public issue when reporting a security problem.
