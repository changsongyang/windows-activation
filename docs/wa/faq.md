---
layout: doc
outline: deep
title: 'FAQ'
description: 'Frequently Asked Questions about Activation Methods' 
date: 2025-02-04
editLink: true
---

# Frequently Asked Questions (FAQ)

Welcome to the MAS FAQ! Here you'll find answers to the most common questions. If you don't see your question here, feel free to [Contact Us](#contact-us) — we're happy to help!

<br/><br/>

## Getting Started

### How do I use MAS?

For a full guide on permanent activation with HWID, see [this section](./index#step2).

<br/>

### How can I activate Windows permanently?

Select the HWID activation option in MAS.

<br/>

### How do I download and install Office?

Follow the steps in the [genuine installation media guide](./genuine-installation-media).

<br/>

### How do I activate Office permanently?

Choose the Ohook activation method within MAS.

<br/>

#### How to receive security updates for Windows 10 after October 2025?
You can use [TSforge option in MAS](index#step2) to activate 3 Years ESU (Oct 2025 to Oct 2028). [More info](./windows10_eol).

<br/>

## Troubleshooting

### Activation failed — what should I do?

See our [troubleshooting guide](./troubleshoot) for common solutions.

<br/>

### Is MAS safe? How do I know it’s not malware?

MAS is fully open-source, with over 140K stars on [GitHub][1] and millions of users worldwide. You can inspect the batch files in any text editor, or use ChatGPT for code review.  
If you prefer, you can also perform manual activation — see [this guide](./manual_hwid_activation).

<br/>

### How can I remove HWID, Ohook, TSforge, KMS38, or Online KMS activations?

MAS uses different activation methods, see the link below for removal instructions for each one:  

- [❌Remove HWID](./hwid#how-to-remove-hwid)
- [❌Remove Ohook](./ohook#how-to-remove-ohook)
- [❌Remove TSforge](./tsforge#how-to-remove-tsforge)
- [❌Remove KMS38](./kms38#how-to-remove-kms38)
- [❌Remove Online KMS](./online_kms#how-to-remove-online-kms)

<br/>

::: danger Additional Information

::: details Click here to see details

- **HWID:**
A digital license is stored on Microsoft's servers and tied to your hardware. It `cannot be removed` in the traditional sense. A major hardware change (like the motherboard) will invalidate it. To return to an unactivated state, you can install a generic KMS key. [Extended hwid details](./hwid#how-to-remove-hwid)

- **Online KMS / Ohook / KMS38:**
Use the corresponding `Uninstall` or `Remove` option within the [MAS script](./index#step2) menu, then run the "Fix Licensing" option from the Troubleshoot menu. [Online KMS Details](./online_kms#how-to-remove-online-kms) and [KMS38 details](./kms38#how-to-remove-kms38)

- **TSforge:**
This method only appends data and doesn't install files. To reset it, simply run the `Fix Licensing` option from the Troubleshoot menu in the MAS script. [Ohook](./ohook#how-to-remove-ohook) [TSforge details](./tsforge#how-to-remove-tsforge)

:::

<br/>

### Will I receive updates? How is it different from an official license?

MAS does not interfere with Windows or Office updates. It functions in the same way as official licensing methods.

### Will Microsoft ban my account if I use MAS?

**No.**   
Windows and Office piracy has existed for decades, and Microsoft has never banned accounts solely for this reason.

### Is it legal? Can I face any consequences?

By using MAS, you are bypassing official licensing methods and not paying Microsoft, so technically it is not legal.


- **Is it safe?**

**Home users:** Yes, it's safe.  
Piracy has existed for decades, and Microsoft does not take action against individuals who pirate Windows or Office. Pursuing a home user over a $100–$200 license costs more in legal fees than it would recover and risks bad publicity.

At most, you may see notifications that your license is not genuine (with MAS, these notifications do not appear).

**Businesses:** We do not recommend that businesses use MAS.  
Microsoft conducts audits on business entities to verify licenses. While small businesses might be less likely to face audits, the risk is still yours.

If you work in IT at a college or university, consult experienced senior staff about the chances of Microsoft audits at your institution.

## Windows & Office Questions

### How do I download the full Windows 10/11 Enterprise LTSC version?

Refer to the [genuine installation media guide](./genuine-installation-media).

<br/>

### Can I upgrade Windows from Home to Pro?

Yes! In [MAS](./index#step2), select the “Change Windows Edition” option.

<br/>

### Will I lose my files when upgrading from Home to Pro?

No, your data will remain safe.

<br/>

### I changed my Windows edition, and now it’s deactivated — what now?

Just run HWID activation again. Each Windows edition needs its own activation.

<br/>

### Is it safe to connect my Microsoft account after activating with MAS?

Absolutely, it’s safe.

<br/>

### Can I update Windows/Office after activation?

Yes — updates will work as usual.

<hr/><br/>

## Office-Specific

#### Can I get the Copilot feature in Office with MAS activation?
No. [Copilot][2] is an additional plan that can be added to existing subscriptions of Microsoft 365.

### I’m in Russia and can’t download Office. Any workaround?

See [this guide][3] for bypassing regional restrictions.

<br/>

### Can I activate Office 365?

Yes, with the `Ohook` activation. Note: MAS does not unlock server-side Office 365 features such as 1TB OneDrive, though almost all other features and 5GB storage in a free OneDrive account would work fine.

Some features require signing in with a Microsoft account (free) in the Office apps.

<br/>

### Can I use Python in Excel after MAS activation?

No. [Python in Excel][4] is a cloud feature for Microsoft 365 subscribers.

<br/>

### I see an “Office is not genuine” banner — what should I do?

Simply re-run the Ohook activation from the latest MAS version.

<br/>

## Other Common Questions

<br/> 

### Can I delete the MAS folder after activation?

Yes, it’s safe to delete the MAS folder once activation is complete.

<br/>

### How does MAS activation actually work?

See the Docs section for detailed info.

<br/>

### Does MAS work for Windows Vista/7/8.1?

Yes, [TSforge](./tsforge), [Ohook](./ohook), and [Online KMS](./online_kms) options work for these versions.

<br/>

### Can I donate or support the project?

This project doesn’t accept donations and is completely free. It’s a community-driven project, and profiting from piracy is not supported.

<br/>

### How can I donate or contribute to the project?
This project doesn't accept donations and it's completely free. We don't earn money from donations, ads, or any other sources and we are commited to keeping it this way.

It's because it's a community project and involves many contributors, splitting donations is not practical, and also because profiting from piracy is not good.

::: details Click here for more information

However, if you would like to support and contribute us, you can do so in non-financial ways.

**Coding**  
At the moment, we don't need any help with coding.

[We will update this list as needed in the future.][7]

:::

::: danger Troubleshoot

- Need any help regarding this — feel free to [**Contact Us**](./troubleshoot), We're happy to help.

:::

[1]: https://github.com/massgravel/Microsoft-Activation-Scripts
[2]: https://www.microsoft.com/en-us/microsoft-365/microsoft-copilot
[3]: https://gravesoft.dev/bypass-russian-geoblock
[4]: https://support.microsoft.com/en-us/office/introduction-to-python-in-excel-55643c2e-ff56-4168-b1ce-9428c8308545
[5]: https://github.com/NiREvil/windows-activation/discussions
[6]: mailto:dianashariati.cl@gmail.com 
[7]: https://massgrave.dev/contribute
