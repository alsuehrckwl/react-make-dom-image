import * as React from 'react';
interface Props {
    trigger: React.ReactElement;
    domRef: React.RefObject<any>;
    exportName: string;
    format: string;
}
declare const MakeDomImage: React.FunctionComponent<Props>;
export default MakeDomImage;
