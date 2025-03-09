import type { CreateBetDto } from "@/api/bet/dto/create-bet.dto";
import httpClient from "@/api/http-client";

export function createBetApi(createBetDto: CreateBetDto) {
  return httpClient.post("http://api.beny.localhost/bet", createBetDto);
}

export function findAllOfBetsByPaginate(page?: number, size?: number) {
  return httpClient.get("http://api.beny.localhost/bet/paginate", {
    params: {
      page,
      size,
    },
  });
}
