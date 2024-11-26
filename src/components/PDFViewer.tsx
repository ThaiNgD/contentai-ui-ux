import { cn } from "@/helper/function";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
interface PDFViewerProps {
  fileSrc: string;
  height?: string;
  width?: string;
}

const PDFViewer = ({ fileSrc, height, width }: PDFViewerProps) => {
  return (
    <div className={cn("", height, width)}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={fileSrc} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
