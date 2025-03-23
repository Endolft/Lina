import { NavigationState } from "@/context/hooks/useInternalNavigationHistory";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface Props {
  transitionGroupKey: string | number;
  animationType: NavigationState;
  children: JSX.Element;
  shouldAnimate?: boolean;
}

const TransitionGroupLayout = ({
  animationType,
  transitionGroupKey,
  children,
  shouldAnimate = true,
}: Props) => {
  return (
    <TransitionGroup
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <CSSTransition
        key={transitionGroupKey}
        timeout={{ enter: 450, exit: 300 }}
        classNames={{
          enter:
            animationType === NavigationState.next
              ? "animate__slideInRightWith3D"
              : "animate__slideInLeftWith3D",
          enterActive: "animate__animated",
          exit:
            animationType === NavigationState.back
              ? "animate__slideOutRightWith3D"
              : "animate__slideOutLeftWith3D",
          exitActive: "animate__animated",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            flex: "flex",
            overflow: "auto",
          }}
        >
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionGroupLayout;
