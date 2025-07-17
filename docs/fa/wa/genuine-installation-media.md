---
layout: doc
outline: deep
title: 'دانلود ویندوز / آفیس'
description: 'تمام لینک‌های دانلود موجود در وب‌سایت ما فقط به فایل‌های اصلی منتهی می‌شوند'
date: 2025-01-05
editLink: true
---

# دانلود ویندوز / آفیس

::: info نکته

تمام لینک‌های دانلود موجود در وب‌سایت ما فقط به فایل‌های اصلی منتهی می‌شوند.

:::

## دانلود ویندوز
-  [ویندوز 11](./windows_11_links)
-  [ویندوز 10](./windows_10_links)
-  [ویندوز 10 / 11 Enterprise **LTSC**](./windows_ltsc_links)
-  [ویندوز ARM64](./windows_arm_links)
-  [ویندوز 8.1](./windows_8.1_links)
-  [ویندوز 7](./windows_7_links)
-  [ویندوز ویستا][winvist]
-  [ویندوز XP](./windows_xp_links)
-  [ویندوز سرور][winserv]
-  ویندوز اینسایدر [10-11][1] - [سرور][2] / برای دانلود نیاز به [ثبت نام][3] است.

## دانلود آفیس

پس از نصب آفیس، فعال‌سازی با [MAS](./index#مرحله-۲) مورد نیاز است.

-  [نصب کننده‌های Office C2R][4] 🤍 (O365 / 2024 / 2021 / 2019 / 2016 / 2013)
-  [نصب سفارشی Office C2R][5] (O365 / 2024 / 2021 / 2019 / 2016)
-  [Office MSI VL (نسخه‌های قدیمی)][winmsi] (2016 / 2013 / 2010 / 2007)
-  [آفیس برای **مک**][winmac]

<br/>

## سوالات متداول

#### راهنماها

- [نصب تمیز ویندوز](./clean_install_windows)
- [ارتقاء تعمیری درجا (حفظ فایل‌ها و برنامه‌ها)](./in-place_repair_upgrade)
- [ویندوز 11 روی سخت‌افزار پشتیبانی‌نشده](./clean_install_windows#ویندوز-11-روی-سختافزار-پشتیبانی-نشده)#ویندوز-11-روی-سختافزار-پشتیبانی-نشده
- [لیست نسخه‌ها در حین نصب ویندوز](./clean_install_windows#لیست-نسخهها-در-حین-نصب-ویندوز)
- [به‌روزرسانی‌های ویندوز 10 پس از پایان عمر](./windows10_eol)

#### چرا فایل‌ها را روی سرور خود میزبانی می‌کنیم در حالی که می‌توانیم آنها را از مایکروسافت دانلود کنیم؟

::: details برای اطلاعات بیشتر اینجا کلیک کنید

مایکروسافت ISOهای مصرف‌کننده را به صورت رایگان در [سایت][6] خود ارائه می‌دهد، اما ISOهای تجاری، سازمانی و قدیمی‌تر پشت دیوارهای پرداخت مانند [MVS][7] و [مرکز مدیریت M365][8] قرار دارند. به همین دلیل است که ما نیاز به میزبانی فایل‌ها روی سرورهای خود داریم.

:::

#### چگونه از اصالت این فایل‌ها اطمینان حاصل کنیم؟

::: details برای اطلاعات بیشتر اینجا کلیک کنید

می‌توانید [اینجا](./genuine-installation-media#چگونه-از-اصالت-این-فایلها-اطمینان-حاصل-کنیم) نحوه اطمینان از اصالت فایل‌ها را با تأیید چک‌سام موجود در وب‌سایت رسمی مایکروسافت بررسی کنید.

:::

#### در اینجا هم ISOهای مصرف‌کننده و هم تجاری لیست شده‌اند. تفاوت بین آنها چیست؟

::: details برای اطلاعات بیشتر اینجا کلیک کنید

برای نسخه‌های کانال دسترسی عمومی (GAC) ویندوز 10/11 (یعنی Home و Pro)، مایکروسافت دو نوع فایل ISO تولید می‌کند: مصرف‌کننده و تجاری.

ISO مصرف‌کننده شامل تمام نسخه‌ها مانند Home، Pro و Education است، اما نسخه Enterprise را شامل نمی‌شود. در مقابل، ISO تجاری شامل تمام نسخه‌ها به جز نسخه‌های سطح Home است و این فایل‌های ISO به طور پیش‌فرض با یک کلید KMS از پیش نصب شده (فعال نشده) ارائه می‌شوند.

:::

#### چگونه می‌توانم یک ISO رسمی مایکروسافت را که در اینجا موجود نیست، تهیه کنم؟

::: details برای اطلاعات بیشتر اینجا کلیک کنید

می‌توانید فایل را در [Discord][9] درخواست کنید.

:::


## تأیید اصالت فایل‌ها

می‌توانید از [روش هش کردن فایل][10] برای تأیید اصالت یک فایل استفاده کنید. این کار را می‌توان با استفاده از ابزارهایی مانند [7-Zip][11] انجام داد (پس از نصب 7-Zip، روی فایل ISO راست کلیک کرده و به 7-Zip > CRC SHA بروید).

مکان‌های زیادی وجود دارد که می‌توانید این چک‌سام‌ها را برای تأیید پیدا کنید. نمونه‌ها را می‌توانید در زیر پیدا کنید.

- [files.rg-adguard][12] (کامل‌ترین مجموعه)
- [MVS dump][13]
- [genuine-iso-verifier][14]
- [msdn.rg-adguard][15]
- [sha1.rg-adguard][16]
- گوگل

لینک‌های رسمی رایگان مایکروسافت برای چک‌سام‌ها:

- [MVS][17]
- [ویندوز 11][18]
- [ویندوز 10][19]


::: details اطلاعات بیشتر در مورد لینک‌های رسمی!

**MVS**  
در MVS، باید وارد شوید و روی دکمه 'All Downloads' کلیک کنید و سپس نام محصول را جستجو کنید.

**محدودیت‌های MVS:**
 - آنها قبلاً فقط SHA-1 را منتشر می‌کردند، اما بعداً شروع به انتشار هم SHA-1 و هم SHA-256 کردند و از سال 2022 اکنون فقط SHA-256 را منتشر می‌کنند.
 - با این حال، آنها تمام داده‌های SHA-1 را حذف کردند و در نتیجه، چک‌سام‌های فایل‌های قدیمی به سادگی در سایت MVS موجود نیستند.
 - همچنین، در حدود زمانی که هم SHA-1 و هم SHA-256 را منتشر می‌کردند، برخی از داده‌های SHA-256 را به هم ریختند، به عنوان مثال

```
	مثال SHA-256 نادرست
	SHA256: BDB3D0C5C933B201ECE736A172FB604AA5D7D0705DD75681F9FCC4B1EE79FAC8
	نام فایل: en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.iso
```

 - بنابراین فقط برای آخرین فایل‌ها مفید است.

**ویندوز 11**
لیست SHA-256 در صورتی ظاهر می‌شود که فایل ISO را دانلود کنید.

**ویندوز 10**
مایکروسافت به شما اجازه نمی‌دهد فایل ISO را مستقیماً دانلود کنید اگر عامل کاربری مرورگر سیستم عامل ویندوز باشد. بنابراین باید آن را به چیز دیگری مانند Android یا IOS تغییر دهید و سپس فایل ISO را دانلود کنید تا لیست را ببینید.

:::

#### آموزش ویدیویی

<video class="video-js vjs-default-skin vjs-fluid" controls preload="auto" data-setup='{}'>
  <source src="/how_to_verify_files.mp4" type="video/mp4" />
  <p class="vjs-no-js"></p>
</video>

<br/>

::: danger رفع مشکلات

اگر سوالی دارید، ابتدا صفحه [**سوالات متداول**](./faq) را مرور کنید — به احتمال زیاد جواب‌تان اینجاست.  

اگر همچنان مشکل پابرجا بود — با ما [**در ارتباط**](./troubleshoot) باشید.

::: 


[1]: https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewiso
[2]: https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewserver
[3]: https://www.microsoft.com/en-us/windowsinsider/getting-started
[4]: https://gravesoft.dev/office_c2r_links
[5]: https://gravesoft.dev/office_c2r_custom
[6]: https://www.microsoft.com/en-us/software-download
[7]: https://visualstudio.microsoft.com/subscriptions/
[8]: https://learn.microsoft.com/en-us/licensing/vlsc-faqs-home-page
[9]: https://discord.gg/FajfGaH3nD
[10]: https://en.wikipedia.org/wiki/File_verification
[11]: https://7-zip.org/
[12]: https://files.rg-adguard.net/search
[13]: https://awuctl.github.io/mvs/
[14]: https://genuine-iso-verifier.weebly.com/
[15]: https://msdn.rg-adguard.net/
[16]: https://sha1.rg-adguard.net/
[17]: https://my.visualstudio.com/Downloads
[18]: https://www.microsoft.com/en-us/software-download/windows11
[19]: https://www.microsoft.com/en-us/software-download/windows10
[win11]: https://massgrave.dev/windows_11_links
[win10]: https://massgrave.dev/windows_10_links
[winen]: https://massgrave.dev/windows_ltsc_links
[winarm]: https://massgrave.dev/windows_arm_links
[win8]: https://massgrave.dev/windows_8.1_links
[win7]: https://massgrave.dev/windows_7_links
[winvist]: https://massgrave.dev/windows_vista__links
[winxp]: https://massgrave.dev/windows_xp_links
[winserv]: https://massgrave.dev/windows_server_links
[winmsi]: https://massgrave.dev/office_msi_links
[winmac]: https://massgrave.dev/office_for_mac
