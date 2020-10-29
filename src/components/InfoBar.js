import { Icon } from '.';

export default function InfoBar({ children, type = 'info' }) {
  let IconType, color;

  switch (type) {
    default:
    case 'info':
      IconType = Icon.InformationCircle;
      color = 'blue';
      break;
    case 'warning':
      IconType = Icon.Exclamation;
      color = 'yellow';
      break;
    case 'success':
      IconType = Icon.CheckCircle;
      color = 'green';
      break;
    case 'error':
      IconType = Icon.XCircle;
      color = 'red';
      break;
  }

  return (
    <div className={`rounded-md bg-${color}-50 p-4`}>
      <div className="flex justify-center">
        <div className="flex-shrink-0">
          <IconType size={20} className={`text-${color}-400`} />
        </div>
        <div className="ml-3">
          <p className={`text-sm leading-5 text-${color}-700`}>{children}</p>
        </div>
      </div>
    </div>
  );
}
