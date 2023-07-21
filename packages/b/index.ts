import { isEven } from 'monorepo-pkg-a';

export const isOdd = (x: number) => !isEven(x);
