import React from 'react';

interface PricingTableProps {
}

const PricingTable: React.FC<PricingTableProps> = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Service
            </th>
            <th className="py-3 px-6 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 px-6 border-b border-gray-300">Photography</td>
            <td className="py-4 px-6 border-b border-gray-300">£500</td>
          </tr>
          <tr>
            <td className="py-4 px-6 border-b border-gray-300">Videography</td>
            <td className="py-4 px-6 border-b border-gray-300">£700</td>
          </tr>
          <tr>
            <td className="py-4 px-6 border-b border-gray-300">Content Creation</td>
            <td className="py-4 px-6 border-b border-gray-300">£400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
