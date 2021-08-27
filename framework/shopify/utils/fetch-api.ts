import { ApiFetcherOptions, ApiFetcherResult } from "@common/types/api";

const fetchApi = async <T>({ url, query }: ApiFetcherOptions): Promise<ApiFetcherResult<T>> => {

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query
    })
  })

  const {data, erros} = await res.json()
  
  if (erros) {
    throw new Error(erros[0].message ?? erros.message)
  }

  return { data }
}

export default fetchApi;