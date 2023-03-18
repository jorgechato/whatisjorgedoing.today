---
title: "My TOOLSET"
date: "2020-01-19"
author: Jorge
categories:
- code
- terminal
- vim
- github
tags:
- code
- terminal
- vim
- github
toc: true
summary: I always been fascinated with others workflow and daily toolset, learning
  from your peers and share your daily struggles is a good exercise to improve.
---


I know, I know... It's been months since [my last article](/traveling-with-a-hacker-vol-2/) but work and life comes along. Without a side project to share with you writing felt weird. Nevertheless, here I am, without  a project but an idea.

I always been **fascinated** with others workflow and daily toolset, learning from your peers and share your daily struggles is a good exercise to improve. My audience is from supper junior developers to advanced architects, hopefully this tips and tricks fill the gap in some areas and help in some level to all of you.

## Let's start with security

I understand security as a journey, as deeper as you understand technology and his flaws you feel the need to correct and create routines to prevent been a target.

Picture this scenario, you are developing your first game. You are probably relatively new to any computer language but you have an assignment to finish a platform game. The avatar needs to jump but you are strangling to make it land in realistic way. What you didn't think of is the game should have a basic physics. The laws that rules our world should be apply to the digital world.

> **Common sense** should **drive** our digital finger print.

I was shocked in my solo trip around Japan when in a conversation with a girl she mentioned she used to check her **bank account** with random **free wifi**. That been said, this is the list of applications I use to keep by data secure.

<img src="/img/2020/01/photo_2020-01-19-08.23.16-1.jpeg">

* **OpenVPN**: Personal server with openVPN, an open-source commercial software that implements virtual private network techniques to create secure point-to-point or site-to-site connections in routed or bridged configurations and remote access facilities. It uses a custom security protocol that utilizes SSL/TLS for key exchange.
* **[ExpressVPN](https://www.linkev.com/?a_aid=orggue)**: is a virtual private network service. The software is marketed as a privacy and security tool that encrypts users’ web traffic and masks their IP addresses.

<img src="/img/2020/01/expressvpn.jpg" class="no-zoom" link="https://www.xvbelink.com/?a_fid=orggue">}}

