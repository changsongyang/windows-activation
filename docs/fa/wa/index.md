---
layout: doc
outline: deep
lang: fa-IR
dir: rtl
title: 'راهنمای جامع فعال‌سازی ویندوز با روش‌های رسمی'
description: 'یک جعبه ابزار متن‌باز و ایمن حاوی آموزش گام‌به‌گام فعال‌سازی دائم ویندوز ۱۰/۱۱. بررسی تفاوت روش‌ها، حل مشکلات احتمالی، و روش‌های حذف فعال‌سازی نیز پوشش داده شده است'
date: 2025-09-07
editLink: true
head:
  - - meta
    - name: description
      content: راهنمای کامل و مطمئن برای فعال‌سازی ویندوز ۱۰/۱۱ و آفیس با روش‌های متن‌باز مانند HWID, KMS, TSforge و Ohook, شامل روش‌های دائمی و قابل تمدید
  - - meta
    - name: keywords
      content: فعال سازی ویندوز, فعال‌سازی آفیس, فعال سازی قانونی ویندوز, فعال‌سازی دائم, HWID, KMS, TSforge, Ohook, فعال‌سازی ویندوز ۱۱, لایسنس دیجیتال
  - - meta
    - property: og:title
      content: آموزش فعال‌سازی ایمن و دائمی ویندوز و آفیس
  - - meta
    - property: og:description
      content: فعال‌سازی قانونی ویندوز و آفیس با ابزارهای مطمئن و متن‌باز, مناسب برای ویندوز ۱۰, ویندوز ۱۱, و نسخه‌های مختلف آفیس
---

# راهنمای جامع فعال‌سازی ویندوز و آفیس با روش‌های رسمی

> در این راهنما، با روش‌های متن‌باز و قابل اطمینانی مانند HWID، KMS، TSforge و سایر ابزارهای رسمی آشنا می‌شوید که امکان فعال‌سازی سریع، ایمن و بدون دردسر را برای ویندوز و آفیس فراهم می‌کنند.

<br/> 

## خلاصه‌ روش‌های فعال‌‌سازی {#جدول}

برای یک نمای کلی، در ادامه خلاصه‌ای از روش‌های فعال‌سازی موجود آمده است:

| نوع فعال‌سازی  | محصولات پشتیبانی شده |       مدت زمان فعال‌سازی       |      نیاز به اینترنت؟      |       اطلاعات بیشتر       |
| :------------: | :------------------: | :----------------------------: | :------------------------: | :-----------------------: |
|    **HWID**    |     ویندوز ۱۰-۱۱     |             دائمی              |            بله             |    [جزئیات](./hwid)    |
|    **KMS**     |     ویندوز ۱۰-۱۱     |         ۱۸۰ روز (دستی)         |            بله             |    [جزئیات](./kms)     |
|   **Ohook**    |         آفیس         |             دائمی              |            خیر             |             [جزئیات](./ohook)             |
|  **TSforge**   | ویندوز / ESU / آفیس  |             دائمی              | بله (در بیلد ۱۹۰۴۱ به بعد) |  [جزئیات](./tsforge)   |
|   **KMS38**    | ویندوز ۱۰-۱۱-Server  |          تا سال ۲۰۳۸           |            خیر             |   [جزئیات](./kms38)    |
| **Online KMS** |    ویندوز / آفیس     | ۱۸۰ روز (مادام‌العمر با تمدید) |            بله             | [جزئیات](./online_kms) |

<p style="text-align: center;">
  برای مقایسه دقیق تمام روش‌ها، به <a href="./chart">جدول مقایسه روش‌های فعال‌سازی</a> مراجعه کنید. </p>

<br/><br/>

# روش 1. فعال‌سازی دائمی با HWID

برای اکثر کاربران، روش HWID <Badge type="info" text="Hardware ID" /> ساده‌ترین راه برای دریافت لایسنس دیجیتال برای ویندوز ۱۰ و ۱۱ است.

<br/>

## مرحله ۱. باز کردن PowerShell به عنوان مدیر

### روش الف: استفاده از نوار جستجو <Badge type="tip" text="پیشنهادی" />

