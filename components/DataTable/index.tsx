"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TableRowSkeleton } from "@/components/skeletons/UsersSkeleton";
import React from "react";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
}

interface PaginationProps {
  page: number;
  totalPages: number;
  limit: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  pagination?: PaginationProps;
  actions?: (row: T) => React.ReactNode;
  noOfLoadingRows?: number;
}

export function DataTable<T extends { id: string | number }>({
  columns,
  data,
  loading,
  pagination,
  actions,
  noOfLoadingRows = 5
}: DataTableProps<T>) {
  return (
    <div className="p-4 border rounded-md">
      <div className="rounded-md border overflow-hidden">
        <Table className="table-fixed w-full">
          <TableHeader className="bg-muted">
            <TableRow>
              {columns.map(col => (
                <TableHead
                  key={String(col.key)}
                  className="text-sm font-semibold text-foreground px-4"
                  style={{ width: `${100 / (columns.length + (actions ? 1 : 0))}%` }}
                >
                  {col.header}
                </TableHead>
              ))}
              {actions && (
                <TableHead
                  className="text-sm font-semibold text-foreground px-4"
                  style={{ width: `${100 / (columns.length + 1)}%` }}
                >
                  Actions
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: noOfLoadingRows }).map((_, i) => <TableRowSkeleton key={i} />)
            ) : data.length > 0 ? (
              data.map(row => (
                <TableRow key={row.id}>
                  {columns.map(col => (
                    <TableCell
                      key={String(col.key)}
                      className="text-base py-3 truncate px-4"
                      style={{ width: `${100 / (columns.length + (actions ? 1 : 0))}%` }}
                    >
                      {col.render ? col.render(row) : (row as any)[col.key]}
                    </TableCell>
                  ))}
                  {actions && (
                    <TableCell className="text-base py-3 truncate px-4" style={{ width: `${100 / (columns.length + 1)}%` }}>
                      {actions(row)}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (actions ? 1 : 0)}
                  className="text-center text-sm py-6 text-muted-foreground px-4"
                >
                  No data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {pagination && (
        <div className="flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium whitespace-nowrap">Rows per page</p>
            <Select value={`${pagination.limit}`} onValueChange={value => pagination.onLimitChange(Number(value))}>
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={pagination.limit} />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map(size => (
                  <SelectItem key={size} value={`${size}`}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => pagination.onPageChange(Math.max(pagination.page - 1, 1))}
                  disabled={pagination.page === 1}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={() => pagination.onPageChange(Math.min(pagination.page + 1, pagination.totalPages))}
                  disabled={pagination.page === pagination.totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
