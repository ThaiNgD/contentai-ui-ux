// components/custom-editor.js
"use client"; // only in App Router

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Bold,
  ClassicEditor,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

interface CKEDITORProps {
  data?: string;
}

function CustomEditor({ data }: CKEDITORProps) {
  return (
    <CKEditor
      data={data}
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: ["undo", "redo", "|", "bold", "italic"],
        },
        plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
        // initialData: "<p>Hello from CKEditor 5 in React!</p>",
      }}
    />
  );
}

export default CustomEditor;
