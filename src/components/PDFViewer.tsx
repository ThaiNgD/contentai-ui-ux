import { cn } from "@/helper/function";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import React, { useMemo } from "react";
interface PDFViewerProps {
  fileSrc: string;
  height?: string;
  width?: string;
}

const PDFViewer = ({ fileSrc, height, width }: PDFViewerProps) => {
  const zoomPluginInstance = zoomPlugin();
  const src = useMemo(() => {
    return fileSrc;
  }, [fileSrc]);
  return (
    <div className={cn("", height, width)}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          enableSmoothScroll
          fileUrl={src}
          plugins={[zoomPluginInstance]}
        />
      </Worker>
    </div>
  );
};

export default React.memo(PDFViewer);
