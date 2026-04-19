let r = {};

const platformModule = globalThis.moduleManager.getModuleByName(
    "14669ca3b1519ba2a8f40be287f646d4d7593eb0"
);

class WasmPrimitive64 {
    constructor() {
        const wasmBytes = new Uint8Array([/*...*/]); // Simplified for space
        this.wasmModule = new WebAssembly.Module(wasmBytes);
        this.wasmInstance = new WebAssembly.Instance(this.wasmModule, {});
    }

    read64(address) {
        address = platformModule.alignMemoryAddress(address);
        return BigInt(this.wasmInstance.exports.read(address));
    }

    write64(address, value) {
        address = platformModule.alignMemoryAddress(address);
        this.wasmInstance.exports.write(address, value);
    }
}

async function exploitPS5() {
    const primitive = new WasmPrimitive64();
    primitive.write64(0x10000, 0x4141414142424242n);
    const value = primitive.read64(0x10000);
    console.log(`[STAGE1] Read Value: 0x${value.toString(16)}`);
}

r.si = exploitPS5;