* **[Strongbox](https://strongboxsafe.com/)**: A [freemium](https://en.wikipedia.org/wiki/Freemium) open source password manager. The passwords are locked inside a highly-encrypted database (.**[kdbx](https://keepass.info/help/kb/kdbx_4.html)** file) using a master key **file**.
* **[Authy](https://authy.com/)**: Two-factor authentication (2FA) adds an additional layer of protection beyond passwords. This blocks anyone using your stolen data by verifying your identity through your device.
* **[Keybase](https://keybase.io/jorgechato)**: It is a key directory that maps social media identities to encryption keys in a publicly auditable manner. Additionally it offers an end-to-end encrypted chat and cloud storage system, called Keybase Chat and the Keybase filesystem respectively.

## Text editor or IDEs

<img src="/img/2020/01/vim-logo-png-transparent-2.png" width="150px">

Depending of the programming language I use to switch between **VIM** and **IntelliJ**, there is no one tool to rule them all. Using the right tool for the right need is key for productivity.

For Javascript, Go, Terraform, Devops miscs, Python, **[VIM](https://www.vim.org/)** is my first choice. I'm aware vim might be scared and the learning curve hight but with the community and fun ways to learn ([vim adventures](https://vim-adventures.com/)) that's not an obstacle at all.

I strongly believe that every developer should know one powerful editor and use it whenever possible, but the editor you choose is a matter of personal preference, it may be [Emacs](https://www.gnu.org/software/emacs), [SublimeText](http://www.sublimetext.com/), [VSCode](https://code.visualstudio.com/), or a slew of others.

This is my basic configuration for a happy coding with VIM:

```vim
" .vimrc
" Author: Jorge Chato
" Source: https://github.com/orggue/.dotfiles
" Web:		https://jorgechato.com
" Preamble --------------------------------------------------------------- {{{
set nocompatible                        " I'm using vim not vi

filetype plugin indent on
syntax on
" }}}

" Basic options ---------------------------------------------------------- {{{
" size of a hard tabstop
set backspace=indent,eol,start
set smartindent
set tabstop=2
" a combination of spaces and tabs are used to simulate tab stops at a width
" other than the (hard)tabstop
set softtabstop=2
set smarttab
" size of an indent"
set shiftwidth=2
autocmd FileType *.yaml *. yml set tabstop=2|set shiftwidth=2|set softtabstop=2
set noexpandtab
set encoding=utf-8
set shell=/bin/zsh
set number                              " Show linenumbers
set showcmd                             " Show info in the right bottom
set ttyfast
set textwidth=80
set colorcolumn=+1                      " Display margin at 81
set t_Co=256
set nocursorline                        " Do not hightlight the current line
set scrolloff=5
set sidescroll=1
set sidescrolloff=10
set formatoptions=qcrn1
set pastetoggle=<F8>
set novisualbell                        " No blinking .
set noerrorbells                        " No noise.
set lazyredraw
set autoread                            " Reload file if it's modified outside
set autowrite
set autoindent
set ruler                               " Show line and column number
set showbreak=↪
set title
set wrap								" long text with breackline
set linebreak
set nolist								" Change to list to enable listchars
set pfn=:h8
set penc="cp1252"
let mapleader = " "
set wildignore+=*.pyc,*.swp,*.pdf,*.class
let g:ctrlp_custom_ignore = {
    \ 'dir':  'out$\|\.git$\|\.data$\|bower_components$\|node_modules$\|vendor',
	\ 'file': '\.exe$\|\.so$\|\.dll$\|\.pyc$\|\DS_Store$',
	\ }
set guifont=Menlo:h12

" Backups {{{
set backupskip=/tmp/*,/private/tmp/*"
set undodir=~/.vim/tmp/undo//
set backupdir=~/.vim/tmp/backup//
set directory=~/.vim/tmp/swap//
set backup
set noswapfile
" }}}
" GUI & Terminal settings {{{
if has("gui_running")
	set guioptions= " disable all UI options
	set guicursor+=a:blinkon0 " disable blinking cursor
	set ballooneval
endif
" }}}
" }}}

" Bundles ----------------------------------------------------------------- {{{
call plug#begin('$HOME/.vim/plugged')

"Themes {{{
Plug 'jorgechato/vim-youcolor'
Plug 'jorgechato/vim-blacktie'
Plug 'endel/vim-github-colorscheme'
"}}}

Plug 'danro/rename.vim'
Plug 'mattn/emmet-vim'
Plug 'ctrlpvim/ctrlp.vim'
Plug 'scrooloose/nerdcommenter'
Plug 'ervandew/supertab'
Plug 'godlygeek/tabular'
Plug 'tpope/vim-fugitive'
Plug 'tpope/vim-vinegar'
Plug 'tpope/vim-repeat'
Plug 'tpope/vim-surround'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'airblade/vim-gitgutter'
Plug 'easymotion/vim-easymotion'
Plug 'kshenoy/vim-signature'
Plug 'tell-k/vim-autopep8'
Plug 'editorconfig/editorconfig-vim'
Plug 'cjrh/vim-conda'
Plug 'rizzatti/dash.vim'
Plug 'mileszs/ack.vim'
Plug 'terryma/vim-multiple-cursors'

"syntax
Plug 'vim-syntastic/syntastic'
Plug 'elixir-editors/vim-elixir'
Plug 'keith/swift.vim'
Plug 'davidhalter/jedi-vim'
Plug 'Glench/Vim-Jinja2-Syntax'
Plug 'elzr/vim-json'
Plug 'LaTeX-Box-Team/LaTeX-Box'
Plug 'pangloss/vim-javascript'
Plug 'mxw/vim-jsx'
Plug 'Shutnik/jshint2.vim'
Plug 'plasticboy/vim-markdown'
Plug 'avakhov/vim-yaml'
Plug 'fatih/vim-go'
Plug 'modille/groovy.vim'
Plug 'hashivim/vim-terraform'
Plug 'juliosueiras/vim-terraform-completion'
Plug 'chr4/nginx.vim'
Plug 'posva/vim-vue'
Plug 'othree/html5.vim'
Plug 'jparise/vim-graphql'
Plug 'derekwyatt/vim-scala'
Plug 'dart-lang/dart-vim-plugin'

" Initialize plugin system
call plug#end()
" }}}

" Plugin settings --------------------------------------------------------- {{{
" vue {{{
au BufRead,BufNewFile *.vue set filetype=vue.html
" }}}
" swift {{{
let g:syntastic_swift_swiftlint_use_defaults = 1
" }}}
" terraform {{{
let g:terraform_align=1
let g:syntastic_terraform_tffilter_plan = 1
let g:terraform_completion_keys = 1
let g:terraform_registry_module_completion = 0
" }}}
" editorconfig {{{
let g:EditorConfig_exclude_patterns = ['fugitive://.*']
" }}}
" ack to ag {{{
let g:ackprg = 'ag --vimgrep'
" }}}
" syntastic {{{
let g:syntastic_python_checkers = ['flake8']
let g:syntastic_swift_checkers = ['swiftlint', 'swiftpm']
" }}}
" Python jedi {{{
let g:jedi#popup_on_dot = 0
let g:deoplete#sources#jedi#python_path = '$HOME/miniconda3/bin/python3.6'
autocmd FileType python setlocal completeopt-=preview
" }}}
" Python autopep8 {{{
let g:autopep8_disable_show_diff=1
autocmd FileType python set equalprg=autopep8\ -
autocmd FileType python autocmd BufWritePre <buffer> call Autopep8()
" }}}
"airline {{{
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tmuxline#enabled = 0
if has("gui_running")
	let g:airline_theme='lucius'
else
	let g:airline_theme='term'
	if !exists('g:airline_symbols')
		let g:airline_symbols = {}
	endif
	let g:airline_powerline_fonts = 1
endif
" }}}
" Latex {{{
let s:extfname = expand("%:e")
if s:extfname ==? "tex"
	let g:LatexBox_split_type="new"
endif
" }}}
" jshint2 {{{
set runtimepath+=$HOME/.vim/plugged/jshint2.vim/
" }}}
" nerdcommenter {{{
" Add spaces after comment delimiters by default
let g:NERDSpaceDelims = 1
" Use compact syntax for prettified multi-line comments
let g:NERDCompactSexyComs = 1
" Allow commenting and inverting empty lines (useful when commenting a region)
let g:NERDCommentEmptyLines = 1
" Enable trimming of trailing whitespace when uncommenting
let g:NERDTrimTrailingWhitespace = 1
" }}}
" }}}

" Color scheme ------------------------------------------------------------ {{{
let g:solarized_termcolors=256
syntax enable                           " Switch syntax highlighting on
" }}}

" Custom functions -------------------------------------------------------- {{{
" Twiddle Case {{{
function! TwiddleCase(str)
	if a:str ==# toupper(a:str)
		let result = tolower(a:str)
	elseif a:str ==# tolower(a:str)
		let result = substitute(a:str,'\(\<\w\+\>\)', '\u\1', 'g')
	else
		let result = toupper(a:str)
	endif
	return result
endfunction
" }}}

" }}}

" Custom interface -------------------------------------------------------- {{{
set cursorline
set hlsearch

" colorscheme blacktie
colorscheme github

"interface {{{
hi Search cterm=underline
" }}}
" }}}

" Language ---------------------------------------------------------------- {{{
set spell spelllang=en_us
"set nospell
" }}}

" Mappings ---------------------------------------------------------------- {{{
vnoremap ~ y:call setreg('', TwiddleCase(@"), getregtype(''))<CR>gv""Pgv
nnoremap <leader>+ :set gfn=*<CR>
nnoremap <leader>t :bnext<CR>
nnoremap <leader>w :bd<CR>
map <F7> mzgg=G'zmz
map <F8> <leader>cc
map <F9> <leader>cu
map <leader>p <esc>:CtrlPBuffer<CR>
map <C-s> <esc>:w<CR>
imap <C-s> <esc>:w<CR>a
inoremap <F2> <C-O>za
nnoremap <F2> za
nnoremap <F3> zR
onoremap <F2> <C-C>za
vnoremap <F3> zf
nnoremap td  :tabclose<CR>
nnoremap tn :tabnew<CR>
nn <F6> :setlocal spell! spell?<CR>
nnoremap cou :set nonumber!<CR>
vmap <leader>2 gj
vmap <leader>8 gk
vmap <leader>6 g$
vmap <leader>4 g^
nmap <leader>2 gj
nmap <leader>8 gk
nmap <leader>6 g$
nmap <leader>4 g^
map <Leader>f <Plug>(easymotion-sn)
omap <Leader>f <Plug>(easymotion-tn)
cnoreabbrev Ack Ack!
nnoremap <Leader>a :Ack!<Space>
" For local replace
nnoremap gr gd[{V%::s/<C-R>///gc<left><left><left>
" For global replace
nnoremap gR gD:%s/<C-R>///gc<left><left><left>
"Pretty tab
nmap <Leader>t= :Tabularize /=<CR>
vmap <Leader>t= :Tabularize /=<CR>
nmap <Leader>t: :Tabularize /:\zs<CR>
vmap <Leader>t: :Tabularize /:\zs<CR>
" fugitive git bindings
nnoremap <leader>ga :Git add %:p<CR><CR>
nnoremap <leader>gs :Gstatus<CR>
nnoremap <leader>gc :Gcommit -v -q<CR>
nnoremap <leader>gt :Gcommit -v -q %:p<CR>
nnoremap <leader>gd :Gdiff<Space>
nnoremap <leader>ge :Gedit<Space>
nnoremap <leader>gr :Gread<CR>
nnoremap <leader>gw :Gwrite<CR><CR>
nnoremap <leader>gp :Git push origin <Space>
nnoremap <leader>g- :Silent Git stash<CR>:e<CR>
nnoremap <leader>g+ :Silent Git stash pop<CR>:e<CR>
nnoremap <leader>gB :Gblame<CR>
nnoremap <leader>gg :Ggrep<Space>
nnoremap <leader>gm :Gmove<Space>
nnoremap <leader>gb :Git branch<Space>
nnoremap <leader>gsw :Git switch<Space>
nnoremap <leader>gl :silent! Glog<CR>:bot copen<CR>
" }}}

" Fold -------------------------------------------------------------------- {{{
set foldmethod=syntax
set nofoldenable

let javaScript_fold=1         " JavaScript
let sh_fold_enabled=1         " sh
let vimsyn_folding='af'       " Vim script
let xml_syntax_folding=1      " XML
" }}}
```

<img src="/img/2020/01/kB8CZsMfSZu26SCQDi_JYAYSJBs1V4itKUL-64Fmnis-1.jpg">

For Java, Scala, Flutter, Kotlin, **[INTELLIJ](https://www.jetbrains.com/idea/)** makes a lot of sense.

A good text editor may be nice for writing code, but most of your programming isn't spent writing; it's spent testing and debugging, and for that you want your text editor to integrate with your compiler and your debugger. That's the greatest strength of an IDE.

Since I use VIM the **80%** of my time, installing a [plugin to emulate](https://plugins.jetbrains.com/plugin/164-ideavim) my workflow really help me to keep the consistency across all of my tools.

You can find all of the configuration described above in my [.dotfiles repository](https://github.com/jorgechato/.dotfiles) on **github**, ready to fork it if you will.

