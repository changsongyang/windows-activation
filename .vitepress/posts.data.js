// .vitepress/posts.data.js
import { createContentLoader } from 'vitepress'

const base = '/windows-activation/';

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .filter(({ frontmatter }) => frontmatter && frontmatter.title)
      .map(({ url, frontmatter, excerpt }) => {
        let cleanExcerpt = '';
        if (excerpt) {
          cleanExcerpt = stripHtml(excerpt);
        } else if (frontmatter.description) {
          cleanExcerpt = frontmatter.description;
        }

        return {
          title: frontmatter.title || 'Untitled',
          url: `${base}${url.startsWith('/') ? url.substring(1) : url}`,
          excerpt: cleanExcerpt,
          date: formatDate(frontmatter.date || frontmatter.data || new Date())
        };
      })
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw) {
  const date = new Date(raw)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
