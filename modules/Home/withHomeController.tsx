import { useState } from "react";
import { HomeViewType, HomeControllerProps, HomeViewProps } from "./types";
import { useRouter } from "next/navigation";

const withHomeController = (View: HomeViewType) =>
  function Controller(props: HomeControllerProps): JSX.Element {
    const [name, _setName] = useState<string>("World");
    const router = useRouter();
    const handleRedirectNotification = () => {
      router.push("/farm/notifications");
    };

    const viewProps: HomeViewProps = {
      handleRedirectNotification,
    };

    return <View {...viewProps} />;
  };

export default withHomeController;
