import { useMemo } from "react";
import { useEditor, EditorContent, EditorContext } from "@tiptap/react";
import "highlight.js/styles/github-dark.css"; // 코드블록 색 테마 (이게 있어야 색칠됨)
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
// 자동감지(common) 대신 필요한 언어만 등록 → 매 키마다 재감지하는 부담 감소
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import { TextStyleKit } from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import { TextAlign } from "@tiptap/extension-text-align";
import { Table, TableRow, TableHeader, TableCell } from "@tiptap/extension-table";
import MenuBar from "@/pages/MenuBar";
import BubbleToolbar from "@/pages/BubbleToolbar";

interface TiptapEditorProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

const lowlight = createLowlight();
lowlight.register({ javascript, typescript, json, css, html: xml });

const TiptapEditor = ({ value, onValueChange, placeholder }: TiptapEditorProps) => {
    //에디터
    const editor = useEditor({
        //추가할 기능
        extensions: [
            // 기본 기능 묶음(글자 굵기, 기울임, 취소선)
            StarterKit.configure({ codeBlock: false }),
            // 코드블록(색칠) — 자동감지 끄고 기본 언어 지정 → 입력 안정
            CodeBlockLowlight.configure({ lowlight, defaultLanguage: "javascript" }),
            // 글자색, 글자 크기
            TextStyleKit,
            //에디터 placeholder 셋팅
            Placeholder.configure({ placeholder }),
            //정렬(좌/중/우) — 제목·문단에 적용
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            //이미지
            Image,
            //표 — 기본 틀(열 너비 조절 가능), 행/헤더/셀
            Table.configure({ resizable: true }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        //초기 데이터 - 부모가 넘긴 value 값
        content : value,
        //입력이 바뀔 때마다 호출되는 콜백
        onUpdate: ({editor}) => {onValueChange(editor.getHTML())},
        //해당 style 클래스를 통해 글자/표 스타일을 CSS에서 잡음
        editorProps: {
            attributes: {
                class: "tiptap-editor tiptap-content",
            }
        }
    })
    // Provider에 넣을 값 — editor가 바뀔 때만 새 객체 생성(불필요한 리렌더 방지)
    const providerValue = useMemo(() => ({ editor }), [editor]);

    return(
        <div className="tiptap-wrapper">
            {/* EditorContext.Provider — 자식들이 editor를 꺼내 쓸 수 있게 Context에 값을 뿌림 */}
            <EditorContext.Provider value={providerValue}>
                <MenuBar editor={editor}/>
                {/* EditorContent — 실제 글 입력 영역(여기에 editor 연결) */}
                <EditorContent editor={editor}>
                </EditorContent>
                {/* 드래그 선택 시 뜨는 버블 메뉴(텍스트 서식 / 표 편집) */}
                {editor && <BubbleToolbar editor={editor} />}
            </EditorContext.Provider>
        </div>
    )
}

export default TiptapEditor;
