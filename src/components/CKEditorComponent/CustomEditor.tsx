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

function CustomEditor() {
  // const { data } = useAiCompetior();

  return (
    <CKEditor
      // data={data?.result}
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: ["undo", "redo", "|", "bold", "italic"],
        },
        plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
        initialData: "<p>Hello from CKEditor 5 in React!</p>",
      }}
    />
  );
}

export default CustomEditor;
