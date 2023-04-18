import { useTable } from "react-table"
import React from "react"

const data = [
  {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  },
  {
    name: "Jane Doe",
    age: 25,
    email: "jane.doe@example.com",
  },
]

const handleEdit = (row) => {
  console.log(`Editing row ${row.index}`)
}

const handleDelete = (row) => {
  console.log(`Deleting row ${row.index}`)
}

const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Actions",
    accessor: "actions",
    Cell: ({ row }) => (
      <>
        <button variant="primary" size="sm" onClick={() => handleEdit(row)}>
          Edit
        </button>{" "}
        <button variant="danger" size="sm" onClick={() => handleDelete(row)}>
          Delete
        </button>
      </>
    ),
  },
]

export const Table = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <table {...getTableProps()} className="table table-striped">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
