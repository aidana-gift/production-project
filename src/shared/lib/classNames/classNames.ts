// Record is a type where you can specify
// key-value types without actually specifying the fields
// so, key-values can be anything but only of type string-boolean|string

type Mods = Record<string, boolean | string>
export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    return [
      cls,
      ...additional.filter(Boolean),
      Object.entries(mods) //returns array with fixed key-value
        .filter(([className, val]) => Boolean(val))
        .map(([className]) => className)
    ]
      .join(' ');
}