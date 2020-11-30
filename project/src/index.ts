const a: object = {
    a: "",
    b: 1
}

const b: object = {
    c: ""
}

const c: object = {...a, ...b};

const r: Readonly<Record<"a" | "b", number>> = {
    a: 0,
    b: 1
}

type numberReadonlyArray = Readonly<Array<number>>

r["a"] = 2