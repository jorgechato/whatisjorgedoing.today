'use client';
import { useEffect } from 'react';

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


export function Code({className, children}: any) {
    const language: string = className?.replace('lang-', '') || '';

    if (language == '') return <>{children}</>

    useEffect(() => {
        hljs.highlightAll();
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
    }, []);

    return (
      <code className={`language-${language}`}>
        {children}
      </code>
    );
  }