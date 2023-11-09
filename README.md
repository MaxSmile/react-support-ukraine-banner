# React Support Ukraine Banner

This React component displays a banner at the top of your webpage with a link to [u24.gov.ua](https://u24.gov.ua), the official fundraising platform of Ukraine, also known as UNITED24.

By including this banner, you're not just adding a component to your website, you're taking a stand with Ukraine. You're helping to protect, save, and rebuild lives.

## About UNITED24

UNITED24 was launched in response to the full-scale invasion of Ukraine as a direct way to facilitate aid. President Zelenskyy's administration created this initiative to answer the global question: "What can we do to help Ukraine?"

The mission of UNITED24 is to:

- Unite people from all over the world in support of Ukraine.
- Ensure the protection and reconstruction of Ukraine.
- Provide a simple and direct way to send donations to where they are needed most.

UNITED24 allows individuals and organizations to contribute with a single click, ensuring that Ukraine can allocate resources more efficiently and effectively. The platform is not just a fundraising tool; it's a statement of global solidarity and an essential lifeline for millions.

## Installation

```bash
npm install react-support-ukraine-banner
# or
yarn add react-support-ukraine-banner
```

## Usage

Because this component is based on [React](https://reactjs.org/), you can use it in any React project. But to make it compatible with Next.js CSS needs to be imported separately.

```jsx
import React from 'react';
import SupportUkraineBanner from 'react-support-ukraine-banner';
import 'react-support-ukraine-banner/dist/SupportUkraineBanner.css';

const App = () => (
  <div>
    {/* ... other components */}
    <SupportUkraineBanner />
    {/* ... or other components */}
  </div>
);

export default App;
```


## Customization

The component uses minimal styling to make it easy to customize. You can override the default styles by providing additional classes or style the existing classes in your CSS.

## Contributing

If you'd like to contribute to the development of this banner, your input is welcome! Whether it's improving the code, refining the design, or updating the documentation, your help is appreciated.

Please feel free to fork the repository, make changes, and submit a pull request with your improvements. You can also create an issue if you find bugs or have suggestions.

## License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it as you see fit.

By using this banner, you're acknowledging the severity of the conflict and the resilience of the Ukrainian people. Your support matters.
