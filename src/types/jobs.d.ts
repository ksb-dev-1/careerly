interface JobFilterValues {
  page: string;
  jobType?: string;
  location?: string;
  jobMode?: string;
  search?: string;
}

interface JobsPageProps {
  searchParams: JobFilterValues;
}

interface ApplyFiltersButtonProps {
  disabled: boolean;
  onClick: () => void;
  className?: string;
}

interface FilterContentProps {
  activeTab: string;
  jobType: string[];
  setJobType: Dispatch<SetStateAction<string[]>>;
  jobMode: string[];
  setJobMode: Dispatch<SetStateAction<string[]>>;
  location: string[];
  setLocation: Dispatch<SetStateAction<string[]>>;
}

interface FilterModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface FiltersProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface FilterTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  counts: { jobType: number; jobMode: number; location: number };
}

interface MultiSelectFilterProps {
  placeholder: string;
  options: string[];
  value: string[];
  icon?: React.ReactNode;
  onChange: (val: string[]) => void;
  widthClass?: string;
}

interface ActiveFiltersProps {
  search?: string;
  location?: string;
  jobType?: string;
  jobMode?: string;
  matchedValues: {
    location: Set<string>;
    jobType: Set<string>;
    jobMode: Set<string>;
  };
}

interface FilterTagProps {
  label: string;
  onRemove?: () => void;
  className?: string;
  title?: string;
}

interface AppliedJobListProps {
  userId: string;
}

interface JobListProps {
  jobs: JobWithSavedStatusAndApplicationStatus[];
  hasActiveFilters: boolean;
}

interface JobSearchInputProps {
  name: string | null | undefined;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

interface SavedJobListProps {
  userId: string;
}