1. روی دکمه "Start" یا آیکون "Search" در نوار وظیف کلیک کنید
2. تایپ کنید: `powershell`
3. در نهایت روی `Run as administrator` کلیک کنید

<p align="center">
  <img src="https://github.com/user-attachments/assets/9b27cd4b-21d8-4970-98bb-3c97010e09bf" alt="اجرای-پاورشل-با-حالت-ادمین" width="840px" />
</p>

<p style="text-align: center;">
  برای بزرگنمایی تصویر بر روی آن کلیک کنید </p>

<br/>

::: tip به منظور اجرای Powershell

::: details برای مشاهده روش‌های جایگزین، لطفاً اینجا کلیک کنید.

### روش ب: استفاده از Run Box

1. پنجره Run را باز کنید: کلیدهای `Win (⊞) + R` را همزمان فشار دهید
2. تایپ کنید: `powershell`
3. برای اجرا به عنوان مدیر، `Ctrl + Shift + Enter` را فشار دهید
4. اگر پیغام User Account Control ظاهر شد، `Yes` را کلیک کنید

<br/>

### روش ج: استفاده از Power User Menu

1. روی منوی "Start" کلیک راست کنید یا `Win (⊞) + X` را فشار دهید
2. در ویندوز ۱۱ "Windows Terminal (Admin)" یا در ویندوز ۱۰ "Windows PowerShell (Admin)" را انتخاب کنید

<br/>

همچنین می‌توانید از توضیحات داخل [این لینک][1] برای اجرای **Powershell** به 10 روش مختلف و از [این لینک][2] برای اجرای CMD به 8 روش مختلف در ویندوز استفاده کنید.

:::

<br/>

## مرحله ۲. اجرای اسکریپت فعال‌سازی {#مرحله-۲}

دستور زیر را کپی کرده و، در پنجره PowerShell جای‌گذاری (با راست-کلیک) و سپس کلید "Enter" را فشار دهید.

::: code-group

```powershell [برای‌ ویندوز ۸ - ۱۰ - ۱۱]
irm https://get.activated.win | iex
```

```powershell [برای ویندوز ۷ و قبل‌تر]
iex ((New-Object Net.WebClient).DownloadString('https://get.activated.win'))
```

```powershell [در صورت بالا نیامدن اسکریپت]
iex (curl.exe -s --doh-url https://1.1.1.1/dns-query https://get.activated.win | Out-String)
```

:::

<p align="center">
  <img src="https://github.com/user-attachments/assets/6b72787e-f5ad-47a2-ab2b-ae93de9f70bc" alt="جای‌گذاری-دستور-در-PowerShell" width="840px" />
</p>

<br/>

## مرحله ۳. انتخاب روش HWID

در منوی ظاهر شده. عدد `1` را فشار دهید تاHWID" Activation" انتخاب شود، سپس چند لحظه منتظر بمانید تا فرآیند کامل شود.

<p align="center">
  <img src="https://github.com/user-attachments/assets/8b119e05-d506-4c42-91cb-ac58c9a2f189" alt="انتخاب-متود-hwid" width="880px" />
</p>

تبریک 🎉
 
ویندوز شما اکنون با لایسنس دیجیتال به صورت دائمی فعال شده است.

برای بررسی وضعیت فعال‌سازی `ویندوز ۱۰` از این طریق اقدام کنید:  
Settings > Update & Security > Activation [^1]

برای بررسی وضعیت فعال‌سازی `ویندوز ۱۱`، از این طریق اقدام کنید:  
Settings > System > Activation [^2]

<br/>

::: info چند نکته

::: details برای مشاهده توضیحات بیشتر کلیک کنید

