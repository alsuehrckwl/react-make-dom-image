import * as React from "react";
import domtoimage from "dom-to-image";
interface Props {
  trigger: React.ReactElement;
  domRef: React.RefObject<any>;
  exportName: string;
  format: string;
}

const MakeDomImage: React.FunctionComponent<Props> = ({
  trigger,
  domRef,
  exportName,
  format = "png",
}) => {
  const [{ height, width, node }, setSize] = React.useState({
    height: 0,
    width: 0,
    node: document.createElement("div"),
  });

  React.useEffect(() => {
    if (!!domRef.current) {
      const node = domRef.current;
      const height = node.offsetHeight;
      const width = node.offsetWidth;

      setSize({ height, width, node });
    }
  }, [domRef]);

  const onClickEvent = () => {
    makeImage();
  };

  const makeImage = async () => {
    const config = {
      width,
      height,
    };

    const blob = await domtoimage.toBlob(node, config);

    if (blob) {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      const prefix = exportName;

      if (format !== "open") {
        link.download = `${prefix}.${format}`;
      }

      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }

    return;
  };

  const Button = React.useMemo(() => {
    return React.cloneElement(trigger, { onClick: onClickEvent });
  }, [trigger]);

  return <React.Fragment>{Button}</React.Fragment>;
};

export default MakeDomImage;
