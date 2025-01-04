function watch(target, property, callback) {
    const handler = {
        set(obj, prop, value) {
            if (prop === property) {
                callback(value, obj[prop]); // Call the callback
            }
            obj[prop] = value; // Update the value
            return true;
        },
    };

    return new Proxy(target, handler);
}

// Usage example
let data = { value: 0 };
const watchedData = watch(data, "value", (newValue, oldValue) => {
    console.log(`Value changed from ${oldValue} to ${newValue}`);
});

watchedData.value = 42; // Logs: Value changed from 0 to 42
watchedData.value = 100; // Logs: Value changed from 42 to 100
