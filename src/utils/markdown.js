import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';

let processorPromise;

// Blog posts never contain code fences, so syntax highlighting is pure
// overhead. The processor itself is also cached across requests instead of
// being rebuilt on every blog page load.
export function getMarkdownProcessor() {
  if (!processorPromise) {
    processorPromise = createMarkdownProcessor({
      syntaxHighlight: false,
      rehypePlugins: [rehypeSlug],
    });
  }
  return processorPromise;
}
