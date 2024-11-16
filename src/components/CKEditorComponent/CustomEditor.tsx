// components/custom-editor.js
"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  Alignment,
  Autoformat,
  Autosave,
  Bold,
  ClassicEditor,
  Code,
  Essentials,
  FontFamily,
  Heading,
  Image,
  Italic,
  List,
  Mention,
  Paragraph,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  Undo,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import { useEffect, useState } from "react";
import showdown from "showdown";
interface CKEDITORProps {
  data?: string;
  clsWidth?: string;
  clsHeight?: string;
}
function CustomEditor({ data }: CKEDITORProps) {
  const converter = new showdown.Converter();
  const [htmlData, setHtmlData] = useState("");
  // Convert markdown to HTML
  useEffect(() => {
    if (data) {
      let i = 0;
      const stringResponse = converter.makeHtml(data);
      // converter.
      const intervalId = setInterval(() => {
        setHtmlData(stringResponse.slice(0, i));

        i += 20;

        if (i > stringResponse.length) {
          clearInterval(intervalId);
        }
      }, 1);

      return () => clearInterval(intervalId);
    }
  }, [data]);
  return (
    <>
      <CKEditor
        data={htmlData}
        editor={ClassicEditor}
        config={{
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
            Code,
            Strikethrough,
            Subscript,
            Superscript,
            Underline,
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
    </>
  );
}

export default CustomEditor;
