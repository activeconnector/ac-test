const proc = Deno.run({
  cmd: ["deno", "task", "dev"],
});

await proc.status();
proc.close();
Deno.exit(0);
