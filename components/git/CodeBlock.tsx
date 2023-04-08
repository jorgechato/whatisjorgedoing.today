'use client';
import { useEffect } from 'react';

import hljs from 'highlight.js/lib/core';


export function CodeBlock({ className, children }: any) {
  const language: string = className?.replace('lang-', '') || '';

  if (language == '') return <code className="before:content-[''] after:content-[''] nohighlight">{children}</code>;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <code className={`language-${language}`}>
      {children}
    </code>
  );
}