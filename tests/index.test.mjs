import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import * as api from "../dist/index.js";
test("whitespace", () => assert.equal(api.normalize("  a\n b  "), "a b"));
test("accent and case", () =>
  assert.equal(
    api.normalize(" ÉTÉ ", { accents: true, lowercase: true }),
    "ete",
  ));
test("unicode compatibility", () => assert.equal(api.normalize("Ａ"), "A"));
