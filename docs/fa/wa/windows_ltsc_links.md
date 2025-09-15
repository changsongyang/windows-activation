---
layout: doc
outline: deep
lang: fa-IR
dir: rtl
title: 'دانلود ویندوز LTSC'
description: 'تمام لینک‌های دانلود فقط به فایل‌های اصلی منتهی می‌شوند'
date: 2025-04-19
editLink: true
---

# دانلود ویندوز LTSC
::: info نکته

- تمام لینک‌های دانلود فقط به `فایل‌های اصلی` منتهی می‌شوند.

- [سوالات متداول](./genuine-installation-media#سوالات-متداول)

- [ویندوز 10 پس از پایان عمر](./windows10_eol)

- [چگونه اصالت این فایل‌ها رو تایید کنیم؟][Genuine]

- مایکروسافت لینک‌های عمومی [نسخه ارزیابی][1] را برای نسخه‌های LTSC ویندوز ارائه می‌دهد، اما همانطور که از نامش پیداست، این ISOها برای اهداف ارزیابی هستند و نمی‌توانند برای بیش از ۹۰ روز فعال شوند. ISOهای فهرست شده در زیر نسخه کامل هستند که می‌توانند فعال شوند.

:::

<br/> 

## LTSC چیست و آیا انتخاب مناسبی برای شماست؟

::: info اطلاعات

::: details برای مشاهده جزئیات اینجا کلیک کنید

اگر مطمئن نیستید، از LTSC اجتناب کنید و کانال دسترسی عمومی و نسخه‌های آن (Home, Pro, Enterprise و غیره) را انتخاب کنید.

<hr/><br/>

## مایکروسافت ویندوز ۱۰ و ۱۱ را از طریق دو کانال خدماتی منتشر می‌کند.

1. **GAC** (کانال دسترسی عمومی)
   - این برای مشتریان عمومی و سازمانی در نظر گرفته شده است.
   - نمونه‌های نسخه شامل گزینه‌هایی مانند Home, Pro و Enterprise است.
   - حداکثر پشتیبانی در همان بیلد معمولاً [۲ سال][2] برای مصرف‌کنندگان و [۳ سال][3] برای شرکت‌ها است. پس از آن، باید به‌روزرسانی‌های ویژگی را نصب کنید.
   - این کانال اصلی خدماتی است و سایر نرم‌افزارها و بازی‌ها معمولاً از چرخه عمر این کانال برای ارائه پشتیبانی پیروی می‌کنند.
2. **LTSC** (کانال خدماتی بلندمدت)
   - این برای دستگاه‌هایی طراحی شده است که عملکرد و ویژگی‌های آنها باید در طول زمان ثابت بماند، مانند سیستم‌های پزشکی، کنترل‌کننده‌های صنعتی و دستگاه‌های کنترل ترافیک هوایی.
   - نمونه‌های نسخه‌ها شامل: Enterprise LTSC و IoT Enterprise LTSC است.
   - حداکثر پشتیبانی در همان بیلد معمولاً [۵ سال][4] برای LTSC و [۱۰ سال][5] برای IoT LTSC است.
   - این کانال اصلی خدماتی نیست و سایر نرم‌افزارها و بازی‌ها معمولاً از چرخه عمر این کانال پیروی نمی‌کنند. به عنوان مثال، مرورگرها و بازی‌ها ممکن است برای ۱۰ سال در همان بیلد پشتیبانی ارائه ندهند.
   - این فاقد اکثر برنامه‌های فروشگاه (UWP) است.
  
::: 

<hr/><br/>

### دلایل استفاده

::: tip **دلایل استفاده از LTSC**

> - شما ارتقاء سالانه ویژگی‌های ویندوز را دوست ندارید
> - شما برنامه‌های از پیش نصب شده فروشگاه (UWP) را نیز دوست ندارید
> - شما پشتیبانی به‌روزرسانی طولانی‌تری برای ویندوز ۱۰ می‌خواهید

**دلایل اجتناب از استفاده از LTSC:**

> - همانطور که در بالا ذکر شد، بسیاری از بازی‌ها و نرم‌افزارها ممکن است پس از رسیدن همان بیلد به پایان عمر در GAC از LTSC پشتیبانی نکنند
> - بازی‌ها ممکن است به طور پیش‌فرض کار نکنند و شما باید به صورت دستی برنامه‌های فروشگاه و Xbox را نصب کنید
> - سخت‌افزار جدید ممکن است توسط یک بیلد LTSC ۲-۳ ساله به طور کامل پشتیبانی نشود (نسخه جدید LTSC هر ۳ سال یکبار منتشر می‌شود)
> - ممکن است ویژگی‌های جدید اضافه شده در GAC را که در LTSC موجود نیستند از دست بدهید

**تصورات غلط رایج**

> - LTSC سریع است
>   سریع نیست، اگرچه ممکن است به دلیل عدم اجرای برنامه‌های فروشگاه در پس‌زمینه، کمی رم بیشتری در دسترس باشد، و شما می‌توانید با [خاموش کردن][6] برنامه‌های پس‌زمینه و برنامه‌های راه‌اندازی، به همین نتیجه در نسخه‌های کانال GAC برسید
> - بیشتر حریم خصوصی محور است
>   نه، [گزینه‌های تله‌متری][7] همانند GAC Enterprise هستند.

:::

### نصب برنامه فروشگاه مایکروسافت در LTSC

::: details برای اطلاعات بیشتر اینجا کلیک کنید

قابل اجرا در ویندوز ۱۱ LTSC 2024 و ویندوز ۱۰ LTSC 2021.

**فروشگاه مایکروسافت**

نسخه‌های LTSC با برنامه‌های فروشگاه از پیش نصب شده عرضه نمی‌شوند. برای نصب آنها، مراحل زیر را دنبال کنید.

> - اطمینان حاصل کنید که اینترنت متصل است.
> - پاورشل را به در حالت ادمین باز کرده و وارد کنید:
>
>   ```shell
>   wsreset -i
>   ```
>
> - منتظر بمانید تا اعلانی مبنی بر نصب برنامه فروشگاه ظاهر شود، ممکن است چند دقیقه طول بکشد.
>
> - در ویندوز ۱۰ ۲۰۲۱ LTSC، ممکن است با خطایی مواجه شوید که نشان می‌دهد cliprenew.exe یافت نمی‌شود. این خطا را می‌توان با خیال راحت نادیده گرفت.

**نصب کننده برنامه**

> - این برنامه بسیار مفید است؛ شامل WinGet است که نصب آسان بسته‌های .appx را امکان‌پذیر می‌کند. پس از نصب برنامه فروشگاه، نصب کننده برنامه را از این URL نصب کنید.
>
> - [apps.microsoft.com/detail/9nb][8]

**کار نکرد. بعد چه کار کنم؟**

> - می‌توانید آنها را با استفاده از بسته ارائه شده توسط abbodi1406 نصب کنید.
>
> - [github.com/htfx/releases/v0.0.24][9]

:::

## تفاوت‌های بین IoT و Non-IoT Windows Enterprise LTSC

::: details برای اطلاعات بیشتر اینجا کلیک کنید

:::tabs

== Windows 11 LTSC 2024

**ویندوز ۱۱ LTSC 2024**

| ویژگی‌ها | Enterprise LTSC | IoT Enterprise LTSC / IoT Enterprise Subscription LTSC |
|:---|:---|:---|
| **TPM / Secure boot / UEFI / 4GB RAM** | همه مورد نیاز است | [مورد نیاز نیست](https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements) 🎉 <br /> همچنین توسط [IoT Enterprise 24H2 (Non-LTSC)](./windows_11_links) مورد نیاز نیست |
| **رمزگذاری خودکار دستگاه** | فعال | غیرفعال |
| **پشتیبانی به‌روزرسانی** | ۵ سال | ۱۰ سال |
| **ویژگی ذخیره‌سازی رزرو شده** | فعال | غیرفعال |
| **مجوز دیجیتال (HWID)** | پشتیبانی نمی‌شود | پشتیبانی می‌شود |
| **۲ جلسه RDP همزمان** | خیر | بله |


> - IoT Enterprise LTSC برنده است.
> - تنها تفاوت بین IoT Enterprise LTSC و IoT Enterprise Subscription LTSC این است که نسخه اشتراک از مجوز اشتراک پشتیبانی می‌کند.
> - شما می‌توانید نسخه‌ها را به یکدیگر تغییر دهید (IoT و Non-IoT Windows Enterprise LTSC) فقط با وارد کردن کلید نسخه مربوطه در صفحه فعال‌سازی در تنظیمات ویندوز.

| | | |
|---|---|---|
| IoT Enterprise LTSC 2024 | IoTEnterpriseS | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| Enterprise LTSC 2024 | EnterpriseS | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |


== Windows 10 LTSC 2021

**ویندوز ۱۰ LTSC 2021**


| ویژگی‌ها | Enterprise LTSC | IoT Enterprise LTSC |
|:---|:---|:---|
| **پشتیبانی به‌روزرسانی** | [۵ سال (تا ۲۰۲۷)](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-enterprise-ltsc-2021) | [۱۰ سال (تا ۲۰۳۲)](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-iot-enterprise-ltsc-2021) |
| **ویژگی ذخیره‌سازی رزرو شده** | فعال | غیرفعال |
| **مجوز دیجیتال (HWID)** | پشتیبانی نمی‌شود | پشتیبانی می‌شود |
| **مجوز KMS** | پشتیبانی می‌شود | پشتیبانی پس از به‌روزرسانی 19044.2788 اضافه شد |
| **پشتیبانی از پوشه $OEM$** | بله | خیر [(اطلاعات بیشتر)](./oem-folder) |


> - IoT Enterprise LTSC برنده است.
> - شما می‌توانید نسخه‌ها را به یکدیگر تغییر دهید (IoT و Non-IoT Windows Enterprise LTSC) فقط با وارد کردن کلید نسخه مربوطه در صفحه فعال‌سازی در تنظیمات ویندوز.

| | | |
|---|---|---|
| IoT Enterprise LTSC 2021 | IoTEnterpriseS | QPM6N-7J2WJ-P88HH-P3YRH-YY74H |
| Enterprise LTSC 2021 | EnterpriseS | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |

== Old Version's

**نسخه‌های قدیمی**

> - ISO هایی برای IoT Enterprise LTSC/LTSB 2019, 2016 و 2015 موجود است، اما آنها فقط کلید OEM LTSC غیر IoT (عمومی، فعال نشده) را از پیش نصب کرده‌اند. کلید نصب شده تنها تفاوت است. نسخه واقعی و متفاوتی از IoT برای این نسخه‌ها موجود نیست.

:::

### چگونه از نسخه غیر LTSC به نسخه LTSC با حفظ فایل‌ها و برنامه‌ها ارتقا دهیم؟

::: details برای اطلاعات بیشتر اینجا کلیک کنید

ممکن است بخواهید [راهنمای پایان عمر ویندوز ۱۰](./windows10_eol) را بررسی کنید.

:::

### چگونه ویندوز ۱۱ IoT Enterprise LTSC 2024 را به زبان غیر انگلیسی نصب کنیم؟

::: details برای اطلاعات بیشتر اینجا کلیک کنید

ISOهای نسخه IoT LTSC فقط به زبان انگلیسی موجود هستند. با این حال، می‌توانید مراحل زیر را برای نصب تمیز آن دنبال کنید.

> - ISO غیر IoT LTSC 2024 را به زبان مورد نظر از بخش زیر دانلود کنید
> - برای نصب نسخه IoT از ابتدا، از [روش PID.txt](./clean_install_windows#windows-11-on-unsupported-hardware) پیروی کنید.
>
> - به طور جایگزین، می‌توانید Non-IoT LTSC را به زبان دیگری نصب کرده و بعداً کلید IoT LTSC 2024 را در صفحه فعال‌سازی در تنظیمات ویندوز برای تغییر نسخه نصب کنید: 
> 
>   ```shell
>   KBN8V-HFGQ4-MGXVD-347P6-PDQGT
>   ```

:::

### چگونه ویندوز ۱۰ IoT Enterprise LTSC 2021 را به زبان غیر انگلیسی نصب کنیم؟

::: details برای اطلاعات بیشتر اینجا کلیک کنید

ISO های نسخه IoT LTSC فقط به زبان انگلیسی موجود هستند.

هنگام نصب ویندوز ۱۱ IoT Enterprise LTSC 2024 از ابتدا، یک مزیت، الزامات سخت‌افزاری آرام آن است. با این حال، انجام همین کار با نسخه IoT 2021 مزیت چندانی ندارد، زیرا می‌توانید بعداً به راحتی نسخه ویندوز را تغییر دهید. علاوه بر این، روش PID.txt برای نصب نسخه مجازی از ابتدا فقط برای ویندوز ۱۱ 24H2 و نسخه‌های بعدی قابل اجرا است. در حالی که روش‌های دیگری برای نصب از ابتدا وجود دارد، آنها پیچیده‌تر هستند و نتایج، تلاش را توجیه نمی‌کنند.

> - توصیه ما به شرح زیر است:
>
> - ISO غیر IoT LTSC 2021 را به زبان مورد نظر از بخش زیر دانلود کنید.
> - ویندوز را با استفاده از این [راهنمای نصب تمیز](./clean_install_windows) نصب کنید.
> - پس از نصب ویندوز، برای تغییر نسخه، کلید IoT LTSC 2021 را در صفحه فعال‌سازی در تنظیمات ویندوز وارد کنید:  
> 
>   ```shell
>   QPM6N-7J2WJ-P88HH-P3YRH-YY74H
>   ```

:::

<hr/><br/> 

# لینک‌های دانلود

:::tabs

== Windows 11 LTSC 2024

**ویندوز 11 IoT Enterprise LTSC 2024**

> - بیلد 26100.1742
> - این ISOها شامل نسخه‌های زیر هستند:
> - Windows 11 Enterprise LTSC
> - Windows 11 IoT Enterprise LTSC
> - Windows 11 IoT Enterprise Subscription LTSC

| زبان | معماری | لینک |
|:---|:---|:---|
| انگلیسی | x64 | [X23-81951_26100.1742.240906-0331.ge_release_svc_refresh_CLIENT_ENTERPRISES_OEM_x64FRE_en-us.iso](https://oemsoc.download.prss.microsoft.com/dbazure/X23-81951_26100.1742.240906-0331.ge_release_svc_refresh_CLIENT_ENTERPRISES_OEM_x64FRE_en-us.iso_640de540-87c4-427f-be87-e6d53a3a60b4?t=2c3b664b-b119-4088-9db1-ccff72c6d22e&P1=102816950270&P2=601&P3=2&P4=OC448onxqdmdUsBUApAiE8pj1FZ%2bEPTU3%2bC6Quq29MVwMyyDUtR%2fsbiy7RdVoZOHaZRndvzeOOnIwJZ2x3%2bmP6YK9cjJSP41Lvs0SulF4SVyL5C0DdDmiWqh2QW%2bcDPj2Xp%2bMrI9NOeElSBS5kkOWP8Eiyf2VkkQFM3g5vIk3HJVvu5sWo6pFKpFv4lML%2bHaIiTSuwbPMs5xwEQTfScuTKfigNlUZPdHRMp1B3uKLgIA3r0IbRpZgHYMXEwXQ%2fSLMdDNQthpqQvz1PThVkx7ObD55CXgt0GNSAWRfjdURWb8ywWk1gT7ozAgpP%2fKNm56U5nh33WZSuMZIuO1SBM2vw%3d%3d) <br /> = <br /> [en-us_windows_11_iot_enterprise_ltsc_2024_x64_dvd_f6b14814.iso](https://drive.massgrave.dev/en-us_windows_11_iot_enterprise_ltsc_2024_x64_dvd_f6b14814.iso) <br /> <br /> هر دو فایل یکسان هستند، فقط نام متفاوت است. <br /> لینک اول از پورتال رسمی OEM است و فایل دوم از MVS گرفته شده و در massgrave میزبانی می‌شود. <br /> توجه: با فایل لینک اول باید پسوند را به .iso تغییر نام دهید |

<hr/><br/>

**ویندوز ۱۱ Enterprise LTSC 2024**

> - بیلد 26100.1742

| زبان | معماری | لینک |
|:---|:---|:---|
| عربی | x64 | [ar-sa_windows_11_enterprise_ltsc_2024_x64_dvd_8012f159.iso](https://drive.massgrave.dev/ar-sa_windows_11_enterprise_ltsc_2024_x64_dvd_8012f159.iso) |
| بلغاری | x64 | [bg-bg_windows_11_enterprise_ltsc_2024_x64_dvd_2778f4e8.iso](https://drive.massgrave.dev/bg-bg_windows_11_enterprise_ltsc_2024_x64_dvd_2778f4e8.iso) |
| چکی | x64 | [cs-cz_windows_11_enterprise_ltsc_2024_x64_dvd_d4ef05f2.iso](https://drive.massgrave.dev/cs-cz_windows_11_enterprise_ltsc_2024_x64_dvd_d4ef05f2.iso) |
| دانمارکی | x64 | [da-dk_windows_11_enterprise_ltsc_2024_x64_dvd_c231c267.iso](https://drive.massgrave.dev/da-dk_windows_11_enterprise_ltsc_2024_x64_dvd_c231c267.iso) |
| آلمانی | x64 | [de-de_windows_11_enterprise_ltsc_2024_x64_dvd_4f136f69.iso](https://drive.massgrave.dev/de-de_windows_11_enterprise_ltsc_2024_x64_dvd_4f136f69.iso) |
| یونانی | x64 | [el-gr_windows_11_enterprise_ltsc_2024_x64_dvd_54eaabb2.iso](https://drive.massgrave.dev/el-gr_windows_11_enterprise_ltsc_2024_x64_dvd_54eaabb2.iso) |
| انگلیسی (بریتانیا) | x64 | [en-gb_windows_11_enterprise_ltsc_2024_x64_dvd_e2137661.iso](https://drive.massgrave.dev/en-gb_windows_11_enterprise_ltsc_2024_x64_dvd_e2137661.iso) |
| انگلیسی | x64 | [en-us_windows_11_enterprise_ltsc_2024_x64_dvd_965cfb00.iso](https://drive.massgrave.dev/en-us_windows_11_enterprise_ltsc_2024_x64_dvd_965cfb00.iso) |
| اسپانیایی | x64 | [es-es_windows_11_enterprise_ltsc_2024_x64_dvd_77392d61.iso](https://drive.massgrave.dev/es-es_windows_11_enterprise_ltsc_2024_x64_dvd_77392d61.iso) |
| اسپانیایی (مکزیک) | x64 | [es-mx_windows_11_enterprise_ltsc_2024_x64_dvd_3310c094.iso](https://drive.massgrave.dev/es-mx_windows_11_enterprise_ltsc_2024_x64_dvd_3310c094.iso) |
| استونیایی | x64 | [et-ee_windows_11_enterprise_ltsc_2024_x64_dvd_2dbd4bfe.iso](https://drive.massgrave.dev/et-ee_windows_11_enterprise_ltsc_2024_x64_dvd_2dbd4bfe.iso) |
| فنلاندی | x64 | [fi-fi_windows_11_enterprise_ltsc_2024_x64_dvd_998f5df6.iso](https://drive.massgrave.dev/fi-fi_windows_11_enterprise_ltsc_2024_x64_dvd_998f5df6.iso) |
| فرانسوی (کانادا) | x64 | [fr-ca_windows_11_enterprise_ltsc_2024_x64_dvd_78732953.iso](https://drive.massgrave.dev/fr-ca_windows_11_enterprise_ltsc_2024_x64_dvd_78732953.iso) |
| فرانسوی | x64 | [fr-fr_windows_11_enterprise_ltsc_2024_x64_dvd_d66e386e.iso](https://drive.massgrave.dev/fr-fr_windows_11_enterprise_ltsc_2024_x64_dvd_d66e386e.iso) |
| عبری | x64 | [he-il_windows_11_enterprise_ltsc_2024_x64_dvd_fae050ec.iso](https://drive.massgrave.dev/he-il_windows_11_enterprise_ltsc_2024_x64_dvd_fae050ec.iso) |
| کروات | x64 | [hr-hr_windows_11_enterprise_ltsc_2024_x64_dvd_e3594411.iso](https://drive.massgrave.dev/hr-hr_windows_11_enterprise_ltsc_2024_x64_dvd_e3594411.iso) |
| مجارستانی | x64 | [hu-hu_windows_11_enterprise_ltsc_2024_x64_dvd_8fea6034.iso](https://drive.massgrave.dev/hu-hu_windows_11_enterprise_ltsc_2024_x64_dvd_8fea6034.iso) |
| ایتالیایی | x64 | [it-it_windows_11_enterprise_ltsc_2024_x64_dvd_1e8cabb6.iso](https://drive.massgrave.dev/it-it_windows_11_enterprise_ltsc_2024_x64_dvd_1e8cabb6.iso) |
| ژاپنی | x64 | [ja-jp_windows_11_enterprise_ltsc_2024_x64_dvd_e59ad418.iso](https://drive.massgrave.dev/ja-jp_windows_11_enterprise_ltsc_2024_x64_dvd_e59ad418.iso) |
| کره‌ای | x64 | [ko-kr_windows_11_enterprise_ltsc_2024_x64_dvd_b6b6eb18.iso](https://drive.massgrave.dev/ko-kr_windows_11_enterprise_ltsc_2024_x64_dvd_b6b6eb18.iso) |
| لیتوانیایی | x64 | [lt-lt_windows_11_enterprise_ltsc_2024_x64_dvd_145479e9.iso](https://drive.massgrave.dev/lt-lt_windows_11_enterprise_ltsc_2024_x64_dvd_145479e9.iso) |
| لتونیایی | x64 | [lv-lv_windows_11_enterprise_ltsc_2024_x64_dvd_e0ebc53d.iso](https://drive.massgrave.dev/lv-lv_windows_11_enterprise_ltsc_2024_x64_dvd_e0ebc53d.iso) |
| نروژی (بوکمال) | x64 | [nb-no_windows_11_enterprise_ltsc_2024_x64_dvd_d41eeb48.iso](https://drive.massgrave.dev/nb-no_windows_11_enterprise_ltsc_2024_x64_dvd_d41eeb48.iso) |
| هلندی (هلند) | x64 | [nl-nl_windows_11_enterprise_ltsc_2024_x64_dvd_e3063aab.iso](https://drive.massgrave.dev/nl-nl_windows_11_enterprise_ltsc_2024_x64_dvd_e3063aab.iso) |
| لهستانی | x64 | [pl-pl_windows_11_enterprise_ltsc_2024_x64_dvd_e00807a1.iso](https://drive.massgrave.dev/pl-pl_windows_11_enterprise_ltsc_2024_x64_dvd_e00807a1.iso) |
| پرتغالی (برزیل) | x64 | [pt-br_windows_11_enterprise_ltsc_2024_x64_dvd_2bb6b75b.iso](https://drive.massgrave.dev/pt-br_windows_11_enterprise_ltsc_2024_x64_dvd_2bb6b75b.iso) |
| پرتغالی (پرتغال) | x64 | [pt-pt_windows_11_enterprise_ltsc_2024_x64_dvd_2f34bd6b.iso](https://drive.massgrave.dev/pt-pt_windows_11_enterprise_ltsc_2024_x64_dvd_2f34bd6b.iso) |
| رومانیایی | x64 | [ro-ro_windows_11_enterprise_ltsc_2024_x64_dvd_2eadb4df.iso](https://drive.massgrave.dev/ro-ro_windows_11_enterprise_ltsc_2024_x64_dvd_2eadb4df.iso) |
| روسی | x64 | [ru-ru_windows_11_enterprise_ltsc_2024_x64_dvd_f9af5773.iso](https://drive.massgrave.dev/ru-ru_windows_11_enterprise_ltsc_2024_x64_dvd_f9af5773.iso) |
| اسلواکی | x64 | [sk-sk_windows_11_enterprise_ltsc_2024_x64_dvd_03b916e7.iso](https://drive.massgrave.dev/sk-sk_windows_11_enterprise_ltsc_2024_x64_dvd_03b916e7.iso) |
| اسلوونیایی | x64 | [sl-si_windows_11_enterprise_ltsc_2024_x64_dvd_310b3a76.iso](https://drive.massgrave.dev/sl-si_windows_11_enterprise_ltsc_2024_x64_dvd_310b3a76.iso) |
| صربی (لاتین) | x64 | [sr-latn-rs_windows_11_enterprise_ltsc_2024_x64_dvd_3dfa5da5.iso](https://drive.massgrave.dev/sr-latn-rs_windows_11_enterprise_ltsc_2024_x64_dvd_3dfa5da5.iso) |
| سوئدی | x64 | [sv-se_windows_11_enterprise_ltsc_2024_x64_dvd_191cf991.iso](https://drive.massgrave.dev/sv-se_windows_11_enterprise_ltsc_2024_x64_dvd_191cf991.iso) |
| تایلندی | x64 | [th-th_windows_11_enterprise_ltsc_2024_x64_dvd_47ce2c8a.iso](https://drive.massgrave.dev/th-th_windows_11_enterprise_ltsc_2024_x64_dvd_47ce2c8a.iso) |
| ترکی | x64 | [tr-tr_windows_11_enterprise_ltsc_2024_x64_dvd_27bdab81.iso](https://drive.massgrave.dev/tr-tr_windows_11_enterprise_ltsc_2024_x64_dvd_27bdab81.iso) |
| اوکراینی | x64 | [uk-ua_windows_11_enterprise_ltsc_2024_x64_dvd_b3f00872.iso](https://drive.massgrave.dev/uk-ua_windows_11_enterprise_ltsc_2024_x64_dvd_b3f00872.iso) |
| چینی (ساده‌شده) | x64 | [zh-cn_windows_11_enterprise_ltsc_2024_x64_dvd_cff9cd2d.iso](https://drive.massgrave.dev/zh-cn_windows_11_enterprise_ltsc_2024_x64_dvd_cff9cd2d.iso) |
| چینی (سنتی) | x64 | [zh-tw_windows_11_enterprise_ltsc_2024_x64_dvd_6287d84d.iso](https://drive.massgrave.dev/zh-tw_windows_11_enterprise_ltsc_2024_x64_dvd_6287d84d.iso) |

== Windows 10 LTSC 2021

**ویندوز ۱۰ IoT Enterprise LTSC ۲۰۲۱**

> - بیلد 19044.1288
> - این ISOها شامل نسخه‌های زیر هستند: 
> - Windows 10 Enterprise LTSC
> - Windows 10 IoT Enterprise LTSC

| زبان | معماری | لینک |
|:---|:---|:---|
| انگلیسی | x64 | [en-us_windows_10_iot_enterprise_ltsc_2021_x64_dvd_257ad90f.iso](https://drive.massgrave.dev/en-us_windows_10_iot_enterprise_ltsc_2021_x64_dvd_257ad90f.iso) |

<hr/><br/>

**ویندوز ۱۰ Enterprise LTSC 2021**

> - بیلد 19044.1288

| زبان | معماری | لینک |
|:---|:---|:---|
| عربی | x64 | [ar-sa_windows_10_enterprise_ltsc_2021_x64_dvd_60bc2a7a.iso](https://drive.massgrave.dev/ar-sa_windows_10_enterprise_ltsc_2021_x64_dvd_60bc2a7a.iso) |
| عربی | x86 | [ar-sa_windows_10_enterprise_ltsc_2021_x86_dvd_69e2349b.iso](https://drive.massgrave.dev/ar-sa_windows_10_enterprise_ltsc_2021_x86_dvd_69e2349b.iso) |
| بلغاری | x64 | [bg-bg_windows_10_enterprise_ltsc_2021_x64_dvd_b0887275.iso](https://drive.massgrave.dev/bg-bg_windows_10_enterprise_ltsc_2021_x64_dvd_b0887275.iso) |
| بلغاری | x86 | [bg-bg_windows_10_enterprise_ltsc_2021_x86_dvd_8beb279f.iso](https://drive.massgrave.dev/bg-bg_windows_10_enterprise_ltsc_2021_x86_dvd_8beb279f.iso) |
| چکی | x64 | [cs-cz_windows_10_enterprise_ltsc_2021_x64_dvd_d624c653.iso](https://drive.massgrave.dev/cs-cz_windows_10_enterprise_ltsc_2021_x64_dvd_d624c653.iso) |
| چکی | x86 | [cs-cz_windows_10_enterprise_ltsc_2021_x86_dvd_2afa1afb.iso](https://drive.massgrave.dev/cs-cz_windows_10_enterprise_ltsc_2021_x86_dvd_2afa1afb.iso) |
| دانمارکی | x64 | [da-dk_windows_10_enterprise_ltsc_2021_x64_dvd_6ec511bb.iso](https://drive.massgrave.dev/da-dk_windows_10_enterprise_ltsc_2021_x64_dvd_6ec511bb.iso) |
| دانمارکی | x86 | [da-dk_windows_10_enterprise_ltsc_2021_x86_dvd_de761707.iso](https://drive.massgrave.dev/da-dk_windows_10_enterprise_ltsc_2021_x86_dvd_de761707.iso) |
| آلمانی | x64 | [de-de_windows_10_enterprise_ltsc_2021_x64_dvd_71796d33.iso](https://drive.massgrave.dev/de-de_windows_10_enterprise_ltsc_2021_x64_dvd_71796d33.iso) |
| آلمانی | x86 | [de-de_windows_10_enterprise_ltsc_2021_x86_dvd_6317aaff.iso](https://drive.massgrave.dev/de-de_windows_10_enterprise_ltsc_2021_x86_dvd_6317aaff.iso) |
| یونانی | x64 | [el-gr_windows_10_enterprise_ltsc_2021_x64_dvd_c83eab34.iso](https://drive.massgrave.dev/el-gr_windows_10_enterprise_ltsc_2021_x64_dvd_c83eab34.iso) |
| یونانی | x86 | [el-gr_windows_10_enterprise_ltsc_2021_x86_dvd_c7850ec0.iso](https://drive.massgrave.dev/el-gr_windows_10_enterprise_ltsc_2021_x86_dvd_c7850ec0.iso) |
| انگلیسی (بریتانیا) | x64 | [en-gb_windows_10_enterprise_ltsc_2021_x64_dvd_7fe51fe8.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_ltsc_2021_x64_dvd_7fe51fe8.iso) |
| انگلیسی (بریتانیا) | x86 | [en-gb_windows_10_enterprise_ltsc_2021_x86_dvd_baa2b09f.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_ltsc_2021_x86_dvd_baa2b09f.iso) |
| انگلیسی | x64 | [en-us_windows_10_enterprise_ltsc_2021_x64_dvd_d289cf96.iso](https://drive.massgrave.dev/en-us_windows_10_enterprise_ltsc_2021_x64_dvd_d289cf96.iso) |
| انگلیسی | x86 | [en-us_windows_10_enterprise_ltsc_2021_x86_dvd_9f4aa95f.iso](https://drive.massgrave.dev/en-us_windows_10_enterprise_ltsc_2021_x86_dvd_9f4aa95f.iso) |
| اسپانیایی | x64 | [es-es_windows_10_enterprise_ltsc_2021_x64_dvd_51d721ea.iso](https://drive.massgrave.dev/es-es_windows_10_enterprise_ltsc_2021_x64_dvd_51d721ea.iso) |
| اسپانیایی | x86 | [es-es_windows_10_enterprise_ltsc_2021_x86_dvd_243c83eb.iso](https://drive.massgrave.dev/es-es_windows_10_enterprise_ltsc_2021_x86_dvd_243c83eb.iso) |
| اسپانیایی (مکزیک) | x64 | [es-mx_windows_10_enterprise_ltsc_2021_x64_dvd_f6aaf384.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_ltsc_2021_x64_dvd_f6aaf384.iso) |
| اسپانیایی (مکزیک) | x86 | [es-mx_windows_10_enterprise_ltsc_2021_x86_dvd_93a5debe.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_ltsc_2021_x86_dvd_93a5debe.iso) |
| استونیایی | x64 | [et-ee_windows_10_enterprise_ltsc_2021_x64_dvd_012a5c50.iso](https://drive.massgrave.dev/et-ee_windows_10_enterprise_ltsc_2021_x64_dvd_012a5c50.iso) |
| استونیایی | x86 | [et-ee_windows_10_enterprise_ltsc_2021_x86_dvd_292aa316.iso](https://drive.massgrave.dev/et-ee_windows_10_enterprise_ltsc_2021_x86_dvd_292aa316.iso) |
| فنلاندی | x64 | [fi-fi_windows_10_enterprise_ltsc_2021_x64_dvd_551582d9.iso](https://drive.massgrave.dev/fi-fi_windows_10_enterprise_ltsc_2021_x64_dvd_551582d9.iso) |
| فنلاندی | x86 | [fi-fi_windows_10_enterprise_ltsc_2021_x86_dvd_15e0eeb9.iso](https://drive.massgrave.dev/fi-fi_windows_10_enterprise_ltsc_2021_x86_dvd_15e0eeb9.iso) |
| فرانسوی (کانادا) | x64 | [fr-ca_windows_10_enterprise_ltsc_2021_x64_dvd_2770e649.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_ltsc_2021_x64_dvd_2770e649.iso) |
| فرانسوی (کانادا) | x86 | [fr-ca_windows_10_enterprise_ltsc_2021_x86_dvd_5237961d.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_ltsc_2021_x86_dvd_5237961d.iso) |
| فرانسوی | x64 | [fr-fr_windows_10_enterprise_ltsc_2021_x64_dvd_bda01eb0.iso](https://drive.massgrave.dev/fr-fr_windows_10_enterprise_ltsc_2021_x64_dvd_bda01eb0.iso) |
| فرانسوی | x86 | [fr-fr_windows_10_enterprise_ltsc_2021_x86_dvd_53f189f9.iso](https://drive.massgrave.dev/fr-fr_windows_10_enterprise_ltsc_2021_x86_dvd_53f189f9.iso) |
| عبری | x64 | [he-il_windows_10_enterprise_ltsc_2021_x64_dvd_3a55ecd6.iso](https://drive.massgrave.dev/he-il_windows_10_enterprise_ltsc_2021_x64_dvd_3a55ecd6.iso) |
| عبری | x86 | [he-il_windows_10_enterprise_ltsc_2021_x86_dvd_3b560f44.iso](https://drive.massgrave.dev/he-il_windows_10_enterprise_ltsc_2021_x86_dvd_3b560f44.iso) |
| کروات | x64 | [hr-hr_windows_10_enterprise_ltsc_2021_x64_dvd_f5085b75.iso](https://drive.massgrave.dev/hr-hr_windows_10_enterprise_ltsc_2021_x64_dvd_f5085b75.iso) |
| کروات | x86 | [hr-hr_windows_10_enterprise_ltsc_2021_x86_dvd_bd52180e.iso](https://drive.massgrave.dev/hr-hr_windows_10_enterprise_ltsc_2021_x86_dvd_bd52180e.iso) |
| مجارستانی | x64 | [hu-hu_windows_10_enterprise_ltsc_2021_x64_dvd_d541ddb3.iso](https://drive.massgrave.dev/hu-hu_windows_10_enterprise_ltsc_2021_x64_dvd_d541ddb3.iso) |
| مجارستانی | x86 | [hu-hu_windows_10_enterprise_ltsc_2021_x86_dvd_a8cb11dd.iso](https://drive.massgrave.dev/hu-hu_windows_10_enterprise_ltsc_2021_x86_dvd_a8cb11dd.iso) |
| ایتالیایی | x64 | [it-it_windows_10_enterprise_ltsc_2021_x64_dvd_0c1aa034.iso](https://drive.massgrave.dev/it-it_windows_10_enterprise_ltsc_2021_x64_dvd_0c1aa034.iso) |
| ایتالیایی | x86 | [it-it_windows_10_enterprise_ltsc_2021_x86_dvd_46e4f7e1.iso](https://drive.massgrave.dev/it-it_windows_10_enterprise_ltsc_2021_x86_dvd_46e4f7e1.iso) |
| ژاپنی | x64 | [ja-jp_windows_10_enterprise_ltsc_2021_x64_dvd_ef58c6a1.iso](https://drive.massgrave.dev/ja-jp_windows_10_enterprise_ltsc_2021_x64_dvd_ef58c6a1.iso) |
| ژاپنی | x86 | [ja-jp_windows_10_enterprise_ltsc_2021_x86_dvd_ac893196.iso](https://drive.massgrave.dev/ja-jp_windows_10_enterprise_ltsc_2021_x86_dvd_ac893196.iso) |
| کره‌ای | x64 | [ko-kr_windows_10_enterprise_ltsc_2021_x64_dvd_6d26f398.iso](https://drive.massgrave.dev/ko-kr_windows_10_enterprise_ltsc_2021_x64_dvd_6d26f398.iso) |
| کره‌ای | x86 | [ko-kr_windows_10_enterprise_ltsc_2021_x86_dvd_dff1cb4e.iso](https://drive.massgrave.dev/ko-kr_windows_10_enterprise_ltsc_2021_x86_dvd_dff1cb4e.iso) |
| لیتوانیایی | x64 | [lt-lt_windows_10_enterprise_ltsc_2021_x64_dvd_9ffbbd5b.iso](https://drive.massgrave.dev/lt-lt_windows_10_enterprise_ltsc_2021_x64_dvd_9ffbbd5b.iso) |
| لیتوانیایی | x86 | [lt-lt_windows_10_enterprise_ltsc_2021_x86_dvd_fefed947.iso](https://drive.massgrave.dev/lt-lt_windows_10_enterprise_ltsc_2021_x86_dvd_fefed947.iso) |
| لتونیایی | x64 | [lv-lv_windows_10_enterprise_ltsc_2021_x64_dvd_6c89d2e0.iso](https://drive.massgrave.dev/lv-lv_windows_10_enterprise_ltsc_2021_x64_dvd_6c89d2e0.iso) |
| لتونیایی | x86 | [lv-lv_windows_10_enterprise_ltsc_2021_x86_dvd_41041cfd.iso](https://drive.massgrave.dev/lv-lv_windows_10_enterprise_ltsc_2021_x86_dvd_41041cfd.iso) |
| نروژی (بوکمال) | x64 | [nb-no_windows_10_enterprise_ltsc_2021_x64_dvd_c65c51a5.iso](https://drive.massgrave.dev/nb-no_windows_10_enterprise_ltsc_2021_x64_dvd_c65c51a5.iso) |
| نروژی (بوکمال) | x86 | [nb-no_windows_10_enterprise_ltsc_2021_x86_dvd_6f625462.iso](https://drive.massgrave.dev/nb-no_windows_10_enterprise_ltsc_2021_x86_dvd_6f625462.iso) |
| هلندی (هلند) | x64 | [nl-nl_windows_10_enterprise_ltsc_2021_x64_dvd_88f53466.iso](https://drive.massgrave.dev/nl-nl_windows_10_enterprise_ltsc_2021_x64_dvd_88f53466.iso) |
| هلندی (هلند) | x86 | [nl-nl_windows_10_enterprise_ltsc_2021_x86_dvd_231b3321.iso](https://drive.massgrave.dev/nl-nl_windows_10_enterprise_ltsc_2021_x86_dvd_231b3321.iso) |
| لهستانی | x64 | [pl-pl_windows_10_enterprise_ltsc_2021_x64_dvd_eff40776.iso](https://drive.massgrave.dev/pl-pl_windows_10_enterprise_ltsc_2021_x64_dvd_eff40776.iso) |
| لهستانی | x86 | [pl-pl_windows_10_enterprise_ltsc_2021_x86_dvd_4b0aed09.iso](https://drive.massgrave.dev/pl-pl_windows_10_enterprise_ltsc_2021_x86_dvd_4b0aed09.iso) |
| پرتغالی (برزیل) | x64 | [pt-br_windows_10_enterprise_ltsc_2021_x64_dvd_f318268e.iso](https://drive.massgrave.dev/pt-br_windows_10_enterprise_ltsc_2021_x64_dvd_f318268e.iso) |
| پرتغالی (برزیل) | x86 | [pt-br_windows_10_enterprise_ltsc_2021_x86_dvd_d4aea182.iso](https://drive.massgrave.dev/pt-br_windows_10_enterprise_ltsc_2021_x86_dvd_d4aea182.iso) |
| پرتغالی (پرتغال) | x64 | [pt-pt_windows_10_enterprise_ltsc_2021_x64_dvd_f2e9b6a0.iso](https://drive.massgrave.dev/pt-pt_windows_10_enterprise_ltsc_2021_x64_dvd_f2e9b6a0.iso) |
| پرتغالی (پرتغال) | x86 | [pt-pt_windows_10_enterprise_ltsc_2021_x86_dvd_2ed38b71.iso](https://drive.massgrave.dev/pt-pt_windows_10_enterprise_ltsc_2021_x86_dvd_2ed38b71.iso) |
| رومانیایی | x64 | [ro-ro_windows_10_enterprise_ltsc_2021_x64_dvd_ae2284d6.iso](https://drive.massgrave.dev/ro-ro_windows_10_enterprise_ltsc_2021_x64_dvd_ae2284d6.iso) |
| رومانیایی | x86 | [ro-ro_windows_10_enterprise_ltsc_2021_x86_dvd_e68b65bc.iso](https://drive.massgrave.dev/ro-ro_windows_10_enterprise_ltsc_2021_x86_dvd_e68b65bc.iso) |
| روسی | x64 | [ru-ru_windows_10_enterprise_ltsc_2021_x64_dvd_5044a1e7.iso](https://drive.massgrave.dev/ru-ru_windows_10_enterprise_ltsc_2021_x64_dvd_5044a1e7.iso) |
| روسی | x86 | [ru-ru_windows_10_enterprise_ltsc_2021_x86_dvd_cdf355eb.iso](https://drive.massgrave.dev/ru-ru_windows_10_enterprise_ltsc_2021_x86_dvd_cdf355eb.iso) |
| اسلواکی | x64 | [sk-sk_windows_10_enterprise_ltsc_2021_x64_dvd_d6c64c5f.iso](https://drive.massgrave.dev/sk-sk_windows_10_enterprise_ltsc_2021_x64_dvd_d6c64c5f.iso) |
| اسلواکی | x86 | [sk-sk_windows_10_enterprise_ltsc_2021_x86_dvd_10ed79ca.iso](https://drive.massgrave.dev/sk-sk_windows_10_enterprise_ltsc_2021_x86_dvd_10ed79ca.iso) |
| اسلوونیایی | x64 | [sl-si_windows_10_enterprise_ltsc_2021_x64_dvd_ec090386.iso](https://drive.massgrave.dev/sl-si_windows_10_enterprise_ltsc_2021_x64_dvd_ec090386.iso) |
| اسلوونیایی | x86 | [sl-si_windows_10_enterprise_ltsc_2021_x86_dvd_5e0e48a8.iso](https://drive.massgrave.dev/sl-si_windows_10_enterprise_ltsc_2021_x86_dvd_5e0e48a8.iso) |
| صربی (لاتین) | x64 | [sr-latn-rs_windows_10_enterprise_ltsc_2021_x64_dvd_2d2f8815.iso](https://drive.massgrave.dev/sr-latn-rs_windows_10_enterprise_ltsc_2021_x64_dvd_2d2f8815.iso) |
| صربی (لاتین) | x86 | [sr-latn-rs_windows_10_enterprise_ltsc_2021_x86_dvd_248407e2.iso](https://drive.massgrave.dev/sr-latn-rs_windows_10_enterprise_ltsc_2021_x86_dvd_248407e2.iso) |
| سوئدی | x64 | [sv-se_windows_10_enterprise_ltsc_2021_x64_dvd_9a28bb6b.iso](https://drive.massgrave.dev/sv-se_windows_10_enterprise_ltsc_2021_x64_dvd_9a28bb6b.iso) |
| سوئدی | x86 | [sv-se_windows_10_enterprise_ltsc_2021_x86_dvd_9081ef5b.iso](https://drive.massgrave.dev/sv-se_windows_10_enterprise_ltsc_2021_x86_dvd_9081ef5b.iso) |
| تایلندی | x64 | [th-th_windows_10_enterprise_ltsc_2021_x64_dvd_b7ed34d6.iso](https://drive.massgrave.dev/th-th_windows_10_enterprise_ltsc_2021_x64_dvd_b7ed34d6.iso) |
| تایلندی | x86 | [th-th_windows_10_enterprise_ltsc_2021_x86_dvd_df412841.iso](https://drive.massgrave.dev/th-th_windows_10_enterprise_ltsc_2021_x86_dvd_df412841.iso) |
| ترکی | x64 | [tr-tr_windows_10_enterprise_ltsc_2021_x64_dvd_e55b1896.iso](https://drive.massgrave.dev/tr-tr_windows_10_enterprise_ltsc_2021_x64_dvd_e55b1896.iso) |
| ترکی | x86 | [tr-tr_windows_10_enterprise_ltsc_2021_x86_dvd_36fc55f4.iso](https://drive.massgrave.dev/tr-tr_windows_10_enterprise_ltsc_2021_x86_dvd_36fc55f4.iso) |
| اوکراینی | x64 | [uk-ua_windows_10_enterprise_ltsc_2021_x64_dvd_816da3c3.iso](https://drive.massgrave.dev/uk-ua_windows_10_enterprise_ltsc_2021_x64_dvd_816da3c3.iso) |
| اوکراینی | x86 | [uk-ua_windows_10_enterprise_ltsc_2021_x86_dvd_aa372ed6.iso](https://drive.massgrave.dev/uk-ua_windows_10_enterprise_ltsc_2021_x86_dvd_aa372ed6.iso) |
| چینی (ساده‌شده) | x64 | [zh-cn_windows_10_enterprise_ltsc_2021_x64_dvd_033b7312.iso](https://drive.massgrave.dev/zh-cn_windows_10_enterprise_ltsc_2021_x64_dvd_033b7312.iso) |
| چینی (ساده‌شده) | x86 | [zh-cn_windows_10_enterprise_ltsc_2021_x86_dvd_30600d9c.iso](https://drive.massgrave.dev/zh-cn_windows_10_enterprise_ltsc_2021_x86_dvd_30600d9c.iso) |
| چینی (سنتی) | x64 | [zh-tw_windows_10_enterprise_ltsc_2021_x64_dvd_80dba877.iso](https://drive.massgrave.dev/zh-tw_windows_10_enterprise_ltsc_2021_x64_dvd_80dba877.iso) |
| چینی (سنتی) | x86 | [zh-tw_windows_10_enterprise_ltsc_2021_x86_dvd_03be1c20.iso](https://drive.massgrave.dev/zh-tw_windows_10_enterprise_ltsc_2021_x86_dvd_03be1c20.iso) |

== Windows 10 LTSC 2019

**ویندوز ۱۰ IoT Enterprise LTSC 2019**

> - بیلد 17763.107
> این نسخه واقعاً نسخه IotEnterpriseS را ندارد، فقط EnterpriseS با کلید OEM (عمومی، فعال نشده) نصب شده است.

| زبان | معماری | لینک |
|:---|:---|:---|
| انگلیسی | x64 | [en_windows_10_iot_enterprise_ltsc_2019_x64_dvd_a1aa819f.iso](https://drive.massgrave.dev/en_windows_10_iot_enterprise_ltsc_2019_x64_dvd_a1aa819f.iso) |
| انگلیسی | x86 | [en_windows_10_iot_enterprise_ltsc_2019_x86_dvd_2255a237.iso](https://drive.massgrave.dev/en_windows_10_iot_enterprise_ltsc_2019_x86_dvd_2255a237.iso) |

<hr/><br/> 

**ویندوز ۱۰ Enterprise LTSC 2019**

> - بیلد 17763.316

| زبان | معماری | لینک |
|:---|:---|:---|
| عربی | x64 | [ar_windows_10_enterprise_ltsc_2019_x64_dvd_a1f42c56.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_ltsc_2019_x64_dvd_a1f42c56.iso) |
| عربی | x86 | [ar_windows_10_enterprise_ltsc_2019_x86_dvd_8faea15c.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_ltsc_2019_x86_dvd_8faea15c.iso) |
| بلغاری | x64 | [bg_windows_10_enterprise_ltsc_2019_x64_dvd_65c7e0c3.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_ltsc_2019_x64_dvd_65c7e0c3.iso) |
| بلغاری | x86 | [bg_windows_10_enterprise_ltsc_2019_x86_dvd_73c555b7.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_ltsc_2019_x86_dvd_73c555b7.iso) |
| چینی (ساده‌شده) | x64 | [cn_windows_10_enterprise_ltsc_2019_x64_dvd_9c09ff24.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_ltsc_2019_x64_dvd_9c09ff24.iso) |
| چینی (ساده‌شده) | x86 | [cn_windows_10_enterprise_ltsc_2019_x86_dvd_1814dbab.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_ltsc_2019_x86_dvd_1814dbab.iso) |
| چکی | x64 | [cs_windows_10_enterprise_ltsc_2019_x64_dvd_b15b47cf.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_ltsc_2019_x64_dvd_b15b47cf.iso) |
| چکی | x86 | [cs_windows_10_enterprise_ltsc_2019_x86_dvd_b3b102f8.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_ltsc_2019_x86_dvd_b3b102f8.iso) |
| چینی (سنتی) | x64 | [ct_windows_10_enterprise_ltsc_2019_x64_dvd_c301154f.iso](https://drive.massgrave.dev/ct_windows_10_enterprise_ltsc_2019_x64_dvd_c301154f.iso) |
| چینی (سنتی) | x86 | [ct_windows_10_enterprise_ltsc_2019_x86_dvd_9096dec8.iso](https://drive.massgrave.dev/ct_windows_10_enterprise_ltsc_2019_x86_dvd_9096dec8.iso) |
| دانمارکی | x64 | [da_windows_10_enterprise_ltsc_2019_x64_dvd_772bd569.iso](https://drive.massgrave.dev/da_windows_10_enterprise_ltsc_2019_x64_dvd_772bd569.iso) |
| دانمارکی | x86 | [da_windows_10_enterprise_ltsc_2019_x86_dvd_54ea3b7c.iso](https://drive.massgrave.dev/da_windows_10_enterprise_ltsc_2019_x86_dvd_54ea3b7c.iso) |
| آلمانی | x64 | [de_windows_10_enterprise_ltsc_2019_x64_dvd_34efbe54.iso](https://drive.massgrave.dev/de_windows_10_enterprise_ltsc_2019_x64_dvd_34efbe54.iso) |
| آلمانی | x86 | [de_windows_10_enterprise_ltsc_2019_x86_dvd_b003dc50.iso](https://drive.massgrave.dev/de_windows_10_enterprise_ltsc_2019_x86_dvd_b003dc50.iso) |
| یونانی | x64 | [el_windows_10_enterprise_ltsc_2019_x64_dvd_25ea66b9.iso](https://drive.massgrave.dev/el_windows_10_enterprise_ltsc_2019_x64_dvd_25ea66b9.iso) |
| یونانی | x86 | [el_windows_10_enterprise_ltsc_2019_x86_dvd_d8746855.iso](https://drive.massgrave.dev/el_windows_10_enterprise_ltsc_2019_x86_dvd_d8746855.iso) |
| انگلیسی (بریتانیا) | x64 | [en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.iso](https://drive.massgrave.dev/en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.iso) |
| انگلیسی (بریتانیا) | x86 | [en-uk_windows_10_enterprise_ltsc_2019_x86_dvd_ae3afea1.iso](https://drive.massgrave.dev/en-uk_windows_10_enterprise_ltsc_2019_x86_dvd_ae3afea1.iso) |
| انگلیسی | x64 | [en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso](https://drive.massgrave.dev/en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso) |
| انگلیسی | x86 | [en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso](https://drive.massgrave.dev/en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso) |
| اسپانیایی (مکزیک) | x64 | [es-mx_windows_10_enterprise_ltsc_2019_x64_dvd_686cdfbe.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_ltsc_2019_x64_dvd_686cdfbe.iso) |
| اسپانیایی (مکزیک) | x86 | [es-mx_windows_10_enterprise_ltsc_2019_x86_dvd_a706f07d.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_ltsc_2019_x86_dvd_a706f07d.iso) |
| اسپانیایی | x64 | [es_windows_10_enterprise_ltsc_2019_x64_dvd_44a5b896.iso](https://drive.massgrave.dev/es_windows_10_enterprise_ltsc_2019_x64_dvd_44a5b896.iso) |
| اسپانیایی | x86 | [es_windows_10_enterprise_ltsc_2019_x86_dvd_84f6ff1d.iso](https://drive.massgrave.dev/es_windows_10_enterprise_ltsc_2019_x86_dvd_84f6ff1d.iso) |
| استونیایی | x64 | [et_windows_10_enterprise_ltsc_2019_x64_dvd_509e0d4c.iso](https://drive.massgrave.dev/et_windows_10_enterprise_ltsc_2019_x64_dvd_509e0d4c.iso) |
| استونیایی | x86 | [et_windows_10_enterprise_ltsc_2019_x86_dvd_56908605.iso](https://drive.massgrave.dev/et_windows_10_enterprise_ltsc_2019_x86_dvd_56908605.iso) |
| فنلاندی | x64 | [fi_windows_10_enterprise_ltsc_2019_x64_dvd_8e6aaf2c.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_ltsc_2019_x64_dvd_8e6aaf2c.iso) |
| فنلاندی | x86 | [fi_windows_10_enterprise_ltsc_2019_x86_dvd_8016a99b.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_ltsc_2019_x86_dvd_8016a99b.iso) |
| فرانسوی (کانادا) | x64 | [fr-ca_windows_10_enterprise_ltsc_2019_x64_dvd_a77dd2c4.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_ltsc_2019_x64_dvd_a77dd2c4.iso) |
| فرانسوی (کانادا) | x86 | [fr-ca_windows_10_enterprise_ltsc_2019_x86_dvd_21e007a6.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_ltsc_2019_x86_dvd_21e007a6.iso) |
| فرانسوی | x64 | [fr_windows_10_enterprise_ltsc_2019_x64_dvd_d64b363d.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_ltsc_2019_x64_dvd_d64b363d.iso) |
| فرانسوی | x86 | [fr_windows_10_enterprise_ltsc_2019_x86_dvd_6718a277.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_ltsc_2019_x86_dvd_6718a277.iso) |
| عبری | x64 | [he_windows_10_enterprise_ltsc_2019_x64_dvd_a5032f00.iso](https://drive.massgrave.dev/he_windows_10_enterprise_ltsc_2019_x64_dvd_a5032f00.iso) |
| عبری | x86 | [he_windows_10_enterprise_ltsc_2019_x86_dvd_e35105b4.iso](https://drive.massgrave.dev/he_windows_10_enterprise_ltsc_2019_x86_dvd_e35105b4.iso) |
| کروات | x64 | [hr_windows_10_enterprise_ltsc_2019_x64_dvd_0154a57e.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_ltsc_2019_x64_dvd_0154a57e.iso) |
| کروات | x86 | [hr_windows_10_enterprise_ltsc_2019_x86_dvd_978cda23.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_ltsc_2019_x86_dvd_978cda23.iso) |
| مجارستانی | x64 | [hu_windows_10_enterprise_ltsc_2019_x64_dvd_7afb1447.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_ltsc_2019_x64_dvd_7afb1447.iso) |
| مجارستانی | x86 | [hu_windows_10_enterprise_ltsc_2019_x86_dvd_c59bde73.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_ltsc_2019_x86_dvd_c59bde73.iso) |
| ایتالیایی | x64 | [it_windows_10_enterprise_ltsc_2019_x64_dvd_e8629a2f.iso](https://drive.massgrave.dev/it_windows_10_enterprise_ltsc_2019_x64_dvd_e8629a2f.iso) |
| ایتالیایی | x86 | [it_windows_10_enterprise_ltsc_2019_x86_dvd_0908d54b.iso](https://drive.massgrave.dev/it_windows_10_enterprise_ltsc_2019_x86_dvd_0908d54b.iso) |
| ژاپنی | x64 | [ja_windows_10_enterprise_ltsc_2019_x64_dvd_c67b830b.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_ltsc_2019_x64_dvd_c67b830b.iso) |
| ژاپنی | x86 | [ja_windows_10_enterprise_ltsc_2019_x86_dvd_72e8b031.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_ltsc_2019_x86_dvd_72e8b031.iso) |
| کره‌ای | x64 | [ko_windows_10_enterprise_ltsc_2019_x64_dvd_67887e3e.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_ltsc_2019_x64_dvd_67887e3e.iso) |
| کره‌ای | x86 | [ko_windows_10_enterprise_ltsc_2019_x86_dvd_4df783b1.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_ltsc_2019_x86_dvd_4df783b1.iso) |
| لیتوانیایی | x64 | [lt_windows_10_enterprise_ltsc_2019_x64_dvd_5f505ee8.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_ltsc_2019_x64_dvd_5f505ee8.iso) |
| لیتوانیایی | x86 | [lt_windows_10_enterprise_ltsc_2019_x86_dvd_d3df66d2.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_ltsc_2019_x86_dvd_d3df66d2.iso) |
| لتونیایی | x64 | [lv_windows_10_enterprise_ltsc_2019_x64_dvd_410d73cd.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_ltsc_2019_x64_dvd_410d73cd.iso) |
| لتونیایی | x86 | [lv_windows_10_enterprise_ltsc_2019_x86_dvd_c4ab014e.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_ltsc_2019_x86_dvd_c4ab014e.iso) |
| نروژی (بوکمال) | x64 | [nb_windows_10_enterprise_ltsc_2019_x64_dvd_512b1b80.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_ltsc_2019_x64_dvd_512b1b80.iso) |
| نروژی (بوکمال) | x86 | [nb_windows_10_enterprise_ltsc_2019_x86_dvd_4411d908.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_ltsc_2019_x86_dvd_4411d908.iso) |
| هلندی | x64 | [nl_windows_10_enterprise_ltsc_2019_x64_dvd_6b4c874e.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_ltsc_2019_x64_dvd_6b4c874e.iso) |
| هلندی | x86 | [nl_windows_10_enterprise_ltsc_2019_x86_dvd_7de5cbe9.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_ltsc_2019_x86_dvd_7de5cbe9.iso) |
| لهستانی | x64 | [pl_windows_10_enterprise_ltsc_2019_x64_dvd_e896167a.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_ltsc_2019_x64_dvd_e896167a.iso) |
| لهستانی | x86 | [pl_windows_10_enterprise_ltsc_2019_x86_dvd_83c5bbde.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_ltsc_2019_x86_dvd_83c5bbde.iso) |
| پرتغالی (پرتغال) | x64 | [pp_windows_10_enterprise_ltsc_2019_x64_dvd_c8d2470d.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_ltsc_2019_x64_dvd_c8d2470d.iso) |
| پرتغالی (پرتغال) | x86 | [pp_windows_10_enterprise_ltsc_2019_x86_dvd_206310fd.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_ltsc_2019_x86_dvd_206310fd.iso) |
| پرتغالی (برزیل) | x64 | [pt_windows_10_enterprise_ltsc_2019_x64_dvd_d43dcbad.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_ltsc_2019_x64_dvd_d43dcbad.iso) |
| پرتغالی (برزیل) | x86 | [pt_windows_10_enterprise_ltsc_2019_x86_dvd_208df283.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_ltsc_2019_x86_dvd_208df283.iso) |
| رومانیایی | x64 | [ro_windows_10_enterprise_ltsc_2019_x64_dvd_47b6116b.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_ltsc_2019_x64_dvd_47b6116b.iso) |
| رومانیایی | x86 | [ro_windows_10_enterprise_ltsc_2019_x86_dvd_d1a09b2f.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_ltsc_2019_x86_dvd_d1a09b2f.iso) |
| روسی | x64 | [ru_windows_10_enterprise_ltsc_2019_x64_dvd_78e7853a.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_ltsc_2019_x64_dvd_78e7853a.iso) |
| روسی | x86 | [ru_windows_10_enterprise_ltsc_2019_x86_dvd_196b5dad.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_ltsc_2019_x86_dvd_196b5dad.iso) |
| اسلواکی | x64 | [sk_windows_10_enterprise_ltsc_2019_x64_dvd_47437358.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_ltsc_2019_x64_dvd_47437358.iso) |
| اسلواکی | x86 | [sk_windows_10_enterprise_ltsc_2019_x86_dvd_dede1f66.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_ltsc_2019_x86_dvd_dede1f66.iso) |
| اسلوونیایی | x64 | [sl_windows_10_enterprise_ltsc_2019_x64_dvd_05f349aa.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_ltsc_2019_x64_dvd_05f349aa.iso) |
| اسلوونیایی | x86 | [sl_windows_10_enterprise_ltsc_2019_x86_dvd_3b3b7261.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_ltsc_2019_x86_dvd_3b3b7261.iso) |
| صربی (لاتین) | x64 | [sr_windows_10_enterprise_ltsc_2019_x64_dvd_8b47ec8a.iso](https://drive.massgrave.dev/sr_windows_10_enterprise_ltsc_2019_x64_dvd_8b47ec8a.iso) |
| صربی (لاتین) | x86 | [sr_windows_10_enterprise_ltsc_2019_x86_dvd_973a9911.iso](https://drive.massgrave.dev/sr_windows_10_enterprise_ltsc_2019_x86_dvd_973a9911.iso) |
| سوئدی | x64 | [sv_windows_10_enterprise_ltsc_2019_x64_dvd_4b25e231.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_ltsc_2019_x64_dvd_4b25e231.iso) |
| سوئدی | x86 | [sv_windows_10_enterprise_ltsc_2019_x86_dvd_5618a7ff.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_ltsc_2019_x86_dvd_5618a7ff.iso) |
| تایلندی | x64 | [th_windows_10_enterprise_ltsc_2019_x64_dvd_ae87916a.iso](https://drive.massgrave.dev/th_windows_10_enterprise_ltsc_2019_x64_dvd_ae87916a.iso) |
| تایلندی | x86 | [th_windows_10_enterprise_ltsc_2019_x86_dvd_5e37c638.iso](https://drive.massgrave.dev/th_windows_10_enterprise_ltsc_2019_x86_dvd_5e37c638.iso) |
| ترکی | x64 | [tr_windows_10_enterprise_ltsc_2019_x64_dvd_f2b90518.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_ltsc_2019_x64_dvd_f2b90518.iso) |
| ترکی | x86 | [tr_windows_10_enterprise_ltsc_2019_x86_dvd_1d5513a0.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_ltsc_2019_x86_dvd_1d5513a0.iso) |
| اوکراینی | x64 | [uk_windows_10_enterprise_ltsc_2019_x64_dvd_d40a905a.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_ltsc_2019_x64_dvd_d40a905a.iso) |
| اوکراینی | x86 | [uk_windows_10_enterprise_ltsc_2019_x86_dvd_e3b4eb4d.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_ltsc_2019_x86_dvd_e3b4eb4d.iso) |

== Windows 10 LTSB 2016

**ویندوز ۱۰ Enterprise LTSB 2016**

> - بیلد 14393

| زبان | معماری | لینک |
|:---|:---|:---|
| عربی | x64 | [ar_windows_10_enterprise_2016_ltsb_x64_dvd_9059481.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_2016_ltsb_x64_dvd_9059481.iso) |
| عربی | x86 | [ar_windows_10_enterprise_2016_ltsb_x86_dvd_9060006.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_2016_ltsb_x86_dvd_9060006.iso) |
| بلغاری | x64 | [bg_windows_10_enterprise_2016_ltsb_x64_dvd_9060109.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_2016_ltsb_x64_dvd_9060109.iso) |
| بلغاری | x86 | [bg_windows_10_enterprise_2016_ltsb_x86_dvd_9060079.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_2016_ltsb_x86_dvd_9060079.iso) |
| چینی (ساده‌شده) | x64 | [cn_windows_10_enterprise_2016_ltsb_x64_dvd_9060409.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_2016_ltsb_x64_dvd_9060409.iso) |
| چینی (ساده‌شده) | x86 | [cn_windows_10_enterprise_2016_ltsb_x86_dvd_9057089.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_2016_ltsb_x86_dvd_9057089.iso) |
| چکی | x64 | [cs_windows_10_enterprise_2016_ltsb_x64_dvd_9058277.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_2016_ltsb_x64_dvd_9058277.iso) |
| چکی | x86 | [cs_windows_10_enterprise_2016_ltsb_x86_dvd_9058253.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_2016_ltsb_x86_dvd_9058253.iso) |
| چینی (سنتی) | x64 | [ct_windows_10_enterprise_2016_ltsb_x64_dvd_9057374.iso](https://drive.massgrave.dev/ct_windows_10_enterprise_2016_ltsb_x64_dvd_9057374.iso) |
| چینی (سنتی) | x86 | [ct_windows_10_enterprise_2016_ltsb_x86_dvd_9057437.iso](https://drive.massgrave.dev/ct_windows_10_enterprise_2016_ltsb_x86_dvd_9057437.iso) |
| دانمارکی | x64 | [da_windows_10_enterprise_2016_ltsb_x64_dvd_9058601.iso](https://drive.massgrave.dev/da_windows_10_enterprise_2016_ltsb_x64_dvd_9058601.iso) |
| دانمارکی | x86 | [da_windows_10_enterprise_2016_ltsb_x86_dvd_9058895.iso](https://drive.massgrave.dev/da_windows_10_enterprise_2016_ltsb_x86_dvd_9058895.iso) |
| آلمانی | x64 | [de_windows_10_enterprise_2016_ltsb_x64_dvd_9058605.iso](https://drive.massgrave.dev/de_windows_10_enterprise_2016_ltsb_x64_dvd_9058605.iso) |
| آلمانی | x86 | [de_windows_10_enterprise_2016_ltsb_x86_dvd_9058899.iso](https://drive.massgrave.dev/de_windows_10_enterprise_2016_ltsb_x86_dvd_9058899.iso) |
| یونانی | x64 | [el_windows_10_enterprise_2016_ltsb_x64_dvd_9059317.iso](https://drive.massgrave.dev/el_windows_10_enterprise_2016_ltsb_x64_dvd_9059317.iso) |
| یونانی | x86 | [el_windows_10_enterprise_2016_ltsb_x86_dvd_9059530.iso](https://drive.massgrave.dev/el_windows_10_enterprise_2016_ltsb_x86_dvd_9059530.iso) |
| انگلیسی (بریتانیا) | x64 | [en-gb_windows_10_enterprise_2016_ltsb_x64_dvd_9060114.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_2016_ltsb_x64_dvd_9060114.iso) |
| انگلیسی (بریتانیا) | x86 | [en-gb_windows_10_enterprise_2016_ltsb_x86_dvd_9060085.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_2016_ltsb_x86_dvd_9060085.iso) |
| انگلیسی | x64 | [en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso](https://drive.massgrave.dev/en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso) |
| انگلیسی | x86 | [en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso](https://drive.massgrave.dev/en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso) |
| اسپانیایی (مکزیک) | x64 | [es-mx_windows_10_enterprise_2016_ltsb_x64_dvd_9060115.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_2016_ltsb_x64_dvd_9060115.iso) |
| اسپانیایی (مکزیک) | x86 | [es-mx_windows_10_enterprise_2016_ltsb_x86_dvd_9060090.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_2016_ltsb_x86_dvd_9060090.iso) |
| اسپانیایی | x64 | [es_windows_10_enterprise_2016_ltsb_x64_dvd_9059485.iso](https://drive.massgrave.dev/es_windows_10_enterprise_2016_ltsb_x64_dvd_9059485.iso) |
| اسپانیایی | x86 | [es_windows_10_enterprise_2016_ltsb_x86_dvd_9060020.iso](https://drive.massgrave.dev/es_windows_10_enterprise_2016_ltsb_x86_dvd_9060020.iso) |
| استونیایی | x64 | [et_windows_10_enterprise_2016_ltsb_x64_dvd_9060433.iso](https://drive.massgrave.dev/et_windows_10_enterprise_2016_ltsb_x64_dvd_9060433.iso) |
| استونیایی | x86 | [et_windows_10_enterprise_2016_ltsb_x86_dvd_9057091.iso](https://drive.massgrave.dev/et_windows_10_enterprise_2016_ltsb_x86_dvd_9057091.iso) |
| فنلاندی | x64 | [fi_windows_10_enterprise_2016_ltsb_x64_dvd_9057376.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_2016_ltsb_x64_dvd_9057376.iso) |
| فنلاندی | x86 | [fi_windows_10_enterprise_2016_ltsb_x86_dvd_9057439.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_2016_ltsb_x86_dvd_9057439.iso) |
| فرانسوی (کانادا) | x64 | [fr-ca_windows_10_enterprise_2016_ltsb_x64_dvd_9058278.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_2016_ltsb_x64_dvd_9058278.iso) |
| فرانسوی (کانادا) | x86 | [fr-ca_windows_10_enterprise_2016_ltsb_x86_dvd_9058259.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_2016_ltsb_x86_dvd_9058259.iso) |
| فرانسوی | x64 | [fr_windows_10_enterprise_2016_ltsb_x64_dvd_9057871.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_2016_ltsb_x64_dvd_9057871.iso) |
| فرانسوی | x86 | [fr_windows_10_enterprise_2016_ltsb_x86_dvd_9058127.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_2016_ltsb_x86_dvd_9058127.iso) |
| عبری | x64 | [he_windows_10_enterprise_2016_ltsb_x64_dvd_9059484.iso](https://drive.massgrave.dev/he_windows_10_enterprise_2016_ltsb_x64_dvd_9059484.iso) |
| عبری | x86 | [he_windows_10_enterprise_2016_ltsb_x86_dvd_9060012.iso](https://drive.massgrave.dev/he_windows_10_enterprise_2016_ltsb_x86_dvd_9060012.iso) |
| کروات | x64 | [hr_windows_10_enterprise_2016_ltsb_x64_dvd_9057884.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_2016_ltsb_x64_dvd_9057884.iso) |
| کروات | x86 | [hr_windows_10_enterprise_2016_ltsb_x86_dvd_9058120.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_2016_ltsb_x86_dvd_9058120.iso) |
| مجارستانی | x64 | [hu_windows_10_enterprise_2016_ltsb_x64_dvd_9060111.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_2016_ltsb_x64_dvd_9060111.iso) |
| مجارستانی | x86 | [hu_windows_10_enterprise_2016_ltsb_x86_dvd_9060087.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_2016_ltsb_x86_dvd_9060087.iso) |
| ایتالیایی | x64 | [it_windows_10_enterprise_2016_ltsb_x64_dvd_9060446.iso](https://drive.massgrave.dev/it_windows_10_enterprise_2016_ltsb_x64_dvd_9060446.iso) |
| ایتالیایی | x86 | [it_windows_10_enterprise_2016_ltsb_x86_dvd_9057094.iso](https://drive.massgrave.dev/it_windows_10_enterprise_2016_ltsb_x86_dvd_9057094.iso) |
| ژاپنی | x64 | [ja_windows_10_enterprise_2016_ltsb_x64_dvd_9057377.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_2016_ltsb_x64_dvd_9057377.iso) |
| ژاپنی | x86 | [ja_windows_10_enterprise_2016_ltsb_x86_dvd_9057438.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_2016_ltsb_x86_dvd_9057438.iso) |
| کره‌ای | x64 | [ko_windows_10_enterprise_2016_ltsb_x64_dvd_9057889.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_2016_ltsb_x64_dvd_9057889.iso) |
| کره‌ای | x86 | [ko_windows_10_enterprise_2016_ltsb_x86_dvd_9058162.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_2016_ltsb_x86_dvd_9058162.iso) |
| لیتوانیایی | x64 | [lt_windows_10_enterprise_2016_ltsb_x64_dvd_9058606.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_2016_ltsb_x64_dvd_9058606.iso) |
| لیتوانیایی | x86 | [lt_windows_10_enterprise_2016_ltsb_x86_dvd_9058906.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_2016_ltsb_x86_dvd_9058906.iso) |
| لتونیایی | x64 | [lv_windows_10_enterprise_2016_ltsb_x64_dvd_9058289.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_2016_ltsb_x64_dvd_9058289.iso) |
| لتونیایی | x86 | [lv_windows_10_enterprise_2016_ltsb_x86_dvd_9058263.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_2016_ltsb_x86_dvd_9058263.iso) |
| نروژی (بوکمال) | x64 | [nb_windows_10_enterprise_2016_ltsb_x64_dvd_9059319.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_2016_ltsb_x64_dvd_9059319.iso) |
| نروژی (بوکمال) | x86 | [nb_windows_10_enterprise_2016_ltsb_x86_dvd_9059535.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_2016_ltsb_x86_dvd_9059535.iso) |
| هلندی | x64 | [nl_windows_10_enterprise_2016_ltsb_x64_dvd_9059312.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_2016_ltsb_x64_dvd_9059312.iso) |
| هلندی | x86 | [nl_windows_10_enterprise_2016_ltsb_x86_dvd_9059526.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_2016_ltsb_x86_dvd_9059526.iso) |
| لهستانی | x64 | [pl_windows_10_enterprise_2016_ltsb_x64_dvd_9059490.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_2016_ltsb_x64_dvd_9059490.iso) |
| لهستانی | x86 | [pl_windows_10_enterprise_2016_ltsb_x86_dvd_9060015.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_2016_ltsb_x86_dvd_9060015.iso) |
| پرتغالی (پرتغال) | x64 | [pp_windows_10_enterprise_2016_ltsb_x64_dvd_9060465.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_2016_ltsb_x64_dvd_9060465.iso) |
| پرتغالی (پرتغال) | x86 | [pp_windows_10_enterprise_2016_ltsb_x86_dvd_9057097.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_2016_ltsb_x86_dvd_9057097.iso) |
| پرتغالی (برزیل) | x64 | [pt_windows_10_enterprise_2016_ltsb_x64_dvd_9060113.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_2016_ltsb_x64_dvd_9060113.iso) |
| پرتغالی (برزیل) | x86 | [pt_windows_10_enterprise_2016_ltsb_x86_dvd_9060088.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_2016_ltsb_x86_dvd_9060088.iso) |
| رومانیایی | x64 | [ro_windows_10_enterprise_2016_ltsb_x64_dvd_9057388.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_2016_ltsb_x64_dvd_9057388.iso) |
| رومانیایی | x86 | [ro_windows_10_enterprise_2016_ltsb_x86_dvd_9057443.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_2016_ltsb_x86_dvd_9057443.iso) |
| روسی | x64 | [ru_windows_10_enterprise_2016_ltsb_x64_dvd_9057886.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_2016_ltsb_x64_dvd_9057886.iso) |
| روسی | x86 | [ru_windows_10_enterprise_2016_ltsb_x86_dvd_9058173.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_2016_ltsb_x86_dvd_9058173.iso) |
| اسلواکی | x64 | [sk_windows_10_enterprise_2016_ltsb_x64_dvd_9058612.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_2016_ltsb_x64_dvd_9058612.iso) |
| اسلواکی | x86 | [sk_windows_10_enterprise_2016_ltsb_x86_dvd_9058908.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_2016_ltsb_x86_dvd_9058908.iso) |
| اسلوونیایی | x64 | [sl_windows_10_enterprise_2016_ltsb_x64_dvd_9059321.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_2016_ltsb_x64_dvd_9059321.iso) |
| اسلوونیایی | x86 | [sl_windows_10_enterprise_2016_ltsb_x86_dvd_9059531.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_2016_ltsb_x86_dvd_9059531.iso) |
| صربی (لاتین) | x64 | [sr-latn_windows_10_enterprise_2016_ltsb_x64_dvd_9058293.iso](https://drive.massgrave.dev/sr-latn_windows_10_enterprise_2016_ltsb_x64_dvd_9058293.iso) |
| صربی (لاتین) | x86 | [sr-latn_windows_10_enterprise_2016_ltsb_x86_dvd_9058276.iso](https://drive.massgrave.dev/sr-latn_windows_10_enterprise_2016_ltsb_x86_dvd_9058276.iso) |
| سوئدی | x64 | [sv_windows_10_enterprise_2016_ltsb_x64_dvd_9060456.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_2016_ltsb_x64_dvd_9060456.iso) |
| سوئدی | x86 | [sv_windows_10_enterprise_2016_ltsb_x86_dvd_9057114.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_2016_ltsb_x86_dvd_9057114.iso) |
| تایلندی | x64 | [th_windows_10_enterprise_2016_ltsb_x64_dvd_9057403.iso](https://drive.massgrave.dev/th_windows_10_enterprise_2016_ltsb_x64_dvd_9057403.iso) |
| تایلندی | x86 | [th_windows_10_enterprise_2016_ltsb_x86_dvd_9057441.iso](https://drive.massgrave.dev/th_windows_10_enterprise_2016_ltsb_x86_dvd_9057441.iso) |
| ترکی | x64 | [tr_windows_10_enterprise_2016_ltsb_x64_dvd_9057891.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_2016_ltsb_x64_dvd_9057891.iso) |
| ترکی | x86 | [tr_windows_10_enterprise_2016_ltsb_x86_dvd_9058186.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_2016_ltsb_x86_dvd_9058186.iso) |
| اوکراینی | x64 | [uk_windows_10_enterprise_2016_ltsb_x64_dvd_9058295.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_2016_ltsb_x64_dvd_9058295.iso) |
| اوکراینی | x86 | [uk_windows_10_enterprise_2016_ltsb_x86_dvd_9058286.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_2016_ltsb_x86_dvd_9058286.iso) |

== Windows 10 LTSB 2015

**ویندوز ۱۰ Enterprise LTSB 2015**

> - بیلد 10240

| زبان | معماری | لینک |
|:---|:---|:---|
| عربی | x64 | [ar_windows_10_enterprise_2015_ltsb_x64_dvd_6848420.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_2015_ltsb_x64_dvd_6848420.iso) |
| عربی | x86 | [ar_windows_10_enterprise_2015_ltsb_x86_dvd_6848421.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_2015_ltsb_x86_dvd_6848421.iso) |
| بلغاری | x64 | [bg_windows_10_enterprise_2015_ltsb_x64_dvd_6848422.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_2015_ltsb_x64_dvd_6848422.iso) |
| بلغاری | x86 | [bg_windows_10_enterprise_2015_ltsb_x86_dvd_6848424.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_2015_ltsb_x86_dvd_6848424.iso) |
| چینی (ساده‌شده) | x64 | [cn_windows_10_enterprise_2015_ltsb_x64_dvd_6848425.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_2015_ltsb_x64_dvd_6848425.iso) |
| چینی (ساده‌شده) | x86 | [cn_windows_10_enterprise_2015_ltsb_x86_dvd_6848426.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_2015_ltsb_x86_dvd_6848426.iso) |
| چکی | x64 | [cs_windows_10_enterprise_2015_ltsb_x64_dvd_6848435.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_2015_ltsb_x64_dvd_6848435.iso) |
| چکی | x86 | [cs_windows_10_enterprise_2015_ltsb_x86_dvd_6848437.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_2015_ltsb_x86_dvd_6848437.iso) |
| دانمارکی | x64 | [da_windows_10_enterprise_2015_ltsb_x64_dvd_6848440.iso](https://drive.massgrave.dev/da_windows_10_enterprise_2015_ltsb_x64_dvd_6848440.iso) |
| دانمارکی | x86 | [da_windows_10_enterprise_2015_ltsb_x86_dvd_6848441.iso](https://drive.massgrave.dev/da_windows_10_enterprise_2015_ltsb_x86_dvd_6848441.iso) |
| آلمانی | x64 | [de_windows_10_enterprise_2015_ltsb_x64_dvd_6848473.iso](https://drive.massgrave.dev/de_windows_10_enterprise_2015_ltsb_x64_dvd_6848473.iso) |
| آلمانی | x86 | [de_windows_10_enterprise_2015_ltsb_x86_dvd_6848474.iso](https://drive.massgrave.dev/de_windows_10_enterprise_2015_ltsb_x86_dvd_6848474.iso) |
| یونانی | x64 | [el_windows_10_enterprise_2015_ltsb_x64_dvd_6848475.iso](https://drive.massgrave.dev/el_windows_10_enterprise_2015_ltsb_x64_dvd_6848475.iso) |
| یونانی | x86 | [el_windows_10_enterprise_2015_ltsb_x86_dvd_6848476.iso](https://drive.massgrave.dev/el_windows_10_enterprise_2015_ltsb_x86_dvd_6848476.iso) |
| انگلیسی (بریتانیا) | x64 | [en-gb_windows_10_enterprise_2015_ltsb_x64_dvd_6848456.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_2015_ltsb_x64_dvd_6848456.iso) |
| انگلیسی (بریتانیا) | x86 | [en-gb_windows_10_enterprise_2015_ltsb_x86_dvd_6848457.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_2015_ltsb_x86_dvd_6848457.iso) |
| انگلیسی | x64 | [en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso](https://drive.massgrave.dev/en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso) |
| انگلیسی | x86 | [en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso](https://drive.massgrave.dev/en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso) |
| اسپانیایی (مکزیک) | x64 | [es-mx_windows_10_enterprise_2015_ltsb_x64_dvd_6850897.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_2015_ltsb_x64_dvd_6850897.iso) |
| اسپانیایی (مکزیک) | x86 | [es-mx_windows_10_enterprise_2015_ltsb_x86_dvd_6850898.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_2015_ltsb_x86_dvd_6850898.iso) |
| اسپانیایی | x64 | [es_windows_10_enterprise_2015_ltsb_x64_dvd_6850876.iso](https://drive.massgrave.dev/es_windows_10_enterprise_2015_ltsb_x64_dvd_6850876.iso) |
| اسپانیایی | x86 | [es_windows_10_enterprise_2015_ltsb_x86_dvd_6850896.iso](https://drive.massgrave.dev/es_windows_10_enterprise_2015_ltsb_x86_dvd_6850896.iso) |
| استونیایی | x64 | [et_windows_10_enterprise_2015_ltsb_x64_dvd_6848458.iso](https://drive.massgrave.dev/et_windows_10_enterprise_2015_ltsb_x64_dvd_6848458.iso) |
| استونیایی | x86 | [et_windows_10_enterprise_2015_ltsb_x86_dvd_6848460.iso](https://drive.massgrave.dev/et_windows_10_enterprise_2015_ltsb_x86_dvd_6848460.iso) |
| فنلاندی | x64 | [fi_windows_10_enterprise_2015_ltsb_x64_dvd_6848462.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_2015_ltsb_x64_dvd_6848462.iso) |
| فنلاندی | x86 | [fi_windows_10_enterprise_2015_ltsb_x86_dvd_6848464.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_2015_ltsb_x86_dvd_6848464.iso) |
| فرانسوی (کانادا) | x64 | [fr-ca_windows_10_enterprise_2015_ltsb_x64_dvd_6848470.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_2015_ltsb_x64_dvd_6848470.iso) |
| فرانسوی (کانادا) | x86 | [fr-ca_windows_10_enterprise_2015_ltsb_x86_dvd_6848472.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_2015_ltsb_x86_dvd_6848472.iso) |
| فرانسوی | x64 | [fr_windows_10_enterprise_2015_ltsb_x64_dvd_6848466.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_2015_ltsb_x64_dvd_6848466.iso) |
| فرانسوی | x86 | [fr_windows_10_enterprise_2015_ltsb_x86_dvd_6848468.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_2015_ltsb_x86_dvd_6848468.iso) |
| عبری | x64 | [he_windows_10_enterprise_2015_ltsb_x64_dvd_6848477.iso](https://drive.massgrave.dev/he_windows_10_enterprise_2015_ltsb_x64_dvd_6848477.iso) |
| عبری | x86 | [he_windows_10_enterprise_2015_ltsb_x86_dvd_6850760.iso](https://drive.massgrave.dev/he_windows_10_enterprise_2015_ltsb_x86_dvd_6850760.iso) |
| چینی (هنگ کنگ) | x64 | [hk_windows_10_enterprise_2015_ltsb_x64_dvd_6848427.iso](https://drive.massgrave.dev/hk_windows_10_enterprise_2015_ltsb_x64_dvd_6848427.iso) |
| چینی (هنگ کنگ) | x86 | [hk_windows_10_enterprise_2015_ltsb_x86_dvd_6848428.iso](https://drive.massgrave.dev/hk_windows_10_enterprise_2015_ltsb_x86_dvd_6848428.iso) |
| کروات | x64 | [hr_windows_10_enterprise_2015_ltsb_x64_dvd_6848433.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_2015_ltsb_x64_dvd_6848433.iso) |
| کروات | x86 | [hr_windows_10_enterprise_2015_ltsb_x86_dvd_6848434.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_2015_ltsb_x86_dvd_6848434.iso) |
| مجارستانی | x64 | [hu_windows_10_enterprise_2015_ltsb_x64_dvd_6850770.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_2015_ltsb_x64_dvd_6850770.iso) |
| مجارستانی | x86 | [hu_windows_10_enterprise_2015_ltsb_x86_dvd_6850771.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_2015_ltsb_x86_dvd_6850771.iso) |
| ایتالیایی | x64 | [it_windows_10_enterprise_2015_ltsb_x64_dvd_6850772.iso](https://drive.massgrave.dev/it_windows_10_enterprise_2015_ltsb_x64_dvd_6850772.iso) |
| ایتالیایی | x86 | [it_windows_10_enterprise_2015_ltsb_x86_dvd_6850773.iso](https://drive.massgrave.dev/it_windows_10_enterprise_2015_ltsb_x86_dvd_6850773.iso) |
| ژاپنی | x64 | [ja_windows_10_enterprise_2015_ltsb_x64_dvd_6850774.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_2015_ltsb_x64_dvd_6850774.iso) |
| ژاپنی | x86 | [ja_windows_10_enterprise_2015_ltsb_x86_dvd_6850775.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_2015_ltsb_x86_dvd_6850775.iso) |
| کره‌ای | x64 | [ko_windows_10_enterprise_2015_ltsb_x64_dvd_6850776.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_2015_ltsb_x64_dvd_6850776.iso) |
| کره‌ای | x86 | [ko_windows_10_enterprise_2015_ltsb_x86_dvd_6850777.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_2015_ltsb_x86_dvd_6850777.iso) |
| لیتوانیایی | x64 | [lt_windows_10_enterprise_2015_ltsb_x64_dvd_6850780.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_2015_ltsb_x64_dvd_6850780.iso) |
| لیتوانیایی | x86 | [lt_windows_10_enterprise_2015_ltsb_x86_dvd_6850781.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_2015_ltsb_x86_dvd_6850781.iso) |
| لتونیایی | x64 | [lv_windows_10_enterprise_2015_ltsb_x64_dvd_6850778.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_2015_ltsb_x64_dvd_6850778.iso) |
| لتونیایی | x86 | [lv_windows_10_enterprise_2015_ltsb_x86_dvd_6850779.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_2015_ltsb_x86_dvd_6850779.iso) |
| نروژی (بوکمال) | x64 | [nb_windows_10_enterprise_2015_ltsb_x64_dvd_6850782.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_2015_ltsb_x64_dvd_6850782.iso) |
| نروژی (بوکمال) | x86 | [nb_windows_10_enterprise_2015_ltsb_x86_dvd_6850783.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_2015_ltsb_x86_dvd_6850783.iso) |
| هلندی | x64 | [nl_windows_10_enterprise_2015_ltsb_x64_dvd_6848442.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_2015_ltsb_x64_dvd_6848442.iso) |
| هلندی | x86 | [nl_windows_10_enterprise_2015_ltsb_x86_dvd_6848443.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_2015_ltsb_x86_dvd_6848443.iso) |
| لهستانی | x64 | [pl_windows_10_enterprise_2015_ltsb_x64_dvd_6850784.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_2015_ltsb_x64_dvd_6850784.iso) |
| لهستانی | x86 | [pl_windows_10_enterprise_2015_ltsb_x86_dvd_6850785.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_2015_ltsb_x86_dvd_6850785.iso) |
| پرتغالی (پرتغال) | x64 | [pp_windows_10_enterprise_2015_ltsb_x64_dvd_6850808.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_2015_ltsb_x64_dvd_6850808.iso) |
| پرتغالی (پرتغال) | x86 | [pp_windows_10_enterprise_2015_ltsb_x86_dvd_6850818.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_2015_ltsb_x86_dvd_6850818.iso) |
| پرتغالی (برزیل) | x64 | [pt_windows_10_enterprise_2015_ltsb_x64_dvd_6850787.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_2015_ltsb_x64_dvd_6850787.iso) |
| پرتغالی (برزیل) | x86 | [pt_windows_10_enterprise_2015_ltsb_x86_dvd_6850798.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_2015_ltsb_x86_dvd_6850798.iso) |
| رومانیایی | x64 | [ro_windows_10_enterprise_2015_ltsb_x64_dvd_6850828.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_2015_ltsb_x64_dvd_6850828.iso) |
| رومانیایی | x86 | [ro_windows_10_enterprise_2015_ltsb_x86_dvd_6850837.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_2015_ltsb_x86_dvd_6850837.iso) |
| روسی | x64 | [ru_windows_10_enterprise_2015_ltsb_x64_dvd_6850847.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_2015_ltsb_x64_dvd_6850847.iso) |
| روسی | x86 | [ru_windows_10_enterprise_2015_ltsb_x86_dvd_6850858.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_2015_ltsb_x86_dvd_6850858.iso) |
| اسلواکی | x64 | [sk_windows_10_enterprise_2015_ltsb_x64_dvd_6850870.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_2015_ltsb_x64_dvd_6850870.iso) |
| اسلواکی | x86 | [sk_windows_10_enterprise_2015_ltsb_x86_dvd_6850871.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_2015_ltsb_x86_dvd_6850871.iso) |
| اسلوونیایی | x64 | [sl_windows_10_enterprise_2015_ltsb_x64_dvd_6850872.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_2015_ltsb_x64_dvd_6850872.iso) |
| اسلوونیایی | x86 | [sl_windows_10_enterprise_2015_ltsb_x86_dvd_6850873.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_2015_ltsb_x86_dvd_6850873.iso) |
| صربی (لاتین) | x64 | [sr-latn_windows_10_enterprise_2015_ltsb_x64_dvd_6850868.iso](https://drive.massgrave.dev/sr-latn_windows_10_enterprise_2015_ltsb_x64_dvd_6850868.iso) |
| صربی (لاتین) | x86 | [sr-latn_windows_10_enterprise_2015_ltsb_x86_dvd_6850869.iso](https://drive.massgrave.dev/sr-latn_windows_10_enterprise_2015_ltsb_x86_dvd_6850869.iso) |
| سوئدی | x64 | [sv_windows_10_enterprise_2015_ltsb_x64_dvd_6850899.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_2015_ltsb_x64_dvd_6850899.iso) |
| سوئدی | x86 | [sv_windows_10_enterprise_2015_ltsb_x86_dvd_6850900.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_2015_ltsb_x86_dvd_6850900.iso) |
| تایلندی | x64 | [th_windows_10_enterprise_2015_ltsb_x64_dvd_6850901.iso](https://drive.massgrave.dev/th_windows_10_enterprise_2015_ltsb_x64_dvd_6850901.iso) |
| تایلندی | x86 | [th_windows_10_enterprise_2015_ltsb_x86_dvd_6850902.iso](https://drive.massgrave.dev/th_windows_10_enterprise_2015_ltsb_x86_dvd_6850902.iso) |
| ترکی | x64 | [tr_windows_10_enterprise_2015_ltsb_x64_dvd_6850904.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_2015_ltsb_x64_dvd_6850904.iso) |
| ترکی | x86 | [tr_windows_10_enterprise_2015_ltsb_x86_dvd_6850915.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_2015_ltsb_x86_dvd_6850915.iso) |
| چینی (سنتی) | x64 | [tw_windows_10_enterprise_2015_ltsb_x64_dvd_6848430.iso](https://drive.massgrave.dev/tw_windows_10_enterprise_2015_ltsb_x64_dvd_6848430.iso) |
| چینی (سنتی) | x86 | [tw_windows_10_enterprise_2015_ltsb_x86_dvd_6848432.iso](https://drive.massgrave.dev/tw_windows_10_enterprise_2015_ltsb_x86_dvd_6848432.iso) |
| اوکراینی | x64 | [uk_windows_10_enterprise_2015_ltsb_x64_dvd_6850925.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_2015_ltsb_x64_dvd_6850925.iso) |
| اوکراینی | x86 | [uk_windows_10_enterprise_2015_ltsb_x86_dvd_6850935.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_2015_ltsb_x86_dvd_6850935.iso) |

== Windows LTSC ARM64

**ویندوز ۱۰/۱۱ IoT Enterprise LTSC ARM64**

لینک‌های [ویندوز ARM](./windows_arm_links) را بررسی کنید.

:::

[1]: https://www.microsoft.com/en-us/evalcenter
[2]: https://learn.microsoft.com/en-us/lifecycle/products/windows-11-home-and-pro
[3]: https://learn.microsoft.com/en-us/lifecycle/products/windows-11-enterprise-and-education
[4]: https://learn.microsoft.com/en-us/lifecycle/products/windows-11-enterprise-ltsc-2024
[5]: https://learn.microsoft.com/en-us/lifecycle/products/windows-11-iot-enterprise-ltsc-2024
[6]: https://www.elevenforum.com/t/enable-or-disable-background-apps-in-windows-11.923/
[7]: https://gist.github.com/ave9858/a2153957afb053f7d0e7ffdd6c3dcb89
[8]: https://apps.microsoft.com/detail/9nblggh4nns1
[9]: https://github.com/stdin82/htfx/releases/tag/v0.0.24
[genuine]: https://nirevil.github.io/windows-activation/fa/wa/genuine-installation-media#%D8%AA%D8%A7%D9%94%DB%8C%DB%8C%D8%AF-%D8%A7%D8%B5%D8%A7%D9%84%D8%AA-%D9%81%D8%A7%DB%8C%D9%84%E2%80%8C%D9%87%D8%A7
