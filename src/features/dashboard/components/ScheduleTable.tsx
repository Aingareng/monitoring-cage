import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Logs, Trash2, SquarePen } from "lucide-react";

export default function ScheduleTable() {
  return (
    <Table>
      <TableCaption>Kase makan ayam jang mati</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Jam</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">17.00</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="float-right">
                <Logs />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-max">
                <DropdownMenuItem>
                  <SquarePen />
                  Ubah
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash2 className="text-red-500" />
                  Hapus
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">06.00</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="float-right">
                <Logs />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-max">
                <DropdownMenuItem>
                  <SquarePen />
                  Ubah
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash2 className="text-red-500" />
                  Hapus
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
