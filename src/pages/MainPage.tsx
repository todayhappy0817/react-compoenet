import { useState } from "react";
import TiptapEditor from "@/pages/TipTap";

export default function MainPage() {
  // 에디터 내용(HTML)을 담을 state
  const [content, setContent] = useState("");

  return (
    <div>
      <h1>Main Page</h1>
      1
      {/* 에디터 — value/onValueChange로 내용 주고받기 */}
      <TiptapEditor
        value={content}
        onValueChange={setContent}
        placeholder="내용을 입력하세요"
      />

      {/* 확인용 — 에디터가 만들어내는 HTML 미리보기 */}
      <pre style={{ marginTop: 16, background: "#f5f5f5", padding: 12 }}>
        {content}
      </pre>
    </div>
  );
}
