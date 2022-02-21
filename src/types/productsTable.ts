export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  published: boolean;
  createdAt:string;
}

export interface ProductsRowProps {
  product: Product;
  key: number;
}

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}
export interface HeadCell {
  id: keyof Product;
  numeric: boolean;
  label: string;
}
export interface ProductsTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Product
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: HeadCell[];
}

export interface ProductsTableProps {
  data: Product[];
  headCells: HeadCell[];
  disablePagination?: boolean;
}

export type Order = 'asc' | 'desc';
