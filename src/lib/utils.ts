/**
 * Tiny class-name joiner — filters out falsy values so we can write
 * conditional classes without pulling in an extra dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
