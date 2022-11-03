import { XMarkIcon } from '@heroicons/react/20/solid';

export const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 10000);
  }

  let bgColor = alert.type === 'success' ? 'green-100' : 'red-200';
  let textColor = alert.type === 'success' ? 'green-600' : 'red-700';

  return (
    <>
      {alert?.active && (
        <div x-data className={`bg-${bgColor} p-5 w-full rounded mb-8`}>
          <div className="flex space-x-3">
            <div className={`flex-1 leading-tight text-sm text-${textColor} font-medium`}>{alert.message}</div>
            <button type="button">
              <XMarkIcon className="w-6 h-6 text-gray-600" onClick={() => handleClose()} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
