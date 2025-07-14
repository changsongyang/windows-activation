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
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/video.js@8.17.4/dist/video-js.min.css' }],
    ['script', { src: 'https://unpkg.com/video.js@8.17.4/dist/video.min.js' }],
    ['style', {}, `
      .video-js {
        width: 100%;
        max-width: 960px;
        height: auto;
        aspect-ratio: 16/9;
      }
    `]
  ],

  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(mathjax3)
      md.use(attrs)
      md.use(tabsMarkdownPlugin)
    },
    lineNumbers: true
  },

  mermaid: {},

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Freedom to Dream',
      description: 'Instant Windows and Office Activation Tools',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guides', link: '/en/' },
          { text: 'FAQ', link: '/en/faq' }
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Activation Guides',
              collapsed: false,
              items: [
                { text: 'HWID Activation', link: '/en/' },
                { text: 'KMS Activation', link: '/en/kms' },
              ]
            },
            {
              text: 'Technical Details',
              collapsed: false,
              items: [
                { text: 'Methods Chart', link: '/en/chart' },
                { text: 'Ohook', link: '/en/ohook' },
                { text: 'TSforge', link: '/en/tsforge' },
                { text: 'KMS38', link: '/en/kms38' },
                { text: 'Online KMS', link: '/en/online_kms' },
                { text: 'Remove Malware', link: '/en/remove_malware' },
                { text: 'Clean Install Windows', link: '/en/clean_install_windows' },
                { text: 'Office c2r Custom Install', link: '/en/office_c2r' },
                { text: 'Fix WPA Registry', link: '/en/fix-wpa-registry' },
                { text: 'Fix Powershell', link: '/en/fix_powershell' },
                { text: '$OEM$ Folders', link: '/en/oem-folder' },
                { text: 'Switches in Command line', link: '/en/command_line_switches' },
                { text: 'Evaluation Editions', link: '/en/evaluation_editions' }
              ]
            },
            {
              text: 'Manual Activation Guides',
              collapsed: true,
              items: [
                { text: 'Manual HWID activation', link: '/en/manual_hwid_activation' },
                { text: 'Manual Ohook activation', link: '/en/manual_ohook_activation' },
                { text: 'Manual KMS38 activation', link: '/en/manual_kms38_activation' }
              ]
            },
            {
              text: 'Contact Us',
              collapsed: false,
              items: [
                { text: 'Troubleshoot', link: '/en/troubleshoot' },
                { text: 'FAQ', link: '/en/faq' },
                { text: 'Credits', link: '/en/credits' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/sahar-km/windows-activation/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
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
        }
      }
    },
    fa: {
      label: 'فارسی',
      lang: 'fa-IR',
      dir: 'rtl',
      title: 'Freedom to Dream',
      description: 'ابزارهای فعال‌سازی فوری ویندوز و آفیس',
      themeConfig: {
        nav: [
          { text: 'خانه', link: '/fa/' },
          { text: 'راهنمای فعال‌سازی', link: '/fa/intro' },
          { text: 'سوالات پر تکرار', link: '/fa/faq' }
        ],
        sidebar: {
          '/fa/': [
            {
              text: 'راهنمای فعال‌سازی',
              collapsed: false,
              items: [
                { text: 'فعال‌سازی با روش HWID', link: '/fa/intro' },
                { text: 'فعال‌سازی با روش KMS', link: '/fa/kms' }
              ]
            },
            {
              text: 'جزئیات فنی',
              collapsed: false,
              items: [
                { text: 'نمودار روش‌های فعال‌سازی', link: '/fa/chart' },
                { text: 'روش Ohook', link: '/fa/ohook' },
                { text: 'روش TSforge', link: '/fa/tsforge' },
                { text: 'روش KMS38', link: '/fa/kms38' },
                { text: 'روش Online KMS', link: '/fa/online_kms' },
                { text: 'حذف بدافزارها', link: '/fa/remove_malware' },
                { text: 'نصب تمیز ویندوز', link: '/fa/clean_install_windows' },
                { text: 'نصب سفارشی Office c2r', link: '/fa/office_c2r' },
                { text: 'رفع مشکل WPA رجیستری', link: '/fa/fix-wpa-registry' },
                { text: 'رفع مشکل Powershell', link: '/en/fix_powershell' },
                { text: 'پوشه‌های $OEM$', link: '/fa/oem-folder' },
                { text: 'معرفی سوئیچ‌ها در ترمینال', link: '/fa/command_line_switches' },
                { text: 'نسخه‌ی Evaluation', link: '/fa/evaluation_editions' }
              ]
            },
            {
              text: 'راهنمای فعال‌سازی دستی',
              collapsed: true,
              items: [
                { text: 'نصب دستی HWID', link: '/fa/manual_hwid_activation' },
                { text: 'نصب دستی Ohook', link: '/fa/manual_ohook_activation' },
                { text: 'نصب دستی KMS38', link: '/fa/manual_kms38_activation' }
              ]
            },
            {
              text: 'ارتباط با ما',
              collapsed: false,
              items: [
                { text: 'گزارش مشکلات', link: '/fa/troubleshoot' },
                { text: 'سوالات پر تکرار', link: '/fa/faq' },
                { text: 'کردیت', link: '/fa/credits' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/sahar-km/windows-activation/edit/main/docs/:path',
          text: 'این صفحه را در گیت‌هاب ویرایش کنید'
        },
        docFooter: {
          prev: 'صفحه قبلی',
          next: 'صفحه بعدی'
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo-h.svg',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NiREvil/' },
      { icon: 'telegram', link: 'https://t.me/F_NiREvil/6448' }
    ],
    footer: {
      message: 'Made with using VitePress',
      copyright: '© 2025 REvil — Sharing knowledge, one note at a time'
    }
  },

  vite: {
    optimizeDeps: {
      include: ['video.js']
    }
  }
})
