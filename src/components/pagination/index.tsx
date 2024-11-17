import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

export default function PaginationComponent({ pagination }: {
  pagination: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
}) {
  const { currentPage, totalPages, onPageChange } = pagination;

  const formatPageNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <Pagination className="flex items-center justify-end mt-5">
      <PaginationContent className="flex items-center gap-8">
        <div className="flex items-center">
          <span className="text-sm">
            {formatPageNumber(currentPage)} de {formatPageNumber(totalPages)}
          </span>
        </div>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(currentPage - 1)}
            className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(currentPage + 1)}
            className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
} 