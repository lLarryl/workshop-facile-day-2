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