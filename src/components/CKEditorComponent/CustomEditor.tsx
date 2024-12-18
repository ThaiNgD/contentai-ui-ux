// components/custom-editor.js
"use client";
import { EMOJIS_ARRAY } from "@/helper/const";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  Alignment,
  Autoformat,
  Base64UploadAdapter,
  BlockQuote,
  Bold,
  ClassicEditor,
  CloudServices,
  Code,
  CodeBlock,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  HorizontalLine,
  Image,
  ImageToolbar,
  ImageUpload,
  Italic,
  Link,
  List,
  Markdown,
  Mention,
  Paragraph,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Strikethrough,
  Table,
  TableToolbar,
  TextTransformation,
  TodoList,
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
  const converter = new showdown.Converter({ tables: true });
  const [htmlData, setHtmlData] = useState("");
  // Convert markdown to HTML
  useEffect(() => {
    if (data) {
      let i = 0;
      const stringResponse = converter.makeHtml(data);
      // converter.
      console.log(stringResponse);
      const intervalId = setInterval(() => {
        setHtmlData(stringResponse.slice(0, i));

        i += 20;

        if (i > stringResponse.length + 20) {
          clearInterval(intervalId);
        }
      }, 1);

      return () => clearInterval(intervalId);
    }
  }, [data]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function SpecialCharactersEmoji(this: any, editor: any): void {
    if (!editor.plugins.get("SpecialCharacters")) {
      return;
    }

    this.afterInit = function (): void {
      editor.plugins.get("SpecialCharacters").addItems("Emoji", EMOJIS_ARRAY);
    };
  }

  return (
    <>
      <CKEditor
        data={htmlData}
        editor={ClassicEditor}
        config={{
          plugins: [
            Autoformat,
            Alignment,
            BlockQuote,
            Bold,
            CloudServices,
            Code,
            CodeBlock,
            Essentials,
            Heading,
            HorizontalLine,
            Image,
            FontFamily,
            FontSize,
            FontColor,
            FontBackgroundColor,
            ImageToolbar,
            ImageUpload,
            Base64UploadAdapter,
            Italic,
            Link,
            List,
            Markdown,
            Mention,
            Paragraph,
            SourceEditing,
            SpecialCharacters,
            SpecialCharactersEmoji,
            SpecialCharactersEssentials,
            Strikethrough,
            Table,
            TableToolbar,
            TextTransformation,
            TodoList,
          ],
          style: {
            definitions: [
              {
                name: "Loader",
                element: "div",
                classes: ["dots-loader"],
              },
            ],
          },
          toolbar: [
            "undo",
            "redo",
            "|",
            "sourceEditing",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "code",
            "|",
            "alignment",
            "|",
            "fontFamily",
            "fontSize",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "|",
            "link",
            "uploadImage",
            "insertTable",
            "blockQuote",
            "codeBlock",
            "horizontalLine",
            "specialCharacters",
          ],
          codeBlock: {
            languages: [
              { language: "css", label: "CSS" },
              { language: "html", label: "HTML" },
              { language: "javascript", label: "JavaScript" },
              { language: "php", label: "PHP" },
            ],
          },
          fontSize: {
            options: [9, 11, 13, "default", 17, 19, 21],
          },
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
              {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
              },
              {
                model: "heading5",
                view: "h5",
                title: "Heading 5",
                class: "ck-heading_heading5",
              },
              {
                model: "heading6",
                view: "h6",
                title: "Heading 6",
                class: "ck-heading_heading6",
              },
            ],
          },
          image: {
            toolbar: ["imageTextAlternative"],
          },
          table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
          },
        }}
      />
    </>
  );
}

export default CustomEditor;
