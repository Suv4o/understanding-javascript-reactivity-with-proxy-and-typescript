type RefCallback<T> = (newValue: T, oldValue: T) => void;

function ref<T>(initialValue: T, onChange?: RefCallback<T>) {
    const target = { value: initialValue };

    const handler: ProxyHandler<{ value: T }> = {
        set(obj, prop, newValue) {
            if (prop === "value" && obj.value !== newValue) {
                onChange?.(newValue as T, obj.value); // Trigger callback
            }
            obj[prop as keyof typeof obj] = newValue;
            return true;
        },
    };

    return new Proxy(target, handler);
}

// Usage with TypeScript
const age = ref(25, (newValue, oldValue) => {
    console.log(`Age changed from ${oldValue} to ${newValue}`);
});

age.value = 30; // Logs: Age changed from 25 to 30
