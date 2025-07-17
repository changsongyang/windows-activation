---
layout: doc
outline: deep
title: "OEM Folder"
description: ""
date: 2025-05-06
editLink: true
---

# $OEM$ Folders  

To create a pre-activated Windows installation ISO, do the following:
-   Extract the `$OEM$` folder to the desktop using the MAS script.  
-   Copy the `$OEM$` folder to the `sources` folder in the Windows installation media (ISO or USB).  
-   The directory will appear like this: `\sources\$OEM$` in your altered ISO or on your bootable USB drive.  
-   Now use this ISO or bootable USB drive to install Windows, it will either already be activated (KMS38) as soon as it boots or will self-activate (HWID or Online KMS) at the first internet contact.
-   You can check [here][1] for activation method details.  

::: info  NOTE

::: details On Windows 8 and later

- error [running setup complete.cmd is disabled][2] if the default installed key for the edition is from the OEM channel, except for Enterprise editions and Windows Server.
- However, in Windows 10, IoT Enterprise editions were not included in the Enterprise category list during the installation process.
- As a result, Enterprise with an OEM key can handle setupcomplete.cmd, but IoT Enterprise (LTSC) cannot. This was fixed in later Windows 11 versions.
    - In Windows 10 IoT Enterprise (LTSC), you can resolve this issue by using the Non-IoT Windows 10 Enterprise LTSC ISO. In this case, the HWID method in preactivation will install the IoT LTSC key to change the edition and enable HWID activation.
    - In Windows 11 IoT Enterprise (LTSC), it works fine as expected by default.
    
:::

<br></br>  

## Edit ISO File  

::: tip  NOTE

- As stated above, you can copy the `$OEM$` folder to your bootable USB so you don't have to edit the ISO file. However, if you need to, then follow the steps below.
- Download [AnyBurn Free Portable][3] and extract the zip file.
- Run the file named `AnyBurn(64-bit)\AnyBurn.exe`.
- Select the option named `Edit image file`.
- Follow the on-screen instructions and add the `$OEM$` folder to the `sources` folder so that the directory will appear like this: `\sources\$OEM$`.
- Save the ISO, that's it.

:::

</br>    

## KMS38 - Server Cor/Acor  

-   Windows Server Cor/Acor (No GUI) editions don't have the `clipup.exe` file.
-   To KMS38 activate it, you need to download the missing `ClipUp.exe` file from [app.box.com/s/....][4].  
    `File: ClipUp.exe`  
    `SHA-256: 0d6e9f6bbd0321eda149658d96040cb4f79e0bd93ba60061f25b28fecbf4d4ef`  
    This file has digital signatures that can be verified. You can also get this file from the official [Windows Server 2016 x64 RTM ISO][5].  
-   Put the `ClipUp.exe` beside the KMS38 Activation script. That would be either `MAS_AIO.cmd` or `KMS38_Activation.cmd`  
-   The activation script will check `ClipUp.exe` in the current folder (from where script is running) and will use it accordingly.  

</br>    

##  Preinstall Office  

-	Follow this [office c2r guides](office_c2r.md) and download the Office files.  
- 	Copy the downloaded `Office` folder, `setup.exe` and `Configuration.xml` files, and paste them into the $OEM$ folder, beside the `setupcomplete.cmd` file.   
-	Open the `setupcomplete.cmd` file with notepad and add the below lines after `fltmc >nul || exit /b` line.    
	```
	cd /d "%~dp0"
	setup.exe /configure Configuration.xml
	```
- 	Save the $OEM$ folder into the ISO as per above instructions, that's it.

<br/> 

::: danger How to Remove Activations ?

::: details  Click here to see the details

- **HWID:** A digital license is stored on Microsoft's servers and tied to your hardware. It cannot be "removed" in the traditional sense. A major hardware change (like the motherboard) will invalidate it.  To return to an unactivated state, you can install a generic KMS key.  [Extended details](./en/hwid)
- **Online KMS / Ohook / KMS38:** Use the corresponding "Uninstall" or "Remove" option within the MAS script menu, then run the "Fix Licensing" option from the Troubleshoot menu.  [KMS details](./en/kms) and [KMS38 details](./en/kms38) 
- **TSforge:** This method only appends data and doesn't install files. To reset it, simply run the "Fix Licensing" option from the Troubleshoot menu in the MAS script.  [TSforge details](./en/tsforge)  

:::


[1]: https://github.com/NiREvil/windows-activation   

[2]: https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/add-a-custom-script-to-windows-setup?view=windows-11#windows-setup-scripts   

[3]: https://www.anyburn.com/download.php   

[4]: https://app.box.com/s/cwoxub9tqyowhnyva6ign6qnogb6vk0o   

[5]: https://download.microsoft.com/download/1/6/F/16FA20E6-4662-482A-920B-1A45CF5AAE3C/14393.0.160715-1616.RS1_RELEASE_SERVER_EVAL_X64FRE_EN-US.ISO   
