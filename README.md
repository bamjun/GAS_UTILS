# Google Apps Script Library
add library by id
```
1DACK8esZyNHKxl23yYrX4V08mGytETjBXQ2j_SEe_PZmqjsIzFTcvuLr
```

## 1. send message by discord web hook
```javascript
    const dico = GAS_UTILS.DiscordNotifier('discord web hook address')
    dico.sendText('message')

```

## 2. edit message by google docs

- Clear all content in Google Docs and input message

```javascript
    const docs = GAS_UTILS.GoogleDocs('google docs id')
    docs.clearAddText("TEXT")
```

- Add text to the end of Google Docs while keeping existing content

```javascript
    const docs = GAS_UTILS.GoogleDocs('google docs id')
    docs.addText("TEXT")
```