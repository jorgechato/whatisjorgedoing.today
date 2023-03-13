---
title: "Traveling with a HACKER Vol.1"
date: "2019-10-14T02:43:58Z"
author: Jorge
categories:
- terminal
- traveling-with-a-hacker
- hack 
tags:
- terminal
- traveling-with-a-hacker
- hack
toc: true
summary: |
  I am now on my vacations traveling around Japan.
  As I always do as soon as I'm connected to a wifi,
  the first thing is turning my personal VPN on.
  This time though, I wanted to know how bad the security in some venues are.
  Tokyo edition.
---


First of all I need to add a **disclaimer** here. The techniques I am using are just basic terminal commands and practising the common sense. This isn't a **penetration testing** neither a **system exploitation**. The outcome of this experiment is the eradication of the default credentials. [_admin_/_admin, root/toor, admin/password..._]

> All the venues have been notified and by the time this article is published they should take care of the security issues. No name will be disclosed and some information might be **censored**.

---

I came back to my _Shared House_ after exploring the city when the lag in my iPhone started to annoy me. Men, I was in Japan, the fastest Internet connection in the world. The trigger for this experiment was the frustration of uploading to instagram a picture that takes forever.

{{< figure src="/img/2019/10/IMG_0873.jpg" caption="Figuring out why the Wifi is so slow in the Share House" >}}

You probably expect the video surveillance system to be secure in any venue. Curious enough in my first Share House in Tokyo this wasn't the case. In fact the router was _"more secure"_ than the repeaters and the surveillance system.

```bash
$ ifconfig # broadcast 192.168.1.255
$ sudo nmap -sP 192.168.1.0/24
```

{{< figure src="/img/2019/10/Screenshot_2019-10-10_at_15_59_07.png" >}}

Not so much devices were connected to the network but something caught my eye. Multiple `Elecom` systems have a consecutive  IP addresses (n+1). From **192.168.1.21** to **192.168.1.25**.

When I was checking-in, in the front desk monitor there were broadcasting five security cameras.

> It is looking suspicious... wow Basic Auth, there is no way the default password for admin is enabled. **[WAT](https://www.destroyallsoftware.com/talks/wat)?**

{{< figure src="/img/2019/10/Screenshot_2019-10-10_at_18_25_36.png" >}}

The staff were notified... but, I was wondering... Is this a common scenario? Will I trust my security to this venues. After all, they usually do a great job, computers though is a skill they need to work on.

The second venue were slightly better in the video surveillance system. They used a subnetwork that contains and exposes an organization's external-facing services to an untrusted network (or that's what I want to believe).

But **_ZERO_** security in any system connected to the main network. Router, switch, repeaters...

{{< figure  src="/img/2019/10/Screenshot_2019-10-11_at_12_23_03.png" width="3104" height="1978" >}}
{{< figure  src="/img/2019/10/Screenshot-2019-10-11-at-12.41.04.png" width="3104" height="1978" >}}
{{< figure  src="/img/2019/10/Screenshot-2019-10-11-at-12.29.25.png" width="3104" height="1978" >}}
{{< figure  src="/img/2019/10/Screenshot-2019-10-12-at-22.45.11.png" width="3104" height="1978" >}}

The search of the perfect venue, accommodation-technical security balance will drive me to Kyoto. Will the millennial city be the hidden gem of **Maikos** and _Hackers_?

