export const getToDoItemsFromLocalStorage = (storageKey) => {
    const storageValue = localStorage.getItem(storageKey);

    let toDoItems = null;

    try {
        const storageValueJSON = JSON.parse(storageValue);

        if(Array.isArray(storageValueJSON)) {
            toDoItems = storageValueJSON;
        }
    }
    catch(e) {
        toDoItems = [];
    }
    return toDoItems;
};

export const saveTodoItemsToLocalStorage = (storageKey, storageValue) => {
    localStorage.setItem(storageKey, JSON.stringify(storageValue))
};