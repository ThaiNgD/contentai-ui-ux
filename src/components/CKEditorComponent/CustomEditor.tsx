// components/custom-editor.js
"use client"; // only in App Router

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Alignment,
  Autoformat,
  Autosave,
  Bold,
  ClassicEditor,
  Essentials,
  FontFamily,
  Heading,
  Image,
  Italic,
  List,
  Mention,
  Paragraph,
  Undo,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

interface CKEDITORProps {
  data?: string;
  clsWidth?: string;
  clsHeight?: string;
}

function CustomEditor({ data, clsHeight, clsWidth }: CKEDITORProps) {
  return (
    <CKEditor
      data={data}
      editor={ClassicEditor}
      config={{
        style: {
          definitions: [
            {
              name: "foo",
              classes: [clsHeight ? clsHeight : "", clsWidth ? clsWidth : ""],
              element: "ck-editor",
            },
          ],
        },
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "fontfamily",
            "fontsize",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "subscript",
            "superscript",
            "code",
            "|",
            "link",
            "uploadImage",
            "blockQuote",
            "codeBlock",
            "|",
            "alignment",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "outdent",
            "indent",
          ],
        },
        plugins: [
          FontFamily,
          Heading,
          Image,
          Bold,
          Essentials,
          Italic,
          Mention,
          Paragraph,
          Undo,
          Alignment,
          Autosave,
          Autoformat,
          List,
        ],
        image: {
          insert: {
            // This is the default configuration, you do not need to provide
            // this configuration key if the list content and order reflects your needs.
            integrations: ["upload", "assetManager", "url"],
          },
        },
        // initialData: "<p>Hello from CKEditor 5 in React!</p>",
      }}
    />
  );
}

export default CustomEditor;