- **برای ویندوز:** شخصاً از روش `KMS` ([راهنمای kms](./kms)) و یا [[Online KMS](./online_kms)برای فعال‌سازی ویندوز 10 / 11 خودم استفاده می‌کنم. این روش رسمی است، هیچ فایلی روی سیستم ذخیره نمی‌کند و کمتر از 3 دقیقه زمان می‌برد. اگر به هر دلیلی این روش کار نکرد و ناموفق بود، انتخاب بعدی من HWID است، زیرا آن هم رسمی و بدون ذخیره داده‌ای در لوکال سیستم ما است.
- **برای آفیس:** من از Ohook، TSforge یاOnline KMS استفاده می‌کنم. تفاوت‌های جزئی بین آن‌ها وجود دارد که در [جدول فوق 👆🏿](#جدول) ذکر شده است.

:::

::: info نکات مهم

::: details برای مشاهده توضیحات بیشتر کلیک کنید

- دستور IRM در PowerShell یک اسکریپت را از یک URL مشخص دانلود می‌کند و دستور IEX آن را اجرا می‌کند.
- همیشه قبل از اجرای دستور، URL را دوباره بررسی کنید و هنگام دانلود دستی فایل‌ها، از قابل اعتماد بودن منبع اطمینان حاصل کنید.
- محتاط باشید، زیرا برخی با تغییر URL در دستور IRM، بدافزار را در قالب MAS منتشر می‌کنند.

  :::

<br/>

 ## چگونه فعال‌سازی را حذف کنیم

::: danger راهنمای حذف یا لغو اشتراک‌ها

- **HWID:** لایسنس دیجیتال روی سرورهای مایکروسافت ذخیره شده و به سخت‌افزار شما متصل است. این نمی‌تواند به معنای سنتی `حذف` شود. تغییر عمده سخت‌افزار (مانند مادربرد) آن را `باطل` می‌کند. برای بازگشت به حالت غیرفعال، می‌توانید یک کلید عمومی [KMS](./kms38#چگونه-kms38-را-حذف-کنیم) نصب کنید. [جزئیات تکمیلی hwid](./hwid#چگونه-hwid-را-حذف-کنیم)

- **Online KMS / Ohook / KMS38:** از گزینه متناظر `Uninstall` یا `Remove` در منوی اسکریپت [MAS](#مرحله-۲) استفاده کنید، سپس گزینه "Fix Licensing" را از منوی Troubleshoot اجرا کنید. [جزئیات KMS آنلاین](./online_kms#چگونه-آنلاین-kms-را-حذف-کنیم) و [جزئیات KMS38](./kms38#چگونه-kms38-را-حذف-کنیم)

- **TSforge:** این روش فقط داده‌ها را اضافه می‌کند و فایلی نصب نمی‌کند. برای بازنشانی آن، کافی است گزینه `Fix Licensing` را از منوی Troubleshoot در اسکریپت MAS اجرا کنید. [جزئیات TSforge](./tsforge#چگونه-tsforge-را-حذف-کنیم) و [جزئیات Ohook](./ohook#چگونه-ohook-را-حذف-کنیم)

:::

<br/> 

::: info محصولات پشتیبانی شده ویندوز ۱۰/۱۱ برای HWID

::: details برای مشاهده محصولات کلیک کنید

|       نام محصولات ویندوز ۱۰/۱۱        |        EditionID         |   کلید عمومی Retail/OEM/MAK   |
| :-----------------------------------: | :----------------------: | :---------------------------: |
|               Education               |        Education         | YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY |
|              Education N              |        EducationN        | 84NGF-MHBT6-FXBX8-QWJK7-DRR8H |
|              Enterprise               |        Enterprise        | XGVPP-NMH47-7TTHJ-W3FW7-8HV2C |
|             Enterprise N              |       EnterpriseN        | 3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT |
|         Enterprise LTSB 2015          |       EnterpriseS        | FWN7H-PF93Q-4GGP8-M8RF3-MDWWW |
|         Enterprise LTSB 2016          |       EnterpriseS        | NK96Y-D9CD8-W44CQ-R8YTK-DYJWX |
|         Enterprise LTSC 2019          |       EnterpriseS        | 43TBQ-NH92J-XKTM7-KT3KK-P39PB |
|        Enterprise N LTSB 2015         |       EnterpriseSN       | NTX6B-BRYC2-K6786-F6MVQ-M7V2X |
|        Enterprise N LTSB 2016         |       EnterpriseSN       | 2DBW3-N2PJG-MVHW3-G7TDK-9HKR4 |
|                 Home                  |           Core           | YTMG3-N6DKC-DKB77-7M9GH-8HVX7 |
|                Home N                 |          CoreN           | 4CPRK-NM3K3-X6XXQ-RXX86-WXCHW |
|            Home China [^3]            |   CoreCountrySpecific    | N2434-X9D7W-8PF6X-8DV9T-8TYMD |
|       Home Single Language [^4]       |    CoreSingleLanguage    | BT79Q-G7N6G-PGBYW-4YWX6-6F4BT |
|            IoT Enterprise             |      IoTEnterprise       | XQQYW-NFFMW-XJPBH-K8732-CKFFD |
|      IoT Enterprise Subscription      |      IoTEnterpriseK      | P8Q7T-WNK7X-PMFXY-VXHBG-RRK69 |
|       IoT Enterprise LTSC 2021        |      IoTEnterpriseS      | QPM6N-7J2WJ-P88HH-P3YRH-YY74H |
|       IoT Enterprise LTSC 2024        |      IoTEnterpriseS      | CGK42-GYN6Y-VD22B-BX98W-J8JXD |
| IoT Enterprise LTSC Subscription 2024 |     IoTEnterpriseSK      | N979K-XWD77-YW3GB-HBGH6-D32MH |
|                  Pro                  |       Professional       | VK7JG-NPHTM-C97JM-9MPGT-3V66T |
|                 Pro N                 |      ProfessionalN       | 2B87N-8KFHP-DKV6R-Y2C8J-PKCKT |
|             Pro Education             |  ProfessionalEducation   | 8PTT6-RNW4C-6V7J2-C2D3X-MHBPB |
|            Pro Education N            |  ProfessionalEducationN  | GJTYN-HDMQY-FRR76-HVGC7-QPF8P |
|       Pro for Workstations [^5]       | ProfessionalWorkstation  | DXG7C-N36C4-C4HTG-X4T3X-2YV77 |
|      Pro N for Workstations [^6]      | ProfessionalWorkstationN | WYPNQ-8C467-V2W6J-TX4WX-WT2RQ |
|                   S                   |          Cloud           | V3WVW-N2PV2-CGWC3-34QGF-VMJ2C |
|                  S N                  |          CloudN          | NH9J3-68WK7-6FB93-4K3DF-DJ4F6 |
|                  SE                   |       CloudEdition       | KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W |
|                 SE N                  |      CloudEditionN       | K9VKN-3BGWV-Y624W-MCRMQ-BHDCD |
|                 Team                  |          PPIPro          | XKCNC-J26Q9-KFHD2-FKTHY-KD72Y |

_کلید عمومی به صورت خودکار توسط اسکریپت در صورت نیاز اعمال می‌شود._

:::

<br/>

::: danger رفع مشکلات

اگر سوالی دارید، ابتدا صفحه [**سوالات متداول**](./faq) را مرور کنید — به احتمال زیاد جواب‌تان اینجاست.

اگر همچنان مشکل پابرجا بود — با ما [**در ارتباط**](./troubleshoot) باشید.

:::

[^1]: برای بررسی وضعیت فعال‌سازی ویندوز ۱۰، به مسیر زیر بروید: <br/> Settings → Update & Security → Activation <br/> وضعیت فعال‌سازی ویندوز در آنجا قابل مشاهده خواهد بود. اگر ویندوز فعال باشد، باید "Activated" را با تیک سبز ببینید.

[^2]: برای بررسی وضعیت فعال‌سازی ویندوز ۱۱، به مسیر زیر بروید: <br/> Settings → System → Activation <br/> وضعیت فعال‌سازی و جزئیات روش فعال‌سازی و حساب مایکروسافت و جزئیات مرتبط را مشاهده خواهید کرد.

[^3]: نسخه مخصوص کشور چین.

[^4]: نسخه تک‌زبانه.

[^5]: Professional for Workstations.

[^6]: Professional N for Workstations.

[1]: https://www.minitool.com/news/open-windows-11-powershell.html
[2]: https://www.minitool.com/news/open-command-prompt-windows-11.html
[3]: https://github.com/NiREvil/windows-activation/discussions/
[4]: mailto:dianashariati.cl@gmail.com
[5]: https://NiREvil.github.io/windows-activation/
