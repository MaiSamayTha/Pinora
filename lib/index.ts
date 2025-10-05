export function cn(...classes: Array<string | false | null | undefined>) {
  return classes
    .filter((value): value is string => typeof value === 'string' && value.trim().length > 0)
    .join(' ')
}
