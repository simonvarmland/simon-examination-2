# simon-examination-2

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