import {webcrypto} from 'node:crypto';
const password=process.argv[2]; if(!password){console.error('Usage: node scripts/hash-password.mjs "YourPassword"');process.exit(1)}
const salt=webcrypto.getRandomValues(new Uint8Array(16));const enc=new TextEncoder();const key=await webcrypto.subtle.importKey('raw',enc.encode(password),'PBKDF2',false,['deriveBits']);const bits=await webcrypto.subtle.deriveBits({name:'PBKDF2',salt,iterations:150000,hash:'SHA-256'},key,256);const b64=b=>Buffer.from(b).toString('base64url');console.log(`pbkdf2$150000$${b64(salt)}$${b64(bits)}`);
