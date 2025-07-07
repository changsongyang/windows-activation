import { createContentLoader } from 'vitepress'

const base = '/windows-activation/';
const EXCERPT_MAX_LENGTH = 150;

// تابع برای حذف HTML و کوتاه کردن متن
function stripHtmlAndTruncate(html, maxLength) {
  if (!html) return '';
  let text = html
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&ZeroWidthSpace;|&nbsp;/gi, ' ')
    .replace(/\s\s+/g, ' ')
    .trim();
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// تابع برای فرمت تاریخ
function formatDate(raw) {
  const date = raw ? new Date(raw) : new Date();
  if (isNaN(date.getTime())) return { time: 0, string: 'N/A' }; // تاریخ نامعتبر
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  };
}

// --- تنظیمات اصلی برای لودر محتوا ---
export default createContentLoader('en/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .filter(({ frontmatter }) => frontmatter?.title) // فقط پست‌های دارای عنوان
      .map(({ url, frontmatter, excerpt }) => {
        // تشخیص زبان از مسیر (اختیاری - برای آینده)
        const lang = 'en'; // یا از `url.includes('/fa/') ? 'fa' : 'en'` استفاده کنید اگر پست‌های فارسی هم اضافه شوند
        return {
          title: frontmatter.title,
          url: `${base}${url.startsWith('/') ? url.substring(1) : url}`,
          excerpt: stripHtmlAndTruncate(frontmatter.description || excerpt, EXCERPT_MAX_LENGTH),
          date: formatDate(frontmatter.date),
          lang // اضافه کردن زبان به خروجی (مفید برای فیلتر کردن در UI)
        };
      })
      .sort((a, b) => b.date.time - a.date.time); // مرتب‌سازی بر اساس تاریخ (نزولی)
  }
});
