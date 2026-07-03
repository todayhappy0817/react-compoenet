import { Editor } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import { AllSelection } from "@tiptap/pm/state";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikeIcon,
  AddColumnLeftIcon,
  AddColumnRightIcon,
  AddRowAboveIcon,
  AddRowBelowIcon,
  DeleteColumnIcon,
  DeleteRowIcon,
  MergeCellsIcon,
  SplitCellIcon,
  DeleteTableIcon,
} from "@/pages/EditorIcons";
/**
 * 드래그(선택) 시 뜨는 버블 메뉴
 * - 표 안이면 표 편집 패널, 그 외엔 텍스트 서식 패널을 보여준다
 */
function BubbleToolbar({ editor }: { editor: Editor }) {
  return (
    <BubbleMenu
      editor={editor}
      shouldShow={({ editor, state, from, to }) => {
        // 전체 선택(Ctrl+A)일 땐 숨김
        if (state.selection instanceof AllSelection) return false;
        // 표 안: 셀 안에 선택이 있을 때 표 패널 표시
        if (editor.isActive("table")) {
          if (from === to) return false;
          return true;
        }
        // 일반: 커서만 있으면 숨기고, 공백 아닌 선택이 있을 때만 표시
        if (from === to) return false;
        return state.doc.textBetween(from, to, " ").trim().length > 0;
      }}
    >
      <div className="bubble-menu">
        {editor.isActive("table") ? (
          // ── 표 편집 패널 ──
          <>
            {/* 왼쪽 열 추가 */}
            <button title="왼쪽 열 추가" onClick={() => editor.chain().focus().addColumnBefore().run()}>
              <AddColumnLeftIcon />
            </button>
            {/* 오른쪽 열 추가 */}
            <button title="오른쪽 열 추가" onClick={() => editor.chain().focus().addColumnAfter().run()}>
              <AddColumnRightIcon />
            </button>
            {/* 위 행 추가 */}
            <button title="위에 행 추가" onClick={() => editor.chain().focus().addRowBefore().run()}>
              <AddRowAboveIcon />
            </button>
            {/* 아래 행 추가 */}
            <button title="아래에 행 추가" onClick={() => editor.chain().focus().addRowAfter().run()}>
              <AddRowBelowIcon />
            </button>
            {/* 셀 병합 */}
            <button title="셀 병합" onClick={() => editor.chain().focus().mergeCells().run()}>
              <MergeCellsIcon />
            </button>
            {/* 셀 분할 */}
            <button title="셀 분할" onClick={() => editor.chain().focus().splitCell().run()}>
              <SplitCellIcon />
            </button>
            {/* 열 삭제 */}
            <button title="열 삭제" onClick={() => editor.chain().focus().deleteColumn().run()}>
              <DeleteColumnIcon />
            </button>
            {/* 행 삭제 */}
            <button title="행 삭제" onClick={() => editor.chain().focus().deleteRow().run()}>
              <DeleteRowIcon />
            </button>
            {/* 표 삭제 */}
            <button title="표 삭제" onClick={() => editor.chain().focus().deleteTable().run()}>
              <DeleteTableIcon />
            </button>
          </>
        ) : (
          // ── 텍스트 서식 패널 ──
          <>
            <button
              title="굵게"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "is-active" : undefined}
            >
              <BoldIcon />
            </button>
            <button
              title="기울임"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "is-active" : undefined}
            >
              <ItalicIcon />
            </button>
            <button
              title="밑줄"
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "is-active" : undefined}
            >
              <UnderlineIcon />
            </button>
            <button
              title="취소선"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive("strike") ? "is-active" : undefined}
            >
              <StrikeIcon />
            </button>
          </>
        )}
      </div>
    </BubbleMenu>
  );
}

export default BubbleToolbar;
