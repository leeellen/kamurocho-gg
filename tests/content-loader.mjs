import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, "..");
export const snapshot = JSON.parse(readFileSync(path.join(root, "src/lib/data/snapshot.json"), "utf8"));
const modules = new Map();
// Exercise source aggregation offline; only the DB and framework boundaries are stubbed.
export function load(file) {
  if (file === "next/headers") return {};
  if (file === "react") return { cache: (fn) => fn };
  if (!file.startsWith(".") && !file.startsWith("/") && !file.startsWith("@/")) return require(file);
  let resolved = file.startsWith("@/") ? path.join(root, "src", file.slice(2)) : file;
  if (resolved.endsWith("/data/fetch")) return { fetchSeriesRows: async () => snapshot };
  if (!path.extname(resolved)) {
    try { resolved = require.resolve(`${resolved}.ts`); }
    catch { resolved = require.resolve(path.join(resolved, "index.ts")); }
  }
  if (modules.has(resolved)) return modules.get(resolved).exports;
  const loaded = { exports: {} };
  modules.set(resolved, loaded);
  const { outputText } = ts.transpileModule(readFileSync(resolved, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    fileName: resolved,
  });
  vm.runInThisContext(`(function(require,module,exports){${outputText}\n})`, { filename: resolved })(
    (id) => load(id.startsWith(".") ? path.resolve(path.dirname(resolved), id) : id), loaded, loaded.exports,
  );
  return loaded.exports;
}

