# Author setup

Generate a password hash:

```bash
node scripts/hash-password.mjs "A-strong-unique-password"
```

Then insert the returned hash into D1 with the authorised person's email. Repeat for each limited authorised person. Never put the password or hash in frontend JavaScript.
