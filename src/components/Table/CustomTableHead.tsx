import React from 'react';
import type { MouseEvent } from 'react';
import { Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import {
  StyledTableCell,
  StyledTableRow,
  StyledTableSortLabel,
} from './styles';
import { CustomTableHeadProps, Product } from '../../types/table';

export const CustomTableHead = (props: CustomTableHeadProps) => {
  const { headCells, order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Product) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <StyledTableRow>
      {headCells.map((headCell) => (
        <StyledTableCell
          key={headCell.id}
          align={'center'}
          sortDirection={orderBy === headCell.id ? order : false}
        >
          <StyledTableSortLabel
            active={orderBy === headCell.id}
            direction={orderBy === headCell.id ? order : 'asc'}
            onClick={createSortHandler(headCell.id)}
          >
            {headCell.label}
            {orderBy === headCell.id && (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            )}
          </StyledTableSortLabel>
        </StyledTableCell>
      ))}
    </StyledTableRow>
  );
};
