#### Helmet

Use `helmet` to set security headers.

```sh
npm i helmet && npm i -D @types/helmet
```

Headers without helmet:

```json
{
  "X-Powered-By": "Express"
}
```

Headers with helmet:

```json
{
  "x-dns-prefetch-control": "off",
  "x-frame-options": "SAMEORIGIN",
  "strict-transport-security": "max-age=15552000; includeSubDomains",
  "x-download-options": "noopen",
  "x-content-type-options": "nosniff",
  "x-xss-protection": "1; mode=block"
}
```
