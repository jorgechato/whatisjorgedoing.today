---
title: "How to Learn a New Language"
date: "2019-08-31"
author: Jorge
tags:
- code
toc: false
summary: |
  The language is one of many things that make us humans.
  It let us to communicate each others and broadcast our ideas and thoughts.
  Vocabulary is one of the key areas of every language.
---


The language is one of many things that make us humans. It let us to communicate each others and broadcast our ideas and thoughts. Vocabulary is one of the key areas of every language.

There exist a bunch of tools to help you in the learning process, but we are developers, if something doesn't fit our needs we can create it from scratch.

If you are a terminal :heart: like me this tip is going to blow your mind.

You probably know about cowsay combined with fortune.

```bash
$ fortune | cowsay
 _____________
< hello world >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

It doesn't matter if you are a bash or zsh lover. You can custom your profile to display cowsay each time you start a terminal with this simple lines.

```bash
if [[ ! -e "/root/.automatic_start_occurred" ]];then
    fortune | cowsay             
fi 
```

What if.... What if we create our own fortune database to help us remember the vocabulary?

First we need a great dictionary. We can find great dictionaries on internet but find a dictionary that fit your needs and your level is tough. Remember, ****we are developers****.

This is what I did. I found this [**webpage**](https://quizlet.com/106562829/vocabulario-noken-4-hiraganakanjiespanol-flash-cards/) with the vocabulary I wanted to learn but there isn't a download button. There is no problem at all, let's scraping a little bit. Although there are more scraping methods than computer languages, I highly recommend [**scrapy**](https://scrapy.org/). I won't go into the process of __ scraping.

You will need to create a file with the vocabulary separated by %. I named it as vN4, cause this is N4 Japanese vocabulary level.

```bash
ああ！
--¡ah!, ¡oh!
%
あう (会う)
--encontrarse con, reunirse
%
あおい (青い)
--azul, verde
%
あかい (赤い)
--rojo
%
あかるい (明るい)
--claro, luminoso, brillante, alegre, abierto
%
```

Copy this file into ****/usr/share/games/fortunes/**** and generate .dat file by typing:

```bash
$ strfile vN4
```

It's time to test it.

```bash
$ fortune vN4 | cowsay -e --
 ________________
/ すこし (少し)    \
|                 |
\ --poco, un poco /
 -----------------
        \   ^__^
         \  (--)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

$ fortune vN4 | cowsay -e --
 _______________________
/ おにいさん (お兄さん)    \
|                       |
\ --hermano mayor       /
 -----------------------
        \   ^__^
         \  (--)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

[**vN4**](https://github.com/orggue/.dotfiles/blob/master/fortune/vN4)****[**vN4.dat**](https://github.com/orggue/.dotfiles/blob/master/fortune/vN4.dat?raw=true)

