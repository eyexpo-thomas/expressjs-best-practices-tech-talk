const sortNumber = (a: number, b: number) => b - a;

const sortWord = (a: string, b: string) => a.localeCompare(b);

export { sortNumber, sortWord };
