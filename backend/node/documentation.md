## Entries routes:

-   **"/entries/addEntry"** - This will add an entry, below is the schema of the object that needs to be passed into the body. The `messageFromBot` property is just to store whether this reponse was from the user or from chatGPT, and this can be used when reading the data from the server and putting it back on the app.

    ```
    let testObject = {
        date: Javascript Date Object,
        title: "title",
        text: "text",
        messages: [{ messageFromBot: false, message: "message"}],
        id: USE uuid TO GENERATE THE ID,
    };
    ```

-   **"/entries/removeEntry"** - This will remove an entry, you just need to pass in the id of the item.

-   **"/entries/findEntry"** - This will find an entry from the database, you just need to pass in the id of the item.

-   **/entries/getAllEntries** - This will get all the entries from the database, no parameters are required.
