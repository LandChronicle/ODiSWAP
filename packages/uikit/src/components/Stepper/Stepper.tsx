import React from "react";
import styled from "styled-components";
import { ThemedProps } from "./types";

const StepperWrapper = styled.div<ThemedProps>`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

interface StepperProps extends React.PropsWithChildren<{ numberOfSteps: number }> {}

const Stepper: React.FC<StepperProps> = ({ children, numberOfSteps }) => {
  return (
    <StepperWrapper>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { numberOfSteps } as any);
        }
        return child;
      })}
    </StepperWrapper>
  );
};

export default Stepper;
