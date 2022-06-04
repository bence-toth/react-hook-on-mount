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
    fetch("https://api.goprogram.ai/inspiration");
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

## Contributions

Contributions are welcome. File bug reports, create pull requests, feel free to reach out at tothab@gmail.com.

## Licence

[MIT](./LICENSE)
