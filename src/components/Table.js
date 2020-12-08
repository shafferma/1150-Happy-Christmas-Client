import React from "react";
import { Table } from 'reactstrap';

function TableStandard(props, context) {

  const ActionsComponent = props.actionsComponent || null

  function getCellValue(row, column) {

    if (column.format) {
      return (column.format(row[column.field]))
    }

    return (row[column.field])
  }

  return (
    <Table className="Table">
      <thead>
        <tr>
          {props?.columns?.map((column, index) => <th key={`ut-col-${index}`}>{column.label}</th>)}
          {props?.actionsComponent ? (<th></th>) : null }
        </tr>
      </thead>
      <tbody>
          {props?.rows?.map((row, rowIndex) => {

            return (
              <tr key={`ut-row-${rowIndex}`}>
                {
                  props?.columns?.map((column, colIndex) => {
                    return (
                      <td key={`ut-${rowIndex}-${colIndex}`}>
                        { getCellValue(row, column) }
                      </td>
                    )
                  })
                }
                {props?.actionsComponent ? (
                  <td>
                    <ActionsComponent item={row} />
                  </td>
                ) : null }
              </tr>
            )
          })}
      </tbody>
    </Table>
  );
}

export default TableStandard;
