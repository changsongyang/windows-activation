# Instant Windows 10 & 11 Activation: 40-Second Solution.   

> This repository contains Microsoft activation scripts that can activate Windows 10 and 11 in under 40 seconds.  
> Open-source Windows and Office activator featuring HWID, Ohook, TSforge, KMS38, and Online KMS activation.  

<br><br> 

## Overview. 

-  This activation method supports Windows 10/11 only.
-  This activation method does not store or modify any files in your system.
-  This activation method gives you permanent Windows activation for your system hardware.
-  All activations can be linked to a Microsoft account without any issues.
-  Once the system is activated, this activation cannot be removed because the license is stored on Microsoft's servers, not on the user's system. Microsoft checks the hardware ID (HWID), and if a license is found in their database, the system will automatically activate. This is how all digital licenses work.
-  Any significant changes to the hardware (such as a motherboard) may deactivate the system. It is possible to reactivate a system that was deactivated because of significant hardware changes, IF your activation, was linked to an online Microsoft account.
-  For activation to succeed, Internet connectivity must be enabled. If you are trying to activate without these conditions being met, then the system will auto-activate later when the conditions are met.
-  The following is required for Windows to reactivate itself after Windows reinstall:
  -  Internet connectivity is required. (Only at the time of activation)
  -  The system will auto-activate only if Retail (Consumer) media was used for installing Windows.
  -  The system will NOT auto-activate if VL (Business) media was used for the installation. In this case, the user will have to insert the generic Retail/OEM key corresponding to the Windows edition currently running to activate if the user doesn't want to use the script again. (Those keys can be found below on this page)

<br><br> 


### Activations Summary

| Activation Type | Supported Product      | Activation Period                    | Is Internet Needed? |
|:----------------|:-----------------------|:-------------------------------------|:--------------------|
| HWID            | Windows 10-11          | Permanent                            | Yes                 |
| Ohook           | Office                 | Permanent                            | No                  |
| TSforge         | Windows / ESU / Office | Permanent                            | No                  |
| KMS38           | Windows 10-11-Server   | Till the Year 2038                   | No                  |
| Online KMS      | Windows / Office       | 180 Days. Lifetime With Renewal Task | Yes                 |

<br><br>   

## Method 1 (recommend)  
### Instant Windows activation using (PowerShell)  
> [!TIP]
> We have many ways to run powershell in windowss 10 & 11. [^1]

One of the fastest ways to open PowerShell in Windows is a Start menu search. You may follow the steps below:

<br>

### Step 1  
All you need to do is hit the start or search icon and type the "PowerShell" in the search box.  
> Another easy way: [^2]

<p align="left">
  <br><img src="https://github.com/user-attachments/assets/5a10538a-c8c2-4934-868b-fd8e910f1f9e" width="540px">
</p>  

---

<br>

### Step 2  
Next, you must click on the `Run as Administrator` to start PowerShell, in this case we need to run with **administrative privileges**.

<p align="left">
  <br><img src="https://github.com/user-attachments/assets/1f25dd2a-16db-4053-a45c-aac6f8a9e470" width="540px">
</p>

---
<br>

### Step 3   
Now, after a brief pause to allow for execution, please `copy` this line:

```CSS
irm https://get.activated.win | iex
```  

Alternatively, you can use the following (this will be deprecated in the future):   

```CSS
irm https://massgrave.dev/get | iex
```  

---  
<br>

### Step 4    
Now paste it (with right-click) and hit the enter key. In the newly opened window, there are several options available,  

You will see the activation options:  
  -  Press `[1]` HWID for Windows activation.  
  -  Press `[2]` Ohook for Office activation.   
from which we must select option `[1]` and wait a few seconds to complete.   

<p align="left">
  <br><img src="https://github.com/user-attachments/assets/0c3689a1-1595-40b3-97e2-041dac423237" width="540px">
</p>

<br>

#### Congratulations,
your Windows has been activated.  
now you can hit the enter key to exit the CMD and close PowerShell and check windows Activation menu [^3]  

<br><br>  

### Not working ❓  

