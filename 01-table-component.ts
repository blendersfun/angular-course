export type ValidatorFunction = (value: string) => boolean; 

export interface RowData {
    [name: string]: any
}

export interface ColumnConfig {
    name: string,
    validators?: ValidatorFunction[]
}

export interface TableConfig {
    cols: ColumnConfig[],
    data: RowData[]
}

export class TableComponent {
    constructor(public config: TableConfig) {}
}
