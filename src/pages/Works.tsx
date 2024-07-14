import PageTable from "../components/PageTable";
import { GridColDef } from "@mui/x-data-grid";
import { ImageInstance } from "./Images";
import { Event } from "./Events";

export type Work = {
  _id: string;
  title: string;
  medium?: string[];
  year?: number;
  events?: Event[];
  images?: ImageInstance[];
  tags?: string[];
  public?: boolean;
  modified?: Date;
};

export default function Works() {
  const workColumns: GridColDef[] = [
    { field: "title", headerName: "Title", flex: 1, editable: true },
    { field: "medium", headerName: "Medium", flex: 1, editable: true },
    {
      field: "year",
      headerName: "Year",
      editable: true,
      type: "number",
      valueFormatter: (value) => value && value,
    },
    {
      field: "public",
      headerName: "Public",
      editable: true,
      type: "boolean",
    },
  ];

  return (
    <>
      <PageTable<Work> columns={workColumns} />
    </>
  );
}