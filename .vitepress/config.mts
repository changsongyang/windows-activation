import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/windows-activation/',
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AEG Activation - Instant Windows & Office Activation Tools' }],
    ['meta', { property: 'og:description', content: 'A reliable, open-source activation toolkit for Windows and Office, featuring HWID, KMS, Ohook, and more.' }]
  ],

  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(mathjax3)
    },
    lineNumbers: true
  },

  // --- I18n Configuration ---
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'AEG Activation',
      description: 'Instant Windows and Office Activation Tools',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guides', link: '/en/index' }
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Activation Guides',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/en/index' },
                { text: 'KMS Activation', link: '/en/kms' },
              ]
            },
            {
              text: 'Technical Details',
              collapsed: true,
              items: [
                { text: 'Methods Chart', link: '/en/chart' },
                { text: 'HWID (Digital License)', link: '/en/hwid' },
                // { text: 'KMS38', link: '/en/kms38' }, // کامنت شد - نیاز به ترجمه یا محتوای فارسی
                // { text: 'TSforge', link: '/en/tsforge' }, // کامنت شد - نیاز به ترجمه یا محتوای فارسی
                // { text: '$OEM$ Folders (Pre-activation)', link: '/en/oem-folder' }, // کامنت شد - نیاز به ترجمه یا محتوای فارسی
              ]
            },
            {
              text: 'Advanced Guides',
              collapsed: true,
              items: [
                { text: 'Clean Install Windows', link: '/en/clean_install_windows' },
                { text: 'Office C2R Custom Install', link: '/en/office_c2r' },
                { text: 'Fix WPA Registry', link: '/en/fix-wpa-registry' },
                { text: 'Remove Malware', link: '/en/remove_malware' },
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/sahar-km/windows-activation/edit/main/posts/en/:path',
          text: 'Edit this page on GitHub'
        },
      }
    },
    fa: {
      label: 'فارسی',
      lang: 'fa',
      dir: 'rtl',
      title: 'فعال‌ساز مایکروسافت',
      description: 'ابزارهای فعال‌سازی فوری ویندوز و آفیس',
      themeConfig: {
        nav: [
          { text: 'خانه', link: '/fa/' },
          { text: 'راهنما', link: '/fa/index-fa' }
        ],
        sidebar: {
          '/fa/': [
            {
              text: 'راهنمای فعال‌سازی',
              collapsed: false,
              items: [
                { text: 'مقدمه و آموزش', link: '/fa/index-fa' },
                { text: 'فعال‌سازی با روش KMS', link: '/fa/kms-fa' },
                // Note: Add other translated files here later
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/sahar-km/windows-activation/edit/main/posts/fa/:path',
          text: 'این صفحه را در گیت‌هاب ویرایش کنید'
        },
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
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
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NiREvil' },
      { icon: 'telegram', link: 'https://t.me/F_NiREvil/6448' }
    ],
    footer: {
      message: 'Made with 🩶 using VitePress',
      copyright: '© 2025 REvil - Sharing knowledge, one note at a time'
    }
  }
})
