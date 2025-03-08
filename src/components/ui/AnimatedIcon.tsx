import { motion } from 'framer-motion';
import { Shield, Lock, Search, Code, Bug as BugIcon } from 'lucide-react';

interface AnimatedIconProps {
  iconType: 'Shield' | 'Lock' | 'Search' | 'Code' | 'BugIcon';
  positionClassName: string;
  colorClassName: string;
  hoverScale?: number;
  floatAnimation: {
    x?: string[] | number[];
    y?: string[] | number[];
    rotate?: number[];
    scale?: number[];
  };
  duration?: number;
  delay?: number;
}

const AnimatedIcon = ({
  iconType,
  positionClassName,
  colorClassName,
  hoverScale = 1.1,
  floatAnimation,
  duration = 3,
  delay = 0,
}: AnimatedIconProps): React.JSX.Element => {
  // Map component names to actual components
  const IconComponent = {
    Shield,
    Lock,
    Search,
    Code,
    BugIcon,
  }[iconType];

  return (
    <motion.div
      className={`${positionClassName} bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg`}
      whileHover={{ scale: hoverScale }}
      animate={floatAnimation}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay,
      }}
    >
      <IconComponent className={`h-6 w-6 ${colorClassName}`} />
    </motion.div>
  );
};

export default AnimatedIcon;
