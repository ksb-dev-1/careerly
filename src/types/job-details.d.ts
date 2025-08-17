interface BackButtonProps {
  onClick: () => void;
}

interface ErrorMessageProps {
  message: string | null;
}

interface ResumeDropzoneProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPending: boolean;
  fileName: string;
}

interface UploadResumeProps {
  isResumeUploaded: boolean;
  setShowUploadResume: (show: boolean) => void;
  userId?: string;
  refetch: () => void;
  setResumeUrl: (url?: string) => void;
}

interface UploadResumeButtonProps {
  onClick: () => void;
  disabled: boolean;
  isPending: boolean;
  className?: string;
}

interface ApplyForJobButtonProps {
  onClick: () => void;
  disabled: boolean;
  isPending: boolean;
  className?: string;
}

interface ApplyForJobModalProps {
  userId: string;
  jobId: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface ApplyForJobProps {
  userId: string;
  jobId: string;
  applicationStatus: ApplicationStatus | null;
  updatedAt: Date;
}

interface JobDetailsProps {
  params: {
    job_id: string;
  };
  userId: string;
}

interface ResumeActionsProps {
  userId: string | undefined;
  jobId: string;
  resumeUrl?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setShowUploadResume: (show: boolean) => void;
}

interface ResumeMissingPromptProps {
  setShowUploadResume: (show: boolean) => void;
}
