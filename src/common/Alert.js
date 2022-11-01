import { XMarkIcon } from '@heroicons/react/20/solid';

export const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 10000);
  }

  const color = alert.type === 'success' ? 'green' : 'red';

  return (
    <>
      {alert?.active && (
        <div x-data className={`bg-${color}-100 p-5 w-full rounded mb-8`}>
          <div className="flex space-x-3">
            <div className={`flex-1 leading-tight text-sm text-${color}-700 font-medium`}>{alert.message}</div>
            <button type="button">
              <XMarkIcon className="w-6 h-6 text-gray-600" onClick={() => handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
