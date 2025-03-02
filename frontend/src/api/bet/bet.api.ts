import type { CreateBetDto } from "@/api/bet/dto/create-bet.dto";
import httpClient from "@/api/http-client";

export function createBet(createBetDto: CreateBetDto) {
  return httpClient.post("http://api.beny.localhost/bet", createBetDto);
}
