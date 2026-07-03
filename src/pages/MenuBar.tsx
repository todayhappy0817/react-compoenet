import { Editor, useEditorState } from "@tiptap/react";
import { useState, useRef, useEffect } from "react";
import {
  BoldIcon,
  ItalicIcon,
  StrikeIcon,
  UnderlineIcon,
  TextColorIcon,
  HighlighterIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  BulletListIcon,
  OrderedListIcon,
  BlockquoteIcon,
  CodeBlockIcon,
  LinkIcon,
  ImageIcon,
  TableIcon,
  UndoIcon,
  RedoIcon,
} from "@/pages/EditorIcons";

/**
 * 에디터 상단 툴바
 * - 버튼은 명령 호출 스위치, 실제 동작은 extensions가 처리
 * - useEditorState로 서식 상태를 구독해 버튼 활성/비활성 표시에 반영
 */
function MenuBar({ editor }: { editor: Editor }) {
    const [hovered, setHovered] = useState<[number, number]>([-1, -1]);
    const [tableOpen, setTableOpen] = useState(false);

    const tableMenuRef = useRef<HTMLDivElement>(null);

    // 바깥 클릭 시 테이블 드롭다운 닫기
    useEffect(() => {
        if (!tableOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
        if (tableMenuRef.current && !tableMenuRef.current.contains(e.target as Node)) {
            setTableOpen(false);
            setHovered([-1, -1]);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [tableOpen]);

    // 현재 선택 영역의 서식 상태(적용/가능 여부, 현재값)를 구독하고,
    // 값이 바뀌면 리렌더해서 버튼 활성/비활성 표시에 반영하기 위해 사용
    const editorState = useEditorState({
        editor,
        selector: (ctx) => {
            return{
            // ── 글자 서식 (isActive: 적용됐나 / can: 지금 가능한가) ──
            // 굵게
            isBold: ctx.editor.isActive("bold"),
            canBold: ctx.editor.can().toggleBold(),
            // 기울임
            isItalic: ctx.editor.isActive("italic"),
            canItalic: ctx.editor.can().toggleItalic(),
            // 취소선
            isStrike: ctx.editor.isActive("strike"),
            canStrike: ctx.editor.can().toggleStrike(),
            // 인라인 코드
            isCode: ctx.editor.isActive("code"),
            canCode: ctx.editor.can().toggleCode(),
            // 밑줄
            isUnder: ctx.editor.isActive("underline"),
            canUnder: ctx.editor.can().toggleUnderline(),
            // 링크
            isLink: ctx.editor.isActive("link"),
            // ── 블록 ──
            // 제목(H1~H3)
            isHeading1: ctx.editor.isActive("heading", { level: 1 }),
            isHeading2: ctx.editor.isActive("heading", { level: 2 }),
            isHeading3: ctx.editor.isActive("heading", { level: 3 }),
            // 글머리 목록
            isBulletList: ctx.editor.isActive("bulletList"),
            // 번호 목록
            isOrderedList: ctx.editor.isActive("orderedList"),
            // 인용
            isBlockquote: ctx.editor.isActive("blockquote"),
            // 코드 블럭
            isCodeBlock: ctx.editor.isActive("codeBlock"),
            // ── 글자 스타일 (getAttributes: 현재값) ──
            // 글자색
            color: ctx.editor.getAttributes("textStyle").color ?? "#000000",
            // 형광펜(배경색)
            backgroundColor: ctx.editor.getAttributes("textStyle").backgroundColor ?? "#ffff00",
            // 글자 크기
            fontSize: ctx.editor.getAttributes("textStyle").fontSize ?? "",
                    isAlignLeft: ctx.editor.isActive({ textAlign: "left" }) ?? false,
        isAlignCenter: ctx.editor.isActive({ textAlign: "center" }) ?? false,
        isAlignRight: ctx.editor.isActive({ textAlign: "right" }) ?? false,
            // ── 히스토리 (can: 되돌리기/다시실행 가능한가) ──
            canUndo: ctx.editor.can().undo(),
            canRedo: ctx.editor.can().redo(),
            }
        }
    })

    // 칸 선택만큼 N×M 기본 표 삽입(헤더 행 포함)
    const insertSizedTable = (rows: number, cols: number) => {
        editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();
        setTableOpen(false);
        setHovered([-1, -1]);
    };

    const setLink = (url : string) => {
        editor.chain().focus().insertContent({
            type: "text",
            text: "테스트",
            marks: [{type: "link", attrs: {href: url}}]
        })
        .insertContent("<p></p>")
        .run();
        //띄어쓰기 넣는 방식도 가능함
    }

    return (
        <div className="control-group">
            <div className="button-group">
                {/* 굵게 */}
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editorState.canBold}
                    className={editorState.isBold ? "is-active" : undefined}
                ><BoldIcon /></button>
                {/* 기울임 */}
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editorState.canItalic}
                    className={editorState.isItalic ? "is-active" : undefined}
                ><ItalicIcon /></button>
                {/* 취소선 */}
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editorState.canStrike}
                    className={editorState.isStrike ? "is-active" : undefined}
                ><StrikeIcon /></button>
                {/* 밑줄 */}
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    disabled={!editorState.canUnder}
                    className={editorState.isUnder ? "is-active" : undefined}
                ><UnderlineIcon /></button>
                {/* 인라인 코드 (텍스트 라벨 유지) */}
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editorState.canCode}
                    className={editorState.isCode ? "is-active" : undefined}
                >&lt;/&gt;</button>

                {/* 왼쪽 정렬 */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign("left").run()}
                    className={editorState.isAlignLeft ? "is-active" : undefined}
                ><AlignLeftIcon /></button>
                {/* 가운데 정렬 */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign("center").run()}
                    className={editorState.isAlignCenter ? "is-active" : undefined}
                ><AlignCenterIcon /></button>
                {/* 오른쪽 정렬 */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign("right").run()}
                    className={editorState.isAlignRight ? "is-active" : undefined}
                ><AlignRightIcon /></button>

                {/* 제목 H1~H3 */}
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editorState.isHeading1 ? "is-active" : undefined}
                >H1</button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editorState.isHeading2 ? "is-active" : undefined}
                >H2</button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editorState.isHeading3 ? "is-active" : undefined}
                >H3</button>

                {/* 글머리 목록 */}
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editorState.isBulletList ? "is-active" : undefined}
                ><BulletListIcon /></button>
                {/* 번호 목록 */}
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editorState.isOrderedList ? "is-active" : undefined}
                ><OrderedListIcon /></button>
                {/* 인용 */}
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editorState.isBlockquote ? "is-active" : undefined}
                ><BlockquoteIcon /></button>
                {/* 코드 블럭 */}
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editorState.isCodeBlock ? "is-active" : undefined}
                ><CodeBlockIcon /></button>
                {/* 이미지 — URL 입력받아 삽입 */}
                <label className="color-file" title="이미지 삽입">
                    <span>
                        <ImageIcon />         
                    </span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const reader = new FileReader();
                            reader.onload = () => {
                                editor.chain().focus().setImage({ src: reader.result as string }).run();
                            };
                            reader.readAsDataURL(file);
                            e.target.value = "";
                        }}
                    />
                </label>
                {/* 글자색 — 아이콘 클릭 시 색 선택, 현재색은 아이콘 밑줄로 표시 */}
                <label className="color-btn" title="글자색">
                    <span style={{ borderBottom: `3px solid ${editorState.color}` }}>
                        <TextColorIcon />
                    </span>
                    <input
                        type="color"
                        value={editorState.color}
                        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
                    />
                </label>
                {/* 형광펜(배경색) */}
                <label className="color-btn" title="형광펜">
                    <span style={{ borderBottom: `3px solid ${editorState.backgroundColor}` }}>
                        <HighlighterIcon />
                    </span>
                    <input
                        type="color"
                        value={editorState.backgroundColor}
                        onChange={(e) => editor.chain().focus().setBackgroundColor(e.target.value).run()}
                    />
                </label>
                {/* 글자 크기 — 값 선택 시 setFontSize, 빈 값이면 해제 */}
                <select
                    value={editorState.fontSize}
                    onChange={(e) =>
                        e.target.value
                            ? editor.chain().focus().setFontSize(e.target.value).run()
                            : editor.chain().focus().unsetFontSize().run()
                    }
                >
                    <option value="">크기</option>
                    <option value="16px">16px</option>
                    <option value="18px">18px</option>
                    <option value="24px">24px</option>
                    <option value="32px">32px</option>
                </select>
                <button onClick={()=> {setLink("https://www.naver.com")}}
                        className={editorState.isLink ? "is-active" : undefined}
                    >
                    <LinkIcon></LinkIcon>
                </button>
                {/* 표 — 클릭 시 칸 선택 드롭다운 토글 */}
                <div className="table-menu" ref={tableMenuRef}>
                  <button
                    title="표 삽입"
                    onClick={() => { setTableOpen((p) => !p); setHovered([-1, -1]); }}
                    className={tableOpen ? "is-active" : undefined}
                  ><TableIcon /></button>
                  {tableOpen && (
                    <div className="table-dropdown" onMouseLeave={() => setHovered([-1, -1])}>
                      {/* 8×8 칸 — hover한 만큼 N×M 표 삽입 */}
                      <div className="table-grid">
                        {Array.from({ length: 8 }, (_, row) => (
                          <div key={row} className="table-grid-row">
                            {Array.from({ length: 8 }, (_, col) => (
                              <span
                                key={col}
                                className={"table-grid-cell" + (row <= hovered[0] && col <= hovered[1] ? " on" : "")}
                                onMouseEnter={() => setHovered([row, col])}
                                onClick={() => insertSizedTable(row + 1, col + 1)}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="table-grid-label">
                        {hovered[0] < 0 ? "0 × 0" : `${hovered[0] + 1} × ${hovered[1] + 1}`}
                      </div>
                    </div>
                  )}
                </div>


                {/* 되돌리기 / 다시실행 */}
                <button onClick={() => editor.chain().focus().undo().run()} disabled={!editorState.canUndo} title="되돌리기">
                    <UndoIcon />
                </button>
                <button onClick={() => editor.chain().focus().redo().run()} disabled={!editorState.canRedo} title="다시실행">
                    <RedoIcon />
                </button>
            </div>
        </div>
    )
}

export default MenuBar;
