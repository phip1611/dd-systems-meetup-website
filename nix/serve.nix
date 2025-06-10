{
  lib,
  live-server,
  writeShellScriptBin,
}:

writeShellScriptBin "serve" ''
  ${lib.getExe live-server} ./public --open --index
''
