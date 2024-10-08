"use client";
import React, {
  Children,
  ComponentPropsWithoutRef,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useRef,
} from "react";
import {
  motion,
  MotionConfigProps,
  MotionProps,
  MotionStyle,
  motionValue,
  useInView,
  UseInViewOptions,
} from "framer-motion";

type AnimationOptions = {
  margin?: UseInViewOptions["margin"];
  staggerDelay?: number;
  offsetDelay?: number;
};

const Animate = ({
  children,
  hidden,
  visible,
  stagger = false,
  className,
  childClassNames,
  options,
  ...props
}: {
  children: ReactNode;
  hidden: MotionStyle;
  visible: MotionStyle;
  stagger?: boolean;
  options?: AnimationOptions;
  className?: string;
  childClassNames?: string;
} & MotionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: options?.margin,
  });
  const initialStyles = Object.fromEntries(
    Object.entries(hidden).map(([key, value]) => {
      return [key, isInView ? visible[key as keyof MotionStyle] : value];
    })
  );

  return (
    <motion.div {...props} className={className} ref={ref}>
      {Children.toArray(children).map((child, i) => {
        return (
          <motion.div
            style={{
              ...initialStyles,
              transition: "all 1s ",
              ...(stagger && {
                transitionDelay: motionValue(
                  `${i * (options?.staggerDelay || 0.2) + 0.2}s`
                ),
              }),
            }}
            key={i}
            className={childClassNames}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Animate;
