# 📍 Notice about the modified Baileys 7.X version

This project uses **Baileys 7.0.1-rc.9-carbon**, a custom modified build based directly on the latest upstream source from the official Baileys GitHub repository.

This version has been specifically adapted and optimized to work correctly with the **Nezu bot**.  
Due to these internal changes, stability and compatibility are only guaranteed within Nezu's ecosystem.

If you decide to use this build in other projects, any errors, incompatibilities, or unexpected behavior will be the responsibility of the developer implementing it.

**No support is provided for external implementations.**

---

## 📍 Internal modifications

This custom build includes several internal adjustments such as:

- Direct mutex handling improvements
- Internal stability adjustments
- Compatibility patches for Nezu
- Structural adjustments required by the bot architecture

These changes were made strictly to ensure reliable behavior inside Nezu and may not behave the same way in other environments.

---

## 📍 Credits to original Baileys maintainers

All core rights and credits remain with the original Baileys maintainers who actively develop and maintain the library:

- **WhiskeySockets**  
  https://github.com/WhiskeySockets/Baileys/

- **PurpShell**  
  https://github.com/purpshell

- **Original Baileys Author (adiwajshing)**

This project only modifies behavior for integration purposes and does not claim ownership of the original Baileys codebase.

---

## 📍 About older NEZU adapted builds

If you are still using older adapted Baileys versions (**6.X branch**), you should be aware that these builds are now considered **deprecated** and are **no longer maintained or updated**.

These versions were based on older Baileys architecture and are not compatible with the structural changes introduced in **Baileys 7.X**.

Because of this:

- No new fixes will be added
- No compatibility updates will be provided
- No migration support will be given
- These builds should be considered **legacy software**

If your project still depends on them, it is strongly recommended that you maintain your own fork and handle your own fixes.

Legacy repositories:

- **Bails (Baileys 6.X legacy fork)**  
  https://github.com/ds6/bails/

- **Meta (Baileys 6.X related tooling)**  
  https://github.com/ds6/meta/

These repositories remain only for historical or reference purposes.
Future removal may happen at any time.
---

## 📍 Important: Baileys 7.X uses full ES Modules

Starting from version **7.X**, Baileys migrated completely to **ES Modules (ESM)**.

This means:

- No more `require()`
- No CommonJS compatibility layer
- No `default` import patterns
- Only standard ESM imports

---

## 📍 Example ESM connection (Baileys 7.X)

```js
import { makeWASocket, useMultiFileAuthState } from 'baileys'

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth')

  const sock = makeWASocket({
    auth: state
  })

  sock.ev.on('creds.update', saveCreds)
}

start()
```

---

## 📍 Recommended WhatsApp Web version

It is always recommended to use the latest available WhatsApp Web version.  
You can check updated compatible versions here:

- **WppConnect**  
  https://wppconnect.io/whatsapp-versions/

Example using a specific version:

```js
import { makeWASocket, useMultiFileAuthState } from 'baileys'

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth')

  const sock = makeWASocket({
    auth: state,
    version: [2, 3000, 1033846690]
  })

  sock.ev.on('creds.update', saveCreds)
}

start()
```

---

## 📍 Final note

This build (**7.0.1-rc.9-carbon**) exists solely to ensure proper operation inside **Nezu**.  
If you need different behavior, you should modify your own fork according to your project's needs.