// Realistic sample documents behind each tool's "Load sample" button.

export const SAMPLE_JSON = `[
  { "id": 1, "name": "Ada Lovelace", "role": "admin", "active": true },
  { "id": 2, "name": "Alan Turing", "role": "editor", "active": false },
  { "id": 3, "name": "Grace Hopper", "role": "viewer", "active": true }
]`;

export const SAMPLE_CSV = `id,name,role,active
1,Ada Lovelace,admin,true
2,Alan Turing,editor,false
3,Grace Hopper,viewer,true`;

export const SAMPLE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<users>
  <user><id>1</id><name>Ada Lovelace</name><role>admin</role></user>
  <user><id>2</id><name>Alan Turing</name><role>editor</role></user>
  <user><id>3</id><name>Grace Hopper</name><role>viewer</role></user>
</users>`;

export const SAMPLE_YAML = `- id: 1
  name: Ada Lovelace
  role: admin
  active: true
- id: 2
  name: Alan Turing
  role: editor
  active: false`;

export const SAMPLE_HTML = `<article>
  <h1>Hello &amp; welcome</h1>
  <p>This is <strong>Digi-Toolbox</strong> — tools that run in your browser.</p>
</article>`;

export const SAMPLE_TEXT = `He said "it's 5/5" — then left.
Tabs	and newlines are escaped too.`;

export const SAMPLE_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkYSBMb3ZlbGFjZSIsImlhdCI6MTcwMDAwMDAwMCwicm9sZSI6ImFkbWluIn0.4Adcj3UFYzPUVaVF43FmMab6RlaQD8A9V8wFzzht-KQ";
