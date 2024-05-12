import useEncounters from "../hooks/useEncounters";
import React from "react";

export default function Home() {
  const { isLoading, data: encounters } = useEncounters(4529, 4530);
  if (isLoading) return <div>Loading...</div>;
  if (!encounters) return null;
  return <h1 className="text-3xl font-bold underline">{encounters[0].id}</h1>;
}
