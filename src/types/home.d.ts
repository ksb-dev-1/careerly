interface FloatingIconProps {
  Icon: IconType;
  size?: number;
  className?: string;
  containerRef: React.RefObject<HTMLDivElement>;
  speed?: number;
}

interface FAQ {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}
