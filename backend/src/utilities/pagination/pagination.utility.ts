import { QueryPaginationDto } from '@/utilities/pagination/dto/pagination.dto';
import { NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_SIZE = 10;

class PaginateMeta {
  @ApiProperty()
  total: number;
  @ApiProperty()
  lastPage: number;
  @ApiProperty()
  currentPage: number;
  @ApiProperty()
  totalPerPage: number;
  @ApiProperty()
  prevPage: number | null;
  @ApiProperty()
  nextPage: number | null;
}

export class PaginateOutput<T> {
  @ApiProperty()
  data: T[];
  @ApiProperty()
  @Type(() => PaginateMeta)
  meta: PaginateMeta;
}

export function paginate(query?: QueryPaginationDto): {
  skip: number;
  take: number;
} {
  const size = query?.size ? Math.abs(query.size) : DEFAULT_PAGE_SIZE;
  const page = query?.page ? Math.abs(query.page) : DEFAULT_PAGE_NUMBER;

  return {
    skip: size * (page - 1),
    take: size,
  };
}

export function paginateOutput<T>(
  data: T[],
  total: number,
  query?: QueryPaginationDto,
): PaginateOutput<T> {
  const size = query?.size ? Math.abs(query.size) : DEFAULT_PAGE_SIZE;
  const page = query?.page ? Math.abs(query.page) : DEFAULT_PAGE_NUMBER;

  const lastPage = Math.ceil(total / size);

  if (data.length) {
    return {
      data,
      meta: {
        total,
        lastPage,
        currentPage: page,
        totalPerPage: size,
        prevPage: page > 1 ? page - 1 : null,
        nextPage: page < lastPage ? page + 1 : null,
      },
    };
  }

  if (page > lastPage) {
    throw new NotFoundException(
      `Page ${page} not found. Last page is ${lastPage}`,
    );
  }

  return {
    data,
    meta: {
      total,
      lastPage,
      currentPage: page,
      totalPerPage: size,
      prevPage: null,
      nextPage: null,
    },
  };
}
