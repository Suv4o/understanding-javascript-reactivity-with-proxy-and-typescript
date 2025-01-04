// Define a target object
let target = { value: 0 };

// Create a Proxy handler to track changes
const handler = {
    set(obj, prop, value) {
        console.log(`Property "${prop}" changed from ${obj[prop]} to ${value}`);
        obj[prop] = value; // Update the value
        return true; // Indicate success
    },
};

// Create a proxy for the target object
const proxy = new Proxy(target, handler);

// Monitor changes
proxy.value = 42; // Logs: Property "value" changed from 0 to 42
proxy.value = 100; // Logs: Property "value" changed from 42 to 100
