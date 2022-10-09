import { ReactNode } from 'react';

export type Nullable<T> = T | null;
export interface HasReactNode {
    children?: ReactNode;
}
