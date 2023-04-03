import hljs from 'highlight.js/lib/core';
import rust from 'highlight.js/lib/languages/rust';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import json from 'highlight.js/lib/languages/json';
import javascripy from 'highlight.js/lib/languages/javascript';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import java from 'highlight.js/lib/languages/java';
import typescript from 'highlight.js/lib/languages/typescript';
import go from 'highlight.js/lib/languages/go';
import python from 'highlight.js/lib/languages/python';
import php from 'highlight.js/lib/languages/php';
import sql from 'highlight.js/lib/languages/sql';


export function RegisterLanguages(): void {
    hljs.registerLanguage('rust', rust);
    hljs.registerLanguage('yaml', yaml);
    hljs.registerLanguage('yml', yaml);
    hljs.registerLanguage('bash', bash);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('javascript', javascripy);
    hljs.registerLanguage('js', javascripy);
    hljs.registerLanguage('dockerfile', dockerfile);
    hljs.registerLanguage('docker', dockerfile);
    hljs.registerLanguage('java', java);
    hljs.registerLanguage('ts', typescript);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('go', go);
    hljs.registerLanguage('python', python);
    hljs.registerLanguage('php', php);
    hljs.registerLanguage('sql', sql);
}