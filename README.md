# simon-examination-2

[Se videoredovisningen i Teams](https://teams.microsoft.com/l/meetingrecap?driveId=b%21xKchYi_QTk-s2BVxb-e-uH0JVTCXWztPimjavu4mVMsbcvJlKqCKRpBmf3x8OwqG&driveItemId=01FMONKRSDUHBNH2KAMNFLEWZU2OUWFKZ6&sitePath=https%3A%2F%2Ffunet.sharepoint.com%2Fsites%2FMjukvaruutvecklareYhdistans%2FDelade+dokument%2FGeneral%2FRecordings%2FM%C3%B6te+i+General-20261007_180831-M%C3%B6tesinspelning.mp4%3Fweb%3D1&fileUrl=https%3A%2F%2Ffunet.sharepoint.com%2Fsites%2FMjukvaruutvecklareYhdistans%2FDelade+dokument%2FGeneral%2FRecordings%2FM%C3%B6te+i+General-20261007_180831-M%C3%B6tesinspelning.mp4%3Fweb%3D1&threadId=19%3A-jSADGv4Q0CxSKWLeIEv6p7z_xpTDBxYL8AX46AG0ac1%40thread.tacv2&organizerId=54e21c37-34d2-41da-9be4-989c9532bb33&tenantId=a4d3b9bf-2082-4eee-ab79-fd407faef1e5&callId=cb8a2c16-5bcb-47a9-bcc7-a9b85fedb288&threadType=space&meetingType=MeetNow&organizerGroupId=b4fc5d66-9d44-492e-bd7d-806ae3068bcb&channelType=Standard&replyChainId=1791389229901&subType=RecapSharingLink_RecapCore&recapType=Recording)

## 1. Frågor om koden

### State-hantering

Jag använder state för att hålla reda på listan med todos och om de är klara eller inte. Varje todo objekt har ett id, en text och ett `done`-värde som är true eller false. När jag uppdaterar state med `setTodos` renderar React om det som behöver uppdateras så att ändringen syns direkt i gränssnittet.

### Oföränderlighet (Immutability)

Man ska inte ändra den befintliga state-arrayen direkt med till exempel `push`, eftersom man istället vill ge React en ny array när state ändras. När jag lägger till använder jag spread för att skapa en ny array med de gamla todos plus den nya. När jag tar bort använder jag `filter`, som också skapar en ny array, och sedan uppdaterar jag state med `setTodos`.


## 2. Kodgranskning

Problemet med koden är att `todos.push(text)` ändrar den befintliga arrayen direkt. I React vill man istället skapa en ny array och använda den när state ska uppdateras.

I min egen app gör jag istället så här när jag lägger till en todo:

```js
setTodos([
  ...todos,
  { id: Date.now(), text: text, done: false }
]);
```

Då skapar jag en ny array med de gamla todos plus den nya, istället för att ändra den befintliga arrayen direkt.

## 3. Problemlösning & Reflektion

När jag körde fast försökte jag gå igenom koden steg för steg och förstå vad varje del faktiskt gjorde. En sak jag hade svårt att förstå i början var `filter`, eftersom jag tänkte på det som att den skulle filtrera bort den todo jag ville ta bort. Med hjälp av AI fick jag det förklarat på ett sätt som var enklare för mig: `filter` filtrerar fram det som ska vara kvar, alltså de todos vars id inte är samma som id:t jag vill ta bort. Efter det blev det mycket lättare för mig att förstå hur min `handleRemove`-funktion fungerade.