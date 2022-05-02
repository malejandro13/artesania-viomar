import { TypographyElements, TypographyProps } from "./Typography.interfaces";
import { Text } from "./Typography.styled";

export const Typography = ({
  variant = TypographyElements.h1,
  color,
  children,
}: TypographyProps) => {
  const elementType = TypographyElements[variant as keyof typeof TypographyElements];

  return (
    <Text
      as={elementType}
      className={`typography--variant-${variant}`}
      color={color}
    >
      {children}
    </Text>
  );
};
