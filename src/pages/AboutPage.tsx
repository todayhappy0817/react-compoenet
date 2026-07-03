import { useState } from "react";
import TiptapEditor from "@/pages/TipTap";
import  DOMPurify from "dompurify";

export default function AboutPage() {
  const [content, setContent] = useState("");

  return (
    <div>
      <h1>About Page</h1>
      {/* 에디터 — value/onValueChange로 내용 주고받기 */}
      <TiptapEditor
        value={content}
        onValueChange={setContent}
        placeholder="내용을 입력하세요"
      />
      {/* <h3 style={{textAlign:"left"}}>결과 뷰</h3>
      결과(읽기) 뷰 — readonly 박스 + content 서식 */}
      <div className="tiptap-wrapper">
        <div
          className="tiptap-readonly tiptap-content"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />
      </div>
    </div>
  );
}
