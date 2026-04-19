// ===== Configuración =====
const FTP = {
  SERVER_IP: null,
  CTRL_PORT: 1337,      // deseado
  ROOT_PATH: "/",
  CHUNK: 8192,
  DEBUG: true
};

function dbg(msg) { try { logger.log("[FTP] " + msg); } catch (_) { console.log(msg); } }
function notify(msg) { try { send_notification(msg); } catch (_) { console.log(msg); } }

// ===== Extiende SYSCALL con números del payload Lua =====
// Si ya existen en tu objeto SYSCALL, estos complementan lo faltante.
if (!globalThis.SYSCALL) globalThis.SYSCALL = {};
Object.assign(SYSCALL, {
  read: SYSCALL.read ?? 0x3n,
  write: SYSCALL.write ?? 0x4n,
  open: SYSCALL.open ?? 0x5n,
  close: SYSCALL.close ?? 0x6n,
  getsockname: SYSCALL.getsockname ?? 0x20n,
  accept: SYSCALL.accept ?? 0x1en,
  socket: SYSCALL.socket ?? 0x61n,
  connect: SYSCALL.connect ?? 0x62n,
  bind: SYSCALL.bind ?? 0x68n,
  setsockopt: SYSCALL.setsockopt ?? 0x69n,
  listen: SYSCALL.listen ?? 0x6an,
  netgetiflist: SYSCALL.netgetiflist ?? 0x7dn,
  // añadidos de Lua:
  stat: SYSCALL.stat ?? 0xBCn,
  getdents: SYSCALL.getdents ?? 0x110n,
  mkdir: SYSCALL.mkdir ?? 0x88n,
  rmdir: SYSCALL.rmdir ?? 0x89n,
  rename: SYSCALL.rename ?? 0x80n,
  unlink: SYSCALL.unlink ?? 0xAn,
  lseek: SYSCALL.lseek ?? 0x1DEn
});

// ===== Constantes =====
const AF_INET = 2n;
const SOCK_STREAM = 1n;
const SOL_SOCKET = 0xffffn;
const SO_REUSEADDR = 4n;
const O_RDONLY = 0n, O_RDWR = 2n, O_CREAT = 0x100n, O_TRUNC = 0x1000n, O_APPEND = 0x2000n;

// ===== Helpers =====
function htons(n) { return ((n & 0xFF) << 8) | ((n >> 8) & 0xFF); }
function joinPath(a, b) { return a.endsWith("/") ? a + b : a + "/" + b; }
function dirname(p) { if (p === "/") return "/"; const parts = p.split("/").filter(Boolean); parts.pop(); return parts.length ? "/" + parts.join("/") : "/"; }
function normalizePath(root, input, curPath) {
  const sep = "/";
  let raw;
  if (!input || input === "/") raw = root;
  else if (input.startsWith(sep)) raw = input;
  else raw = curPath === "/" ? joinPath(root, input) : joinPath(curPath, input);
  const parts = raw.split("/").filter(Boolean);
  const out = [];
  for (const p of parts) { if (p === ".") continue; if (p === "..") { if (out.length) out.pop(); continue; } out.push(p); }
  const normalized = sep + out.join("/");
  const rootNorm = root === "/" ? "/" : root;
  if (!normalized.startsWith(rootNorm)) return rootNorm;
  return normalized;
}
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// ===== Stub helpers (these must exist from your exploit or be polyfilled for demo/testing) =====
if(typeof syscall!=="function")window.syscall=function(){return 0;};
if(typeof malloc!=="function")window.malloc=function(){return 0n;};
if(typeof alloc_string!=="function")window.alloc_string=function(){return 0n;};
if(typeof read8_uncompressed!=="function")window.read8_uncompressed=function(){return 0;};
if(typeof read16_uncompressed!=="function")window.read16_uncompressed=function(){return 0;};
if(typeof read32_uncompressed!=="function")window.read32_uncompressed=function(){return 0;};
if(typeof write8_uncompressed!=="function")window.write8_uncompressed=function(){};
if(typeof write16_uncompressed!=="function")window.write16_uncompressed=function(){};
if(typeof write32_uncompressed!=="function")window.write32_uncompressed=function(){};
if(typeof nrdp!=="object")window.nrdp={setTimeout:setTimeout};


// Your FTP server class and logic can now be placed here.
// For full functionality, also include the FTPServer class and "main_ftp" bootstrap
// as in your original code.

console.log("[FTP SERVER PAYLOAD] FTP constants & syscalls loaded.");
// ... FTPServer class and rest of your payload as in previous message ...
