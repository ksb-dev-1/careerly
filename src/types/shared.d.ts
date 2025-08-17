interface WarningCardProps {
  message: string;
  className?: string;
}

interface BookmarkIconButtonProps {
  children: React.ReactNode;
  label: string;
}

interface ToggleSaveButtonProps {
  isSaved: boolean;
  pending: boolean;
}

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  maxWidth?: string;
}

interface JobCardProps {
  job: JobWithSavedStatusAndApplicationStatus;
  link?: string;
  pointerEventsClass?: string;
}

interface IconProps {
  size?: number;
  className?: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}
