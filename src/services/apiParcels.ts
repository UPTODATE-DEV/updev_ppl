export interface ArticleType {
  id: number;
  title: string;
  description: string;
  image: string;
}

export async function getParcels(signal: AbortSignal): Promise<ArticleType[]> {
  const response = await fetch("https://fakestoreapi.com/products", {
    signal: signal,
  });
  const data = await response.json();

  return data;
}
