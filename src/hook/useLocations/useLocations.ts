"use client";

import { fetchLocations } from "@/lib/api";
import { LocationType } from "@/types/location.type";
import { useState } from "react";

export const useLocations = () => {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getLocations = (query:string) => {
    setLoading(true);
    fetchLocations(query)
      .then((data) => setLocations(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  return { locations, loading, error, getLocations};
}