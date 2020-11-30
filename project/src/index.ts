interface ConsoleService {
    ConsoleService: {
        log: (message: string) => void
    }
}

interface MathService {
    MathService: {
        add: (x: number, y: number) => number;
    }
}

function add3(C: MathService)
{
    return (x: number) => C.MathService.add(x, 3);
}

function AddAndPrint3(C: ConsoleService & MathService) {
    const add3_ = add3(C);
    return () => {
        C.ConsoleService.log(`log: ${add3_(10)}`)
    }
}

AddAndPrint3({
    MathService: {
        add: (x, y) => x + y
    },
    ConsoleService: {
        log: (x) => {
            console.log(x);
        }
    }
})