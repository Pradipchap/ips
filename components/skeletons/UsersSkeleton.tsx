import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCw, Users } from "lucide-react";

// Skeleton Components
const UserCardSkeleton = () => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[70%]" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <Skeleton className="h-6 w-[60px]" />
        <Skeleton className="h-8 w-[80px]" />
      </div>
    </CardContent>
  </Card>
);

export const TableRowSkeleton = () => (
  <TableRow className="h-[56px]">
    {" "}
    {/* Match data row height */}
    {/* ID */}
    <TableCell className="py-3 text-base">
      <Skeleton className="h-5 w-12" /> {/* Similar to short number */}
    </TableCell>
    {/* Username */}
    <TableCell className="py-3 text-base">
      <Skeleton className="h-5 w-[140px]" /> {/* Average username length */}
    </TableCell>
    {/* Full Name */}
    <TableCell className="py-3 text-base">
      <Skeleton className="h-5 w-[180px]" />
    </TableCell>
    {/* Email */}
    <TableCell className="py-3 text-base">
      <Skeleton className="h-5 w-[220px]" />
    </TableCell>
    {/* Actions */}
    <TableCell className="py-3 text-base">
      <Skeleton className="h-8 w-[80px] rounded-md" />
    </TableCell>
  </TableRow>
);
