---
layout: doc
outline: deep
lang: fa-IR
dir: rtl
title: 'فعال‌سازی محصولات پشتیبانی نشده'
description: 'در این صفحه فقط روش‌های فعال‌سازی محصولاتی ذکر شده است که توسط اسکریپت MAS پشتیبانی نمی‌شوند'
date: 2025-01-19
editLink: true
---

# فعال‌سازی محصولات پشتیبانی نشده

::: info نکته

- در این صفحه، فقط روش‌های فعال‌سازی محصولاتی ذکر شده است که توسط اسکریپت **MAS** پشتیبانی نمی‌شوند.
- اگر مطمئن نیستید، ابتدا گزینه‌های فعال‌سازی اسکریپت [**MAS**](./index#مرحله-۲) را اجرا کنید.

:::

## MS Office For Mac

- [**اینجا**][1] را بررسی کنید.

## Windows XP Pro VL

- دانلود ویندوز XP Pro VL - [**لینک**](./windows_xp_links)

- کلید فعال‌سازی ISO 32 بیتی (x86) Windows XP Pro VL SP3:

```shell
XCYBK-2B3KV-G8T8F-WXJM7-WCTYT
```

- کلید فعال‌سازی ISO 64 بیتی (x64) Windows XP Pro VL SP2:

```shell
VCFQD-V9FX9-46WVH-K3CD4-4J3JM
```

<hr/><br/>

## Office 2010 on Windows XP / Server 2003

- [**نصب‌کننده آفیس 2010**][2]

- [**اسکریپت Ohook برای آفیس 2010 توسط abbodi1406**][3] *(رمز عبور: `2010`)*

1. آرشیو Ohook را استخراج کنید.
2. `_install.cmd` را به عنوان مدیر اجرا کنید.
3. یک کلید از [**اینجا**](./ohook#آفیس-2010-14-0) برای محصول نصب شده آفیس 2010 دریافت کنید.
4. یک برنامه آفیس را باز کنید > `File > Help > Activate/Change Product Key`.
5. کلید را وارد کرده و فعال‌سازی را به پایان برسانید.

آفیس 2010 اکنون باید به طور دائم فعال شده باشد.

> - **توجه:** MAS از آفیس در ویندوز ویستا و بالاتر پشتیبانی می‌کند.

## Office 2007 Enterprise

- دانلود آفیس 2007 Enterprise - [**لینک**][5]
- کلید فعال‌سازی:

```shell
BQDQB-KRRY9-43DBR-4P9J4-DH7D8
```

## Remote Desktop Services — Client Access Licenses (RDS CALs)

**نصب**

::: details برای مشاهده اطلاعات اینجا کلیک کنید

- با استفاده از یک حساب مدیر به سروری که می‌خواهید به عنوان سرور لایسنس استفاده کنید وارد شوید.
- در Server Manager، Manage > Add Roles and Features را انتخاب کنید.
- در صفحه Select installation type، Role-based or feature-based installation را انتخاب کنید.
- سروری را که می‌خواهید نقش لایسنس را روی آن نصب کنید مشخص کنید.
- در صفحه Server Roles، کادر Remote Desktop Services را علامت بزنید، سپس Next را انتخاب کنید تا به صفحه Remote Desktop Services برسید.
- نقش‌هایی را که می‌خواهید نصب کنید انتخاب کنید. مطمئن شوید که نقش Remote Desktop Licensing را شامل می‌شود.
- در کادر محاوره‌ای Add Roles and Features Wizard، Add Features را انتخاب کنید.
- Next را انتخاب کنید تا به صفحه Confirmation برسید، سپس Install را انتخاب کنید.

:::

**فعال‌سازی**

در حین فعال‌سازی لایسنس‌های RDS هیچ اعتبارسنجی وجود ندارد.

- "Remote Desktop Licensing Manager" را باز کنید
- روی سرور راست کلیک کرده و "Activate Server" را کلیک کنید
- روش اتصال مورد نظر خود را انتخاب کرده و next را کلیک کنید (پیش‌فرض خوب است)
- اطلاعات شرکت اول را با اطلاعات بی‌معنی پر کنید و next را کلیک کنید
- صفحه بعدی را خالی بگذارید و next را کلیک کنید
- ویزارد باید تکمیل شود و بگوید "The license server has been successfully activated"
- "Start Install Licenses Wizard" را علامت زده نگه دارید و next را کلیک کنید تا از شما بخواهد یک "License program" را انتخاب کنید
- License Program را به "Service Provider License Agreement" در منوی کشویی تغییر دهید و next را کلیک کنید
- شماره توافقنامه را روی `1234567` تنظیم کنید و next را کلیک کنید
- صفحه بعدی را با مقادیر انتخابی خود پر کنید و next را کلیک کنید
- ویزارد لایسنس باید گزارش دهد "The requested licenses have been successfully installed"

به طور جایگزین، می‌توانید یک کلید در صفحه زیر ایجاد کنید. از گزینه مرورگر وب در فرآیند فعال‌سازی برای دریافت شناسه محصول استفاده کنید. این روی نسخه‌های قدیمی سرور نیز کار می‌کند.

وب‌سایت:
[thecatontheceiling.github.io/Lyssa][6]

کد منبع و جزئیات:

[LyssaRDSGen][7]

[gist.github.com/WitherOrNot][8]

## HEVC Video Extensions

- این یک [افزونه پولی مایکروسافت][9] برای پخش ویدیوهای High Efficiency Video Coding (HEVC) در هر برنامه ویدیویی روی دستگاه ویندوز 10/11 شما است.
- مایکروسافت نصب‌کننده‌های امضا شده دیجیتالی را به مشترکین مرکز مدیریت M365 ارائه می‌دهد، می‌توانید آنها را در زیر دانلود کنید.

لینک دانلود: [**app.box.com/s/rozw**][10]
به طور جایگزین، می‌توانید نصب‌کننده AppxBundle را از [**store.rg-adguard.net**][11] با جستجوی `9nmzlz57r3t7` در ProductId دانلود کنید.

## Visual Studio

- دانلود - [visualstudio.microsoft.com/downloads/][12]
- کلیدهای فعال‌سازی:

| نسخه‌ها | کلید فعال‌سازی |
|---|---|
| Visual Studio 2022 Professional | `TD244-P4NB7-YQ6XK-Y8MMM-YWV2J` |
| Visual Studio 2022 Enterprise | VHF9H-`NXBBB-638P6-6JHCY-88JWH` |
| Visual Studio 2019 Professional | `NYWVH-HT4XC-R2WYW-9Y3CM-X4V3Y` |
| Visual Studio 2019 Enterprise | BF8Y8-`GN2QH-T84XB-QVY3B-RC4DF` |

## Microsoft DaRT

Microsoft DaRT (Diagnostics and Recovery Toolset، که قبلاً ERD Commander نام داشت) یک ایمیج بازیابی رسمی مبتنی بر WinPE قابل بوت از مایکروسافت است که شامل ابزارهای تشخیصی و عیب‌یابی برای بازیابی ویندوز است.

این محصول دیگر تحت توسعه فعال نیست.

**لینک دانلود:** Microsoft Desktop Optimization Pack 2015
[mu_microsoft_desktop_optimization_pack_2015_x86_x64.iso][13]

**راهنما:** [woshub.com/create-dart-10-recovery-image/][14]

## SQL Server

- دانلود - [microsoft.com/evaluate-sql-server-2022][15]
- کلیدهای فعال‌سازی:

| نسخه‌ها | کلید فعال‌سازی |
|---|---|
| SQL Server 2022 Enterprise | `J4V48-P8MM4-9N3J9-HD97X-DYMRM` |
| SQL Server 2022 Enterprise Core | `2Q48Q-PB48J-DRCVN-GB844-X2H4Q` |
| SQL Server 2022 Standard | `FG86G-CHH2T-CB7NJ-XT7D2-V8V4X` |
| SQL Server 2022 Web | `2R97W-F4XNT-T6MYV-3TKB7-6X3JM` |
| SQL Server 2022 Developer | `22222-00000-00000-00000-00000` |
| SQL Server 2019 Enterprise | `HMWJ3-KY3J2-NMVD7-KG4JR-X2G8G` |
| SQL Server 2019 Standard | `PMBDC-FXVM3-T777P-N4FY8-PKFF4` |

## Microsoft Configuration Manager

همچنین به عنوان ConfigMgr، Microsoft Endpoint Configuration Manager (MECM) شناخته می‌شود.  

قبلاً به عنوان Systems Management Server (SMS)، System Center Configuration Manager (SCCM) شناخته می‌شد. [**اطلاعات بیشتر**][16] در مورد تغییرات نام.

**Microsoft Configuration Manager (Current Branch)**

دانلود - [microsoft.com/evaluate-endpoint-config-manager][17]
کلید فعال‌سازی:

```shell
BXH69-M62YX-QQD6R-3GPWX-8WMFY
```

## مشکلات

::: danger مشکلات

- اگر در این مورد به کمکی نیاز دارید، ابتدا [**سوالات متداول**](./faq) را مرور کنید — به احتمال زیاد پاسخ شما در آنجا خواهد بود.

- اگر مشکل شما همچنان ادامه داشت — می‌توانید [**با ما تماس بگیرید**](./troubleshoot).

:::

[1]: https://massgrave.dev/office_for_mac
[2]: https://massgrave.dev/office_msi_links#office-2010
[3]: https://gitlab.com/-/project/11037551/uploads/bbdc7aae987d08f8e2bf6533942e623a/office2010_ohook.7z
[4]: https://app.box.com/s/q0nyib6bfylosvbbm5x8ztg87vy0kl8a
[5]: https://massgrave.dev/office_msi_links#office-2007
[6]: https://thecatontheceiling.github.io/LyssaRDSGen/
[7]: https://github.com/thecatontheceiling/LyssaRDSGen
[8]: https://gist.github.com/WitherOrNot/c34c4c7b893e89ab849ce04e007d89a9
[9]: https://apps.microsoft.com/detail/9nmzlz57r3t7
[10]: https://app.box.com/s/rozwl3zsx6o90xw2568by61fhp3z3icw
[11]: https://store.rg-adguard.net/
[12]: https://visualstudio.microsoft.com/downloads/
[13]: https://drive.massgrave.dev/mu_microsoft_desktop_optimization_pack_2015_x86_x64_dvd_5975282.iso
[14]: https://woshub.com/create-dart-10-recovery-image/
[15]: https://www.microsoft.com/en-us/evalcenter/evaluate-sql-server-2022
[16]: https://craigtwall.com/how-sccm-became-memcm-or-just-configmgr/
[17]: https://www.microsoft.com/en-us/evalcenter/evaluate-microsoft-endpoint-configuration-manager
