import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import mathjax3 from 'markdown-it-mathjax3'
import attrs from 'markdown-it-attrs'
import { mermaid } from 'vitepress-plugin-mermaid'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

const base = '/windows-activation/'
const siteUrl = `https://sahar-km.github.io${base}`

export default defineConfig({
  base: base,
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    // اضافه کردن استایل و اسکریپت Video.js
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/video.js@8.17.4/dist/video-js.min.css' }],
    ['script', { src: 'https://unpkg.com/video.js@8.17.4/dist/video.min.js' }]
  ],

  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(mathjax3)
      md.use(attrs)
      md.use(tabsMarkdownPlugin) // فعال‌سازی پلاگین تب‌ها
    },
    lineNumbers: true
  },

  // Mermaid diagram support
  mermaid: {},

  // --- I18n Configuration ---
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'A E G',
      description: 'Instant Windows and Office Activation Tools',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guides', link: '/en/' }
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Activation Guides',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/' },
                { text: 'KMS Activation', link: 'kms' },
              ]
            },
            {
              text: 'Technical Details',
              collapsed: true,
              items: [
                { text: 'Methods Chart', link: 'chart' },
                { text: 'Clean Install Windows', link: 'clean_install_windows' },
                { text: 'Remove Malware', link: 'remove_malware' },
                { text: 'Office C2R Custom Install', link: 'office_c2r' },
                { text: 'Fix WPA Registry', link: 'fix-wpa-registry' },
              ]
            },
            {
              text: 'Advanced Guides',
              collapsed: true,
              items: [
                { text: 'HWID (Digital License)', link: 'hwid' },
                { text: 'KMS38', link: 'kms38' },
                { text: 'Online KMS', link: '/en/online_kms' },
                { text: '$OEM$ Folders', link: 'oem-folder' },
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/sahar-km/windows-activation/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
      }
    },
    fa: {
      label: 'فارسی',
      lang: 'fa-IR',
      dir: 'rtl',
      title: 'A E G',
      description: 'ابزارهای فعال‌سازی فوری ویندوز و آفیس',
      themeConfig: {
        nav: [
          { text: 'خانه', link: '/fa/index-fa' },
          { text: 'روش KMS', link: '/fa/kms-fa' }
        ],
        sidebar: {
          '/fa/': [
            {
              text: 'راهنمای فعال‌سازی',
              collapsed: false,
              items: [
                { text: 'مقدمه و آموزش', link: 'index-fa' },
                { text: 'فعال‌سازی با روش KMS', link: 'kms-fa' },
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/sahar-km/windows-activation/edit/main/docs/:path',
          text: 'این صفحه را در گیت‌هاب ویرایش کنید'
        },
      }
    }
  },

  themeConfig: {
    logo: '/logo-h.svg',
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NiREvil/windows-activation' },
      { icon: 'telegram', link: 'https://t.me/F_NiREvil/6448' }
    ],
    footer: {
      message: 'Made with 🩶 using VitePress',
      copyright: '© 2025 REvil — Sharing knowledge, one note at a time'
    }
  },

  // تنظیمات Vite برای بهینه‌سازی Video.js
  vite: {
    optimizeDeps: {
      include: ['video.js']
    }
  }
})
