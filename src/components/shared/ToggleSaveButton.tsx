// components
import { BookmarkIcon, BookmarkFilledIcon } from "./icons";

// 3rd party
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function IconButton({ children, label }: BookmarkIconButtonProps) {
  return (
    <button
      type="submit"
      aria-label={label}
      title={label}
      className="flex items-center justify-center rounded-full h-8 w-8 hover:bg-dark dark:hover:bg-light"
    >
      {children}
    </button>
  );
}

export default function ToggleSaveButton({
  isSaved,
  pending,
}: ToggleSaveButtonProps) {
  if (pending) {
    return (
      <IconButton label="Saving job">
        <AiOutlineLoading3Quarters
          className="h-4 w-4 animate-spin text-primary"
          aria-hidden="true"
        />
      </IconButton>
    );
  }

  return (
    <IconButton label={isSaved ? "Remove job from saved" : "Save job"}>
      {isSaved ? (
        <BookmarkFilledIcon
          className="h-4 w-4 text-primary"
          aria-hidden="true"
        />
      ) : (
        <BookmarkIcon className="h-4 w-4 text-primary" aria-hidden="true" />
      )}
    </IconButton>
  );
}
