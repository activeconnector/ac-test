const proc = Deno.run({
  cmd: ["deno", "task", "dev"],
});

proc.close();
Deno.exit(0);
