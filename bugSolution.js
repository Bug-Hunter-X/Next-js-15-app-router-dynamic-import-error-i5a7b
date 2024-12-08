```javascript
// pages/index.js
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./my-component'), { ssr: false });

export default function Home() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

// my-component.js

export default function MyComponent(){
  return (
    <div>Dynamically Imported Component</div>
  )
}
```