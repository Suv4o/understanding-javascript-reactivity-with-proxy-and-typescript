function ref(initialValue, onChange) {
    const target = { value: initialValue };

    const handler = {
        set(obj, prop, newValue) {
            if (prop === "value") {
                onChange?.(newValue, obj[prop]); // Trigger callback
            }
            obj[prop] = newValue; // Update the value
            return true;
        },
    };

    return new Proxy(target, handler);
}

// Example usage
const name = ref("Alex", (newValue, oldValue) => {
    console.log(`Name changed from ${oldValue} to ${newValue}`);
});

console.log(name.value); // Alex
name.value = "John"; // Logs: Name changed from Alex to John
