---
layout: doc
outline: deep
title: "KMS Activation Method"
description: "A guide to activating Windows and Office using the KMS method."
date: 2023-08-17
editLink: true
head:
  - - meta
    - name: keywords
      content: KMS, Office activator, Windows 10, Windows 11
---

# Manual Activation with KMS  

> This guide explains how to activate Windows for 180 days using the Key Management Service (KMS) method.
>
> This is an official activation channel provided by Microsoft for volume licensing and is a safe, reliable, and temporary activation solution.  

:::tip Prerequisites
- A stable internet connection.
- Administrator privileges on your computer.  
:::

<br/>  

## Step 1: Open Command Prompt as Administrator

1.  Click the `Start` button or search icon.
2.  Type `cmd` or `Command Prompt`.
3.  Select **Run as administrator**.

![Open CMD as Admin](https://github.com/user-attachments/assets/4465a2d3-6c93-4ee1-bb63-94ab7b8e06ac)  

<br><br/>  

## Step 2: Install a Generic KMS Client Key

In the Command Prompt window, run the following command. You must replace `yourlicensekey` with the key from the table below that matches your Windows edition.   

```bash
slmgr /ipk yourlicensekey
```  

::: tip To find your Windows edition  

details click here

Right-click the Start menu, select System, and look under "Windows specifications".   

 Please select one of the **license keys** from the list that **matches your version of Windows** and replace it with the phrase `yourlicencekey` in the command.    
 How to check version of Windows. [^3]

:::  


### Generic Volume License Keys (GVLK)

| Windows Edition        | GVLK Key                      |
|:-----------------------|:------------------------------|
| TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 	|       Home       	|
| 3KHY7-WNT83-DGQKR-F7HPR-844BM 	|      Home N      	|
| 7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH 	|   Home sl [^6]   	|
| PVMJN-6DFY6–9CCP6–7BKTT-D3WVR 	|   Home cs [^7]   	|
| W269N-WFGWX-YVC9B-4J6C9-T83GX 	|        Pro       	|
| MH37W-N47XK-V7XM9-C7227-GCQG9 	|       Pro N      	|
| YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY 	|     Education    	|
| 84NGF-MHBT6-FXBX8-QWJK7-DRR8H 	|    Education N   	|
| NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 	|   Pro Education  	|
| 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ 	|  Pro Education N 	|
| DXG7C-N36C4-C4HTG-X4T3X-2YV77 	|  Pro for W [^8]  	|
| WYPNQ-8C467-V2W6J-TX4WX-WT2RQ 	| Pro N for W [^8] 	|
| NPPR9-FWDCX-D2C8J-H872K-2YT43 	|    Enterprise    	|
| DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 	|   Enterprise N   	|
| XKCNC-J26Q9-KFHD2-FKTHY-KD72Y 	|       Team       	|
| V3WVW-N2PV2-CGWC3-34QGF-VMJ2C 	|         S        	|
| KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W 	|        SE        	|

<br/>  

![Install KMS Key 1](https://github.com/user-attachments/assets/d5d93702-7865-4552-85d0-6916b1331bc0)

![Install KMS Key](https://github.com/user-attachments/assets/50c23cad-7690-49fb-bf1c-d1c7cc66f0fe)

<br/>  

After running the command, you should see a success message.  <br><br/>  


## Step 3: Set the KMS Server Address

Next, point your system to a public KMS server. Run this command:   

```bash
slmgr /skms kms8.msguides.com
```

![Set KMS Server](https://github.com/user-attachments/assets/edd0835f-c314-4ef8-a87d-a33e29f3f7c0)  

<br><br/>  

## Step 4: Activate Windows

Finally, trigger the activation by running:   

```bash
slmgr /ato
```  

![Activate Windows](https://github.com/user-attachments/assets/95e014e5-8946-4036-84ca-77ebb6122b1b)  

<br><br/>  

## Step 5: Check Activation Status

You're all set!  
To check the activation status of `Windows 10`, navigate to **Settings → Update & Security → Activation.**.  [^4]  

To check the activation status of `Windows 11`, open Settings by clicking the Start button and then selecting **Settings → System → Activation.**. [^5]  

![Activation Successful](https://github.com/user-attachments/assets/da52f1bb-79c9-45db-bade-a0f56cd0a739)  

<br><br/>  

### Troubleshooting

- **Error 0xC004F074:** This usually means your internet connection is unstable or the server is busy. Ensure you are online and try the `slmgr /ato` command again.
- **Method Not Working?** If you're still having trouble, try the **HWID method** from the [main guide](./index).  
  - For additional help, visit the **[Discussion Section][2]**

<br><br/>  

**Be curious 🤍**

<br/>  

[^1]: 10 Ways to run PowerShell in windows [read here][1].

[^2]: Another easiest way to run PowerShell: **Right-click** on your Start menu to trigger the quick link menu and select **Windows Terminal (admin)** at win11 or **Windows powershell (admin)** at win 10 in the menu list.

[^3]: To check version of your Windows: **Right-click** on your Start menu and select the **system** option. look under "Windows specifications", You can also follow the steps of method 2 by **copy pasting** them. copy the commands and then hit the **Right-click** in the **cmd or powershell** to paste them.

[^4]: To check the activation status of Windows 10, navigate to Settings → Update & Security → Activation. You will see your activation status listed there. If Windows is activated, you should see "Activated" with a green checkmark.  

[^5]: To check the activation status of Windows 11, open Settings by clicking the Start button and then selecting Settings → System → Activation. The activation status will be displayed, showing whether Windows is activated, along with details about the activation method and any linked Microsoft account.

[^6]: Home Single language version.

[^7]: Home Country Specific version.

[^8]: Professional for Workstations & Professional N for Workstations.

[rainbow]: https://github.com/NiREvil/vless/assets/126243832/1aca7f5d-6495-44b7-aced-072bae52f256
[1]: https://www.minitool.com/news/open-windows-11-powershell.html
[2]: https://github.com/NiREvil/windows-activation/discussions/new/choose
[3]: mailto:diana.clk01@gmail.com
