import { useState } from 'react';
import { UpdateFarmViewType, UpdateFarmControllerProps, UpdateFarmViewProps } from './types';

const withUpdateFarmController = (View: UpdateFarmViewType) =>
  function Controller(props: UpdateFarmControllerProps): JSX.Element {
    const [name, _setName] = useState<string>('UpdateFarm');

    const viewProps: UpdateFarmViewProps = {
      name: name,
    };

    return <View {...viewProps} />;
  };

export default withUpdateFarmController;