> [!CAUTION] 
> If you are unable to launch MAS using the PowerShell method, please refer to KMS Method 2.
>
> ![Static Badge](https://img.shields.io/badge/KMS?style=for-the-badge&logo=Codecademy&logoColor=%231B1B1D&link=kms.md)
> 
> [![KMS](https://img.shields.io/badge/KMS_Method-blue?logo=readme)](kms.md)  OR  [![KMS](https://img.shields.io/badge/KMS38_Method-green?logo=Codecademy)](kms38.md)  

### Files will be stored on ...   

> [!WARNING]
> 
> **HWID**   
> When using HWID activation, no files are stored on the system, and Windows 10-11 will be activated when connected to the internet for the first time.  
>  
> **Ohook**  
> If Office is preinstalled then Ohook method will activate the Office immediately without Internet. This activation uses custom sppc.dll file for the activation.    
>  
> **TSforge**  
> When using TSforge activation, no files are stored on the system, and Windows / ESU / Office (preinstalled) becomes activated immediately without Internet.  
>   
> **KMS38**     
> When using KMS38 activation, no files are stored on the system, and Windows 10-11-Server becomes activated immediately without Internet.  
>   
> **Online KMS**     
> When using Online KMS activation, Windows-Server and Office (Preinstalled) both will be activated when connected to the internet for the first time. This option uses a renewal task for lifetime activation.  
>   
> **HWID + Ohook**     
In this method, Windows 10-11 will be activated with HWID, and **Office** (Preinstalled) will be activated using Ohook.  
>    
> **HWID + Ohook + TSforge**    
> In this method, Windows 10-11 will be activated with HWID, and **Office** (Preinstalled) will be activated using Ohook and Windows ESU will be activated with TSforge.    
>     
> **TSforge + Online KMS**    
In this method, Windows will be activated with TSforge, and **Office** (Preinstalled) will be activated using Online KMS.    

<br><br>  

## Supported Products  

| Windows 10/11 Product Names           | EditionID                | Generic Retail/OEM/MAK Key    |
|---------------------------------------|--------------------------|-------------------------------|
| Education                             | Education                | YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY |
| Education N                           | EducationN               | 84NGF-MHBT6-FXBX8-QWJK7-DRR8H |
| Enterprise                            | Enterprise               | XGVPP-NMH47-7TTHJ-W3FW7-8HV2C |
| Enterprise N                          | EnterpriseN              | 3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT |
| Enterprise LTSB 2015                  | EnterpriseS              | FWN7H-PF93Q-4GGP8-M8RF3-MDWWW |
| Enterprise LTSB 2016                  | EnterpriseS              | NK96Y-D9CD8-W44CQ-R8YTK-DYJWX |
| Enterprise LTSC 2019                  | EnterpriseS              | 43TBQ-NH92J-XKTM7-KT3KK-P39PB |
| Enterprise N LTSB 2015                | EnterpriseSN             | NTX6B-BRYC2-K6786-F6MVQ-M7V2X |
| Enterprise N LTSB 2016                | EnterpriseSN             | 2DBW3-N2PJG-MVHW3-G7TDK-9HKR4 |
| Home                                  | Core                     | YTMG3-N6DKC-DKB77-7M9GH-8HVX7 |
| Home N                                | CoreN                    | 4CPRK-NM3K3-X6XXQ-RXX86-WXCHW |
| Home China                            | CoreCountrySpecific      | N2434-X9D7W-8PF6X-8DV9T-8TYMD |
| Home Single Language                  | CoreSingleLanguage       | BT79Q-G7N6G-PGBYW-4YWX6-6F4BT |
| IoT Enterprise                        | IoTEnterprise            | XQQYW-NFFMW-XJPBH-K8732-CKFFD |
| IoT Enterprise Subscription           | IoTEnterpriseK           | P8Q7T-WNK7X-PMFXY-VXHBG-RRK69 |
| IoT Enterprise LTSC 2021              | IoTEnterpriseS           | QPM6N-7J2WJ-P88HH-P3YRH-YY74H |
| IoT Enterprise LTSC 2024              | IoTEnterpriseS           | CGK42-GYN6Y-VD22B-BX98W-J8JXD |
| IoT Enterprise LTSC Subscription 2024 | IoTEnterpriseSK          | N979K-XWD77-YW3GB-HBGH6-D32MH |
| Pro                                   | Professional             | VK7JG-NPHTM-C97JM-9MPGT-3V66T |
| Pro N                                 | ProfessionalN            | 2B87N-8KFHP-DKV6R-Y2C8J-PKCKT |
| Pro Education                         | ProfessionalEducation    | 8PTT6-RNW4C-6V7J2-C2D3X-MHBPB |
| Pro Education N                       | ProfessionalEducationN   | GJTYN-HDMQY-FRR76-HVGC7-QPF8P |
| Pro for Workstations                  | ProfessionalWorkstation  | DXG7C-N36C4-C4HTG-X4T3X-2YV77 |
| Pro N for Workstations                | ProfessionalWorkstationN | WYPNQ-8C467-V2W6J-TX4WX-WT2RQ |
| S                                     | Cloud                    | V3WVW-N2PV2-CGWC3-34QGF-VMJ2C |
| S N                                   | CloudN                   | NH9J3-68WK7-6FB93-4K3DF-DJ4F6 |
| SE                                    | CloudEdition             | KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W |
| SE N                                  | CloudEditionN            | K9VKN-3BGWV-Y624W-MCRMQ-BHDCD |
| Team                                  | PPIPro                   | XKCNC-J26Q9-KFHD2-FKTHY-KD72Y |

-----
<br><br>    

> [!TIP]  
> Systems in all architectures (x86, x64 and arm64) are supported.
>  
> Any evaluation version of Windows (i.e. 'EVAL' LTSB/C) beyond the evaluation period. You can use TSforge option in MAS to reset the activation any given time.
>   
> IoTEnterpriseS (LTSC) 2021 key will be used to activate the unsupported EnterpriseS (LTSC) 2021 edition.
> IoTEnterpriseS (LTSC) 2024 key will be used to activate the unsupported EnterpriseS (LTSC) 2024 edition.
> 
> Windows Server does not support HWID activation.
> 
> Enterprise multi-session (ServerRdsh) edition can be activated with only a key NJCF7-PW8QT-3324D-688JX-2YV66, but it does not support real digital license activation.   

<br><br>   

### How to remove HWID?

> [!IMPORTANT] 
> **HWID (Digital license) activation cannot be removed**  
> because the license is stored in the Microsoft servers and not in the user's system.   
> Microsoft checks the hardware ID (HWID) and if a license is found in their database, the system will automatically activate.   
> This is how the official digital license activation process works.   
>  
> **What if you still want to remove it?**   
> As explained above, you cannot remove it for your hardware, only major hardware change such as CPU, motherboard can remove the activation.   
>   
> **What if you just want to keep Windows in the unactivated stage?**     
>  - To do that, you can
>     - install the [KMS key](kms38.md#supported-products) in the Windows settings activation page **OR**
>     - Change the edition using Change Windows edition option in MAS.      

<br><br>   

> [!NOTE]
> Windows settings will instantly show that Windows is not activated but it usually takes 3 hours for the Activation Watermark to appear.  
>   
> These options will simply hide the HWID activation. If you reinstall Windows with the same edition or restore the default generic Retail/OEM keys, the system will automatically activate again if an Internet connection is found.

<br><br>   

## Features

-   **HWID (Digital License)** Method to Permanently Activate Windows
-   **Ohook** Method to Permanently Activate Office
-   **TSforge** Method to Permanently Activate Windows/ESU/Office
-   **KMS38** Method to Activate Windows Till the Year 2038
-   **Online KMS** Method to Activate Windows/Office For 180 Days (Lifetime With Renewal Task)
-   Advanced Activation Troubleshooting
-   $OEM$ Folders For Preactivation
-   Change Windows Edition
-   Change Office Edition
-   Check Windows/Office Activation Status
-   Available in All In One and Separate Files Versions
-   Fully Open Source and Based on Batch Scripts
-   Fewer Antivirus Detections


[^1]: [10 Ways to run PowerShell in windows](https://www.google.com/amp/s/www.minitool.com/news/open-windows-11-powershell.html%3famp)  

[^2]: Another easiest way to run PowerShell: **Right-click** on your Start menu to trigger the quick link menu and select **Windows Terminal (admin)** at win11 or **Windows powershell (admin)** at win 10 in the menu list.  
[^3]: To check version of your Windows: **Right-click** on your Start menu and select the **system** option. Your Windows version can be seen in the second section under **Edition.**, You can also follow the steps of method 2 by **copy pasting** them. copy the commands and then hit the **Right-click** in the **cmd or powershell** to paste them.  
