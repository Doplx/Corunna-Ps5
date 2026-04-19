// ===== Configuración =====
const FTP = {
  SERVER_IP: null,
  CTRL_PORT: 1337,
  ROOT_PATH: "/",
  CHUNK: 8192,
  DEBUG: true
};

function dbg(msg) { try { logger.log("[FTP] " + msg); } catch (_) { console.log(msg); } }
function notify(msg) { try { send_notification(msg); } catch (_) { console.log(msg); } }

// ===== Extiende SYSCALL con números del payload Lua =====
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
  stat: SYSCALL.stat ?? 0xBCn,
  getdents: SYSCALL.getdents ?? 0x110n,
  mkdir: SYSCALL.mkdir ?? 0x88n,
  rmdir: SYSCALL.rmdir ?? 0x89n,
  rename: SYSCALL.rename ?? 0x80n,
  unlink: SYSCALL.unlink ?? 0xAn,
  lseek: SYSCALL.lseek ?? 0x1DEn
});

// ...   All helpers & FTPServer class as in your message ...
// (Paste the full FTPServer class with async main_ftp bootstrap here.)

console.log("[FTP SERVER PAYLOAD] FTP constants & syscalls ready.");
// For full integration, you can paste/enable the full FTPServer class & main_ftp()
