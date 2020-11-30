/**
 * Record
 */
export const myRecord: Record<string, string> = {
    a: "a",
    b: "b",
  };
  
  export const myRecord2: Record<string, string> = {
    // @ts-expect-error
    a: 1,
    b: "b",
  };
  
  export const myRecord3: Record<"b" | "c", string> = {
    // @ts-expect-error
    a: 1,
    b: "b",
  };

  type numberReadonlyArray = Array<number>

  const myMap = new Map<{a: string, b: string}, string>();

  const x = {a: "", b: ""};

  myMap.set(x, "");
  myMap.get(x);

  /**
 * Set
 */
export const mySet = new Set(["a", "b"]);