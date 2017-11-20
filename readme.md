# colors.css [![Build Status](https://travis-ci.org/roryclaasen/colors.css.svg?branch=node.js)](https://travis-ci.org/roryclaasen/colors.css)

Colors.css provides the colors that github uses to represent different programming languages in their "Languages" tab on each repository. This project allows you to uses these colors in your webpages, to view them click [here](#colors)

### Stylesheets

Download the file [colors.min.css](dist/colors.min.css) and link it with your project. Also available are [sass](dist/colors.scss) and [less](dist/colors.less) files to use with your projects.

## Install it yourself

Clone or [download](https://github.com/GOGO98901/colors.css/archive/node.js.zip) this repository, then in the project folder run the command

```
> npm install
```

### CLI

#### Usage

```
> gh-color

  Usage: gh-color [options]

  GitHub colour codes for web development


  Options:

    -V, --version  output the version number
    -l, --less     Builds Less source file
    -s, --scss     Builds Sass source file
    -c, --css      Builds css source file
    -a, --all      Builds all source files
    -h, --help     output usage information
```

### Building yourself

```
> npm run build
```

Contained inside the `dist` folder are the updated stylesheets.
(This will also update the readme)

#### Implementation

```html
<link rel="stylesheet" href="stylesheets/colors.min.css" />
```

```css
@import("colors.min.css")
```

To use as background color use prefix

```
.gh-bg-(language)
```

To use as color use prefix

```
.gh-(language)
```

## Colors
![1C Enterprise](http://www.placehold.it/150/814CCC/ffffff?text=1C%20Enterprise)
![ABAP](http://www.placehold.it/150/E8274B/ffffff?text=ABAP)
![AGS Script](http://www.placehold.it/150/B9D9FF/ffffff?text=AGS%20Script)
![AMPL](http://www.placehold.it/150/E6EFBB/ffffff?text=AMPL)
![ANTLR](http://www.placehold.it/150/9DC3FF/ffffff?text=ANTLR)
![API Blueprint](http://www.placehold.it/150/2ACCA8/ffffff?text=API%20Blueprint)
![APL](http://www.placehold.it/150/5A8164/ffffff?text=APL)
![ASP](http://www.placehold.it/150/6a40fd/ffffff?text=ASP)
![ATS](http://www.placehold.it/150/1ac620/ffffff?text=ATS)
![ActionScript](http://www.placehold.it/150/882B0F/ffffff?text=ActionScript)
![Ada](http://www.placehold.it/150/02f88c/ffffff?text=Ada)
![Agda](http://www.placehold.it/150/315665/ffffff?text=Agda)
![Alloy](http://www.placehold.it/150/64C800/ffffff?text=Alloy)
![AngelScript](http://www.placehold.it/150/C7D7DC/ffffff?text=AngelScript)
![AppleScript](http://www.placehold.it/150/101F1F/ffffff?text=AppleScript)
![Arc](http://www.placehold.it/150/aa2afe/ffffff?text=Arc)
![Arduino](http://www.placehold.it/150/bd79d1/ffffff?text=Arduino)
![AspectJ](http://www.placehold.it/150/a957b0/ffffff?text=AspectJ)
![Assembly](http://www.placehold.it/150/6E4C13/ffffff?text=Assembly)
![AutoHotkey](http://www.placehold.it/150/6594b9/ffffff?text=AutoHotkey)
![AutoIt](http://www.placehold.it/150/1C3552/ffffff?text=AutoIt)
![Ballerina](http://www.placehold.it/150/FF5000/ffffff?text=Ballerina)
![Batchfile](http://www.placehold.it/150/C1F12E/ffffff?text=Batchfile)
![BlitzMax](http://www.placehold.it/150/cd6400/ffffff?text=BlitzMax)
![Boo](http://www.placehold.it/150/d4bec1/ffffff?text=Boo)
![Brainfuck](http://www.placehold.it/150/2F2530/ffffff?text=Brainfuck)
![C](http://www.placehold.it/150/555555/ffffff?text=C)
![C#](http://www.placehold.it/150/178600/ffffff?text=C#)
![C++](http://www.placehold.it/150/f34b7d/ffffff?text=C++)
![CSS](http://www.placehold.it/150/563d7c/ffffff?text=CSS)
![Ceylon](http://www.placehold.it/150/dfa535/ffffff?text=Ceylon)
![Chapel](http://www.placehold.it/150/8dc63f/ffffff?text=Chapel)
![Cirru](http://www.placehold.it/150/ccccff/ffffff?text=Cirru)
![Clarion](http://www.placehold.it/150/db901e/ffffff?text=Clarion)
![Clean](http://www.placehold.it/150/3F85AF/ffffff?text=Clean)
![Click](http://www.placehold.it/150/E4E6F3/ffffff?text=Click)
![Clojure](http://www.placehold.it/150/db5855/ffffff?text=Clojure)
![CoffeeScript](http://www.placehold.it/150/244776/ffffff?text=CoffeeScript)
![ColdFusion](http://www.placehold.it/150/ed2cd6/ffffff?text=ColdFusion)
![Common Lisp](http://www.placehold.it/150/3fb68b/ffffff?text=Common%20Lisp)
![Common Workflow Language](http://www.placehold.it/150/B5314C/ffffff?text=Common%20Workflow%20Language)
![Component Pascal](http://www.placehold.it/150/B0CE4E/ffffff?text=Component%20Pascal)
![Crystal](http://www.placehold.it/150/776791/ffffff?text=Crystal)
![Cuda](http://www.placehold.it/150/3A4E3A/ffffff?text=Cuda)
![D](http://www.placehold.it/150/ba595e/ffffff?text=D)
![DM](http://www.placehold.it/150/447265/ffffff?text=DM)
![Dart](http://www.placehold.it/150/00B4AB/ffffff?text=Dart)
![DataWeave](http://www.placehold.it/150/003a52/ffffff?text=DataWeave)
![Dogescript](http://www.placehold.it/150/cca760/ffffff?text=Dogescript)
![Dylan](http://www.placehold.it/150/6c616e/ffffff?text=Dylan)
![E](http://www.placehold.it/150/ccce35/ffffff?text=E)
![ECL](http://www.placehold.it/150/8a1267/ffffff?text=ECL)
![EQ](http://www.placehold.it/150/a78649/ffffff?text=EQ)
![Eiffel](http://www.placehold.it/150/946d57/ffffff?text=Eiffel)
![Elixir](http://www.placehold.it/150/6e4a7e/ffffff?text=Elixir)
![Elm](http://www.placehold.it/150/60B5CC/ffffff?text=Elm)
![Emacs Lisp](http://www.placehold.it/150/c065db/ffffff?text=Emacs%20Lisp)
![EmberScript](http://www.placehold.it/150/FFF4F3/ffffff?text=EmberScript)
![Erlang](http://www.placehold.it/150/B83998/ffffff?text=Erlang)
![F#](http://www.placehold.it/150/b845fc/ffffff?text=F#)
![FLUX](http://www.placehold.it/150/88ccff/ffffff?text=FLUX)
![Factor](http://www.placehold.it/150/636746/ffffff?text=Factor)
![Fancy](http://www.placehold.it/150/7b9db4/ffffff?text=Fancy)
![Fantom](http://www.placehold.it/150/14253c/ffffff?text=Fantom)
![Forth](http://www.placehold.it/150/341708/ffffff?text=Forth)
![Fortran](http://www.placehold.it/150/4d41b1/ffffff?text=Fortran)
![FreeMarker](http://www.placehold.it/150/0050b2/ffffff?text=FreeMarker)
![Frege](http://www.placehold.it/150/00cafe/ffffff?text=Frege)
![Game Maker Language](http://www.placehold.it/150/8fb200/ffffff?text=Game%20Maker%20Language)
![Genie](http://www.placehold.it/150/fb855d/ffffff?text=Genie)
![Gherkin](http://www.placehold.it/150/5B2063/ffffff?text=Gherkin)
![Glyph](http://www.placehold.it/150/e4cc98/ffffff?text=Glyph)
![Gnuplot](http://www.placehold.it/150/f0a9f0/ffffff?text=Gnuplot)
![Go](http://www.placehold.it/150/375eab/ffffff?text=Go)
![Golo](http://www.placehold.it/150/88562A/ffffff?text=Golo)
![Gosu](http://www.placehold.it/150/82937f/ffffff?text=Gosu)
![Grammatical Framework](http://www.placehold.it/150/79aa7a/ffffff?text=Grammatical%20Framework)
![Groovy](http://www.placehold.it/150/e69f56/ffffff?text=Groovy)
![HTML](http://www.placehold.it/150/e34c26/ffffff?text=HTML)
![Hack](http://www.placehold.it/150/878787/ffffff?text=Hack)
![Harbour](http://www.placehold.it/150/0e60e3/ffffff?text=Harbour)
![Haskell](http://www.placehold.it/150/5e5086/ffffff?text=Haskell)
![Haxe](http://www.placehold.it/150/df7900/ffffff?text=Haxe)
![Hy](http://www.placehold.it/150/7790B2/ffffff?text=Hy)
![IDL](http://www.placehold.it/150/a3522f/ffffff?text=IDL)
![Idris](http://www.placehold.it/150/b30000/ffffff?text=Idris)
![Io](http://www.placehold.it/150/a9188d/ffffff?text=Io)
![Ioke](http://www.placehold.it/150/078193/ffffff?text=Ioke)
![Isabelle](http://www.placehold.it/150/FEFE00/ffffff?text=Isabelle)
![J](http://www.placehold.it/150/9EEDFF/ffffff?text=J)
![JSONiq](http://www.placehold.it/150/40d47e/ffffff?text=JSONiq)
![Java](http://www.placehold.it/150/b07219/ffffff?text=Java)
![JavaScript](http://www.placehold.it/150/f1e05a/ffffff?text=JavaScript)
![Jolie](http://www.placehold.it/150/843179/ffffff?text=Jolie)
![Julia](http://www.placehold.it/150/a270ba/ffffff?text=Julia)
![Jupyter Notebook](http://www.placehold.it/150/DA5B0B/ffffff?text=Jupyter%20Notebook)
![KRL](http://www.placehold.it/150/28431f/ffffff?text=KRL)
![Kotlin](http://www.placehold.it/150/F18E33/ffffff?text=Kotlin)
![LFE](http://www.placehold.it/150/4C3023/ffffff?text=LFE)
![LLVM](http://www.placehold.it/150/185619/ffffff?text=LLVM)
![LOLCODE](http://www.placehold.it/150/cc9900/ffffff?text=LOLCODE)
![LSL](http://www.placehold.it/150/3d9970/ffffff?text=LSL)
![Lasso](http://www.placehold.it/150/999999/ffffff?text=Lasso)
![Lex](http://www.placehold.it/150/DBCA00/ffffff?text=Lex)
![LiveScript](http://www.placehold.it/150/499886/ffffff?text=LiveScript)
![LookML](http://www.placehold.it/150/652B81/ffffff?text=LookML)
![Lua](http://www.placehold.it/150/000080/ffffff?text=Lua)
![MAXScript](http://www.placehold.it/150/00a6a6/ffffff?text=MAXScript)
![MQL4](http://www.placehold.it/150/62A8D6/ffffff?text=MQL4)
![MQL5](http://www.placehold.it/150/4A76B8/ffffff?text=MQL5)
![MTML](http://www.placehold.it/150/b7e1f4/ffffff?text=MTML)
![Makefile](http://www.placehold.it/150/427819/ffffff?text=Makefile)
![Mask](http://www.placehold.it/150/f97732/ffffff?text=Mask)
![Matlab](http://www.placehold.it/150/e16737/ffffff?text=Matlab)
![Max](http://www.placehold.it/150/c4a79c/ffffff?text=Max)
![Mercury](http://www.placehold.it/150/ff2b2b/ffffff?text=Mercury)
![Meson](http://www.placehold.it/150/007800/ffffff?text=Meson)
![Metal](http://www.placehold.it/150/8f14e9/ffffff?text=Metal)
![Mirah](http://www.placehold.it/150/c7a938/ffffff?text=Mirah)
![NCL](http://www.placehold.it/150/28431f/ffffff?text=NCL)
![Nearley](http://www.placehold.it/150/990000/ffffff?text=Nearley)
![Nemerle](http://www.placehold.it/150/3d3c6e/ffffff?text=Nemerle)
![NetLinx](http://www.placehold.it/150/0aa0ff/ffffff?text=NetLinx)
![NetLinx+ERB](http://www.placehold.it/150/747faa/ffffff?text=NetLinx+ERB)
![NetLogo](http://www.placehold.it/150/ff6375/ffffff?text=NetLogo)
![NewLisp](http://www.placehold.it/150/87AED7/ffffff?text=NewLisp)
![Nim](http://www.placehold.it/150/37775b/ffffff?text=Nim)
![Nit](http://www.placehold.it/150/009917/ffffff?text=Nit)
![Nix](http://www.placehold.it/150/7e7eff/ffffff?text=Nix)
![Nu](http://www.placehold.it/150/c9df40/ffffff?text=Nu)
![OCaml](http://www.placehold.it/150/3be133/ffffff?text=OCaml)
![Objective-C](http://www.placehold.it/150/438eff/ffffff?text=Objective-C)
![Objective-C++](http://www.placehold.it/150/6866fb/ffffff?text=Objective-C++)
![Objective-J](http://www.placehold.it/150/ff0c5a/ffffff?text=Objective-J)
![Omgrofl](http://www.placehold.it/150/cabbff/ffffff?text=Omgrofl)
![Opal](http://www.placehold.it/150/f7ede0/ffffff?text=Opal)
![Oxygene](http://www.placehold.it/150/cdd0e3/ffffff?text=Oxygene)
![Oz](http://www.placehold.it/150/fab738/ffffff?text=Oz)
![P4](http://www.placehold.it/150/7055b5/ffffff?text=P4)
![PAWN](http://www.placehold.it/150/dbb284/ffffff?text=PAWN)
![PHP](http://www.placehold.it/150/4F5D95/ffffff?text=PHP)
![PLSQL](http://www.placehold.it/150/dad8d8/ffffff?text=PLSQL)
![Pan](http://www.placehold.it/150/cc0000/ffffff?text=Pan)
![Papyrus](http://www.placehold.it/150/6600cc/ffffff?text=Papyrus)
![Parrot](http://www.placehold.it/150/f3ca0a/ffffff?text=Parrot)
![Pascal](http://www.placehold.it/150/E3F171/ffffff?text=Pascal)
![Pep8](http://www.placehold.it/150/C76F5B/ffffff?text=Pep8)
![Perl](http://www.placehold.it/150/0298c3/ffffff?text=Perl)
![Perl 6](http://www.placehold.it/150/0000fb/ffffff?text=Perl%206)
![PigLatin](http://www.placehold.it/150/fcd7de/ffffff?text=PigLatin)
![Pike](http://www.placehold.it/150/005390/ffffff?text=Pike)
![PogoScript](http://www.placehold.it/150/d80074/ffffff?text=PogoScript)
![PostScript](http://www.placehold.it/150/da291c/ffffff?text=PostScript)
![PowerBuilder](http://www.placehold.it/150/8f0f8d/ffffff?text=PowerBuilder)
![PowerShell](http://www.placehold.it/150/012456/ffffff?text=PowerShell)
![Processing](http://www.placehold.it/150/0096D8/ffffff?text=Processing)
![Prolog](http://www.placehold.it/150/74283c/ffffff?text=Prolog)
![Propeller Spin](http://www.placehold.it/150/7fa2a7/ffffff?text=Propeller%20Spin)
![Puppet](http://www.placehold.it/150/302B6D/ffffff?text=Puppet)
![PureBasic](http://www.placehold.it/150/5a6986/ffffff?text=PureBasic)
![PureScript](http://www.placehold.it/150/1D222D/ffffff?text=PureScript)
![Python](http://www.placehold.it/150/3572A5/ffffff?text=Python)
![QML](http://www.placehold.it/150/44a51c/ffffff?text=QML)
![R](http://www.placehold.it/150/198CE7/ffffff?text=R)
![RAML](http://www.placehold.it/150/77d9fb/ffffff?text=RAML)
![RUNOFF](http://www.placehold.it/150/665a4e/ffffff?text=RUNOFF)
![Racket](http://www.placehold.it/150/22228f/ffffff?text=Racket)
![Ragel](http://www.placehold.it/150/9d5200/ffffff?text=Ragel)
![Rascal](http://www.placehold.it/150/fffaa0/ffffff?text=Rascal)
![Rebol](http://www.placehold.it/150/358a5b/ffffff?text=Rebol)
![Red](http://www.placehold.it/150/f50000/ffffff?text=Red)
![Ren'Py](http://www.placehold.it/150/ff7f7f/ffffff?text=Ren'Py)
![Ring](http://www.placehold.it/150/0e60e3/ffffff?text=Ring)
![Roff](http://www.placehold.it/150/ecdebe/ffffff?text=Roff)
![Rouge](http://www.placehold.it/150/cc0088/ffffff?text=Rouge)
![Ruby](http://www.placehold.it/150/701516/ffffff?text=Ruby)
![Rust](http://www.placehold.it/150/dea584/ffffff?text=Rust)
![SAS](http://www.placehold.it/150/B34936/ffffff?text=SAS)
![SQF](http://www.placehold.it/150/3F3F3F/ffffff?text=SQF)
![SRecode Template](http://www.placehold.it/150/348a34/ffffff?text=SRecode%20Template)
![SaltStack](http://www.placehold.it/150/646464/ffffff?text=SaltStack)
![Scala](http://www.placehold.it/150/c22d40/ffffff?text=Scala)
![Scheme](http://www.placehold.it/150/1e4aec/ffffff?text=Scheme)
![Self](http://www.placehold.it/150/0579aa/ffffff?text=Self)
![Shell](http://www.placehold.it/150/89e051/ffffff?text=Shell)
![Shen](http://www.placehold.it/150/120F14/ffffff?text=Shen)
![Slash](http://www.placehold.it/150/007eff/ffffff?text=Slash)
![Smalltalk](http://www.placehold.it/150/596706/ffffff?text=Smalltalk)
![SourcePawn](http://www.placehold.it/150/5c7611/ffffff?text=SourcePawn)
![Squirrel](http://www.placehold.it/150/800000/ffffff?text=Squirrel)
![Stan](http://www.placehold.it/150/b2011d/ffffff?text=Stan)
![Standard ML](http://www.placehold.it/150/dc566d/ffffff?text=Standard%20ML)
![SuperCollider](http://www.placehold.it/150/46390b/ffffff?text=SuperCollider)
![Swift](http://www.placehold.it/150/ffac45/ffffff?text=Swift)
![SystemVerilog](http://www.placehold.it/150/DAE1C2/ffffff?text=SystemVerilog)
![TI Program](http://www.placehold.it/150/A0AA87/ffffff?text=TI%20Program)
![Tcl](http://www.placehold.it/150/e4cc98/ffffff?text=Tcl)
![TeX](http://www.placehold.it/150/3D6117/ffffff?text=TeX)
![Terra](http://www.placehold.it/150/00004c/ffffff?text=Terra)
![Turing](http://www.placehold.it/150/cf142b/ffffff?text=Turing)
![TypeScript](http://www.placehold.it/150/2b7489/ffffff?text=TypeScript)
![UnrealScript](http://www.placehold.it/150/a54c4d/ffffff?text=UnrealScript)
![VCL](http://www.placehold.it/150/0298c3/ffffff?text=VCL)
![VHDL](http://www.placehold.it/150/adb2cb/ffffff?text=VHDL)
![Vala](http://www.placehold.it/150/fbe5cd/ffffff?text=Vala)
![Verilog](http://www.placehold.it/150/b2b7f8/ffffff?text=Verilog)
![Vim script](http://www.placehold.it/150/199f4b/ffffff?text=Vim%20script)
![Visual Basic](http://www.placehold.it/150/945db7/ffffff?text=Visual%20Basic)
![Volt](http://www.placehold.it/150/1F1F1F/ffffff?text=Volt)
![Vue](http://www.placehold.it/150/2c3e50/ffffff?text=Vue)
![WebAssembly](http://www.placehold.it/150/04133b/ffffff?text=WebAssembly)
![X10](http://www.placehold.it/150/4B6BEF/ffffff?text=X10)
![XC](http://www.placehold.it/150/99DA07/ffffff?text=XC)
![XQuery](http://www.placehold.it/150/5232e7/ffffff?text=XQuery)
![XSLT](http://www.placehold.it/150/EB8CEB/ffffff?text=XSLT)
![Yacc](http://www.placehold.it/150/4B6C4B/ffffff?text=Yacc)
![Zephir](http://www.placehold.it/150/118f9e/ffffff?text=Zephir)
![eC](http://www.placehold.it/150/913960/ffffff?text=eC)
![nesC](http://www.placehold.it/150/94B0C7/ffffff?text=nesC)
![ooc](http://www.placehold.it/150/b0b77e/ffffff?text=ooc)
![wdl](http://www.placehold.it/150/42f1f4/ffffff?text=wdl)
![wisp](http://www.placehold.it/150/7582D1/ffffff?text=wisp)
![xBase](http://www.placehold.it/150/403a40/ffffff?text=xBase)
