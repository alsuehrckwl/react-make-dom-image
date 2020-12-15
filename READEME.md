<br/>
<br/>
<h3 align="center">React Make Dom Image</h3>
<h3 align="center">use dom-to-image</h3>
<br/>

##

<br/>

## Install

Several quick start options are available:

- Install with [npm](https://www.npmjs.com/): `npm install react-make-dom-image`
- Install with [yarn](https://yarnpkg.com/): `yarn add react-make-dom-image`

## Reqirement

- Need a higher react 16.8 version

## How to use

```
import { MakeDomImage } from 'react-make-dom-iamge';

const MyComponent = () => {
  const domRef = useRef();

  return (
    <div>
      <MyImageComponent ref={domRef}/>
      <MakeDomImage
        domRef={domRef}
        exportName="my-image-name"
        trigger={
          <button type="button">
            download image
          </button>
        }
      />
    </div>
  )
}
```
