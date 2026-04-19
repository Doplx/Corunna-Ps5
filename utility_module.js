let utility_module = (() => {
    return {
        Int64: (value) => {
            // Helper for 64-bit integer arithmetic
            return BigInt(value);
        },
    };
})();
