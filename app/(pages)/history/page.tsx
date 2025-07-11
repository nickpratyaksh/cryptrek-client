"use client";

import { useEffect, useState } from "react";
import { DataTable } from "./CoinsTable/data-table";
import { columns } from "./CoinsTable/columns";
import { Coin } from "@/lib/types";
import axios from "axios";
import { ThreeDot } from "react-loading-indicators";

export default function HistoryPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Coin[]>([]);
  async function getData() {
    try {
      setLoading(true);
      const res = await axios.get("/api/history");
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  if (loading)
    return (
      <div className="p-10 flex flex-col items-center justify-center h-full">
        <ThreeDot
          variant="pulsate"
          color="#000000"
          size="small"
          text=""
          textColor=""
        />
      </div>
    );

  return (
    <div className="container mx-auto p-10 flex flex-col gap-4">
      <div className="text-xl font-semibold">Price History</div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
