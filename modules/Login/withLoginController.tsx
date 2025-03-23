import { useEffect, useState } from "react";
import { LoginViewType, LoginControllerProps, LoginViewProps } from "./types";

const withLoginController = (View: LoginViewType) =>
  function Controller(props: LoginControllerProps): JSX.Element {
    const viewProps: LoginViewProps = {};

    return <View {...viewProps} />;
  };

export default withLoginController;
