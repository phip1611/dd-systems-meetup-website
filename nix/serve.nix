{ lib, httplz, writeShellScriptBin }:

let
  src = ../public;
in
writeShellScriptBin "serve" ''
  ${lib.getExe httplz} ${src}
''

