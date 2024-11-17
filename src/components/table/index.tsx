/* eslint-disable */
import { ArrowUpDown, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import CheckboxComponent from "@/components/checkbox";
import PaginationComponent from "@/components/pagination";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface TableHeader {
  key: string;
  label: string;
  sortable?: boolean;
  hidden?: boolean;
  isCheckbox?: boolean;
}


interface TableComponentProps {
  headers: TableHeader[];
  data: Record<string, any>[];
  caption?: string;
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
}

export default function TableComponent({
  headers,
  data,
  caption,
  pagination
}: TableComponentProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc' | null;
  }>({ key: '', direction: null });

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' | null = 'asc';

    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') direction = 'desc';
      else if (sortConfig.direction === 'desc') direction = null;
    }

    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.direction || !sortConfig.key) return 0;

    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleCheckAll = () => {
    if (selectedItems.length === data.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data.map((_, index) => index.toString()));
    }
  };

  const handleCheckItem = (index: string) => {
    setSelectedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <div className="flex flex-col gap-4 border rounded-md">
        <Table className="">
          <TableHeader>
            <TableRow>
              {headers.map((header) => {
                if (header.isCheckbox) {
                  return (
                    <TableHead key={header.key} className="w-[50px]">
                      <Checkbox
                        checked={selectedItems.length === data.length}
                        onCheckedChange={handleCheckAll}
                      />
                    </TableHead>
                  );
                }

                return (
                  <TableHead
                    key={header.key}
                    className={cn(
                      header.sortable && "cursor-pointer"
                    )}
                    onClick={() => header.sortable && handleSort(header.key)}
                  >
                    <div className="flex items-center gap-2">
                      {header.label}
                      {header.sortable && (
                        <>
                          {sortConfig.key === header.key ? (
                            sortConfig.direction === 'asc' ? (
                              <ChevronUp size={16} />
                            ) : sortConfig.direction === 'desc' ? (
                              <ChevronDown size={16} />
                            ) : (
                              <ArrowUpDown size={16} className="text-gray-400" />
                            )
                          ) : (
                            <ArrowUpDown size={16} className="text-gray-400" />
                          )}
                        </>
                      )}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody className="border-b">
            {sortedData.map((row, index) => (
              <TableRow key={index}>
                {headers.map((header) => {
                  if (header.isCheckbox) {
                    return (
                      <TableCell key={`checkbox-${index}`}>
                        <CheckboxComponent
                          checked={selectedItems.includes(index.toString())}
                          onCheckedChange={() => handleCheckItem(index.toString())}
                        />
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={`${index}-${header.key}`}>
                      {header.key === 'actions' ? row[header.key] : row[header.key]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
          {caption && <TableCaption>{caption}</TableCaption>}
        </Table>
      </div>
      {pagination && (
        <PaginationComponent pagination={pagination} />
      )}
    </>
  );
}