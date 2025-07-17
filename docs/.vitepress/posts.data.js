import { createContentLoader } from 'vitepress'

const base = '/windows-activation/';
const EXCERPT_MAX_LENGTH = 150;
const MAX_POSTS_PER_LANG = 5;
const MAX_TOTAL_POSTS = 10;

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

export default createContentLoader(['fa/wa/*.md', 'wa/*.md'], {
  excerpt: true,
  transform(raw) {
    const sortedPosts = raw
      .filter(({ frontmatter }) => frontmatter?.title)
      .map(({ url, frontmatter, excerpt }) => {
        const lang = url.includes('/fa/wa/') ? 'fa' : 'en';

        return {
          title: frontmatter.title,
          url: `${base}${url.startsWith('/wa') ? url.substring(1) : url}`,
          excerpt: stripHtmlAndTruncate(frontmatter.description || excerpt, EXCERPT_MAX_LENGTH),
          date: formatDate(frontmatter.date, lang),
          lang
        };
      })
      .sort((a, b) => b.date.time - a.date.time);

    const faPosts = sortedPosts.filter(post => post.lang === 'fa').slice(0, MAX_POSTS_PER_LANG);
    const enPosts = sortedPosts.filter(post => post.lang === 'en').slice(0, MAX_POSTS_PER_LANG);

    return [...faPosts, ...enPosts]
      .sort((a, b) => b.date.time - a.date.time)
      .slice(0, MAX_TOTAL_POSTS);
  }
});
