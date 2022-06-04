# react-hook-on-mount 1️⃣

A React hook to run an effect only on the first render.

## Installation

Using `npm`:

```sh
npm install --save react-hook-on-mount
```

Using `yarn`:

```sh
yarn add react-hook-on-mount
```

## Usage

```jsx
import { useState } from "react";
import useOnMount from "react-hook-on-mount";

const ComponentWithOnMount = () => {
  const [inspiration, setInspiration] = useState();

  useOnMount(() => {
    fetch("https://api.goprogram.ai/inspiration")
      .then((result) => result.json())
      .then(setInspiration);
  });

  if (!inspiration) {
    return null;
  }

  return (
    <figure>
      <blockquote>{inspiration.quote}</blockquote>
      <figcaption>— {quote.author}</figcaption>
    </figure>
  );
};
```

## Inspiration

In React v18 [a new strict mode behaviour was introduced](https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors), which in development mode will automatically unmount and remount every component, whenever a component mounts for the first time, restoring the previous state on the second mount.

In development mode, this will result in components using the `useEffect` hook like this to run the effect twice on when the component mounts:

```jsx
const ComponentWithOnMountEffect = () => {
  useEffect(() => {
    fetch("https://api.goprogram.ai/inspiration")
      .then(
        // ...
      )
  });

  return (
    // ...
  );
};
```

To avoid this, components using the `useEffect` hook to run an effect only once when the component mounts are recommended to use the `useOnMount` hook instead, which will, in addition to effect the hook on the first mount, will make sure that the effect never runs again.

## Contributions

Contributions are welcome. File bug reports, create pull requests, feel free to reach out at tothab@gmail.com.

## Licence

[MIT](./LICENSE)
