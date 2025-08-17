export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return <p className="text-red-600 dark:text-red-400 mt-2">{message}</p>;
}
