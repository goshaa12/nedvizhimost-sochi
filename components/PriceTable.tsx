import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export interface PriceTableRow {
  class: string;
  layout: string;
  area: string;
  price: string;
}

export interface PriceTableProps {
  title?: string;
  description?: string;
  data: PriceTableRow[];
}

export function PriceTable({
  title = 'Сравните стоимость квартиры в Сочи',
  description,
  data,
}: PriceTableProps) {
  // Группируем данные по классу
  const groupedData = data.reduce((acc, row) => {
    if (!acc[row.class]) {
      acc[row.class] = [];
    }
    acc[row.class].push(row);
    return acc;
  }, {} as Record<string, PriceTableRow[]>);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
          
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg min-w-[600px]">
              <Table>
                <TableHeader>
                  <TableRow className="bg-emerald-50">
                    <TableHead className="text-sm md:text-base font-semibold text-gray-900">Класс квартир</TableHead>
                    <TableHead className="text-sm md:text-base font-semibold text-gray-900">Планировка квартир</TableHead>
                    <TableHead className="text-sm md:text-base font-semibold text-gray-900">Площадь (м²)</TableHead>
                    <TableHead className="text-sm md:text-base font-semibold text-gray-900">Диапазон цен на квартиры в рублях</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(groupedData).map(([className, rows], classIndex) =>
                    rows.map((row, rowIndex) => (
                      <TableRow
                        key={`${classIndex}-${rowIndex}`}
                        className={rowIndex === 0 ? 'border-t-2 border-emerald-200' : ''}
                      >
                        {rowIndex === 0 ? (
                          <TableCell
                            rowSpan={rows.length}
                            className="p-4 md:p-6 border-r border-gray-200 text-sm md:text-base font-semibold text-gray-900 align-top"
                          >
                            {row.class}
                          </TableCell>
                        ) : null}
                        <TableCell className="p-4 md:p-6 border-r border-gray-200 text-xs md:text-sm text-gray-700">
                          {row.layout}
                        </TableCell>
                        <TableCell className="p-4 md:p-6 border-r border-gray-200 text-xs md:text-sm text-gray-700">
                          {row.area}
                        </TableCell>
                        <TableCell className="p-4 md:p-6 text-xs md:text-sm font-medium text-emerald-900">
                          {row.price}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

