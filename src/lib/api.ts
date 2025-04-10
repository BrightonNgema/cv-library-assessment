import { LocationType } from "@/types/location.type";

export async function fetchLocations(query: string): Promise<LocationType[]> {
  const url = new URL("https://api.cv-library.co.uk/v1/locations");
  if (query && query.length >= 2) {
    url.searchParams.set("q", query);
  }
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch locations");

  return res.json();
}