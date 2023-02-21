import { useState } from 'react';

export const useToggle = () => {
  const [state, setState] = useState(false);
  const handleState = setState(currentState => !currentState);

  return [state, handleState];
};
