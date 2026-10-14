
import React, { useContext } from 'react';
import { AppContext } from '../context/Appcontext';

export const Pagination = () => {
  const { page, totalPage, changePage } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full
                    border-t border-gray-200 bg-white
                    shadow-sm flex items-center justify-around p-4">

      <div className="flex items-center gap-3">
        {page > 1 && (
          <button
            onClick={() => changePage(page - 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 transition duration-200"
          >
            Previous
          </button>
        )}

        {page < totalPage && (
          <button
            onClick={() => changePage(page + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 transition duration-200"
          >
            Next
          </button>
        )}
      </div>

      <p className="text-sm font-medium text-gray-600">
        Page <span className="text-blue-600 font-bold">{page}</span> of {totalPage}
      </p>

    </div>
  );
};