---
title: "Traveling with a HACKER Vol.2"
date: "2019-10-21T08:36:17Z"
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
  Kyoto-Okinawa edition.
---


This is a recap article of my travel around Japan. Do not expect a deep dive into  hacking techniques.

I will add the same **disclaimer** here in case [you didn't read **the**  **first volume**](/traveling-with-a-hacker-vol-1/). The techniques I am using are just basic terminal commands and practising the common sense. This isn't a **penetration testing** neither a **system exploitation**. The outcome of this experiment is the eradication of the default credentials. [_admin_/_admin, root/toor, admin/password..._]

> All the venues have been notified and by the time this article is published they should take care of the security issues. No name will be disclosed and some information might be **censored**.

---

{{< figure src="/img/2019/10/IMG_3324-1.jpg" caption="Traditional Japanese Share House in Okinawa (not a Ryokan though)" >}}

I am happy to say I couldn't access the video surveillance system in Okinawa, mainly because the IP cameras  **was conspicuous by its absence**.

Routers and repeaters were as weak as in Tokyo. It's sad to realize how technology is handled in some venues. Don't get me wrong, I had my best times in the Share houses I have been and it made my solo trip a unique experience. Helping to some of them to improve the security was the proper way to thank the incredible people working there.

{{< figure  src="/img/2019/10/Screenshot_2019-10-21_at_09_21_13.png" width="3104" height="1978" >}}
{{< figure  src="/img/2019/10/Screenshot-2019-10-21-at-10.03.18.png" width="3104" height="1978" >}}

Not only in the Share house but also in some restaurants, train stations, malls and public spaces they use a different `SSID` for each floor. Not sure why this is a thing though.

{{< figure src="/img/2019/10/Screenshot_2019-10-21_at_14_25_23.png" >}}

In this case I wanted to go a step further and **out of curiosity** I wanted to **analyze the packages** in the network.

`http.request.method == POST or (http.request.method == POST and tcp.port == 443)` 

`tcp.dstport == 443 and not(ip.addr == <my-ip>)`

`tcp.dstport == 80`

---

After a quick dive into **[Wireshark](https://www.wireshark.org)** and basic filtering, looks like the use of the network is straight forward. I was tempted to use **[Ettercap](https://www.ettercap-project.org/)** to test the average user in this Wifi but that will be too much don't you think ;)

```bash
$ sudo ettercap -T -Q -i en0 -M arp ////

ettercap 0.8.3 copyright 2001-2019 Ettercap Development Team

Error Opening file /usr/local/var/GeoIP/GeoIP.dat
Error Opening file /usr/local/share/GeoIP/GeoIP.dat
Listening on:
   en0 -> xx:xx:xx:xx:xx:xx
	  192.168.xxx.xxx/255.255.255.0
	  xxxx::xxxx:xxxx:xxxx:xxxx/64

SSL dissection needs a valid 'redir_command_on' script in the etter.conf file
Privileges dropped to EUID 65534 EGID 65534...

  34 plugins
  42 protocol dissectors
  57 ports monitored
24609 mac vendor fingerprint
1766 tcp OS fingerprint
2182 known services

Randomizing 255 hosts for scanning...
Scanning the whole netmask for 255 hosts...
* |==================================================>| 100.00 %

20 hosts added to the hosts list...

ARP poisoning victims:

 GROUP 1 : ANY (all the hosts in the list)

 GROUP 2 : ANY (all the hosts in the list)
Starting Unified sniffing...


Text only Interface activated...
Hit 'h' for inline help
```



