"use client";

import { useGetUsers } from "@/apis/queries";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function UsersPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading, isError } = useGetUsers({ page, limit });

  if (isError) return <div>Error loading users.</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users Management</h1>
      <DataTable
        columns={[
          { key: "id", header: "ID" },
          { key: "username", header: "Username" },
          {
            key: "full_name",
            header: "Full Name",
            render: (row: any) => `${row.first_name} ${row.last_name}`
          },
          { key: "email", header: "Email" }
        ]}
        data={data?.results || []}
        loading={isLoading}
        pagination={{
          page,
          totalPages: data?.total_pages || 1,
          limit,
          onPageChange: setPage,
          onLimitChange: val => {
            setLimit(val);
            setPage(1);
          }
        }}
        actions={row => (
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              Edit
            </Button>
            <Button size="sm" variant="destructive">
              Delete
            </Button>
          </div>
        )}
      />
    </div>
  );
}
