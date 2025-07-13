import { createContentLoader } from 'vitepress'

const base = '/windows-activation/';
const EXCERPT_MAX_LENGTH = 150;

function stripHtmlAndTruncate(html, maxLength) {
  if (!html) return '';
  let text = html
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&ZeroWidthSpace;|&nbsp;/gi, ' ')
    .replace(/\s\s+/g, ' ')
    .trim();
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function formatDate(raw, lang = 'en') {
  const date = raw ? new Date(raw) : new Date();
  if (isNaN(date.getTime())) return { time: 0, string: 'N/A' };
  
  const locale = lang === 'fa' ? 'fa-IR' : 'en-US';
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return {
    time: +date,
    string: date.toLocaleDateString(locale, options)
  };
}

export default createContentLoader(['{en,fa}/*.md'], {
  excerpt: true,
  transform(raw) {
    return raw
      .filter(({ frontmatter }) => frontmatter?.title)
      .map(({ url, frontmatter, excerpt }) => {
        const lang = url.includes('/fa/') ? 'fa' : 'en';
        
        return {
          title: frontmatter.title,
          url: `${base}${url.startsWith('/') ? url.substring(1) : url}`,
          excerpt: stripHtmlAndTruncate(frontmatter.description || excerpt, EXCERPT_MAX_LENGTH),
          date: formatDate(frontmatter.date, lang),
          lang
        };
      })
      .sort((a, b) => b.date.time - a.date.time);
  }
});
